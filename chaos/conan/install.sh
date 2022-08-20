#!/bin/bash

set -e

. /etc/os-release
export WORKSPACE=$PWD

if [[ $ID == "ubuntu" ]]
then
    declare -a profiles=(
        "$VERSION_CODENAME/amd64"
        "$VERSION_CODENAME/arm64"
        "$VERSION_CODENAME/armhf"
    )
elif [[ $ID == "arch" ]]
then
    declare -a profiles=(
        "arch"
    )
else
    echo "Unknowk os $ID"
    exit 1
fi

for p in "${profiles[@]}"
do
    mkdir -pv $HOME/build/$p
    cd $HOME/build/$p
    conan install --build=missing --profile:build=default --profile:host=$WORKSPACE/conan/profiles/$p $WORKSPACE/conan
done    

echo 'done.'

exit 0