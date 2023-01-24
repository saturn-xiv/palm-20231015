#!/bin/bash

set -e

if [ "$#" -ne 1 ]
then
    echo "USAGE: $0 WORKSPACE"
    exit 1
fi

. /etc/os-release
export CMAKE_ARGS="-DCMAKE_BUILD_TYPE=Release -DABSL_PROPAGATE_CXX_STD=ON -DTINK_USE_SYSTEM_OPENSSL=ON"

if [ $ID == "ubuntu" ]
then

    if [ $VERSION_CODENAME == "focal" ]
    then
        apt install -y libssl-dev
        export CMAKE_ARGS="${CMAKE_ARGS} -DOPENSSL_USE_STATIC_LIBS=TRUE"
    elif [ $VERSION_CODENAME == "jammy" ]
    then
        apt install -y libssl-dev
        # export CMAKE_ARGS="${CMAKE_ARGS}"
    else
        echo "unsupported system $ID/$VERSION_CODENAME"
        exit 1
    fi

elif [ $ID == "arch" ]
then
    sudo pacman -S --needed openssl-1.1
    export CMAKE_ARGS="${CMAKE_ARGS} -DOPENSSL_INCLUDE_DIR=/usr/include/openssl-1.1 -DOPENSSL_LIBRARIES=/usr/lib/openssl-1.1"
else
    echo "unsupported system $ID"
    exit 1
fi

cmake $CMAKE_ARGS $1 
make loquat

echo 'done.'
