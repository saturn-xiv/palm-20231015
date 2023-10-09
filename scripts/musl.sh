#!/bin/sh

set -e

apk update
apk add rust cargo pkgconf \
    linux-lts-dev openssl-dev \
    libpq-dev mariadb-dev sqlite-dev \
    protobuf protobuf-dev grpc grpc-dev

OPENSSL_NO_VENDOR=Y cargo build --release

echo 'done.'
exit 0
