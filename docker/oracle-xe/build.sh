#!/bin/bash

set -e

export VERSION=$(date "+%4Y%m%d%H%M%S")
export CODE="oracle-xe"
export ORACLE_XE="container-registry.oracle.com/database/express:21.3.0-xe"

buildah pull $ORACLE_XE
podman save --format=oci-archive -o $CODE-$VERSION.tar $ORACLE_XE
md5sum $CODE-$VERSION.tar > md5.txt

echo "done($CODE-$VERSION.tar)."

exit 0
