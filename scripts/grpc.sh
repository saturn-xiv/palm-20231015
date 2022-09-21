#!/bin/bash

set -e

if [ "$#" -ne 2 ]
then
    echo "USAGE: $0 GRPC_VERSION PROTOBUF_VERSION"
    exit 1
fi

function build_grpc() {
    # https://grpc.io/docs/languages/cpp/quickstart/
    if [ -L $HOME/.local/bin/protoc ]
    then
        echo 'already exists!'
        return
    fi
    if [ -d $HOME/downloads/grpc ]
    then
        cd $HOME/downloads/grpc
        git checkout master
        git pull
        echo "switch protobuf to $1"
        git checkout $1
        # fix unable to find current revision in submodule path
        # git pull --recurse-submodules
        git submodule update --init --recursive
    else
        git clone --recurse-submodules -b $1 https://github.com/grpc/grpc.git $HOME/downloads/grpc
    fi

    echo "switch protobuf to $2"
    cd $HOME/downloads/grpc/third_party/protobuf
    git checkout $2

    if [ -d $HOME/build/grpc-amd64 ]
    then
        rm -r $HOME/build/grpc-amd64
    fi
    mkdir -pv $HOME/build/grpc-amd64
    cd $HOME/build/grpc-amd64
    cmake -DCMAKE_BUILD_TYPE=Release \
    -DgRPC_INSTALL=ON \
    -DgRPC_SSL_PROVIDER=package \
    -DgRPC_BUILD_TESTS=OFF \
    -DCMAKE_INSTALL_PREFIX=$HOME/.local $HOME/downloads/grpc
    make -j
    make install
}

build_grpc $1 $2

echo 'done.'

exit 0
