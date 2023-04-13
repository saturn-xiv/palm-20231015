#!/bin/bash

set -e

. /etc/os-release

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export TARGET_DIR=$PWD/tmp/palm-$GIT_VERSION


if [[ $UBUNTU_CODENAME == "jammy" ]]
then
    export GCC_VERSION=11
fi

if [[ $UBUNTU_CODENAME == "focal" ]]
then
    export GCC_VERSION=10
fi

apt-get -qq -y install libc6-dev libudev-dev libssl-dev \
        libpq5 libpq-dev libmysqlclient-dev libsqlite3-dev

mkdir -p $TARGET_DIR

cd $WORKSPACE/loquat/build/x86_64/
make loquat
cp loquat $TARGET_DIR/

cd $WORKSPACE/
# CC=gcc-$GCC_VERSION CXX=g++-$GCC_VERSION \
cargo build --release --target x86_64-unknown-linux-gnu
cd $WORKSPACE/target/x86_64-unknown-linux-gnu/release/
cp aloe coconut fig lemon orchid $TARGET_DIR/

cd $WORKSPACE/musa/
gradle clean
gradle build
find build/libs ! -name '*plain*' -type f -exec cp '{}' $TARGET_DIR/ \;

cd $WORKSPACE/tmp
XZ_OPT=-9 tar -cJf palm-$GIT_VERSION.tar.xz palm-$GIT_VERSION
md5sum palm-$GIT_VERSION.tar.xz

echo "done($GIT_VERSION)."
