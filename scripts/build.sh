#!/bin/bash

set -e

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export TARGET=$WORKSPACE/palm-$GIT_VERSION

function build_metasequoia() {
    cd $WORKSPACE/metasequoia        
    go build -ldflags "-s -w" -o metasequoia

    mkdir -p $TARGET/metasequoia/x86_64
    mv metasequoia $TARGET/metasequoia/x86_64/
}

function build_morus() {
    cd $WORKSPACE/morus
    if [ ! -d node_modules ]
    then
        npm install
    fi
    npx webpack --mode=production    
    cp -r dist $TARGET/morus
    cp README.md config.orig.json $TARGET/morus/
}

function build_musa() {
    cd $WORKSPACE/musa
    mvn clean
    mvn package -Dmaven.test.skip=true

    mkdir -p $TARGET/musa
    cp -r README.md application-orig.properties com mybatis-config.xml wechatpay-orig\
        target/musa-*.jar $TARGET/musa/
}

function build_gardenia() {
    cd $WORKSPACE/gardenia
    mvn clean
    mvn package

    mkdir -p $TARGET/gardenia
    cp -r README.md application-orig.properties \
        target/gardenia-*.jar $TARGET/gardenia/
}

function build_lily() {
    cd $WORKSPACE/lily
    mkdir -p $TARGET/lily
    cp -r README.md __main__.py palm $TARGET/lily/
}

build_lily
build_morus
build_musa
build_gardenia
build_metasequoia

echo "done."
exit 0
