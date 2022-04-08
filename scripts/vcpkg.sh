#!/bin/bash

set -e

function build_package() {
    $HOME/local/vcpkg/vcpkg install --recurse --triplet=$1 $2
}

declare -a packages=(
    "boost-algorithm"
    "boost-asio[ssl]"
    "boost-chrono"
    "boost-crc"
    "boost-date-time"
    "boost-exception"
    "boost-format"
    "boost-json"
    "boost-locale[icu]"
    "boost-log"
    "boost-math"
    "boost-program-options"
    "boost-property-tree"
    "boost-sort"
    "boost-system"
    "boost-random"
    "boost-timer"
    "boost-uuid"
    "soci[boost,sqlite3,mysql,postgresql]"
    "mongo-cxx-driver[boost]"
    "hiredis[ssl]"
    "cpr[ssl]"
    "librabbitmq"
    "cppzmq"
    "paho-mqttpp3[ssl]"
    "cpp-httplib"
    "nlohmann-json"
    "expat"
    "yaml-cpp"
    "tomlplusplus"
    "cppcodec"
    "inja"
    "libgit2[openssl,ssh]"
    "libssh[openssl,zlib]"
    "fontconfig"
    "grpc"
)

declare -a triplets=(
    "x64-linux"
    "arm64-linux"
    "arm-linux"
)

. /etc/os-release

for p in "${packages[@]}"
do
    if [[ $ID == "ubuntu" ]]
    then
        for t in "${triplets[@]}"
        do
            build_package $t $p
        done        
    elif [[ $ID == "arch" ]]
    then
        build_package "x64-linux" $p
    else
        echo "Unknowk os $ID"
        exit 1
    fi
done

echo 'done.'
exit 0
