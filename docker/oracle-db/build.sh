#!/bin/bash

set -e

export VERSION=$(date "+%4Y%m%d%H%M%S")
export CODE="oracle-db"
# export ORACLE_NAME="container-registry.oracle.com/database/express:21.3.0-xe"
export ORACLE_NAME="container-registry.oracle.com/database/free:latest"

buildah pull $ORACLE_NAME
podman save --format=oci-archive -o $CODE-$VERSION.tar $ORACLE_NAME
md5sum $CODE-$VERSION.tar > $CODE-$VERSION.md5

echo "done($CODE-$VERSION.tar)."

exit 0
