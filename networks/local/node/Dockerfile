FROM golang:stretch as build-env

# Install minimum necessary dependencies
ENV PACKAGES curl make git libc-dev bash gcc
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y $PACKAGES

WORKDIR /zenchain
# Add source files
COPY . .

# build zenChain
RUN make build-linux

# Final image
FROM golang:1.14 as final

WORKDIR /zenchaind
# Copy over binaries from the build-env
COPY --from=build-env /zenchain/build/zenchaind /usr/bin/zenchaind
COPY --from=build-env /zenchain/build/zenchaincli /usr/bin/zenchaincli
COPY --from=build-env /zenchain/networks/local/node/wrapper.sh /usr/bin/wrapper.sh

EXPOSE 26656 26657
ENTRYPOINT ["/usr/bin/wrapper.sh"]
CMD ["start"]
STOPSIGNAL SIGTERM

