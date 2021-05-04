package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/zenchainprotocol/zenchain/x/auction/types"
	"strconv"
)

// GetOrderCount get the total number of order
func (k Keeper) GetOrderCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderCountKey))
	byteKey := types.KeyPrefix(types.OrderCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetOrderCount set the total number of order
func (k Keeper) SetOrderCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderCountKey))
	byteKey := types.KeyPrefix(types.OrderCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendOrder appends a order in the store with a new id and update the count
func (k Keeper) AppendOrder(
	ctx sdk.Context,
	creator string,
	denomid string,
	tokenid string,
	startprice string,
	stepprice string,
	starttime string,
	duration string,
) uint64 {
	// Create the order
	count := k.GetOrderCount(ctx)
	var order = types.Order{
		Creator:    creator,
		Id:         count,
		Denomid:    denomid,
		Tokenid:    tokenid,
		Startprice: startprice,
		Stepprice:  stepprice,
		Starttime:  starttime,
		Duration:   duration,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderKey))
	value := k.cdc.MustMarshalBinaryBare(&order)
	store.Set(GetOrderIDBytes(order.Id), value)

	// Update order count
	k.SetOrderCount(ctx, count+1)

	return count
}

// SetOrder set a specific order in the store
func (k Keeper) SetOrder(ctx sdk.Context, order types.Order) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderKey))
	b := k.cdc.MustMarshalBinaryBare(&order)
	store.Set(GetOrderIDBytes(order.Id), b)
}

// GetOrder returns a order from its id
func (k Keeper) GetOrder(ctx sdk.Context, id uint64) types.Order {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderKey))
	var order types.Order
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetOrderIDBytes(id)), &order)
	return order
}

// HasOrder checks if the order exists in the store
func (k Keeper) HasOrder(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderKey))
	return store.Has(GetOrderIDBytes(id))
}

// GetOrderOwner returns the creator of the order
func (k Keeper) GetOrderOwner(ctx sdk.Context, id uint64) string {
	return k.GetOrder(ctx, id).Creator
}

// RemoveOrder removes a order from the store
func (k Keeper) RemoveOrder(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderKey))
	store.Delete(GetOrderIDBytes(id))
}

// GetAllOrder returns all order
func (k Keeper) GetAllOrder(ctx sdk.Context) (list []types.Order) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OrderKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Order
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetOrderIDBytes returns the byte representation of the ID
func GetOrderIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetOrderIDFromBytes returns ID in uint64 format from a byte array
func GetOrderIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
