package app

<<<<<<< HEAD
// DONTCOVER

import (
	"encoding/json"
=======
import (
	"encoding/json"

	"github.com/cosmos/cosmos-sdk/codec"
>>>>>>> d5ca49900ba5c120e365148b35ab8d6debdfe88d
)

// The genesis state of the blockchain is represented here as a map of raw json
// messages key'd by a identifier string.
// The identifier is used to determine which module genesis information belongs
// to so it may be appropriately routed during init chain.
// Within this application default genesis information is retrieved from
// the ModuleBasicManager which populates json from each BasicModule
// object provided to it during init.
type GenesisState map[string]json.RawMessage

// NewDefaultGenesisState generates the default state for the application.
<<<<<<< HEAD
func NewDefaultGenesisState() GenesisState {
	encCfg := MakeEncodingConfig()
	return ModuleBasics.DefaultGenesis(encCfg.Marshaler)
=======
func NewDefaultGenesisState(cdc codec.JSONMarshaler) GenesisState {
	return ModuleBasics.DefaultGenesis(cdc)
>>>>>>> d5ca49900ba5c120e365148b35ab8d6debdfe88d
}
