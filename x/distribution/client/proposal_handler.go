package client

import (
	"github.com/zenchainprotocol/zenchain-node/x/distribution/client/cli"
	"github.com/zenchainprotocol/zenchain-node/x/distribution/client/rest"
	govclient "github.com/zenchainprotocol/zenchain-node/x/gov/client"
)

// param change proposal handler
var (
	ProposalHandler = govclient.NewProposalHandler(cli.GetCmdSubmitProposal, rest.ProposalRESTHandler)
)
