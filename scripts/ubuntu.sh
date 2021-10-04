#!/bin/bash

set -e
# ---------------------------------
USAGE=$(cat <<-END 
Please specify your arch!

Usage: $0 amd64|aarch64|arm
END
)

if [ $# -ne 1 ]
then
    echo $USAGE
    exit 1
fi
# ---------------------------------
export WORKSPACE=$PWD
export VERSION=$(git describe --tags --always --dirty --first-parent)
export TARGET=$WORKSPACE/tmp/fig-$1-$VERSION/target
# ---------------------------------
prepare_build() {
    if [ -f $TARGET/../fig_*.deb ]
    then
        echo "ingore..."
        exit 0
    fi

    if [ -d $TARGET ]
    then
        rm -rf $TARGET
    fi
    mkdir -pv $TARGET/usr/bin
    cp -r $WORKSPACE/debian $TARGET/
}

build_backend() {
    export PKG_CONFIG_ALL_STATIC=1

    local -a features=(
        "postgresql"
        "mysql"
        "sqlite"
    )

    if [ "$1" = "amd64" ]
    then
        sudo apt -y install libudev-dev \
            libpq-dev libmysqlclient-dev libsqlite3-dev
        
        local target="x86_64-unknown-linux-gnu"
        cargo build --target $target --release --package fig
        cp -av $WORKSPACE/target/$target/release/fig $TARGET/usr/bin/
        strip -s $TARGET/usr/bin/fig

        for f in "${features[@]}"
        do
            cargo build --target $target --release --features $f --package nut
            cp -av $WORKSPACE/target/$target/release/nut $TARGET/usr/bin/nut-${f}
            strip -s $TARGET/usr/bin/nut-${f}
        done
    elif [ "$1" = "armhf" ]
    then
        sudo apt -y install libc6-dev:armhf libudev-dev:armhf \
            libpq5:armhf libpq-dev:armhf libmysqlclient-dev:armhf libsqlite3-dev:armhf

        PKG_CONFIG_ALLOW_CROSS=1
        PKG_CONFIG_DIR=
        PKG_CONFIG_LIBDIR=/usr/lib/arm-linux-gnueabihf/pkgconfig
        export PKG_CONFIG_ALLOW_CROSS PKG_CONFIG_DIR PKG_CONFIG_LIBDIR

        # fix in dpkg-architecture
        CC=arm-linux-gnueabihf-gcc
        CXX=arm-linux-gnueabihf-g++
        export CC CXX

        local target="armv7-unknown-linux-gnueabihf"
        
        cargo build --target $target --release --package fig
        cp -av target/$target/release/fig $TARGET/usr/bin/
        arm-linux-gnueabihf-strip -s $TARGET/usr/bin/fig
        for f in "${features[@]}"
        do
            cargo build --target $target --features $f --release --package nut
            cp -av target/$target/release/nut $TARGET/usr/bin/nut-${f}
            arm-linux-gnueabihf-strip -s $TARGET/usr/bin/nut-${f}
        done
    elif [ "$1" = "aarch64" ]
    then
        sudo apt -y install libc6-dev:aarch64 libudev-dev:aarch64 \
            libpq5:aarch64 libpq-dev:aarch64 libmysqlclient-dev:aarch64 libsqlite3-dev:aarch64

        PKG_CONFIG_ALLOW_CROSS=1
        PKG_CONFIG_DIR=
        PKG_CONFIG_LIBDIR=/usr/lib/aarch64-linux-gnu/pkgconfig
        export PKG_CONFIG_ALLOW_CROSS PKG_CONFIG_DIR PKG_CONFIG_LIBDIR

        # fix in dpkg-architecture
        CC=aarch64-linux-gnu-gcc
        CXX=aarch64-linux-gnu-g++
        export CC CXX

        local target="aarch64-unknown-linux-gnu"
        
        cargo build --target $target --release --package fig
        cp -av target/$target/release/fig $TARGET/usr/bin/
        arm-linux-gnueabihf-strip -s $TARGET/usr/bin/fig
        for f in "${features[@]}"
        do
            cargo build --target $target --features $f --release --package nut
            cp -av target/$target/release/nut $TARGET/usr/bin/nut-${f}
            aarch64-linux-gnu-strip -s $TARGET/usr/bin/nut-${f}
        done
    else
        echo "unknown arch $1"
        exit 1
    fi
}

build_frontend(){
    if [ ! -d $WORKSPACE/node_modules ]
    then
        cd $WORKSPACE
        yarn install
    fi

    if [ ! -d $WORKSPACE/dashboard/node_modules ]
    then
        cd $WORKSPACE/dashboard
        yarn install
    fi
    cd $WORKSPACE/dashboard
    yarn build

    mkdir -pv $TARGET/usr/share/fig
    cp -av $WORKSPACE/node_modules $TARGET/usr/share/fig/
    cp -av $WORKSPACE/dashboard/build $TARGET/usr/share/fig/dashboard
}

build_deb() {
    mkdir -pv $TARGET/etc/fig
    cp -r $WORKSPACE/LICENSE $WORKSPACE/README.md $WORKSPACE/package.json $TARGET/etc/fig/
    echo "$VERSION $(date -R)" > $TARGET/etc/fig/VERSION

    mkdir -pv $TARGET/var/lib/fig

    mkdir -pv $TARGET/lib/systemd/system/
    cp $WORKSPACE/scripts/fig.service $TARGET/lib/systemd/system/

    cd $TARGET
    dpkg-buildpackage -us -uc -b --host-arch $1
}
# ---------------------------------

prepare_build
build_backend $1
build_frontend $1
build_deb $1

echo "Done($TARGET)."

exit 0
