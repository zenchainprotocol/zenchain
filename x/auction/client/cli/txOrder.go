package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/zenchainprotocol/zenchain/x/auction/types"
)

func CmdCreateOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-order [denomid] [tokenid] [startprice] [stepprice] [starttime] [duration]",
		Short: "Creates a new order",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsDenomid := string(args[0])
			argsTokenid := string(args[1])
			argsStartprice := string(args[2])
			argsStepprice := string(args[3])
			argsStarttime := string(args[4])
			argsDuration := string(args[5])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateOrder(clientCtx.GetFromAddress().String(), string(argsDenomid), string(argsTokenid), string(argsStartprice), string(argsStepprice), string(argsStarttime), string(argsDuration))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-order [id] [denomid] [tokenid] [startprice] [stepprice] [starttime] [duration]",
		Short: "Update a order",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsDenomid := string(args[1])
			argsTokenid := string(args[2])
			argsStartprice := string(args[3])
			argsStepprice := string(args[4])
			argsStarttime := string(args[5])
			argsDuration := string(args[6])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateOrder(clientCtx.GetFromAddress().String(), id, string(argsDenomid), string(argsTokenid), string(argsStartprice), string(argsStepprice), string(argsStarttime), string(argsDuration))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-order [id] [denomid] [tokenid] [startprice] [stepprice] [starttime] [duration]",
		Short: "Delete a order by id",
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

			msg := types.NewMsgDeleteOrder(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
