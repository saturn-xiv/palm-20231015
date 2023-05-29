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

build_loquat() {    
    local target=$WORKSPACE/build/loquat-$UBUNTU_CODENAME-$1-$2     
    cmake -B $target -S $WORKSPACE/loquat -DCMAKE_TOOLCHAIN_FILE=$HOME/local/vcpkg/scripts/buildsystems/vcpkg.cmake \
        -DABSL_PROPAGATE_CXX_STD=ON -DTINK_USE_SYSTEM_OPENSSL=OFF $THRIFT_FLAGS \
        -DCMAKE_BUILD_TYPE=$2
    cmake --build $target -- -j $(nproc --ignore=2)

    if [[ "$2" == "Release" ]]
    then
        cp -v $target/loquat $TARGET_DIR/bin/$1/
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

if [[ $(uname -p) == "aarch64" ]]
then
    build_loquat aarch64 Debug
    build_loquat aarch64 Release
fi

if [[ $(uname -p) == "x86_64" ]]
then
    build_loquat x86_64 Debug
    build_loquat x86_64 Release
fi

# -----------------------------------------------------------------------------

echo 'done.'
exit 0
