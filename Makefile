
VERSION := $(shell echo $(shell git describe --tags) | sed 's/^v//')
COMMIT := $(shell git log -1 --format='%H')
ldflags = -X github.com/cosmos/cosmos-sdk/version.Name=ZenChain \
			-X github.com/cosmos/cosmos-sdk/version.AppName=zenchaind \
			-X github.com/cosmos/cosmos-sdk/version.Version=$(VERSION) \
			-X github.com/cosmos/cosmos-sdk/version.Commit=$(COMMIT) 
BUILD_FLAGS := -ldflags '$(ldflags)'

all: build 
build:
	go build $(BUILD_FLAGS) -o build/zenchaind ./cmd/zenchaind
	


