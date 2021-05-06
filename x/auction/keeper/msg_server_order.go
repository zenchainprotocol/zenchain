package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto"
	"github.com/zenchainprotocol/zenchain/x/auction/types"
	nftTypes "github.com/irisnet/irismod/modules/nft/types"
)

func (k msgServer) CreateOrder(goCtx context.Context, msg *types.MsgCreateOrder) (*types.MsgCreateOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//Check denomid

	//Check tokenid
	//Check balance
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	feeCoins, err := sdk.ParseCoinsNormalized("200000000uzen")
	if err != nil {
		return nil, err
	}
	creatorAddress, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}
	if err := k.bankKeeper.SendCoins(ctx, creatorAddress, moduleAcct, feeCoins); err != nil {
		return nil, err
	}

	if !k.nftKeeper.HasNFT(ctx, msg.Denomid, msg.Tokenid) {
		return nil, sdkerrors.Wrapf(nftTypes.ErrInvalidCollection, fmt.Sprintf("NFT %s is not exists in collection %s", msg.Denomid, msg.Tokenid))
	}
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
