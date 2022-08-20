#!/bin/bash

set -e

. /etc/os-release

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export GCC_VERSION=10


build_on_ubuntu() {
    echo "build $1@$VERSION_CODENAME..."
    local target=$WORKSPACE/build/$VERSION_CODENAME-$1
    mkdir -pv $target
    cd $target
    conan install --build=missing --profile:build=default \
        --profile:host=$WORKSPACE/conan/profiles/$VERSION_CODENAME/$1 $WORKSPACE/conan
    cmake $WORKSPACE -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_TOOLCHAIN_FILE=$WORKSPACE/toolchains/$VERSION_CODENAME/$1.cmake
    make -j
}

build_on_arch() {
    echo "build $1@arch..."
    local target=$WORKSPACE/build/arch-$1
    mkdir -pv $target
    cd $target
    conan install --build=missing --profile:build=default \
        --profile:host=$WORKSPACE/conan/profiles/arch $WORKSPACE/conan
    cmake $WORKSPACE -DCMAKE_BUILD_TYPE=$1 \
        -DCMAKE_TOOLCHAIN_FILE=$WORKSPACE/toolchains/arch.cmake
    make -j
}

build_dashboard(){
    cd $WORKSPACE
    if [ ! -d node_modules ]
    then
        yarn install
    fi

    cd $WORKSPACE/dashboard
    if [ ! -d node_modules ]
    then
        yarn install
    fi    
    yarn build
}

build_tar(){
    local target=$WORKSPACE/tmp/palm-$GIT_VERSION/$1/target
    if [ -d $target ]
    then
        rm -rf $(dirname $target)
    fi
    
    mkdir -pv $target/bin
    cd $WORKSPACE/build/$1/bin/
    cp -av fig mint $target/bin/
    
    cp -av $WORKSPACE/dashboard/build $target/dashboard
    local -a packages=(
        "bootstrap/dist"
        "bulma/css"
        "marked/marked.min.js"
        "material-design-icons/iconfont"
        "d3/dist"
        "@fontsource/roboto"
        "moment/dist"
        "moment-timezone/builds/moment-timezone-with-data.min.js"
        "@popperjs/core/dist"
        "mdb-ui-kit/css"
        "mdb-ui-kit/js"
        "mdb-ui-kit/img"
    )
    for i in "${packages[@]}"
    do
        local p=node_modules/$i
        local t=$(dirname "$target/$p")
        mkdir -p $t
        cp -av $WORKSPACE/$p $t/
    done    
   
    cd $WORKSPACE
    cp -av LICENSE README.md package.json \
        views liquibase \
        $target/    
    echo "$GIT_VERSION $(date -R)" > $target/VERSION

    cd $target
    tar jcvf ../palm-$GIT_VERSION.tar.xz *
}

# -----------------------------------------------------------------------------

# build_dashboard

if [[ $ID == "ubuntu" ]]
then
    declare -a flags=(
        "amd64"
        "arm64"
        "armhf"
    )

    for f in "${flags[@]}"
    do
        build_on_ubuntu $f Release
        build_tar $VERSION_CODENAME-$f
    done    
elif [[ $ID == "arch" ]]
then
    declare -a flags=(
        "Debug"
        "Release"
    )

    for f in "${flags[@]}"
    do
        build_on_arch $f
    done
    build_tar arch-Release
else
    echo "Unknowk os $ID"
    exit 1
fi


echo "done($GIT_VERSION)."
exit 0
