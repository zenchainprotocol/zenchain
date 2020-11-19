package types

import (
	"fmt"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/okex/okexchain/x/common"
	"github.com/okex/okexchain/x/params"
)

var (
	keyDexListFee             = []byte("DexListFee")
	keyTransferOwnershipFee   = []byte("TransferOwnershipFee")
	keyRegisterOperatorFee    = []byte("RegisterOperatorFee")
	keyDelistMaxDepositPeriod = []byte("DelistMaxDepositPeriod")
	keyDelistMinDeposit       = []byte("DelistMinDeposit")
	keyDelistVotingPeriod     = []byte("DelistVotingPeriod")
	keyWithdrawPeriod         = []byte("WithdrawPeriod")
	keyOwnershipConfirmWindow = []byte("OwnershipConfirmWindow")
)

// Params defines param object
type Params struct {
	ListFee              sdk.SysCoin `json:"list_fee"`
	TransferOwnershipFee sdk.SysCoin `json:"transfer_ownership_fee"`
	RegisterOperatorFee  sdk.SysCoin `json:"register_operator_fee"`

	//  maximum period for okt holders to deposit on a dex delist proposal
	DelistMaxDepositPeriod time.Duration `json:"delist_max_deposit_period"`
	//  minimum deposit for a critical dex delist proposal to enter voting period
	DelistMinDeposit sdk.SysCoins `json:"delist_min_deposit"`
	//  length of the critical voting period for dex delist proposal
	DelistVotingPeriod time.Duration `json:"delist_voting_period"`

	WithdrawPeriod         time.Duration `json:"withdraw_period"`
	OwnershipConfirmWindow time.Duration `json:"ownership_confirm_window"`
}

func validateParams(value interface{}) error {
	return nil
}

// ParamSetPairs implements the ParamSet interface and returns all the key/value pairs
func (p *Params) ParamSetPairs() params.ParamSetPairs {
	return params.ParamSetPairs{
		{Key: keyDexListFee, Value: &p.ListFee, ValidatorFn: validateParams},
		{Key: keyTransferOwnershipFee, Value: &p.TransferOwnershipFee, ValidatorFn: validateParams},
		{Key: keyRegisterOperatorFee, Value: &p.RegisterOperatorFee, ValidatorFn: validateParams},
		{Key: keyDelistMaxDepositPeriod, Value: &p.DelistMaxDepositPeriod, ValidatorFn: validateParams},
		{Key: keyDelistMinDeposit, Value: &p.DelistMinDeposit, ValidatorFn: validateParams},
		{Key: keyDelistVotingPeriod, Value: &p.DelistVotingPeriod, ValidatorFn: validateParams},
		{Key: keyWithdrawPeriod, Value: &p.WithdrawPeriod, ValidatorFn: validateParams},
		{Key: keyOwnershipConfirmWindow, Value: &p.OwnershipConfirmWindow, ValidatorFn: validateParams},
	}
}

// ParamKeyTable for auth module
func ParamKeyTable() params.KeyTable {
	return params.NewKeyTable().RegisterParamSet(&Params{})
}

// DefaultParams returns a default set of parameters.
func DefaultParams() *Params {
	defaultListFee := sdk.NewDecCoinFromDec(common.NativeToken, sdk.MustNewDecFromStr(defaultFeeList))
	defaultTransferOwnershipFee := sdk.NewDecCoinFromDec(common.NativeToken, sdk.MustNewDecFromStr(defaultFeeTransferOwnership))
	defaultDelistMinDeposit := sdk.NewDecCoinFromDec(common.NativeToken, sdk.MustNewDecFromStr(defaultDelistMinDeposit))
	return &Params{
		ListFee:                defaultListFee,
		TransferOwnershipFee:   defaultTransferOwnershipFee,
		RegisterOperatorFee:    sdk.NewDecCoinFromDec(common.NativeToken, sdk.ZeroDec()),
		DelistMaxDepositPeriod: time.Hour * 24,
		DelistMinDeposit:       sdk.SysCoins{defaultDelistMinDeposit},
		DelistVotingPeriod:     time.Hour * 72,
		WithdrawPeriod:         DefaultWithdrawPeriod,
		OwnershipConfirmWindow: DefaultOwnershipConfirmWindow,
	}
}

// String implements the stringer interface.
func (p Params) String() string {
	return fmt.Sprintf("Params: \nDexListFee:%s\nTransferOwnershipFee:%s\nRegisterOperatorFee:%s\nDelistMaxDepositPeriod:%s\n"+
		"DelistMinDeposit:%s\nDelistVotingPeriod:%s\nWithdrawPeriod:%d\nOwnershipConfirmWindow: %s\n",
		p.ListFee, p.TransferOwnershipFee, p.RegisterOperatorFee, p.DelistMaxDepositPeriod, p.DelistMinDeposit, p.DelistVotingPeriod, p.WithdrawPeriod, p.OwnershipConfirmWindow)
}