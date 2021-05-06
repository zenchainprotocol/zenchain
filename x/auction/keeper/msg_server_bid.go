package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/zenchainprotocol/zenchain/x/auction/types"
)

func (k msgServer) CreateBid(goCtx context.Context, msg *types.MsgCreateBid) (*types.MsgCreateBidResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//Check order id is exits
	if !k.HasOrder(ctx, msg.OrderId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("OrderId %d doesn't exist", msg.OrderId))
	}


	// Get all existing votes
	bidList := k.GetAllBid(ctx)
	for _, existingBid := range bidList {
    	// Check if the account has already voted on this PollID
		if existingBid.Creator == msg.Creator && existingBid.OrderId == msg.OrderId && existingBid.BidPrice == msg.BidPrice {
      		// Return an error when a vote has been casted by this account on this PollID
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Bid already exist.")
		}
	}

	id := k.AppendBid(
		ctx,
		msg.Creator,
		msg.OrderId,
		msg.BidPrice,
	)

	return &types.MsgCreateBidResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateBid(goCtx context.Context, msg *types.MsgUpdateBid) (*types.MsgUpdateBidResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var bid = types.Bid{
		Creator:  msg.Creator,
		Id:       msg.Id,
		OrderId:  msg.OrderId,
		BidPrice: msg.BidPrice,
	}

	// Checks that the element exists
	if !k.HasBid(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetBidOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetBid(ctx, bid)

	return &types.MsgUpdateBidResponse{}, nil
}

func (k msgServer) DeleteBid(goCtx context.Context, msg *types.MsgDeleteBid) (*types.MsgDeleteBidResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasBid(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetBidOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBid(ctx, msg.Id)

	return &types.MsgDeleteBidResponse{}, nil
}
