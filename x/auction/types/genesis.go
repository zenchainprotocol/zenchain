package types

import (
	"fmt"
	// this line is used by starport scaffolding # ibc/genesistype/import
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # ibc/genesistype/default
		// this line is used by starport scaffolding # genesis/types/default
		BidList:   []*Bid{},
		OrderList: []*Order{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in bid
	bidIdMap := make(map[uint64]bool)

	for _, elem := range gs.BidList {
		if _, ok := bidIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for bid")
		}
		bidIdMap[elem.Id] = true
	}
	// Check for duplicated ID in order
	orderIdMap := make(map[uint64]bool)

	for _, elem := range gs.OrderList {
		if _, ok := orderIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for order")
		}
		orderIdMap[elem.Id] = true
	}

	return nil
}
