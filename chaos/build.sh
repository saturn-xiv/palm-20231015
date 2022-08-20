#!/bin/bash

set -e

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)

build_app() {    
    local target=$WORKSPACE/build/$1
    mkdir -pv $target
    cd $target
    CC=clang CXX=clang++ cmake $WORKSPACE -DCMAKE_BUILD_TYPE=$1 \
        -DSOCI_STATIC=ON -DSOCI_SHARED=OFF -DSOCI_TESTS=OFF \
        -DREDIS_PLUS_PLUS_BUILD_TEST=OFF
    make -j
}

declare -a flags=(
    "Debug"
    "Release"
)

for f in "${flags[@]}"
do
    build_app $f
done

echo "done($GIT_VERSION)."
exit 0
