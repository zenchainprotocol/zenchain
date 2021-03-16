#!/usr/bin/env sh

##
## Input parameters
##
ID=${ID:-0}
LOG=${LOG:-zenchaind.log}

##
## Run binary with all parameters
##
export zenCHAINDHOME="/zenchaind/node${ID}/zenchaind"

if [ -d "$(dirname "${zenCHAINDHOME}"/"${LOG}")" ]; then
  zenchaind --chain-id zenchain-1 --home "${zenCHAINDHOME}" "$@" | tee "${zenCHAINDHOME}/${LOG}"
else
  zenchaind --chain-id zenchain-1 --home "${zenCHAINDHOME}" "$@"
fi

