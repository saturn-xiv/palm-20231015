#!/bin/bash

set -e

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export PACKAGE_NAME=palm-$GIT_VERSION
export TARGET=$WORKSPACE/tmp/$PACKAGE_NAME

# -----------------------------------------------------------------------------

build_musl() {
    local target=$WORKSPACE/build/$1-$4-$3
    mkdir -p $target
    cd $target
    CXX=$2-g++ cmake -DCMAKE_BUILD_TYPE=$3 $WORKSPACE/$1
    make -j $(nproc --ignore=2)
    cp -v $1 $TARGET/bin/$4/
}

build_gnu() {
    local target=$WORKSPACE/build/palm-$1-$2
    mkdir -p $target
    cd $target
    
    cmake $WORKSPACE -DCMAKE_BUILD_TYPE=$2 -DCMAKE_TOOLCHAIN_FILE=$WORKSPACE/toolchains/$1.cmake
    make -j $(nproc --ignore=2)
    cp -v apps/* $TARGET/bin/$1/
}


# -----------------------------------------------------------------------------

if [ -d $TARGET_DIR ]
then
    rm -r $TARGET_DIR
fi
mkdir -p $TARGET_DIR/bin
cd $TARGET_DIR/bin
mkdir x86_64 aarch64 riscv64 armv7l

build_gnu x86_64 Debug 
build_gnu x86_64 Release

build_musl coconut x86_64-linux-musl Debug x86_64
build_musl coconut x86_64-linux-musl Release x86_64


# -----------------------------------------------------------------------------

echo "done($GIT_VERSION)."
exit 0
