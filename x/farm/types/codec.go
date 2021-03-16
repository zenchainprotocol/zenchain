package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
)

// RegisterCodec registers concrete types on codec
func RegisterCodec(cdc *codec.Codec) {
	cdc.RegisterConcrete(MsgCreatePool{}, "zenchain/farm/MsgCreatePool", nil)
	cdc.RegisterConcrete(MsgDestroyPool{}, "zenchain/farm/MsgDestroyPool", nil)
	cdc.RegisterConcrete(MsgLock{}, "zenchain/farm/MsgLock", nil)
	cdc.RegisterConcrete(MsgUnlock{}, "zenchain/farm/MsgUnlock", nil)
	cdc.RegisterConcrete(MsgClaim{}, "zenchain/farm/MsgClaim", nil)
	cdc.RegisterConcrete(MsgProvide{}, "zenchain/farm/MsgProvide", nil)
	cdc.RegisterConcrete(ManageWhiteListProposal{}, "zenchain/farm/ManageWhiteListProposal", nil)
}

// ModuleCdc defines the module codec
var ModuleCdc *codec.Codec

func init() {
	ModuleCdc = codec.New()
	RegisterCodec(ModuleCdc)
	codec.RegisterCrypto(ModuleCdc)
	ModuleCdc.Seal()
}
