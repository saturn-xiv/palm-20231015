#!/bin/bash

set -e

function build_flatbuffers() {
    # https://google.github.io/flatbuffers/flatbuffers_guide_tutorial.html
    if [ -L $HOME/.local/bin/flatc ]
    then
        echo 'already exists!'
        return
    fi
    if [ -d $HOME/downloads/flatbuffers ]
    then
        cd $HOME/downloads/flatbuffers
        git checkout master
        git pull
        echo "switch flatbuffers to $1"
        git checkout $1       
    else
        git clone -b $1 https://github.com/google/flatbuffers.git $HOME/downloads/flatbuffers
    fi   

    if [ -d $HOME/build/flatbuffers ]
    then
        rm -r $HOME/build/flatbuffers
    fi
    mkdir -pv $HOME/build/flatbuffers
    cd $HOME/build/flatbuffers
    cmake -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=$HOME/.local $HOME/downloads/flatbuffers
    make -j
    make install
}


if [ "$#" -ne 1 ]
then
    echo "USAGE: $0 FLATBUFFER_VERSION"
    exit 1
fi

build_flatbuffers $1

echo "Done($1)."

exit 0
