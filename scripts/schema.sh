#!/bin/bash

set -e


export WORKSPACE=$PWD

build_cpsp() {
    echo "generate page templates"
    cd $WORKSPACE
    local target=bamboo/src
    if [ -d $target ]
        then rm -r $target
    fi
    mkdir -p $target
    
    find themes -type f -name "*.cpsp" -exec cpspc -N -o $target "{}" \;
}


build_cpsp  

echo 'done.'

exit 0
