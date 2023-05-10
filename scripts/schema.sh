#!/bin/bash

set -e


export WORKSPACE=$PWD

build_pages() {
    echo "generate pages"
    cd $WORKSPACE
    local target=bamboo/src
    if [ -d $target ]
        then rm -r $target
    fi
    mkdir -p $target
    
    find themes -type f -name "*.cpsp" -exec cpspc -N -o $target "{}" \;
}

build_active_records() {
    echo "generate active records"
    cd $WORKSPACE/cactus
    arc mappers/*.xml
}

build_pages
build_active_records

echo 'done.'

exit 0
