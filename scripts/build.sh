#!/bin/bash

set -e

. /etc/os-release

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export GCC_VERSION=10

build_backend_by_conan() {
    echo "build $1@$2..."
    mkdir -pv $WORKSPACE/build/$1-$2
    cd $WORKSPACE/build/$1-$2
    conan install --build=missing --profile:build=default \
        --profile:host=$WORKSPACE/conan/profiles/$1 $WORKSPACE
    cmake $WORKSPACE -DCMAKE_BUILD_TYPE=$2 \
        -DCASBIN_BUILD_TEST=OFF -DCASBIN_BUILD_BENCHMARK=OFF \
        -DCASBIN_BUILD_BINDINGS=OFF -DCASBIN_BUILD_PYTHON_BINDINGS=OFF \
        -DCMAKE_TOOLCHAIN_FILE=$WORKSPACE/toolchains/$1.cmake
    make -j
}

build_backend() {
    echo "build $1@$2..."
    if [[ $ID == "ubuntu" ]]
    then
        apt install -y libssl-dev:$1 libboost-all-dev:$1 libcurl-dev:$1 \
            libpq-dev:$1 libmysqlclient-dev:$1 libsqlite3-dev:$1
    fi
    mkdir -pv $WORKSPACE/build/$1-$2
    cd $WORKSPACE/build/$1-$2
    cmake $WORKSPACE -DCMAKE_BUILD_TYPE=$2 \
        -DCASBIN_BUILD_TEST=OFF -DCASBIN_BUILD_BENCHMARK=OFF \
        -DCASBIN_BUILD_BINDINGS=OFF -DCASBIN_BUILD_PYTHON_BINDINGS=OFF \
        -DSOCI_SHARED=OFF -DSOCI_TESTS=OFF \
        -DWITH_BOOST=ON -DWITH_MYSQL=ON -DWITH_MYSQL=ON -DWITH_SQLITE3=ON \
        -DProtobuf_PROTOC_EXECUTABLE=$HOME/.local/bin/protoc \
        -DgRPC_SSL_PROVIDER=package -DgRPC_ZLIB_PROVIDER=package \
        -DgRPC_PROTOBUF_PROVIDER=package -DgRPC_PROTOBUF_PACKAGE_TYPE=module \
        -DgRPC_BUILD_TESTS=OFF -DgRPC_BUILD_TESTS=OFF \
        -DCMAKE_TOOLCHAIN_FILE=$WORKSPACE/toolchains/$1.cmake
    make -j
}
build_dashboard(){
    cd $WORKSPACE
    if [ ! -d node_modules ]
    then
        yarn install
    fi
    cd $WORKSPACE/dashboard
    if [ ! -d node_modules ]
    then
        yarn install
    fi
    
    yarn build
}

build_deb(){
    local target=$WORKSPACE/tmp/palm-$1-Release-$GIT_VERSION/target
    if [ -d $target ]
    then
        rm -rf $(dirname $target)
    fi
    mkdir -pv $target
    cp -r $WORKSPACE/debian $target/

    mkdir -pv $target/usr/bin
    cd $WORKSPACE/build/$1-Release/apps/
    cp -av fig mint $target/usr/bin/

    mkdir -pv $target/usr/share/palm
    cp -av $WORKSPACE/dashboard/dist \
        $WORKSPACE/db \
        $WORKSPACE/liquibase \
        $target/usr/share/palm/dashboard
    local -a packages=(
        "bootstrap/dist"
        "bulma/css"
        "admin-lte/dist"
        "marked/marked.min.js"
        "material-design-icons/iconfont"
        "moment/dist"
        "moment-timezone/builds/moment-timezone-with-data.min.js"
        "@popperjs/core/dist"
    )
    for i in "${packages[@]}"
    do
        local p=node_modules/$i
        local t=$(dirname "$target/usr/share/palm/$p")
        mkdir -p $t
        cp -av $WORKSPACE/$p $t/
    done
    
    mkdir -pv $target/var/lib/palm
    mkdir -pv $target/lib/systemd/system/
    
    mkdir -pv $target/etc/palm
    cp -r $WORKSPACE/LICENSE $WORKSPACE/README.md $WORKSPACE/package.json $target/etc/palm/
    echo "$GIT_VERSION $(date -R)" > $target/etc/palm/VERSION

    if [ "$1" = "armhf" ]
    then
        CC=arm-linux-gnueabihf-gcc-$GCC_VERSION
        CXX=arm-linux-gnueabihf-g++-$GCC_VERSION
        export CC CXX
    elif [ "$1" = "arm64" ]
    then
        CC=aarch64-linux-gnu-gcc-$GCC_VERSION
        CXX=aarch64-linux-gnu-g++-$GCC_VERSION
        export CC CXX
    elif [ "$1" = "amd64" ]
    then
        CC=gcc-$GCC_VERSION
        CXX=g++-$GCC_VERSION
        export CC CXX
    else
        echo "unknown arch $1"
        return 1
    fi
    
    cd $target
    dpkg-buildpackage -us -uc -b --host-arch $1
}

# -----------------------------------------------------------------------------

# build_dashboard

if [[ $ID == "ubuntu" ]]
then
    build_backend amd64 Release
    build_deb amd64
    
    build_backend arm64 Release
    build_deb arm64
    
    build_backend armhf Release
    build_deb armhf
    
elif [[ $ID == "arch" ]]
then
    build_backend arch Debug
    build_backend arch Release
else
    echo "Unknowk os $ID"
    exit 1
fi


echo 'done.'
exit 0
