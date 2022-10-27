#!/bin/bash

set -e

. /etc/os-release

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export TARGET=$WORKSPACE/tmp/$GIT_VERSION-$VERSION_CODENAME

build_ubuntu_backend() {
    echo "build $1..."

    apt -y install libc6-dev:$1 libudev-dev:$1 libssl-dev:$1 \
        libpq5:$1 libpq-dev:$1 libmysqlclient-dev:$1 libsqlite3-dev:$1

    local root=$2/usr/bin
    mkdir -p $root
    cd $WORKSPACE
    if [ "$1" = "amd64" ]
    then
        local CC=gcc
        local CXX=g++

        # FIXME: local PQ_LIB_STATIC=1
        local PKG_CONFIG_ALL_STATIC=1
        
        local target="x86_64-unknown-linux-gnu"
        cargo clean --target $target --release -p palm
        cargo build --target $target --release

        cd target/$target/release
        cp coco fig $root
    elif [ "$1" = "armhf" ]
    then
        local PKG_CONFIG_ALLOW_CROSS=1
        local PKG_CONFIG_ALL_STATIC=1
        local PKG_CONFIG_DIR=
        local PKG_CONFIG_LIBDIR=/usr/lib/arm-linux-gnueabihf/pkgconfig

        local CC=arm-linux-gnueabihf-gcc
        local CXX=arm-linux-gnueabihf-g++

        local HOST_CC=gcc

        local target="armv7-unknown-linux-gnueabihf"
        cargo clean --target $target --release -p palm
        cargo build --target $target --release

        cd target/$target/release
        cp coco fig $root        
    elif [ "$1" = "arm64" ]
    then
        local PKG_CONFIG_ALLOW_CROSS=1
        local PKG_CONFIG_ALL_STATIC=1
        local PKG_CONFIG_DIR=
        local PKG_CONFIG_LIBDIR=/usr/lib/aarch64-linux-gnu/pkgconfig
        
        local CC=aarch64-linux-gnu-gcc 
        local CXX=aarch64-linux-gnu-g++ 
        
        local HOST_CC=gcc        

        local target="aarch64-unknown-linux-gnu"
        cargo clean --target $target --release -p palm
        cargo build --target $target --release
        
        cd target/$target/release
        cp coco fig $root
    else
        echo "unknown arch $1"
        exit 1
    fi
}

build_dashboard() {
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

build_deb() {
    local target=$TARGET/$1-target
    if [ -d $target ]
    then
        rm -rf $(dirname $target)
    fi
    mkdir -p $target
    cp -r $WORKSPACE/debian $target/
    build_ubuntu_backend $1 $target

    mkdir -p $target/usr/share/palm
    cp -a $WORKSPACE/dashboard/dist $target/usr/share/palm/dashboard
    cp -a $WORKSPACE/assets $WORKSPACE/db $WORKSPACE/palm/protocols $target/usr/share/palm/
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
        "qrcodejs/qrcode.min.js"
        "@fortawesome/fontawesome-free/js"
        "@fortawesome/fontawesome-free/css"
        "@fortawesome/fontawesome-free/svgs"
        "@fortawesome/fontawesome-free/webfonts"
        "@fortawesome/fontawesome-free/sprites"
        "famfamfam-flags/dist"
        "famfamfam-silk/dist"
        "famfamfam-mini/dist"
    )
    for i in "${packages[@]}"
    do
        local p=node_modules/$i
        local t=$(dirname "$target/usr/share/palm/$p")
        mkdir -p $t
        cp -a $WORKSPACE/$p $t/
    done
    
    mkdir -p $target/var/lib/palm
    mkdir -p $target/lib/systemd/system/
    
    mkdir -p $target/etc/palm
    cp -r $WORKSPACE/LICENSE $WORKSPACE/README.md \
        $WORKSPACE/package.json $WORKSPACE/docker/jammy/etc/envoy.yaml \
        $target/etc/palm/
    echo "$GIT_VERSION $(date -R)" > $target/etc/palm/VERSION

    cd $target
    dpkg-buildpackage -us -uc -b --host-arch $1
}

# -----------------------------------------------------------------------------

build_dashboard

if [[ $ID == "ubuntu" ]]
then
    apt update

    build_deb amd64
    build_deb arm64
    build_deb armhf
elif [[ $ID == "arch" ]]
then
    cd $WORKSPACE
    cargo clean --target x86_64-unknown-linux-gnu --release -p palm
    cargo build --target x86_64-unknown-linux-gnu --release
elif [[ $ID == "alpine" ]]
then
    cd $WORKSPACE    
    cargo clean --target x86_64-unknown-linux-musl --release -p palm
    cargo build --target x86_64-unknown-linux-musl --release
else
    echo "Unknown os $ID"
    exit 1
fi


echo "Done($TARGET)."
exit 0
