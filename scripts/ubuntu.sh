#!/bin/bash

set -e

. /etc/os-release

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export BUILD_TIME=$(date -u -R)
export PACKAGE_NAME=palm-$UBUNTU_CODENAME-$GIT_VERSION
export TARGET_DIR=$PWD/tmp/$PACKAGE_NAME
export THRIFT_FLAGS="-DBUILD_COMPILER=OFF -DWITH_OPENSSL=OFF -DBUILD_JAVA=OFF -DBUILD_JAVASCRIPT=OFF -DBUILD_NODEJS=OFF -DBUILD_PYTHON=OFF"

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

build_gnu() {

    local target=$WORKSPACE/build/palm-$UBUNTU_CODENAME-$3-$2
    mkdir -p $target
    cd $target
    
    cmake $WORKSPACE -DCMAKE_BUILD_TYPE=$2 -DBUILD_TESTING=OFF -DBoost_NO_WARN_NEW_VERSIONS=1 $THRIFT_FLAGS \
        -DCASBIN_BUILD_TEST=OFF -DCASBIN_BUILD_BENCHMARK=OFF -DCASBIN_BUILD_PYTHON_BINDINGS=OFF -DCASBIN_INSTALL=OFF \
        -DMAILIO_BUILD_EXAMPLES=OFF -DMAILIO_BUILD_DOCUMENTATION=OFF -DMAILIO_BUILD_SHARED_LIBRARY=OFF -DMAILIO_BUILD_TESTS=OFF \
        -DVCPKG_HOST_TRIPLET=x64-linux -DVCPKG_TARGET_TRIPLET=$1 -DCMAKE_TOOLCHAIN_FILE=$HOME/local/vcpkg/scripts/buildsystems/vcpkg.cmake -DVCPKG_CHAINLOAD_TOOLCHAIN_FILE=$WORKSPACE/toolchains/$3.cmake
    make

    if [[ $3 == "Release" ]]
    then
        cd $target/apps
        cp -v fig mint $TARGET_DIR/bin/$1/
    fi
}

build_musl() {
    local target=$WORKSPACE/build/$4-$3
    mkdir -p $target
    cd $target
    CXX=$2-g++ cmake -DCMAKE_BUILD_TYPE=$3 $WORKSPACE/$1
    make

    if [[ $3 == "Release" ]]
    then
        cp -v $1 $TARGET_DIR/bin/$4/
    fi
}


build_loquat() {
    apt-get install -y g++-10 golang libunwind-dev libboost-all-dev libssl-dev libevent-dev

    local target=$WORKSPACE/build/loquat-$UBUNTU_CODENAME-$1-$2
    mkdir -p $target    
    cd $target
    CC=gcc-10 CXX=g++-10 cmake -DCMAKE_BUILD_TYPE=$2 \
        -DABSL_PROPAGATE_CXX_STD=ON -DTINK_USE_SYSTEM_OPENSSL=OFF \
        $THRIFT_FLAGS $WORKSPACE/loquat
    
    make
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

if [[ $ID != "ubuntu" ]]
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
mkdir x86_64 aarch64 riscv64 armv7l

# -----------------------------------------------------------------------------

build_gnu x64-linux Debug x86_64
build_gnu x64-linux Release x86_64
build_gnu arm64-linux Release aarch64
# build_gnu riscv64-linux Release riscv64

if [[ $(uname -p) == "aarch64" ]]
then
    build_loquat aarch64 Debug
    build_loquat aarch64 Release
fi

if [[ $(uname -p) == "x86_64" ]]
then
    build_loquat x86_64 Debug
    build_loquat x86_64 Release
fi


build_musl coconut x86_64-linux-musl Debug x86_64
build_musl coconut x86_64-linux-musl Release x86_64
build_musl coconut aarch64-linux-musl Release aarch64
build_musl coconut riscv64-linux-musl Release riscv64
build_musl coconut armv7l-linux-musleabihf Release armv7l


# -----------------------------------------------------------------------------

cd $WORKSPACE/tmp
XZ_OPT=-9 tar -cJf $PACKAGE_NAME.tar.xz $PACKAGE_NAME
md5sum $PACKAGE_NAME.tar.xz

echo "done($GIT_VERSION)."
exit 0
