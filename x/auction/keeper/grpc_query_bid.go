package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/zenchainprotocol/zenchain/x/auction/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BidAll(c context.Context, req *types.QueryAllBidRequest) (*types.QueryAllBidResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var bids []*types.Bid
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	bidStore := prefix.NewStore(store, types.KeyPrefix(types.BidKey))

	pageRes, err := query.Paginate(bidStore, req.Pagination, func(key []byte, value []byte) error {
		var bid types.Bid
		if err := k.cdc.UnmarshalBinaryBare(value, &bid); err != nil {
			return err
		}

		bids = append(bids, &bid)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBidResponse{Bid: bids, Pagination: pageRes}, nil
}

func (k Keeper) Bid(c context.Context, req *types.QueryGetBidRequest) (*types.QueryGetBidResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var bid types.Bid
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasBid(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetBidIDBytes(req.Id)), &bid)

	return &types.QueryGetBidResponse{Bid: &bid}, nil
}
