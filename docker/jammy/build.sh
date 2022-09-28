#!/bin/bash

set -e

export VERSION=$(date "+%4Y%m%d%H%M%S")
export CODE="palm-jammy"

buildah pull ubuntu:jammy
buildah bud --layers -t $CODE .
# podman save -o $CODE-$VERSION.tar $CODE 
# podman save $CODE | split -d -b 1G - $CODE-$VERSION.tar.xz.

echo 'done.'

exit 0
