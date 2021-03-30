package keeper

import (
	"github.com/zenchainprotocol/zenchain-node/x/zenchainnode/types"
)

var _ types.QueryServer = Keeper{}
