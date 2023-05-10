#!/bin/bash

set -e

. /etc/os-release

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export PACKAGE_NAME=palm-$UBUNTU_CODENAME-$GIT_VERSION
export TARGET_DIR=$WORKSPACE/tmp/$PACKAGE_NAME

# -----------------------------------------------------------------------------

build_musl() {
    local target=$WORKSPACE/build/$1-$4-$3
    mkdir -p $target
    cd $target
    CXX=$2-g++ cmake -DCMAKE_BUILD_TYPE=$3 $WORKSPACE/$1
    make -j $(nproc --ignore=2)

    if [[ $3 == "Release" ]]
    then
        cp -v $1 $TARGET_DIR/bin/$4/
    fi
}

build_gnu() {
    apt-get install -y libssl-dev:$1 libsqlite3-dev:$1 libmysqlclient-dev:$1 \
        libpq-dev:$1 postgresql-server-dev-all:$1
    local target=$WORKSPACE/build/palm-$UBUNTU_CODENAME-$2-$3    
    mkdir -p $target
    cd $target
    
    cmake $WORKSPACE -DPostgreSQL_ADDITIONAL_VERSIONS=14 \
        -DCMAKE_BUILD_TYPE=$3 -DCMAKE_TOOLCHAIN_FILE=$WORKSPACE/toolchains/$2.cmake
    make -j $(nproc --ignore=2)

    if [[ $2 == "Release" ]]
    then
        cd apps
        cp -v aloe fig lemon mint $TARGET_DIR/bin/$2/
    fi
}


# -----------------------------------------------------------------------------

if [ -d $TARGET_DIR ]
then
    rm -r $TARGET_DIR
fi
mkdir -p $TARGET_DIR/bin
cd $TARGET_DIR/bin
mkdir x86_64 aarch64 riscv64 armv7l

build_gnu amd64 x86_64 Debug 
# build_gnu x86_64 Release
# build_gnu aarch64 Release

# build_musl coconut x86_64-linux-musl Debug x86_64
# build_musl coconut x86_64-linux-musl Release x86_64


# -----------------------------------------------------------------------------

cd $WORKSPACE/tmp
XZ_OPT=-9 tar -cJf $PACKAGE_NAME.tar.xz $PACKAGE_NAME
md5sum $PACKAGE_NAME.tar.xz

echo "done($GIT_VERSION)."
exit 0
