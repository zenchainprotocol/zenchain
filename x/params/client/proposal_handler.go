package client

import (
	govclient "github.com/zenchainprotocol/zenchain-node/x/gov/client"
	"github.com/zenchainprotocol/zenchain-node/x/params/client/cli"
	"github.com/zenchainprotocol/zenchain-node/x/params/client/rest"
)

// ProposalHandler is the param change proposal handler in cmsdk
var ProposalHandler = govclient.NewProposalHandler(cli.GetCmdSubmitProposal, rest.ProposalRESTHandler)
