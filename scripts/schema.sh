#!/bin/bash

set -e


export WORKSPACE=$PWD

build_cpsp() {
    local target=$WORKSPACE/bamboo/src
    if [ -d $target ]
        then rm -r $target
    fi
    mkdir -p $target
    # cpspc $1
    find $WORKSPACE/themes -type f -name "*.cpsp" -exec cpspc -o $target "{}" \;
}


build_cpsp  

echo 'done.'

exit 0
