package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
)

// RegisterCodec registers concrete types on the Amino codec
func RegisterCodec(cdc *codec.Codec) {
	cdc.RegisterConcrete(MsgTokenIssue{}, "zenchain/token/MsgIssue", nil)
	cdc.RegisterConcrete(MsgTokenBurn{}, "zenchain/token/MsgBurn", nil)
	cdc.RegisterConcrete(MsgTokenMint{}, "zenchain/token/MsgMint", nil)
	cdc.RegisterConcrete(MsgMultiSend{}, "zenchain/token/MsgMultiTransfer", nil)
	cdc.RegisterConcrete(MsgSend{}, "zenchain/token/MsgTransfer", nil)
	cdc.RegisterConcrete(MsgTransferOwnership{}, "zenchain/token/MsgTransferOwnership", nil)
	cdc.RegisterConcrete(MsgConfirmOwnership{}, "zenchain/token/MsgConfirmOwnership", nil)
	cdc.RegisterConcrete(MsgTokenModify{}, "zenchain/token/MsgModify", nil)

	// for test
	//cdc.RegisterConcrete(MsgTokenDestroy{}, "zenchain/token/MsgDestroy", nil)
}

// generic sealed codec to be used throughout this module
var ModuleCdc *codec.Codec

func init() {
	ModuleCdc = codec.New()
	RegisterCodec(ModuleCdc)
	codec.RegisterCrypto(ModuleCdc)
	ModuleCdc.Seal()
}
