#!/bin/bash

set -e

. /etc/os-release

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export THRIFT_FLAGS="-DBUILD_COMPILER=OFF -DWITH_OPENSSL=OFF -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF"


build_gnu() {
    local target=$WORKSPACE/build/palm-arch-$3-$2
    mkdir -p $target
    cd $target
    
    cmake $WORKSPACE -DCMAKE_MAKE_PROGRAM=make -DCMAKE_BUILD_TYPE=$2 \
        -DBUILD_TESTING=OFF -DBoost_NO_WARN_NEW_VERSIONS=1 $THRIFT_FLAGS \
        -DCASBIN_BUILD_TEST=OFF -DCASBIN_BUILD_BENCHMARK=OFF -DCASBIN_BUILD_PYTHON_BINDINGS=OFF -DCASBIN_INSTALL=OFF \
        -DMAILIO_BUILD_EXAMPLES=OFF -DMAILIO_BUILD_DOCUMENTATION=OFF -DMAILIO_BUILD_SHARED_LIBRARY=OFF -DMAILIO_BUILD_TESTS=OFF \
        -DVCPKG_HOST_TRIPLET=x64-linux -DVCPKG_TARGET_TRIPLET=$1 -DCMAKE_TOOLCHAIN_FILE=$HOME/local/vcpkg/scripts/buildsystems/vcpkg.cmake -DVCPKG_CHAINLOAD_TOOLCHAIN_FILE=$WORKSPACE/toolchains/$3.cmake
    make
}


build_musl() {
    local target=$WORKSPACE/build/$1-$4-$3
    mkdir -p $target
    cd $target
    CXX=$2-g++ cmake -DCMAKE_BUILD_TYPE=$3 $WORKSPACE/$1
    make
}

# -----------------------------------------------------------------------------

if [[ $ID != "arch" ]]
then
    echo "unsupported system($PRETTY_NAME)"
    exit 1
fi

# -----------------------------------------------------------------------------

build_gnu x64-linux Debug x86_64
build_gnu x64-linux Release x86_64

build_musl coconut x86_64-linux-musl Debug x86_64
build_musl coconut x86_64-linux-musl Release x86_64


# -----------------------------------------------------------------------------

echo "done($GIT_VERSION)."
exit 0
