#!/bin/bash

set -e

. /etc/os-release

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export BUILD_TIME=$(date -u -R)
export PACKAGE_NAME=palm-$UBUNTU_CODENAME-$GIT_VERSION
export TARGET_DIR=$PWD/tmp/$PACKAGE_NAME
export THRIFT_FLAGS="-DBUILD_TESTING=OFF -DBUILD_COMPILER=OFF -DWITH_OPENSSL=OFF -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF"
export VCPKG_HOME=$HOME/local/vcpkg

function build_loquat() {
    apt-get install -y g++-10 golang
    local target=$WORKSPACE/build/loquat-$UBUNTU_CODENAME-$1-$2
    mkdir -p $target
    cd $target
    CC=gcc-10 CXX=g++-10 cmake -S $WORKSPACE/loquat -DCMAKE_TOOLCHAIN_FILE=$HOME/local/vcpkg/scripts/buildsystems/vcpkg.cmake \
        -DABSL_PROPAGATE_CXX_STD=ON -DTINK_USE_SYSTEM_OPENSSL=OFF $THRIFT_FLAGS \
        -DCMAKE_BUILD_TYPE=$2    
    cd $target
    make -j $(nproc --ignore=2) loquat

    if [[ "$2" == "Release" ]]
    then
        cp -v $target/loquat $TARGET_DIR/bin/$1/
    fi
}

function build_babel() {
    apt-get install -y libglfw3-dev libboost-all-dev
    cd $WORKSPACE/babel/
    PKG_CONFIG_PATH=$HOME/.local/lib/pkgconfig make -j $(nproc --ignore=2)
    cp -v babel $TARGET_DIR/bin/$1/    
}

function build_coconut() {
    local target=$WORKSPACE/build/coconut-$UBUNTU_CODENAME-$2-$3
    mkdir -p $target
    cd $target
    CXX=$1 cmake -S $WORKSPACE/coconut -DCMAKE_BUILD_TYPE=$3    
    make -j $(nproc --ignore=2) coconut

    if [[ "$3" == "Release" ]]
    then
        cp -v $target/coconut $TARGET_DIR/bin/$2/
    fi
}

function build_fig() {
    local mailio_args="-DMAILIO_BUILD_DOCUMENTATION=OFF -DMAILIO_BUILD_EXAMPLES=OFF -DMAILIO_BUILD_SHARED_LIBRARY=OFF -DMAILIO_BUILD_TESTS=OFF"
    local casbin_args="-DCASBIN_BUILD_TEST=OFF -DCASBIN_BUILD_BENCHMARK=OFF -DCASBIN_BUILD_PYTHON_BINDINGS=OFF -DCASBIN_INSTALL=OFF"
    local target=$WORKSPACE/build/fig-$UBUNTU_CODENAME-$3-$4
    mkdir -p $target
    cd $target
    cmake -S $WORKSPACE/fig -DCMAKE_MAKE_PROGRAM=make -DCMAKE_BUILD_TYPE=$4 \
        -DVCPKG_HOST_TRIPLET=$1 -DVCPKG_TARGET_TRIPLET=$2 -DVCPKG_INSTALLED_DIR=$HOME/local/vcpkg/out \
        -DCMAKE_TOOLCHAIN_FILE=$HOME/local/vcpkg/scripts/buildsystems/vcpkg.cmake \
        -DVCPKG_CHAINLOAD_TOOLCHAIN_FILE=$WORKSPACE/toolchains/$3.cmake \
        $mailio_args $casbin_args $THRIFT_FLAGS -DBoost_NO_WARN_NEW_VERSIONS=1
        
    make -j $(nproc --ignore=2)

    if [[ "$4" == "Release" ]]
    then
        cd $target/apps
        cp -v aloe fig mint orchid $TARGET_DIR/bin/$3/
    fi
}

# -----------------------------------------------------------------------------

if [[ $ID != "ubuntu" ]]
then
    echo "unsupported system($PRETTY_NAME)"
    exit 1
fi

# -----------------------------------------------------------------------------

if [ -d $TARGET_DIR ]
then
    rm -r $TARGET_DIR
fi
mkdir -pv $TARGET_DIR/bin/{x86_64,aarch64,riscv64,armv7l}

# -----------------------------------------------------------------------------

build_coconut x86_64-linux-musl-g++ x86_64 Release
build_coconut aarch64-linux-musl-g++ aarch64 Release
build_coconut armv7l-linux-musleabihf-g++ armv7l Release
# build_coconut riscv64-linux-musl-g++ riscv64 Release

if [[ $(uname -p) == "aarch64" ]]
then
    build_loquat aarch64 Debug
    build_loquat aarch64 Release

    build_babel aarch64
fi

if [[ $(uname -p) == "x86_64" ]]
then
    build_loquat x86_64 Debug
    build_loquat x86_64 Release

    build_babel x86_64

    build_fig x64-linux x64-linux x86_64 Debug
    build_fig x64-linux x64-linux x86_64 Release
    build_fig x64-linux arm64-linux aarch64 Release
fi

# -----------------------------------------------------------------------------

echo "done($GIT_VERSION)."
exit 0
