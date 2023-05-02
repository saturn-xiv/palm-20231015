#!/bin/bash

set -e

. /etc/os-release

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export PROTOBUF_ROOT=$HOME/.local


build_gnu() {
    local target=$WORKSPACE/build/arch-$1
    mkdir -p $target
    cd $target
    cmake $WORKSPACE \
        -DCMAKE_BUILD_TYPE=$1 -DCMAKE_TOOLCHAIN_FILE=$WORKSPACE/toolchains/amd64.cmake
    make
}

# -----------------------------------------------------------------------------

if [[ $ID != "arch" ]]
then
    echo "unsupported system($PRETTY_NAME)"
    exit 1
fi

sudo pacman -S --needed postgresql-libs boost
# -----------------------------------------------------------------------------

if [ -d $WORKSPACE/gourd/cpp ]
then
    rm -r $WORKSPACE/gourd/cpp
fi
mkdir -p $WORKSPACE/gourd/cpp
$PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/protocols \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --cpp_out=$WORKSPACE/gourd/cpp --grpc_out=$WORKSPACE/gourd/cpp \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_cpp_plugin \
        $WORKSPACE/protocols/*.proto

# -----------------------------------------------------------------------------

build_gnu Debug
build_gnu Release

# -----------------------------------------------------------------------------

echo "done($GIT_VERSION)."
exit 0
