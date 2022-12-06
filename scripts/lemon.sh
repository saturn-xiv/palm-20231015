#!/bin/bash

set -e

export WORKSPACE=$PWD

function build_hinode() {
    local target=$PWD/assets/themes/hinode
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -p $target
    cd $WORKSPACE/lemon/src/themes/hinode/theme
    
    if [ ! -d node_modules ]
    then
        npm install
    fi
    npm run build
    cd public
    cp -r fonts img js main.*.css $target/
}

build_hinode

echo 'done'
