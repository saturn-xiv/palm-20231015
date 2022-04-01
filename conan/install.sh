#!/bin/bash

set -e

. /etc/os-release
export WORKSPACE=$PWD

if [[ $ID == "ubuntu" ]]
then
    declare -a profiles=(
        "libstdc++/amd64"
        "libstdc++/arm64"
        "libstdc++/armhf"
    )
elif [[ $id == "arch" ]]
then
    declare -a profiles=(
        "libstdc++/arch"
        "libc++/arch"
    )
else
    echo "Unknowk os $ID"
    exit 1
fi

for p in "${profiles[@]}"
do
    mkdir -pv $HOME/build/$p
    cd $HOME/build/$p
    conan install --build=missing --profile:build=default --profile:host=$WORKSPACE/conan/profiles/$p $WORKSPACE
done    

echo 'done.'

exit 0
