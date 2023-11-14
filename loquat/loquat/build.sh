#!/bin/bash

set -e


source /etc/os-release

if [ $ID != "ubuntu" ]
then
    echo "unsupported system: $(lsb_release -ds)"
    exit 1
fi

sudo apt install -y build-essential cmake pkg-config g++-12 \
    golang libssl-dev libunwind-dev libboost-all-dev libevent-dev

export WORKSPACE=$PWD/build/$(lsb_release -is)-$(uname -m)-Release

export THRIFT_FLAGS="-DBUILD_TESTING=OFF -DBUILD_COMPILER=OFF -DWITH_OPENSSL=ON -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF"
export TINK_FLAGS="-DABSL_PROPAGATE_CXX_STD=ON -DTINK_USE_SYSTEM_OPENSSL=ON"

if [ ! -d $WORKSPACE ]
then
    mkdir -p $WORKSPACE
fi

cd $WORKSPACE

CC=gcc-12 CXX=g++-12 cmake -DCMAKE_BUILD_TYPE=Release $THRIFT_FLAGS $TINK_FLAGS ../..
make loquat

echo 'done.'

exit 0
