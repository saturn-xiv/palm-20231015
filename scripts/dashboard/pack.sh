#!/bin/sh

set -e

export WORKSPACE=$PWD
export VERSION=$(date "+%4Y%m%d%H%M%S")

cd $WORKSPACE/dashboard
XZ_OPT=-9 tar -cJf $WORKSPACE/tmp/dashboard-$VERSION.tar.xz node_modules yarn.lock

echo "Done($VERSION)."

exit 0
