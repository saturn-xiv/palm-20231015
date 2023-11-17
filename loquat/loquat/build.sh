#!/bin/bash

set -e


source /etc/os-release

export GCC_VERSION=12
export SOURCE_DIR=$PWD
export BUILD_DIR=$HOME/build/palm-loquat-$(lsb_release -cs)-$(uname -m)-Release

export THRIFT_FLAGS="-DBUILD_TESTING=OFF -DBUILD_COMPILER=OFF -DWITH_OPENSSL=ON -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF"
export TINK_FLAGS="-DABSL_PROPAGATE_CXX_STD=ON -DTINK_USE_SYSTEM_OPENSSL=ON"

if [ ! -d $BUILD_DIR ]
then
    mkdir -p $BUILD_DIR
fi

CC=gcc-$GCC_VERSION CXX=g++-$GCC_VERSION cmake -DCMAKE_BUILD_TYPE=Release $THRIFT_FLAGS $TINK_FLAGS -B $BUILD_DIR -S $SOURCE_DIR
make -j $(nproc --ignore=2) -C $BUILD_DIR

echo 'done.'

exit 0
