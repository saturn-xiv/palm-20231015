#!/bin/bash

set -e

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)

show_usage() {
    echo "USAGE: $0 amd64|arm64"
}

build_package() {
    local root=$WORKSPACE/tmp/aloe-$1-$GIT_VERSION
    if [ -f $root.tar.xz ]
    then
        echo "$root.tar.xz already exists"
        exit 1
    fi

    if [ -d $root ]
    then
        rm -r $root
    fi
    mkdir -p $root
    
    cd $WORKSPACE/aloe/dashboard
    if [ ! -d node_modules ]
    then
        yarn install --silent
    fi
    yarn build
    cp -r build $root/dashboard

    cd $WORKSPACE
    if [ $1 == "amd64" ]
    then
        local target=x86_64-unknown-linux-musl
        cargo build --quiet --release --target $target -p aloe
        cp target/$target/release/aloe $root/
    elif [ $1 == "arm64" ]
    then
        local target=aarch64-unknown-linux-musl
        cargo build --quiet --release --target $target -p aloe
        cp target/$target/release/aloe $root/
    else
        show_usage
        exit 1
    fi
    
    cd $root
    XZ_OPT=-9 tar -cJf $root.tar.xz *
}



if [ "$#" -ne 1 ]
then
    show_usage
    exit 1
fi

build_package $1

echo "done($GIT_VERSION)."

exit 0
