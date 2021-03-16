package debug

import (
	"github.com/zenchainprotocol/zenchain-node/x/debug/keeper"
	"github.com/zenchainprotocol/zenchain-node/x/debug/types"
)

const (
	StoreKey     = types.StoreKey
	QuerierRoute = types.QuerierRoute
	RouterKey    = types.RouterKey
	ModuleName   = types.ModuleName
)

var (
	// functions aliases
	RegisterCodec  = types.RegisterCodec
	NewDebugKeeper = keeper.NewDebugKeeper
	NewDebugger    = keeper.NewDebugger
)

type (
	Keeper = keeper.Keeper
)
