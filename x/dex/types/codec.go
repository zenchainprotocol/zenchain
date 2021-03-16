package types

import "github.com/cosmos/cosmos-sdk/codec"

// RegisterCodec registers concrete types on the Amino codec
func RegisterCodec(cdc *codec.Codec) {
	cdc.RegisterConcrete(MsgList{}, "zenchain/dex/MsgList", nil)
	cdc.RegisterConcrete(MsgDeposit{}, "zenchain/dex/MsgDeposit", nil)
	cdc.RegisterConcrete(MsgWithdraw{}, "zenchain/dex/MsgWithdraw", nil)
	cdc.RegisterConcrete(MsgTransferOwnership{}, "zenchain/dex/MsgTransferTradingPairOwnership", nil)
	cdc.RegisterConcrete(MsgConfirmOwnership{}, "zenchain/dex/MsgConfirmOwnership", nil)
	cdc.RegisterConcrete(DelistProposal{}, "zenchain/dex/DelistProposal", nil)
	cdc.RegisterConcrete(MsgCreateOperator{}, "zenchain/dex/CreateOperator", nil)
	cdc.RegisterConcrete(MsgUpdateOperator{}, "zenchain/dex/UpdateOperator", nil)
}

// ModuleCdc represents generic sealed codec to be used throughout this module
var ModuleCdc *codec.Codec

func init() {
	ModuleCdc = codec.New()
	RegisterCodec(ModuleCdc)
	codec.RegisterCrypto(ModuleCdc)
	ModuleCdc.Seal()
}
