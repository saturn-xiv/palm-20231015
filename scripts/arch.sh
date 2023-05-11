#!/bin/bash

set -e

export WORKSPACE=$PWD

build_rust_musl() {
    cd $WORKSPACE
        
    if [[ $1 == "aarch64" ]]
    then
        # https://github.com/rust-lang/rust/issues/89626
        CC=$1-linux-musl-gcc CXX=$1-linux-musl-g++ CFLAGS="-mno-outline-atomics" \
            cargo build --release --target $1-unknown-linux-musl -p $2        
        return
    fi
    CC=$1-linux-musl-gcc CXX=$1-linux-musl-g++ \
        cargo build --release --target $1-unknown-linux-musl -p $2
}

build_loquat() {
    # sudo pacman -S --needed go libunwind boost
    local target=$WORKSPACE/loquat/build/$1-arch

    mkdir -p $target
    cd $target
    cmake -DCMAKE_BUILD_TYPE=Release \
        -DABSL_PROPAGATE_CXX_STD=ON \
        -DTINK_USE_SYSTEM_OPENSSL=OFF \
        -DEVENT__LIBRARY_TYPE=STATIC -DEVENT__DISABLE_OPENSSL=ON \
        -DWITH_LIBEVENT=ON -DBUILD_COMPILER=OFF -DWITH_OPENSSL=OFF -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF \
        ../..
    make
}

build_musa() {
    cd $WORKSPACE/musa
    gradle clean
    gradle build
}

# -----------------------------------------------------------------------------

cargo build --release --target x86_64-unknown-linux-gnu

declare -a musl_projects=(
    "aloe"
    "coconut"
    "orchid"
)
for p in "${musl_projects[@]}"
do
    build_rust_musl x86_64 $p
    build_rust_musl aarch64 $p
done

build_loquat x86_64

build_musa

# -----------------------------------------------------------------------------
echo 'done.'
exit 0
