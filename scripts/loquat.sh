#!/bin/bash

set -e

if [ "$#" -ne 1 ]
then
    echo "USAGE: $0 WORKSPACE"
    exit 1
fi

. /etc/os-release

if [ $ID == "ubuntu" ]
then
    apt-get install -y golang libunwind-dev libboost-all-dev 
    export CMAKE_ARGS="-DTINK_USE_SYSTEM_OPENSSL=OFF"
elif [ $ID == "arch" ]
then
    sudo pacman -Sy --needed go openssl-1.1 boost libunwind libevent
    export CMAKE_ARGS="-DOPENSSL_INCLUDE_DIR=/usr/include/openssl-1.1 -DOPENSSL_LIBRARIES=/usr/lib/openssl-1.1"
else
    echo "unsupported system $ID"
    exit 1
fi
 
cmake -DCMAKE_BUILD_TYPE=Release $CMAKE_ARGS -DABSL_PROPAGATE_CXX_STD=ON \
    -DEVENT__LIBRARY_TYPE=STATIC -DEVENT__DISABLE_OPENSSL=ON \
    -DWITH_LIBEVENT=ON -DBUILD_COMPILER=OFF -DWITH_OPENSSL=OFF -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF \
    $1
make -j $(nproc --ignore=2)

echo 'done.'
