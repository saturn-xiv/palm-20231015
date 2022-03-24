#!/bin/bash

set -e

export VERSION=$(date "+%4Y%m%d%H%M%S")
export CODE="palm-alpine"

buildah pull alpine:latest
buildah bud --layers -t $CODE .
podman save -o $CODE-$VERSION.tar $CODE
# tar jcvf - $CODE-$VERSION.tar | split -b 1G - palm.tar.xz

echo 'done.'

exit 0
