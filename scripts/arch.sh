#!/bin/bash

set -e

. /etc/os-release

export WORKSPACE=$PWD
export THRIFT_FLAGS="-DBUILD_TESTING=OFF -DBUILD_COMPILER=OFF -DWITH_OPENSSL=OFF -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF"
export VCPKG_HOME=$HOME/local/vcpkg

function build_loquat() {    
    local target=$WORKSPACE/build/loquat-$ID-$1
    mkdir -p $target
    cd $target
    cmake -S $WORKSPACE/loquat -DCMAKE_TOOLCHAIN_FILE=$HOME/local/vcpkg/scripts/buildsystems/vcpkg.cmake \
        -DABSL_PROPAGATE_CXX_STD=ON -DTINK_USE_SYSTEM_OPENSSL=OFF $THRIFT_FLAGS \
        -DCMAKE_BUILD_TYPE=$1
    cd $target
    make -j $(nproc --ignore=2) loquat
}

function build_babel() {    
    cd $WORKSPACE/babel/
    PKG_CONFIG_PATH=$HOME/.local/lib/pkgconfig make -j $(nproc --ignore=2)
}

function build_coconut() {
    local target=$WORKSPACE/build/coconut-$ID-$1
    mkdir -p $target
    cd $target
    cmake -S $WORKSPACE/coconut -DCMAKE_BUILD_TYPE=$1
    make -j $(nproc --ignore=2) coconut
}

function build_fig() {
    local mailio_args="-DMAILIO_BUILD_DOCUMENTATION=OFF -DMAILIO_BUILD_EXAMPLES=OFF -DMAILIO_BUILD_SHARED_LIBRARY=OFF -DMAILIO_BUILD_TESTS=OFF"
    local casbin_args="-DCASBIN_BUILD_TEST=OFF -DCASBIN_BUILD_BENCHMARK=OFF -DCASBIN_BUILD_PYTHON_BINDINGS=OFF -DCASBIN_INSTALL=OFF"
    local target=$WORKSPACE/build/fig-$ID-$1
    mkdir -p $target
    cd $target
    cmake -S $WORKSPACE/fig -DCMAKE_MAKE_PROGRAM=make -DCMAKE_BUILD_TYPE=$1 \
        -DVCPKG_HOST_TRIPLET=x64-linux -DVCPKG_TARGET_TRIPLET=x64-linux -DVCPKG_INSTALLED_DIR=$HOME/local/vcpkg/out \
        -DCMAKE_TOOLCHAIN_FILE=$HOME/local/vcpkg/scripts/buildsystems/vcpkg.cmake \
        -DVCPKG_CHAINLOAD_TOOLCHAIN_FILE=$WORKSPACE/toolchains/x86_64.cmake \
        $mailio_args $casbin_args $THRIFT_FLAGS -DBoost_NO_WARN_NEW_VERSIONS=1
        
    make -j $(nproc --ignore=2)
}

# -----------------------------------------------------------------------------

# if [[ $ID != "arch" ]]
# then
#     echo "unsupported system($PRETTY_NAME)"
#     exit 1
# fi

# -----------------------------------------------------------------------------

build_coconut Debug
build_loquat Debug
build_babel
build_fig Debug

# -----------------------------------------------------------------------------

echo "done."
exit 0
