package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/zenchainprotocol/zenchain/x/auction/types"
)

func (k msgServer) CreateOrder(goCtx context.Context, msg *types.MsgCreateOrder) (*types.MsgCreateOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendOrder(
		ctx,
		msg.Creator,
		msg.Denomid,
		msg.Tokenid,
		msg.Startprice,
		msg.Stepprice,
		msg.Starttime,
		msg.Duration,
	)

	return &types.MsgCreateOrderResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateOrder(goCtx context.Context, msg *types.MsgUpdateOrder) (*types.MsgUpdateOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var order = types.Order{
		Creator:    msg.Creator,
		Id:         msg.Id,
		Denomid:    msg.Denomid,
		Tokenid:    msg.Tokenid,
		Startprice: msg.Startprice,
		Stepprice:  msg.Stepprice,
		Starttime:  msg.Starttime,
		Duration:   msg.Duration,
	}

	// Checks that the element exists
	if !k.HasOrder(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetOrderOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetOrder(ctx, order)

	return &types.MsgUpdateOrderResponse{}, nil
}

func (k msgServer) DeleteOrder(goCtx context.Context, msg *types.MsgDeleteOrder) (*types.MsgDeleteOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasOrder(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetOrderOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveOrder(ctx, msg.Id)

	return &types.MsgDeleteOrderResponse{}, nil
}
