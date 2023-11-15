#!/bin/bash

set -e

export SOURCE_DIR=$PWD

function build() {
    local build_dir=$HOME/build/palm-coconut-$1-Release
    if [ ! -d $build_dir ]
    then
        mkdir -p $build_dir
    fi
    CC=$1-gcc CXX=$1-g++ cmake -DCMAKE_BUILD_TYPE=Release -B $build_dir -S $SOURCE_DIR
    make -C $build_dir
}


declare -a archs=(
    "x86_64-linux-musl"
    # "riscv64-linux-musl"
    "aarch64-linux-musl"
    "armv7l-linux-musleabihf"
)

for a in "${archs[@]}"
do
    build $a
done


echo 'done'
exit 0
