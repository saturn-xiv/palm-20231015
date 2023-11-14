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
    local build_dir=$HOME/build/palm-$(lsb_release -cs)-Release
    cmake cmake -DCMAKE_BUILD_TYPE=Release -B $build_dir -S $SOURCE_DIR
    make -C $build_dir
}


declare -a profiles=(
    "aarch64"
    "x86_64"
)

for p in "${profile[@]}"
do
    build_backend $p
done

build_backend 

exit 0
