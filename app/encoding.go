package app

<<<<<<< HEAD
// DONTCOVER

import (
	"github.com/cosmos/cosmos-sdk/std"

	"github.com/tendermint/liquidity/app/params"
=======
import (
	"github.com/cosmos/cosmos-sdk/std"
	"github.com/zenchainprotocol/zenchain/app/params"
>>>>>>> d5ca49900ba5c120e365148b35ab8d6debdfe88d
)

// MakeEncodingConfig creates an EncodingConfig for testing
func MakeEncodingConfig() params.EncodingConfig {
<<<<<<< HEAD
	encodingConfig := params.MakeTestEncodingConfig()
=======
	encodingConfig := params.MakeEncodingConfig()
>>>>>>> d5ca49900ba5c120e365148b35ab8d6debdfe88d
	std.RegisterLegacyAminoCodec(encodingConfig.Amino)
	std.RegisterInterfaces(encodingConfig.InterfaceRegistry)
	ModuleBasics.RegisterLegacyAminoCodec(encodingConfig.Amino)
	ModuleBasics.RegisterInterfaces(encodingConfig.InterfaceRegistry)
	return encodingConfig
}
