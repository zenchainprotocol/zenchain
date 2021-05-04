package keeper

import (
	"github.com/zenchainprotocol/zenchain/x/auction/types"
)

var _ types.QueryServer = Keeper{}
