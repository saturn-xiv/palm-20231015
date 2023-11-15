#!/bin/bash

set -e

export SOURCE_DIR=$PWD

function build_dashboard() {
    cd $SOURCE_DIR/dashboard
    if [ -d build ]
    then
        rm -r build
    fi
    npm run build
}

function build_backend() {
    local build_dir=$HOME/build/palm-$(lsb_release -cs)-$1-Release
    
    local mailio_args="-DMAILIO_BUILD_DOCUMENTATION=OFF -DMAILIO_BUILD_EXAMPLES=OFF -DMAILIO_BUILD_SHARED_LIBRARY=OFF -DMAILIO_BUILD_TESTS=OFF"
    local casbin_args="-DCASBIN_BUILD_TEST=OFF -DCASBIN_BUILD_BENCHMARK=OFF -DCASBIN_BUILD_PYTHON_BINDINGS=OFF -DCASBIN_INSTALL=OFF"
    local thrift_args="-DBUILD_TESTING=OFF -DBUILD_COMPILER=OFF -DWITH_OPENSSL=ON -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF"
    
    cmake -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++ -DCMAKE_MAKE_PROGRAM=make -DCMAKE_BUILD_TYPE=Release -B $build_dir -S $SOURCE_DIR \
        -DVCPKG_HOST_TRIPLET=x64-linux-release -DVCPKG_TARGET_TRIPLET=$1-linux-release \
        -DCMAKE_TOOLCHAIN_FILE=$SOURCE_DIR/vcpkg/scripts/buildsystems/vcpkg.cmake \
        -DVCPKG_CHAINLOAD_TOOLCHAIN_FILE=$SOURCE_DIR/toolchains/$1.cmake \
        $mailio_args $casbin_args $thrift_args -DBoost_NO_WARN_NEW_VERSIONS=1
        
    make -j $(nproc --ignore=2) -C $build_dir

}


declare -a triplets=(
    "x64"
    # "arm64"
    # "riscv64"
)

for t in "${triplets[@]}"
do
    build_backend $t
done

# build_dashboard

exit 0
