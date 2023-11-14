#!/bin/bash

set -e


source /etc/os-release

if [ $ID != "ubuntu" ]
then
    echo "unsupported system: $(lsb_release -ds)"
    exit 1
fi

export SOURCE_DIR=$PWD
export BUILD_DIR=$HOME/build/palm-loquat-$(lsb_release -cs)-$(uname -m)-Release
export GCC_VERSION=12
export THRIFT_FLAGS="-DBUILD_TESTING=OFF -DBUILD_COMPILER=OFF -DWITH_OPENSSL=ON -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF"
export TINK_FLAGS="-DABSL_PROPAGATE_CXX_STD=ON -DTINK_USE_SYSTEM_OPENSSL=ON"

sudo apt install -y build-essential cmake pkg-config g++-$GCC_VERSION \
    golang libssl-dev libunwind-dev libboost-all-dev libevent-dev


if [ ! -d $BUILD_DIR ]
then
    mkdir -p $BUILD_DIR
fi

CC=gcc-$GCC_VERSION CXX=g++-$GCC_VERSION cmake -DCMAKE_BUILD_TYPE=Release $THRIFT_FLAGS $TINK_FLAGS -B $BUILD_DIR -S $SOURCE_DIR
make -C $BUILD_DIR

echo 'done.'

exit 0
