#!/bin/bash

set -e

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export TARGET_DIR=$PWD/tmp/palm-$GIT_VERSION

build_rust_amd64_gnu() {
    cd $WORKSPACE
    cargo build --release --target x86_64-unknown-linux-gnu -p $1
    cp $WORKSPACE/target/x86_64-unknown-linux-gnu/release/$1 $TARGET_DIR/bin/amd64/
}

build_rust_amd64_musl() {
    cd $WORKSPACE
    CC=x86_64-linux-musl-gcc CXX=x86_64-linux-musl-g++ \
        cargo build --release --target x86_64-unknown-linux-musl -p $1
    cp $WORKSPACE/target/x86_64-unknown-linux-musl/release/$1 $TARGET_DIR/bin/amd64/
}

build_loquat_amd64() {
    apt install -y g++-10 golang libunwind-dev libboost-all-dev

    mkdir -p $WORKSPACE/loquat/build/amd64
    cd $WORKSPACE/loquat/build/amd64
    CC=gcc-10 CXX=g++-10 cmake -DCMAKE_BUILD_TYPE=Release \
        -DABSL_PROPAGATE_CXX_STD=ON -DTINK_USE_SYSTEM_OPENSSL=OFF \
        -DBUILD_COMPILER=OFF -DWITH_OPENSSL=OFF -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF \
        ../..
    make -j loquat
    cp loquat $TARGET_DIR/bin/amd64/
}

if [ -d $TARGET_DIR ]
then
    rm -r $TARGET_DIR
fi
mkdir -p $TARGET_DIR/bin/amd64 $TARGET_DIR/bin/arm64

cd $WORKSPACE
cp -r palm/db palm/protocols \
    README.md LICENSE package.json $TARGET_DIR/
cp -r aloe/dashboard/build $TARGET_DIR/aloe
cp -r fig/dashboard/build $TARGET_DIR/fig

build_rust_amd64_gnu fig
build_loquat_amd64

declare -a musl_projects=(
    "aloe"
    "coconut"
    "orchid"
)

for p in "${musl_projects[@]}"
do
    build_rust_amd64_musl $p
done

cd $WORKSPACE/tmp
XZ_OPT=-9 tar jcf palm-$GIT_VERSION.tar.xz palm-$GIT_VERSION
md5sum palm-$GIT_VERSION.tar.xz

echo "done($GIT_VERSION)."
exit 0
