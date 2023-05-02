#!/bin/bash

set -e

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
        git checkout $1
        # fix unable to find current revision in submodule path
        # git pull --recurse-submodules
        git submodule update --init --recursive
    else
        git clone --recurse-submodules -b $1 https://github.com/grpc/grpc.git $HOME/downloads/grpc
    fi
   
    if [ -d $HOME/build/grpc ]
    then
        rm -r $HOME/build/grpc
    fi
    mkdir -pv $HOME/build/grpc
    cd $HOME/build/grpc
    cmake -DCMAKE_BUILD_TYPE=Release \
    -DABSL_PROPAGATE_CXX_STD=ON \
    -DgRPC_INSTALL=ON -DgRPC_SSL_PROVIDER=package -DgRPC_BUILD_TESTS=OFF \
    -DCMAKE_INSTALL_PREFIX=$HOME/.local $HOME/downloads/grpc
    make
    make install
}

if [ "$#" -ne 1 ]
then
    echo "USAGE: $0 GRPC_VERSION"
    exit 1
fi

build_grpc $1

exit 0
