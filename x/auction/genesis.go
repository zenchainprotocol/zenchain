package auction

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/zenchainprotocol/zenchain/x/auction/keeper"
	"github.com/zenchainprotocol/zenchain/x/auction/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the order
	for _, elem := range genState.OrderList {
		k.SetOrder(ctx, *elem)
	}

	// Set order count
	k.SetOrderCount(ctx, uint64(len(genState.OrderList)))

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all order
	orderList := k.GetAllOrder(ctx)
	for _, elem := range orderList {
		elem := elem
		genesis.OrderList = append(genesis.OrderList, &elem)
	}

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
