#!/bin/bash

set -e

. /etc/os-release

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)

build_dashboard() {
    cd $WORKSPACE/$1/dashboard
    if [ ! -d node_modules ]
    then
        yarn install --silent
    fi
    yarn build
}

build_arch_backend() {
    echo "build archlinux..."

    yes | sudo pacman -S --needed postgresql-libs mariadb-libs
    cd $WORKSPACE
    local target="x86_64-unknown-linux-gnu"
    cargo clean --quiet --release --target $target -p palm
    cargo build --quiet --release --target $target
}

build_ubuntu_backend() {
    echo "build $1@ubuntu..."

    apt -qq -y install libc6-dev:$1 libudev-dev:$1 libssl-dev:$1 \
        libpq5:$1 libpq-dev:$1 libmysqlclient-dev:$1 libsqlite3-dev:$1
    
    cd $WORKSPACE

    if [ "$1" = "amd64" ]
    then
        local CC=gcc
        local CXX=g++
        
        local PKG_CONFIG_ALL_STATIC=1
        
        local target="x86_64-unknown-linux-gnu"
        cargo clean --quiet --release --target $target -p palm
        cargo build --quiet --release --target $target
    elif [ "$1" = "armhf" ]
    then
        local CC=arm-linux-gnueabihf-gcc
        local CXX=arm-linux-gnueabihf-g++
        local HOST_CC=gcc

        local PKG_CONFIG_ALLOW_CROSS=1
        local PKG_CONFIG_ALL_STATIC=1
        local PKG_CONFIG_DIR=
        local PKG_CONFIG_LIBDIR=/usr/lib/arm-linux-gnueabihf/pkgconfig

        local target="armv7-unknown-linux-gnueabihf"
        cargo clean --quiet --release --target $target -p palm
        cargo build --quiet --release --target $target

    elif [ "$1" = "arm64" ]
    then
        local CC=aarch64-linux-gnu-gcc
        local CXX=aarch64-linux-gnu-g++
        local HOST_CC=gcc

        local PKG_CONFIG_ALLOW_CROSS=1
        local PKG_CONFIG_ALL_STATIC=1
        local PKG_CONFIG_DIR=
        local PKG_CONFIG_LIBDIR=/usr/lib/aarch64-linux-gnu/pkgconfig
        
        local target="aarch64-unknown-linux-gnu"
        cargo clean --quiet --release --target $target -p palm
        cargo build --quiet --release --target $target
        
    else
        echo "unknown arch $1"
        exit 1
    fi
}

copy_backends() {
    if [ "$1" = "amd64" ]
    then
        cd $WORKSPACE/target/x86_64-unknown-linux-gnu/release        
    elif [ "$1" = "arm64" ]
    then
        cd $WORKSPACE/target/aarch64-linux-gnu/release
    elif [ "$1" = "armhf" ]
    then
        cd $WORKSPACE/target/armv7-unknown-linux-gnueabihf/release
    else
        echo "unsupport arch $1"
        exit 1
    fi
    cp fig aloe $2/
}

copy_frontends() {
    local -a projects=(
        "fig"
        "aloe"
    )
    for i in "${projects[@]}"
    do
        cp -r $WORKSPACE/$i/dashboard/build $1/$i
    done
}

copy_assets() {
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
        local t=$(dirname "$1/$p")
        mkdir -p $t
        cp -a $WORKSPACE/$p $t/
    done

    cp -a $WORKSPACE/README.md $WORKSPACE/LICENSE $WORKSPACE/locales \
        $WORKSPACE/docker/jammy/etc/envoy.yaml \
        $WORKSPACE/palm/db $WORKSPACE/palm/protocols \
        $1/
    echo "$GIT_VERSION" > $1/VERSION
    echo "$(date -R)" >> $1/VERSION
}

build_zst() {
    local target=$WORKSPACE/tmp/$1-$2-$GIT_VERSION
    if [ -d $target ]
    then
        rm -r $(dirname $target)
    fi
    mkdir -p $target/bin
    copy_assets $target
    copy_frontends $target
    copy_backends $2 $target/bin

    cd $target
    XZ_OPT=-9 tar -cJf $target.tar.xz *
}

build_deb() {
    local target=$WORKSPACE/tmp/$UBUNTU_CODENAME-$GIT_VERSION/$1-target
    if [ -d $target ]
    then
        rm -r $(dirname $target)
    fi
    mkdir -p $target
    cp -r $WORKSPACE/debian $target/


    mkdir -p $target/var/lib/palm
    mkdir -p $target/lib/systemd/system/
    copy_assets $target/usr/share/palm
    copy_frontends $target/usr/share/palm
    copy_backends $1 $target/usr/bin

    # https://wiki.debian.org/CrossCompiling#Building_with_dpkg-buildpackage
    cd $target  
    if [ "$1" = "amd64" ]
    then        
        CC=gcc CXX=g++ dpkg-buildpackage -us -uc -b --host-arch $1
    elif [ "$1" = "arm64" ]
    then        
        CC=aarch64-linux-gnu-gcc CXX=aarch64-linux-gnu-g++ dpkg-buildpackage -us -uc -b --host-arch $1
    elif [ "$1" = "armhf" ]
    then
        CC=arm-linux-gnueabihf-gcc CXX=arm-linux-gnueabihf-g++ dpkg-buildpackage -us -uc -b --host-arch $1
    else
        echo "unsupport arch $1"
        exit 1
    fi       
}

cd $WORKSPACE
if [ ! -d node_modules ]
then
    yarn install --silent
fi

build_dashboard fig
build_dashboard aloe

if [ $ID == "ubuntu" ]
then    
    build_ubuntu_backend amd64
    cargo build --quiet --release --target x86_64-unknown-linux-musl -p coconut
    build_deb amd64
    build_zst $UBUNTU_CODENAME amd64    

    if dpkg --print-foreign-architectures | grep -q arm64
    then         
        build_ubuntu_backend arm64
        cargo build --quiet --release --target aarch64-unknown-linux-musl -p coconut
        build_deb arm64
        build_zst $UBUNTU_CODENAME arm64        
    fi

    if dpkg --print-foreign-architectures | grep -q armhf
    then
        build_ubuntu_backend armhf
        build_deb armhf
        build_zst $UBUNTU_CODENAME armhf
    fi
elif [ $ID == "arch" ]
then
    build_arch_backend
    yes | sudo pacman -S --needed musl
    cargo build --quiet --release --target x86_64-unknown-linux-musl -p coconut
    build_zst $ID amd64    
else
    echo "unsupported system $ID"
    exit 1
fi


echo "Done($GIT_VERSION)."

exit 0
