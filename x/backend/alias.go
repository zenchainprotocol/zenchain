// nolint
package backend

import (
	"github.com/zenchainprotocol/zenchain-node/x/backend/config"
	"github.com/zenchainprotocol/zenchain-node/x/backend/keeper"
	"github.com/zenchainprotocol/zenchain-node/x/backend/orm"
	"github.com/zenchainprotocol/zenchain-node/x/backend/types"
)

const (
	// ModuleName is the name of the backend module
	ModuleName = types.ModuleName
	// QuerierRoute is the querier route for the backend module
	QuerierRoute = types.QuerierRoute
	// RouterKey is the msg router key for the backend module
	RouterKey = types.RouterKey
)

type (
	Keeper       = keeper.Keeper
	OrderKeeper  = types.OrderKeeper
	TokenKeeper  = types.TokenKeeper
	MarketKeeper = types.MarketKeeper
	DexKeeper    = types.DexKeeper

	Ticker      = types.Ticker
	Deal        = types.Deal
	Order       = types.Order
	Transaction = types.Transaction
	MatchResult = types.MatchResult

	ORM           = orm.ORM
	OrmEngineInfo = orm.OrmEngineInfo

	Config    = config.Config
	SwapInfo  = types.SwapInfo
	ClaimInfo = types.ClaimInfo
)

var (
	NewQuerier    = keeper.NewQuerier
	NewKeeper     = keeper.NewKeeper
	CleanUpKlines = keeper.CleanUpKlines

	GenerateTx = types.GenerateTx

	NewORM = orm.New

	DefaultConfig = config.DefaultConfig
)
