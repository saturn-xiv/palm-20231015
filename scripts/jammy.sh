#!/bin/bash

set -e

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
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

build_rust_gnu() {
    # PKG_CONFIG_ALLOW_CROSS=1
    # PKG_CONFIG_DIR=
    # PKG_CONFIG_LIBDIR=/usr/lib/arm-linux-gnueabihf/pkgconfig
    # export PKG_CONFIG_ALLOW_CROSS PKG_CONFIG_DIR PKG_CONFIG_LIBDIR

    cd $WORKSPACE
    apt-get -qq -y install libc6-dev:$2 libudev-dev:$2 libssl-dev:$2 \
        libpq5:$2 libpq-dev:$2 libmysqlclient-dev:$2 libsqlite3-dev:$2
    cargo build --release --target $1-unknown-linux-gnu -p $3
    cp $WORKSPACE/target/$1-unknown-linux-gnu/release/$3 $TARGET_DIR/bin/$1/
}

build_rust_musl() {
    cd $WORKSPACE
    CC=$1-linux-musl-gcc CXX=$1-linux-musl-g++ \
        cargo build --release --target $1-unknown-linux-musl -p $2
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
    make loquat
    cp loquat $TARGET_DIR/bin/$1/
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
    cp loquat/loquat.thrift $TARGET_DIR/protocols/

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



build_rust_gnu x86_64 amd64 fig
build_rust_gnu aarch64 arm64 fig
# build_rust_gnu riscv64gc riscv64 fig

declare -a musl_projects=(
    "aloe"
    "coconut"
    "orchid"
)

for p in "${musl_projects[@]}"
do    
    build_rust_gnu x86_64 amd64 $p
    # build_rust_musl x86_64 $p

    build_rust_gnu aarch64 arm64 $p
    # build_rust_musl aarch64 $p

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
copy_assets

# -----------------------------------------------------------------------------

cd $WORKSPACE/tmp
XZ_OPT=-9 tar jcf palm-$GIT_VERSION.tar.xz palm-$GIT_VERSION
md5sum palm-$GIT_VERSION.tar.xz

echo "done($GIT_VERSION)."
exit 0
