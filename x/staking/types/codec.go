package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
)

// RegisterCodec registers concrete types for codec
func RegisterCodec(cdc *codec.Codec) {
	cdc.RegisterConcrete(MsgCreateValidator{}, "zenchain/staking/MsgCreateValidator", nil)
	cdc.RegisterConcrete(MsgEditValidator{}, "zenchain/staking/MsgEditValidator", nil)
	cdc.RegisterConcrete(MsgDestroyValidator{}, "zenchain/staking/MsgDestroyValidator", nil)
	cdc.RegisterConcrete(MsgDeposit{}, "zenchain/staking/MsgDeposit", nil)
	cdc.RegisterConcrete(MsgWithdraw{}, "zenchain/staking/MsgWithdraw", nil)
	cdc.RegisterConcrete(MsgAddShares{}, "zenchain/staking/MsgAddShares", nil)
	cdc.RegisterConcrete(MsgRegProxy{}, "zenchain/staking/MsgRegProxy", nil)
	cdc.RegisterConcrete(MsgBindProxy{}, "zenchain/staking/MsgBindProxy", nil)
	cdc.RegisterConcrete(MsgUnbindProxy{}, "zenchain/staking/MsgUnbindProxy", nil)
}

// ModuleCdc is generic sealed codec to be used throughout this module
var ModuleCdc *codec.Codec

func init() {
	ModuleCdc = codec.New()
	RegisterCodec(ModuleCdc)
	codec.RegisterCrypto(ModuleCdc)
	ModuleCdc.Seal()
}
