#!/bin/bash

set -e

export SOURCE_DIR=$PWD
export BUILD_DIR=$HOME/build/palm-carnation-$(lsb_release -cs)-Release

export MAILIO_ARGS="-DMAILIO_BUILD_DOCUMENTATION=OFF -DMAILIO_BUILD_EXAMPLES=OFF -DBUILD_SHARED_LIBRARY=OFF -DMAILIO_BUILD_TESTS=OFF"
export CASBIN_ARGS="-DCASBIN_BUILD_TEST=OFF -DCASBIN_BUILD_BENCHMARK=OFF -DCASBIN_BUILD_PYTHON_BINDINGS=OFF -DCASBIN_INSTALL=OFF"
export THRIFT_ARGS="-DBUILD_TESTING=OFF -DBUILD_COMPILER=OFF -DWITH_OPENSSL=ON -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF"
export PQXX_ARGS="-DSKIP_BUILD_TEST=ON"

if [ ! -d $BUILD_DIR ]
then
    mkdir -p $BUILD_DIR
fi
CC=clang CXX=clang++ cmake -DCMAKE_BUILD_TYPE=Release -B $BUILD_DIR -S $SOURCE_DIR $MAILIO_ARGS $CASBIN_ARGS $THRIFT_ARGS $PQXX_ARGS
make -j $(nproc --ignore=2) -C $BUILD_DIR

echo 'done'
exit 0
