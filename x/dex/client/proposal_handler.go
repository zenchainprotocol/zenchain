package client

import (
	"github.com/zenchainprotocol/zenchain-node/x/dex/client/cli"
	"github.com/zenchainprotocol/zenchain-node/x/dex/client/rest"
	govclient "github.com/zenchainprotocol/zenchain-node/x/gov/client"
)

// param change proposal handler
var (
	// DelistProposalHandler alias gov NewProposalHandler
	DelistProposalHandler = govclient.NewProposalHandler(cli.GetCmdSubmitDelistProposal, rest.DelistProposalRESTHandler)
)
