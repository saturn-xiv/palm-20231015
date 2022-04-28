#!/bin/bash

set -e

if [ "$#" -ne 1 ]
then
    echo "USAGE: $0 OS"
    exit 1
fi

function build_ubuntu() {
    local VERSION=$(date "+%4Y%m%d%H%M%S")
    local CODE="palm-cpp-$1"

    buildah pull ubuntu:$1
    buildah bud --layers -t $CODE -f $1.Dockerfile
    podman save -o $CODE-$VERSION.tar $CODE
}

build_ubuntu $1

echo 'done.'

exit 0
