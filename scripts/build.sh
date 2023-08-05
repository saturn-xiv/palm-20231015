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
    echo "build backend@archlinux..."

    yes | sudo pacman -S --needed postgresql-libs mariadb-libs
    cd $WORKSPACE
    
    cargo clean --quiet --release --target x86_64-unknown-linux-gnu
    cargo build --quiet --release --target x86_64-unknown-linux-gnu

    local -a projects=(
        "aloe"
        "coconut"
        "lemon"
        "orchid"
        "loquat"
    )
    local -a targets=(
        "x86_64-unknown-linux-musl"
        "aarch64-unknown-linux-musl"
    )
    for t in "${targets[@]}"
    do
        cargo clean --quiet --release --target $t
        for p in "${projects[@]}"
        do
            cargo build --quiet --release --target $t -p $p
        done
    done
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
        cargo clean --quiet --release --target $target
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
        cargo clean --quiet --release --target $target
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
        cargo clean --quiet --release --target $target
        cargo build --quiet --release --target $target
        
    else
        echo "unknown arch $1"
        exit 1
    fi
}


copy_assets() {
    cd $WORKSPACE
    
    if [ ! -d node_modules ]
    then
        yarn install --silent
    fi

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
        cp -a $p $t/
    done

    cp -a README.md LICENSE \
        docker/spring/etc/envoy.yaml \
        db palm/protocols \
        $1/
    echo "$GIT_VERSION" > $1/VERSION
    echo "$(date -R)" >> $1/VERSION
}

build_zst() {
    local pkg_name=$GIT_VERSION
    local target=$WORKSPACE/tmp/$pkg_name
    if [ -d $target ]
    then
        rm -r $target
    fi

    mkdir -p $target/x86_64
    cd $WORKSPACE/target/x86_64-unknown-linux-gnu/release
    cp fig $target/x86_64/
    cd $WORKSPACE/target/x86_64-unknown-linux-musl/release
    cp aloe coconut orchid $target/x86_64/

    mkdir -p $target/aarch64
    cd $WORKSPACE/target/aarch64-unknown-linux-musl/release
    cp aloe coconut orchid $target/aarch64/

    copy_assets $target

    mkdir $target/dashboard
    cp -r $WORKSPACE/aloe/dashboard/build $target/dashboard/aloe
    cp -r $WORKSPACE/fig/dashboard/build $target/dashboard/fig
    
    cd $(dirname $target)
    XZ_OPT=-9 tar -cJf palm-$pkg_name.tar.xz $pkg_name
}

build_deb() {
    local target=$WORKSPACE/tmp/$UBUNTU_CODENAME-$GIT_VERSION/$1-target
    if [ -d $target ]
    then
        rm -r $(dirname $target)
    fi
    mkdir -p $target
    cp -r $WORKSPACE/debian $target/


    mkdir -p $target/usr/bin \
        $target/etc/palm $target/usr/share/palm/dashboard \
        $target/var/lib/palm $target/lib/systemd/system
    
    copy_assets $target/usr/share/palm
    cp -r $WORKSPACE/aloe/dashboard/build $target/usr/share/palm/dashboard/aloe
    cp -r $WORKSPACE/fig/dashboard/build $target/usr/share/palm/dashboard/fig
    

    # https://wiki.debian.org/CrossCompiling#Building_with_dpkg-buildpackage     
    if [ "$1" = "amd64" ]
    then
        cd $WORKSPACE/target/x86_64-unknown-linux-gnu/release
        cp fig aloe coconut lemon orchid loquat $target/usr/bin/

        cd $target
        CC=gcc CXX=g++ dpkg-buildpackage -us -uc -b --host-arch $1
    elif [ "$1" = "arm64" ]
    then
        cd $WORKSPACE/target/aarch64-unknown-linux-gnu/release
        cp fig aloe coconut lemon orchid loquat $target/usr/bin/

        cd $target
        CC=aarch64-linux-gnu-gcc CXX=aarch64-linux-gnu-g++ dpkg-buildpackage -us -uc -b --host-arch $1
    elif [ "$1" = "armhf" ]
    then
        cd $WORKSPACE/target/armv7-unknown-linux-gnueabihf/release
        cp fig aloe coconut lemon orchid loquat $target/usr/bin/

        cd $target
        CC=arm-linux-gnueabihf-gcc CXX=arm-linux-gnueabihf-g++ dpkg-buildpackage -us -uc -b --host-arch $1
    else
        echo "unsupport arch $1"
        exit 1
    fi       
}

cd $WORKSPACE
build_dashboard fig
build_dashboard aloe

if [ $ID == "ubuntu" ]
then
    build_ubuntu_backend amd64    
    build_deb amd64

    if dpkg --print-foreign-architectures | grep -q arm64
    then
        build_ubuntu_backend arm64        
        build_deb arm64      
    fi

    if dpkg --print-foreign-architectures | grep -q armhf
    then
        build_ubuntu_backend armhf        
        build_deb armhf
    fi
elif [ $ID == "arch" ]
then
    build_arch_backend
    build_zst
else
    echo "unsupported system $ID"
    exit 1
fi


echo "Done($GIT_VERSION)."

exit 0
