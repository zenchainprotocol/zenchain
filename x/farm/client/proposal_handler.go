package client

import (
	"github.com/zenchainprotocol/zenchain-node/x/farm/client/cli"
	"github.com/zenchainprotocol/zenchain-node/x/farm/client/rest"
	govcli "github.com/zenchainprotocol/zenchain-node/x/gov/client"
)

var (
	// ManageWhiteListProposalHandler alias gov NewProposalHandler
	ManageWhiteListProposalHandler = govcli.NewProposalHandler(cli.GetCmdManageWhiteListProposal, rest.ManageWhiteListProposalRESTHandler)
)
