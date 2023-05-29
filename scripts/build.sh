#!/bin/bash

set -e

. /etc/os-release

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export BUILD_TIME=$(date -u -R)
export PACKAGE_NAME=palm-$UBUNTU_CODENAME-$GIT_VERSION
export TARGET_DIR=$PWD/tmp/$PACKAGE_NAME
export THRIFT_FLAGS="-DBUILD_COMPILER=OFF -DWITH_OPENSSL=OFF -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF"
export VCPKG_HOME=$HOME/local/vcpkg

function build_loquat() {
    apt-get install -y g++-10
    local target=$WORKSPACE/build/loquat-$UBUNTU_CODENAME-$1-$2     
    CC=gcc-10 CXX=g++-10 cmake -B $target -S $WORKSPACE/loquat -DCMAKE_TOOLCHAIN_FILE=$HOME/local/vcpkg/scripts/buildsystems/vcpkg.cmake \
        -DABSL_PROPAGATE_CXX_STD=ON -DTINK_USE_SYSTEM_OPENSSL=OFF $THRIFT_FLAGS \
        -DCMAKE_BUILD_TYPE=$2
    # cmake --build $target -- -j $(nproc --ignore=2)
    cd $target
    make -j $(nproc --ignore=2) loquat

    if [[ "$2" == "Release" ]]
    then
        cp -v $target/loquat $TARGET_DIR/bin/$1/
    fi
}

function build_babel() {
    apt-get install -y libglfw3-dev    
    cd $WORKSPACE/babel/
    PKG_CONFIG_PATH=$HOME/.local/lib/pkgconfig make -j $(nproc --ignore=2)
    cp -v babel $TARGET_DIR/bin/$1/    
}

function build_coconut() {
    CXX=$1 
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

build_coconut x86_64-linux-musl-g++ x86_64
build_coconut aarch64-linux-musl-g++ aarch64
build_coconut armv7l-linux-musleabihf-g++ armv7l
build_coconut riscv64-linux-musl-g++ riscv64

if [[ $(uname -p) == "aarch64" ]]
then
    build_loquat aarch64 Debug
    build_loquat aarch64 Release

    build_babel aarch64
fi

if [[ $(uname -p) == "x86_64" ]]
then
    # build_loquat x86_64 Debug
    # build_loquat x86_64 Release

    build_babel x86_64
fi

# -----------------------------------------------------------------------------

echo "done($GIT_VERSION)."
exit 0
