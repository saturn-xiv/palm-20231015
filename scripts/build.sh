#!/bin/bash

set -e

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export TARGET=$WORKSPACE/tmp/$GIT_VERSION

build_ubuntu_backend() {
    echo "build $1..."

    apt -y install libc6-dev:$1 libudev-dev:$1 libssl-dev:$1 \
        libpq5:$1 libpq-dev:$1 libmysqlclient-dev:$1 libsqlite3-dev:$1

    local root=$2/usr/bin
    mkdir -p $root
    cd $WORKSPACE
    if [ "$1" = "amd64" ]
    then
        CC=gcc
        CXX=g++
        export CC CXX
        
        local target="x86_64-unknown-linux-gnu"
        cargo build --target $target --release
        cp target/$target/release/palm $root
    elif [ "$1" = "armhf" ]
    then
        PKG_CONFIG_ALLOW_CROSS=1
        PKG_CONFIG_DIR=
        PKG_CONFIG_LIBDIR=/usr/lib/arm-linux-gnueabihf/pkgconfig
        export PKG_CONFIG_ALLOW_CROSS PKG_CONFIG_DIR PKG_CONFIG_LIBDIR
        CC=arm-linux-gnueabihf-gcc 
        CXX=arm-linux-gnueabihf-g++
        export CC CXX 

        local target="armv7-unknown-linux-gnueabihf"
        cargo build --target $target --release
        cp target/$target/release/palm $root
    elif [ "$1" = "arm64" ]
    then
        PKG_CONFIG_ALLOW_CROSS=1
        PKG_CONFIG_DIR=
        PKG_CONFIG_LIBDIR=/usr/lib/aarch64-linux-gnu/pkgconfig
        export PKG_CONFIG_ALLOW_CROSS PKG_CONFIG_DIR PKG_CONFIG_LIBDIR
        CC=aarch64-linux-gnu-gcc 
        CXX=aarch64-linux-gnu-g++ 
        export CC CXX

        local target="aarch64-unknown-linux-gnu"
        cargo build --target $target --release
        cp target/$target/release/palm $root
    else
        echo "unknown arch $1"
        exit 1
    fi
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
    # FIXME https://github.com/webpack/webpack/issues/14532
    NODE_OPTIONS=--openssl-legacy-provider yarn build
}

build_deb(){
    local target=$TARGET/$1-target
    if [ -d $target ]
    then
        rm -rf $(dirname $target)
    fi
    mkdir -pv $target
    cp -r $WORKSPACE/debian $target/
    build_ubuntu_backend $1 $target

    mkdir -pv $target/usr/share/palm
    cp -av $WORKSPACE/dashboard/build $target/usr/share/palm/dashboard
    cp -av $WORKSPACE/assets $target/usr/share/palm/
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
        local t=$(dirname "$target/usr/share/palm/$p")
        mkdir -p $t
        cp -av $WORKSPACE/$p $t/
    done
    
    mkdir -pv $target/var/lib/palm
    mkdir -pv $target/lib/systemd/system/
    
    mkdir -pv $target/etc/palm
    cp -r $WORKSPACE/LICENSE $WORKSPACE/README.md $WORKSPACE/package.json $target/etc/palm/
    echo "$GIT_VERSION $(date -R)" > $target/etc/palm/VERSION

    cd $target
    dpkg-buildpackage -us -uc -b --host-arch $1
}

# -----------------------------------------------------------------------------

export OS_NAME=$(lsb_release -is)
export OS_CODE=$(lsb_release -cs)

build_dashboard

if [[ $OS_NAME == "Ubuntu" ]]
then    
    build_deb amd64
    build_deb arm64
    build_deb armhf
elif [[ $OS_NAME == "Arch" ]]
then
    cd $WORKSPACE
    cargo build --release
else
    echo "Unknowk os $OS_NAME"
    exit 1
fi


echo 'done.'
exit 0
