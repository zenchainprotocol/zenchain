# Simple usage with a mounted data directory:
# > docker build -t zenchain .
# > docker run -it -p 36657:36657 -p 36656:36656 -v ~/.zenchaind:/root/.zenchaind -v ~/.zenchaincli:/root/.zenchaincli zenchain zenchaind init mynode
# > docker run -it -p 36657:36657 -p 36656:36656 -v ~/.zenchaind:/root/.zenchaind -v ~/.zenchaincli:/root/.zenchaincli zenchain zenchaind start
FROM golang:alpine AS build-env

# Install minimum necessary dependencies, remove packages
RUN apk add --no-cache curl make git libc-dev bash gcc linux-headers eudev-dev

# Set working directory for the build
WORKDIR /go/src/github.com/zenchainprotocol/zenchain-node

# Add source files
COPY . .

# Build zenChain
RUN GOPROXY=http://goproxy.cn make install

# Final image
FROM alpine:edge

WORKDIR /root

# Copy over binaries from the build-env
COPY --from=build-env /go/bin/zenchaind /usr/bin/zenchaind
COPY --from=build-env /go/bin/zenchaincli /usr/bin/zenchaincli

# Run zenchaind by default, omit entrypoint to ease using container with zenchaincli
CMD ["zenchaind"]
