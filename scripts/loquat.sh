#!/bin/bash

set -e

if [ "$#" -ne 1 ]
then
    echo "USAGE: $0 WORKSPACE"
    exit 1
fi

. /etc/os-release
export CMAKE_ARGS="-DCMAKE_BUILD_TYPE=Release -DABSL_PROPAGATE_CXX_STD=ON"

if [ $ID == "ubuntu" ]
then
    apt install -y libunwind-dev golang
    export CMAKE_ARGS="${CMAKE_ARGS} -DTINK_USE_SYSTEM_OPENSSL=OFF"
elif [ $ID == "arch" ]
then
    sudo pacman -S --needed openssl-1.1
    export CMAKE_ARGS="${CMAKE_ARGS} -DOPENSSL_INCLUDE_DIR=/usr/include/openssl-1.1 -DOPENSSL_LIBRARIES=/usr/lib/openssl-1.1"
else
    echo "unsupported system $ID"
    exit 1
fi

cmake $CMAKE_ARGS $1 
make clean
make -j

echo 'done.'
