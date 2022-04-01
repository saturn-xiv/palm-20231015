#!/bin/bash

set -e

export VERSION=$(date "+%4Y%m%d%H%M%S")
export CODE="palm-cpp"

buildah pull ubuntu:focal
buildah bud --layers -t $CODE .
podman save -o $CODE-$VERSION.tar $CODE

echo 'done.'

exit 0
