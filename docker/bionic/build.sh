#!/bin/bash

set -e

export VERSION=$(date "+%4Y%m%d%H%M%S")
export CODE="palm-bionic"

buildah pull ubuntu:bionic
buildah bud --layers -t $CODE .
podman save --format=oci-archive -o $CODE-$VERSION.tar $CODE
# XZ_OPT=-9 tar -cJf $CODE-$VERSION.tar.xz $CODE-$VERSION.tar
md5sum $CODE-$VERSION.tar > md5.txt

echo "done($CODE-$VERSION.tar)."

exit 0
