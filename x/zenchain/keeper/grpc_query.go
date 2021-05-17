package keeper

import (
	"github.com/zenchainprotocol/zenchain/x/zenchain/types"
)

var _ types.QueryServer = Keeper{}
