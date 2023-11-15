#!/bin/bash

set -e

export SOURCE_DIR=$PWD
export BUILD_DIR=$HOME/build/palm-carnation-$1-Release

if [ ! -d $BUILD_DIR ]
then
    mkdir -p $BUILD_DIR
fi
CC=clang CXX=clang++ cmake cmake -DCMAKE_BUILD_TYPE=Release -B $BUILD_DIR -S $SOURCE_DIR
make -j $(nproc --ignore=2) -C $BUILD_DIR

echo 'done'
exit 0
