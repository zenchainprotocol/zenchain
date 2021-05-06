package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/zenchainprotocol/zenchain/x/auction/types"
)

func CmdCreateBid() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-bid [OrderId] [BidPrice]",
		Short: "Creates a new bid",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsOrderId, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}
			argsBidPrice := string(args[1])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateBid(clientCtx.GetFromAddress().String(), argsOrderId, string(argsBidPrice))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateBid() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-bid [id] [OrderId] [BidPrice]",
		Short: "Update a bid",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsOrderId, err := strconv.ParseUint(args[1], 10, 64)
			if err != nil {
				return err
			}

			argsBidPrice := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateBid(clientCtx.GetFromAddress().String(), id, argsOrderId, string(argsBidPrice))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteBid() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-bid [id] [OrderId] [BidPrice]",
		Short: "Delete a bid by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteBid(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
