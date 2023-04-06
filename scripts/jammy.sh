#!/bin/bash

set -e

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export BUILD_TIME=$(date -u -R)
export TARGET_DIR=$PWD/tmp/palm-$GIT_VERSION

# -----------------------------------------------------------------------------

build_dashboard() {
    cd $WORKSPACE/$1/dashboard
    if [ ! -d node_modules ]
    then
        yarn install --silent
    fi
    yarn build
    cp -r build $TARGET_DIR/$1
}

install_gnu_deb() {
    apt-get -qq -y install libc6-dev:$1 libudev-dev:$1 libssl-dev:$1 \
        libpq5:$1 libpq-dev:$1 libmysqlclient-dev:$1 libsqlite3-dev:$1
}

build_rust_amd64_gnu() {    
    cd $WORKSPACE
    install_gnu_deb amd64

    cargo build --quiet --release --target x86_64-unknown-linux-gnu -p $1
    cp $WORKSPACE/target/x86_64-unknown-linux-gnu/release/$1 $TARGET_DIR/bin/x86_64/
}

build_rust_armhf_gnu() {
    install_gnu_deb armhf

    cd $WORKSPACE
    # local PKG_CONFIG_ALLOW_CROSS=1
    # local PKG_CONFIG_DIR=
    # local PKG_CONFIG_LIBDIR=/usr/lib/arm-linux-gnueabihf/pkgconfig
    
    PKG_CONFIG_DIR= PKG_CONFIG_ALLOW_CROSS=1 PKG_CONFIG_LIBDIR=/usr/lib/arm-linux-gnueabihf/pkgconfig \
        cargo build --quiet --release --target armv7-unknown-linux-gnueabihf -p $1
    cp $WORKSPACE/target/armv7-unknown-linux-gnueabihf/release/$1 $TARGET_DIR/bin/aarch64/
}

build_rust_arm64_gnu() {
    install_gnu_deb arm64

    cd $WORKSPACE
    # local PKG_CONFIG_ALLOW_CROSS=1
    # local PKG_CONFIG_DIR=
    # local PKG_CONFIG_LIBDIR=/usr/lib/aarch64-linux-gnu/pkgconfig
    
    PKG_CONFIG_DIR= PKG_CONFIG_ALLOW_CROSS=1 PKG_CONFIG_LIBDIR=/usr/lib/aarch64-linux-gnu/pkgconfig \
        cargo build --quiet --release --target aarch64-unknown-linux-gnu -p $1
    cp $WORKSPACE/target/aarch64-unknown-linux-gnu/release/$1 $TARGET_DIR/bin/aarch64/
}

build_rust_musl() {
    cd $WORKSPACE
    CC=$1-linux-musl-gcc CXX=$1-linux-musl-g++ \
        cargo build --quiet --release --target $1-unknown-linux-musl -p $2
    cp $WORKSPACE/target/$1-unknown-linux-musl/release/$2 $TARGET_DIR/bin/$1/
}

build_loquat() {
    apt-get install -y g++-10 golang libunwind-dev libboost-all-dev libssl-dev libevent-dev

    mkdir -p $WORKSPACE/loquat/build/$1
    cd $WORKSPACE/loquat/build/$1
    CC=gcc-10 CXX=g++-10 cmake -DCMAKE_BUILD_TYPE=Release \
        -DABSL_PROPAGATE_CXX_STD=ON -DTINK_USE_SYSTEM_OPENSSL=OFF \
        -DBUILD_COMPILER=OFF -DWITH_OPENSSL=OFF -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF \
        ../..
    make --silent loquat
    cp loquat $TARGET_DIR/bin/$1/
}

build_musa() {
    cd $WORKSPACE/musa
    gradle clean
    gradle build    
    mkdir -p $TARGET_DIR/musa
    find build/libs ! -name '*plain*' -type f -exec cp '{}' $TARGET_DIR/musa \;
    cp README.md application.properties $TARGET_DIR/musa/
}

copy_jdk() {
    cd $TARGET_DIR
    local jdk_version=20
    
    if [ ! -f $HOME/downloads/openjdk-${jdk_version}_linux-x64_bin.tar.gz ]
    then
        wget -q -P $HOME/downloads https://download.java.net/java/GA/jdk20/bdc68b4b9cbc4ebcb30745c85038d91d/36/GPL/openjdk-20_linux-x64_bin.tar.gz
    fi
    tar xf $HOME/downloads/openjdk-${jdk_version}_linux-x64_bin.tar.gz
    mv jdk-${jdk_version} jdk-${jdk_version}-x64

    if [ ! -f $HOME/downloads/openjdk-${jdk_version}_linux-aarch64_bin.tar.gz ]
    then
        wget -q -P $HOME/downloads https://download.java.net/java/GA/jdk20/bdc68b4b9cbc4ebcb30745c85038d91d/36/GPL/openjdk-20_linux-aarch64_bin.tar.gz
    fi    
    tar xf $HOME/downloads/openjdk-${jdk_version}_linux-aarch64_bin.tar.gz
    mv jdk-${jdk_version} jdk-${jdk_version}-aarch64
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
        local t=$(dirname "$TARGET_DIR/$p")
        mkdir -p $t
        cp -a $p $t/
    done

    cp -a README.md LICENSE package.json \
        docker/spring/etc/envoy.yaml \
        palm/db palm/protocols \
        $TARGET_DIR/
    
    echo "$GIT_VERSION" > $TARGET_DIR/VERSION
    echo "$(date -R)" >> $TARGET_DIR/VERSION
}

# -----------------------------------------------------------------------------

. /etc/os-release


if [[ $UBUNTU_CODENAME != "jammy" ]]
then
    echo "unsupported system($PRETTY_NAME)"
    exit 1
fi

# -----------------------------------------------------------------------------

if [ -d $TARGET_DIR ]
then
    rm -r $TARGET_DIR
fi
mkdir -p $TARGET_DIR/bin/x86_64 $TARGET_DIR/bin/aarch64 $TARGET_DIR/bin/riscv64gc

# -----------------------------------------------------------------------------



build_rust_amd64_gnu fig
build_rust_arm64_gnu fig
# build_rust_riscv64_gnu riscv64gc fig

declare -a musl_projects=(
    "aloe"
    "coconut"
    "orchid"
)

for p in "${musl_projects[@]}"
do    
    # build_rust_gnu x86_64 amd64 $p
    build_rust_musl x86_64 $p

    # build_rust_gnu aarch64 arm64 $p
    build_rust_musl aarch64 $p

    # build_rust_gnu riscv64gc riscv64 $p
done

# -----------------------------------------------------------------------------

if [[ $(uname -p) == "aarch64" ]]
then
    build_loquat aarch64
fi

if [[ $(uname -p) == "x86_64" ]]
then
    build_loquat x86_64
fi

# -----------------------------------------------------------------------------

# FIXME
# build_dashboard fig
# build_dashboard aloe

build_musa
copy_jdk
copy_assets

# -----------------------------------------------------------------------------

cd $WORKSPACE/tmp
XZ_OPT=-9 tar -cJf palm-$GIT_VERSION.tar.xz palm-$GIT_VERSION
md5sum palm-$GIT_VERSION.tar.xz

echo "done($GIT_VERSION)."
exit 0
