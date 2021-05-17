package app

<<<<<<< HEAD
// DONTCOVER

=======
>>>>>>> d5ca49900ba5c120e365148b35ab8d6debdfe88d
import (
	"encoding/json"
	"log"

<<<<<<< HEAD
=======
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"

>>>>>>> d5ca49900ba5c120e365148b35ab8d6debdfe88d
	servertypes "github.com/cosmos/cosmos-sdk/server/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	slashingtypes "github.com/cosmos/cosmos-sdk/x/slashing/types"
	"github.com/cosmos/cosmos-sdk/x/staking"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
<<<<<<< HEAD
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
=======
>>>>>>> d5ca49900ba5c120e365148b35ab8d6debdfe88d
)

// ExportAppStateAndValidators exports the state of the application for a genesis
// file.
<<<<<<< HEAD
func (app *LiquidityApp) ExportAppStateAndValidators(
	forZeroHeight bool, jailAllowedAddrs []string,
) (servertypes.ExportedApp, error) {
=======
func (app *App) ExportAppStateAndValidators(
	forZeroHeight bool, jailAllowedAddrs []string,
) (servertypes.ExportedApp, error) {

>>>>>>> d5ca49900ba5c120e365148b35ab8d6debdfe88d
	// as if they could withdraw from the start of the next block
	ctx := app.NewContext(true, tmproto.Header{Height: app.LastBlockHeight()})

	// We export at last height + 1, because that's the height at which
	// Tendermint will start InitChain.
	height := app.LastBlockHeight() + 1
	if forZeroHeight {
		height = 0
		app.prepForZeroHeightGenesis(ctx, jailAllowedAddrs)
	}

	genState := app.mm.ExportGenesis(ctx, app.appCodec)
	appState, err := json.MarshalIndent(genState, "", "  ")
	if err != nil {
		return servertypes.ExportedApp{}, err
	}

	validators, err := staking.WriteValidators(ctx, app.StakingKeeper)
<<<<<<< HEAD
=======
	if err != nil {
		return servertypes.ExportedApp{}, err
	}
>>>>>>> d5ca49900ba5c120e365148b35ab8d6debdfe88d
	return servertypes.ExportedApp{
		AppState:        appState,
		Validators:      validators,
		Height:          height,
		ConsensusParams: app.BaseApp.GetConsensusParams(ctx),
<<<<<<< HEAD
	}, err
=======
	}, nil
>>>>>>> d5ca49900ba5c120e365148b35ab8d6debdfe88d
}

// prepare for fresh start at zero height
// NOTE zero height genesis is a temporary feature which will be deprecated
//      in favour of export at a block height
<<<<<<< HEAD
func (app *LiquidityApp) prepForZeroHeightGenesis(ctx sdk.Context, jailAllowedAddrs []string) {
=======
func (app *App) prepForZeroHeightGenesis(ctx sdk.Context, jailAllowedAddrs []string) {
>>>>>>> d5ca49900ba5c120e365148b35ab8d6debdfe88d
	applyAllowedAddrs := false

	// check if there is a allowed address list
	if len(jailAllowedAddrs) > 0 {
		applyAllowedAddrs = true
	}

	allowedAddrsMap := make(map[string]bool)

	for _, addr := range jailAllowedAddrs {
		_, err := sdk.ValAddressFromBech32(addr)
		if err != nil {
			log.Fatal(err)
		}
		allowedAddrsMap[addr] = true
	}

	/* Just to be safe, assert the invariants on current state. */
	app.CrisisKeeper.AssertInvariants(ctx)

	/* Handle fee distribution state. */

	// withdraw all validator commission
	app.StakingKeeper.IterateValidators(ctx, func(_ int64, val stakingtypes.ValidatorI) (stop bool) {
<<<<<<< HEAD
		_, _ = app.DistrKeeper.WithdrawValidatorCommission(ctx, val.GetOperator())
=======
		_, err := app.DistrKeeper.WithdrawValidatorCommission(ctx, val.GetOperator())
		if err != nil {
			panic(err)
		}
>>>>>>> d5ca49900ba5c120e365148b35ab8d6debdfe88d
		return false
	})

	// withdraw all delegator rewards
	dels := app.StakingKeeper.GetAllDelegations(ctx)
<<<<<<< HEAD
	for _, del := range dels {
		delegatorAddress, _ := sdk.AccAddressFromBech32(del.DelegatorAddress)
		validatorAddress, _ := sdk.ValAddressFromBech32(del.ValidatorAddress)
		_, _ = app.DistrKeeper.WithdrawDelegationRewards(ctx, delegatorAddress, validatorAddress)
=======
	for _, delegation := range dels {
		_, err := app.DistrKeeper.WithdrawDelegationRewards(ctx, delegation.GetDelegatorAddr(), delegation.GetValidatorAddr())
		if err != nil {
			panic(err)
		}
>>>>>>> d5ca49900ba5c120e365148b35ab8d6debdfe88d
	}

	// clear validator slash events
	app.DistrKeeper.DeleteAllValidatorSlashEvents(ctx)

	// clear validator historical rewards
	app.DistrKeeper.DeleteAllValidatorHistoricalRewards(ctx)

	// set context height to zero
	height := ctx.BlockHeight()
	ctx = ctx.WithBlockHeight(0)

	// reinitialize all validators
	app.StakingKeeper.IterateValidators(ctx, func(_ int64, val stakingtypes.ValidatorI) (stop bool) {
		// donate any unwithdrawn outstanding reward fraction tokens to the community pool
		scraps := app.DistrKeeper.GetValidatorOutstandingRewardsCoins(ctx, val.GetOperator())
		feePool := app.DistrKeeper.GetFeePool(ctx)
		feePool.CommunityPool = feePool.CommunityPool.Add(scraps...)
		app.DistrKeeper.SetFeePool(ctx, feePool)

		app.DistrKeeper.Hooks().AfterValidatorCreated(ctx, val.GetOperator())
		return false
	})

	// reinitialize all delegations
	for _, del := range dels {
<<<<<<< HEAD
		delegatorAddress, _ := sdk.AccAddressFromBech32(del.DelegatorAddress)
		validatorAddress, _ := sdk.ValAddressFromBech32(del.ValidatorAddress)
		app.DistrKeeper.Hooks().BeforeDelegationCreated(ctx, delegatorAddress, validatorAddress)
		app.DistrKeeper.Hooks().AfterDelegationModified(ctx, delegatorAddress, validatorAddress)
=======
		app.DistrKeeper.Hooks().BeforeDelegationCreated(ctx, del.GetDelegatorAddr(), del.GetValidatorAddr())
		app.DistrKeeper.Hooks().AfterDelegationModified(ctx, del.GetDelegatorAddr(), del.GetValidatorAddr())
>>>>>>> d5ca49900ba5c120e365148b35ab8d6debdfe88d
	}

	// reset context height
	ctx = ctx.WithBlockHeight(height)

	/* Handle staking state. */

	// iterate through redelegations, reset creation height
	app.StakingKeeper.IterateRedelegations(ctx, func(_ int64, red stakingtypes.Redelegation) (stop bool) {
		for i := range red.Entries {
			red.Entries[i].CreationHeight = 0
		}
		app.StakingKeeper.SetRedelegation(ctx, red)
		return false
	})

	// iterate through unbonding delegations, reset creation height
	app.StakingKeeper.IterateUnbondingDelegations(ctx, func(_ int64, ubd stakingtypes.UnbondingDelegation) (stop bool) {
		for i := range ubd.Entries {
			ubd.Entries[i].CreationHeight = 0
		}
		app.StakingKeeper.SetUnbondingDelegation(ctx, ubd)
		return false
	})

	// Iterate through validators by power descending, reset bond heights, and
	// update bond intra-tx counters.
	store := ctx.KVStore(app.keys[stakingtypes.StoreKey])
	iter := sdk.KVStoreReversePrefixIterator(store, stakingtypes.ValidatorsKey)
	counter := int16(0)

	for ; iter.Valid(); iter.Next() {
		addr := sdk.ValAddress(iter.Key()[1:])
		validator, found := app.StakingKeeper.GetValidator(ctx, addr)
		if !found {
			panic("expected validator, not found")
		}

		validator.UnbondingHeight = 0
		if applyAllowedAddrs && !allowedAddrsMap[addr.String()] {
			validator.Jailed = true
		}

		app.StakingKeeper.SetValidator(ctx, validator)
		counter++
	}

	iter.Close()

<<<<<<< HEAD
	_, err := app.StakingKeeper.ApplyAndReturnValidatorSetUpdates(ctx)
	if err != nil {
		log.Fatal(err)
=======
	if _, err := app.StakingKeeper.ApplyAndReturnValidatorSetUpdates(ctx); err != nil {
		panic(err)
>>>>>>> d5ca49900ba5c120e365148b35ab8d6debdfe88d
	}

	/* Handle slashing state. */

	// reset start height on signing infos
	app.SlashingKeeper.IterateValidatorSigningInfos(
		ctx,
		func(addr sdk.ConsAddress, info slashingtypes.ValidatorSigningInfo) (stop bool) {
			info.StartHeight = 0
			app.SlashingKeeper.SetValidatorSigningInfo(ctx, addr, info)
			return false
		},
	)
}
