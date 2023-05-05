#!/bin/bash

set -e

. /etc/os-release

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export BUILD_TIME=$(date -u -R)
export PACKAGE_NAME=palm-$UBUNTU_CODENAME-$GIT_VERSION
export TARGET_DIR=$PWD/tmp/$PACKAGE_NAME


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

    # CC=gcc-$GCC_VERSION CXX=g++-$GCC_VERSION \
    cargo build --quiet --release --target x86_64-unknown-linux-gnu -p $1
    cp $WORKSPACE/target/x86_64-unknown-linux-gnu/release/$1 $TARGET_DIR/bin/x86_64/
}

build_rust_armhf_gnu() {
    install_gnu_deb armhf

    cd $WORKSPACE        
    # CC=arm-linux-gnueabihf-gcc-$GCC_VERSION CXX=arm-linux-gnueabihf-g++-$GCC_VERSION \
    PKG_CONFIG_DIR= PKG_CONFIG_ALLOW_CROSS=1 PKG_CONFIG_LIBDIR=/usr/lib/arm-linux-gnueabihf/pkgconfig \
        cargo build --quiet --release --target armv7-unknown-linux-gnueabihf -p $1
    cp $WORKSPACE/target/armv7-unknown-linux-gnueabihf/release/$1 $TARGET_DIR/bin/armhf/
}

build_rust_arm64_gnu() {
    install_gnu_deb arm64

    cd $WORKSPACE       
    # CC=aarch64-linux-gnu-gcc-$GCC_VERSION CXX=aarch64-linux-gnu-g++-$GCC_VERSION \
    PKG_CONFIG_DIR= PKG_CONFIG_ALLOW_CROSS=1 PKG_CONFIG_LIBDIR=/usr/lib/aarch64-linux-gnu/pkgconfig \
        cargo build --quiet --release --target aarch64-unknown-linux-gnu -p $1
    cp $WORKSPACE/target/aarch64-unknown-linux-gnu/release/$1 $TARGET_DIR/bin/aarch64/
}

build_rust_musl() {
    cd $WORKSPACE
        
    if [[ $1 == "aarch64" ]]
    then
        # https://github.com/rust-lang/rust/issues/89626
        CC=$1-linux-musl-gcc CXX=$1-linux-musl-g++ CFLAGS="-mno-outline-atomics" \
            cargo build --quiet --release --target $1-unknown-linux-musl -p $2
        cp $WORKSPACE/target/$1-unknown-linux-musl/release/$2 $TARGET_DIR/bin/$1/
        return
    fi
    CC=$1-linux-musl-gcc CXX=$1-linux-musl-g++ \
        cargo build --quiet --release --target $1-unknown-linux-musl -p $2
    cp $WORKSPACE/target/$1-unknown-linux-musl/release/$2 $TARGET_DIR/bin/$1/
}

build_loquat() {
    apt-get install -y golang libunwind-dev libboost-all-dev

    mkdir -p $WORKSPACE/loquat/build/$1
    cd $WORKSPACE/loquat/build/$1
    cmake -DCMAKE_BUILD_TYPE=Release \
        -DABSL_PROPAGATE_CXX_STD=ON \
        -DTINK_USE_SYSTEM_OPENSSL=OFF \
        -DEVENT__LIBRARY_TYPE=STATIC -DEVENT__DISABLE_OPENSSL=ON \
        -DWITH_LIBEVENT=ON -DBUILD_COMPILER=OFF -DWITH_OPENSSL=OFF -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF \
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
    cp README.md application-orig.properties $TARGET_DIR/musa/
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

if [[ $UBUNTU_CODENAME != "jammy" ]] && [[ $UBUNTU_CODENAME != "focal" ]] && [[ $UBUNTU_CODENAME != "bionic" ]]
then
    echo "unsupported system($PRETTY_NAME)"
    exit 1
fi

# -----------------------------------------------------------------------------

if [ -d $TARGET_DIR ]
then
    rm -r $TARGET_DIR
fi
mkdir -p $TARGET_DIR/bin
cd $TARGET_DIR/bin
mkdir x86_64 aarch64 riscv64gc armhf

# -----------------------------------------------------------------------------



build_rust_amd64_gnu fig
build_rust_arm64_gnu fig
build_rust_armhf_gnu fig
# build_rust_riscv64_gnu riscv64gc fig

declare -a musl_projects=(
    "aloe"
    "coconut"
    "orchid"
)

for p in "${musl_projects[@]}"
do    
    # build_rust_amd64_gnu $p
    build_rust_musl x86_64 $p

    # build_rust_arm64_gnu $p
    build_rust_musl aarch64 $p

    # build_rust_riscv64_gnu $p

    build_rust_armhf_gnu $p
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
XZ_OPT=-9 tar -cJf $PACKAGE_NAME.tar.xz $PACKAGE_NAME
md5sum $PACKAGE_NAME.tar.xz

echo "done($GIT_VERSION)."
exit 0
