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
    # -DOPENSSL_INCLUDE_DIR=/usr/include/openssl-1.1 -DOPENSSL_LIBRARIES=/usr/lib/openssl-1.1 \
    # CC=gcc-12 CXX=g++-12
    cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_C_COMPILER=gcc-12 -DCMAKE_CXX_COMPILER=g++-12 \
        -DABSL_PROPAGATE_CXX_STD=ON \
        -DTINK_USE_SYSTEM_OPENSSL=OFF \
        -DWITH_LIBEVENT=ON -DBUILD_COMPILER=OFF -DWITH_OPENSSL=ON -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF \
        ../..
    make
}

build_musa() {
    cd $WORKSPACE/musa
    gradle clean
    gradle build
}

build_lemon() {
    local target=$WORKSPACE/lemon/build/$1-arch
    mkdir -p $target
    cd $target
    cmake -DCMAKE_TOOLCHAIN_FILE=$WORKSPACE/toolchains/$1.cmake -DCMAKE_BUILD_TYPE=Release \
        -DABSL_ENABLE_INSTALL=ON -DABSL_PROPAGATE_CXX_STD=ON \
        -DgRPC_SSL_PROVIDER=module \
        -DgRPC_PROTOBUF_PROVIDER=module -DgRPC_PROTOBUF_PACKAGE_TYPE=module -DProtobuf_PROTOC_EXECUTABLE=$HOME/.local/bin/protoc \
        -DgRPC_BUILD_TESTS=OFF \
        ../..
    make
}

# -----------------------------------------------------------------------------

cargo build --release --target x86_64-unknown-linux-gnu

# declare -a musl_projects=(
#     "aloe"
#     "coconut"
#     "orchid"
# )
# for p in "${musl_projects[@]}"
# do
#     build_rust_musl x86_64 $p
#     build_rust_musl aarch64 $p
# done

build_loquat x86_64
build_lemon x86_64

build_musa

# -----------------------------------------------------------------------------
echo 'done.'
exit 0
