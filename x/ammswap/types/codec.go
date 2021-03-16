package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
)

// RegisterCodec registers concrete types on codec
func RegisterCodec(cdc *codec.Codec) {
	cdc.RegisterConcrete(MsgAddLiquidity{}, "zenchain/ammswap/MsgAddLiquidity", nil)
	cdc.RegisterConcrete(MsgRemoveLiquidity{}, "zenchain/ammswap/MsgRemoveLiquidity", nil)
	cdc.RegisterConcrete(MsgCreateExchange{}, "zenchain/ammswap/MsgCreateExchange", nil)
	cdc.RegisterConcrete(MsgTokenToToken{}, "zenchain/ammswap/MsgSwapToken", nil)
}

// ModuleCdc defines the module codec
var ModuleCdc *codec.Codec

func init() {
	ModuleCdc = codec.New()
	RegisterCodec(ModuleCdc)
	codec.RegisterCrypto(ModuleCdc)
	ModuleCdc.Seal()
}
