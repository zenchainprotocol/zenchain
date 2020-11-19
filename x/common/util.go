package common

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"math/big"
	"math/rand"
	"net/http"
	"os"
	"runtime"
	"strconv"
	"strings"
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/cosmos/cosmos-sdk/client/context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/rest"
	apptypes "github.com/okex/okexchain/app/types"
)

const (
	letterBytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
)

func InitConfig() {
	config := sdk.GetConfig()
	if config.GetBech32ConsensusAddrPrefix() == apptypes.Bech32PrefixConsAddr {
		return
	}
	apptypes.SetBech32Prefixes(config)
	apptypes.SetBip44CoinType(config)
	config.Seal()
}

// Int64ToBytes converts int64 to bytes
func Int64ToBytes(i int64) []byte {
	var buf = make([]byte, 8)
	binary.BigEndian.PutUint64(buf, uint64(i))
	return buf
}

// BytesToInt64 converts bytes to int64
func BytesToInt64(buf []byte) int64 {
	return int64(binary.BigEndian.Uint64(buf))
}

// Paginate converts page params for a paginated query,
func Paginate(pageStr, perPageStr string) (page int, perPage int, err error) {
	if pageStr != "" {
		page, err = strconv.Atoi(pageStr)
		if err != nil {
			return
		}
	}
	if perPageStr != "" {
		perPage, err = strconv.Atoi(perPageStr)
		if err != nil {
			return
		}
	}
	if page < 0 || perPage < 0 {
		err = fmt.Errorf("negative page %d or per_page %d is invalid", page, perPage)
		return
	}
	return
}

// GetPage returns the offset and limit for data query
func GetPage(page, perPage int) (offset, limit int) {
	if page <= 0 || perPage <= 0 {
		return
	}
	offset = (page - 1) * perPage
	limit = perPage
	return
}

// HandleErrorMsg handles the error msg
func HandleErrorMsg(w http.ResponseWriter, cliCtx context.CLIContext, msg string) {
	response := GetErrorResponseJSON(-1, msg, "")
	rest.PostProcessResponse(w, cliCtx, response)
}

// HasSufficientCoins checks whether the account has sufficient coins
func HasSufficientCoins(addr sdk.AccAddress, availableCoins, amt sdk.Coins) (err error) {
	//availableCoins := availCoins[:]
	if !amt.IsValid() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidCoins, amt.String())
	}
	if !availableCoins.IsValid() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidCoins, amt.String())
	}

	_, hasNeg := availableCoins.SafeSub(amt)
	if hasNeg {
		return sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds,
			fmt.Sprintf("insufficient account funds;address: %s, availableCoin: %s, needCoin: %s",
				addr.String(), availableCoins, amt),
		)
	}
	return nil
}

// SkipSysTestChecker is supported to used in System Unit Test
// (described in http://gitlab.okcoin-inc.com/dex/okexchain/issues/472)
// if System environment variables "SYS_TEST_ALL" is set to 1, all of the system test will be enable. \n
// if System environment variables "ORM_MYSQL_SYS_TEST" is set to 1,
// 				all of the system test in orm_mysql_sys_test.go will be enble.
func SkipSysTestChecker(t *testing.T) {
	_, fname, _, ok := runtime.Caller(0)
	enable := ok
	if enable {
		enableAllEnv := "SYS_TEST_ALL"

		sysTestName := strings.Split(fname, ".go")[0]
		enableCurrent := strings.ToUpper(sysTestName)

		enable = os.Getenv(enableAllEnv) == "1" ||
			(strings.HasSuffix(sysTestName, "sys_test") && os.Getenv(enableCurrent) == "1")
	}

	if !enable {
		t.SkipNow()
	}
}

// mulAndQuo returns a * b / c
func MulAndQuo(a, b, c sdk.Dec) sdk.Dec {
	// 10^8
	auxiliaryDec := sdk.NewDecFromBigInt(new(big.Int).Exp(big.NewInt(10), big.NewInt(sdk.Precision), nil))
	a = a.MulTruncate(auxiliaryDec)
	return a.MulTruncate(b).QuoTruncate(c).QuoTruncate(auxiliaryDec)
}

// BlackHoleAddress returns the black hole address
func BlackHoleAddress() sdk.AccAddress {
	addr, _ := sdk.AccAddressFromHex(blackHoleHex)
	return addr
}

func GetFixedLengthRandomString(n int) string {
	b := make([]byte, n)
	for i := range b {
		b[i] = letterBytes[rand.Intn(len(letterBytes))]
	}
	return string(b)
}

func PanicTrace(kb int) {
	s := []byte("/src/runtime/panic.go")
	e := []byte("\ngoroutine ")
	line := []byte("\n")
	stack := make([]byte, kb<<10) //4KB
	length := runtime.Stack(stack, true)
	start := bytes.Index(stack, s)
	stack = stack[start:length]
	start = bytes.Index(stack, line) + 1
	stack = stack[start:]
	end := bytes.LastIndex(stack, line)
	if end != -1 {
		stack = stack[:end]
	}
	end = bytes.Index(stack, e)
	if end != -1 {
		stack = stack[:end]
	}
	stack = bytes.TrimRight(stack, "\n")
	fmt.Print(string(stack))
}