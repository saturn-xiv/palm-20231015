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

sudo pacman -S --needed postgresql-libs mariadb-clients \
    boost zeromq

# -----------------------------------------------------------------------------

build_gnu Debug
build_gnu Release

# -----------------------------------------------------------------------------

echo "done($GIT_VERSION)."
exit 0
