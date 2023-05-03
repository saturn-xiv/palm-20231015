#!/bin/bash

set -e

. /etc/os-release

export VCPKG_HOME=$HOME/local/vcpkg

build_package() {

    local -a packages=(
        "openssl"
        "boost-algorithm"
        "boost-asio[ssl]"
        "boost-date-time"
        "boost-detail"
        "boost-exception"
        "boost-filesystem"
        "boost-json"
        "boost-locale"
        "boost-log"
        "boost-math"
        "boost-program-options"
        "boost-property-tree"
        "boost-random"
        "boost-range"
        "boost-regex"
        "boost-system"
        "boost-test"
        "boost-thread"
        "boost-timer"
        "boost-uuid"

        # "libsodium"
        "liblzma"
        "sail[core,png]"

        "jwt-cpp"
        # "zeromq[core,draft]"
        # "cppzmq[draft]"
        "paho-mqttpp3[ssl]"
        # "amqpcpp" 
        "libevent"
        "librabbitmq"

        "cpr[ssl]"
        "aws-sdk-cpp[s3,sqs]"
        "cserialport"
        "libssh2[zlib]"
        # "libharu"
        "libgit2[core,pcre2,openssl,ssh]"
        "abseil[cxx17]"
        # "mailio" # boost asio openssl
        "gtest"
        
        "cppcodec"        
        "pugixml"
        "tomlplusplus"
        "yaml-cpp"
        "nlohmann-json[diagnostics]"
        "mstch"
        "inja"
        "cpp-httplib"
        "poco[core]" # ,pdf
        # ‘template<class _Arg, class _Result> struct std::unary_function’ is deprecated
        # "cgicc" 

        # "ocilib"
        "libpq[nls,openssl,zlib]"
        "libpqxx"
        "libmariadb[openssl,zlib]"
        "sqlite3[math,zlib]"        
        # "sqlitecpp"
        # "mongo-cxx-driver[boost]"
        "soci[boost,sqlite3,postgresql]" # mysql
        "redis-plus-plus[cxx17]"
        "leveldb[crc32c]"
        "minio-cpp"

        # CPP17
        # "libodb"
        # "libodb-boost"
        # "libodb-pgsql"
        # "libodb-sqlite"

        "fruit"
        "gflags"
        "glog"
        "gtest"
        "flatbuffers"
        "protobuf"
        "grpc"

        "spdlog"
        "catch2"
        "argparse"
        "magic-enum"
        "lua[cpp]"  
    )
    for p in "${packages[@]}"
    do        
        echo "build $p@$1 ..."
        # --only-downloads
        $VCPKG_HOME/vcpkg install --recurse --host-triplet=x64-linux --triplet=$1 $p
    done
}

cd $VCPKG_HOME
git checkout master
git pull
git checkout "2023.04.15"
# rm -rf installed packages buildtrees
$VCPKG_HOME/vcpkg upgrade --no-dry-run

declare -a triplets=(
    "x64-linux"
    "arm64-linux"
    # "riscv64-linux"
)
for t in "${triplets[@]}"
do
    build_package $t
done

echo 'done.'

exit 0
