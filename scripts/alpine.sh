#!/bin/bash

set -e

# ---------------------------------
export WORKSPACE=$PWD
export VERSION=$(git describe --tags --always --dirty --first-parent)
export TARGET=$WORKSPACE/tmp/fig-$VERSION

build_backend() {
    export PKG_CONFIG_ALL_STATIC=1

    local -a features=(
        "postgresql"
        "mysql"
        "sqlite"
    )

    local target="x86_64-unknown-linux-musl"
    cargo build --target $target --release --package fig
    cp -av $WORKSPACE/target/$target/release/fig $TARGET/
    strip -s $TARGET/fig

    for f in "${features[@]}"
    do
        cargo build --target $target --release --features $f --package nut
        cp -av $WORKSPACE/target/$target/release/nut $TARGET/nut-${f}
        strip -s $TARGET/nut-${f}
    done
}

build_frontend(){
    if [ ! -d $WORKSPACE/node_modules ]
    then
        cd $WORKSPACE
        yarn install
    fi

    if [ ! -d $WORKSPACE/dashboard/node_modules ]
    then
        cd $WORKSPACE/dashboard
        yarn install
    fi
    cd $WORKSPACE/dashboard
    yarn build

    mkdir -pv $TARGET/usr/share/fig
    cp -av $WORKSPACE/node_modules $TARGET/
    cp -av $WORKSPACE/dashboard/build $TARGET/dashboard
}

# ---------------------------------

build_backend
build_frontend

echo "Done($TARGET)."

exit 0
