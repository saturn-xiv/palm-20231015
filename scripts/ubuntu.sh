#!/bin/bash

set -e

. /etc/os-release

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export BUILD_TIME=$(date -u -R)
export PACKAGE_NAME=palm-$UBUNTU_CODENAME-$GIT_VERSION
export TARGET_DIR=$PWD/tmp/$PACKAGE_NAME
export PROTOBUF_ROOT=$HOME/.local

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

install_deb() {
    apt-get -y install libc6-dev:$1 libudev-dev:$1 libssl-dev:$1 \
        libpq5:$1 libpq-dev:$1 libmysqlclient-dev:$1 libsqlite3-dev:$1
}

build_gnu() {
    install_deb $1

    local target=$WORKSPACE/build/$UBUNTU_CODENAME-$1-$2
    mkdir -p $target
    cd $target
    # https://stackoverflow.com/questions/52202453/cross-compiling-grpc-using-cmake
    # -DgRPC_PROTOBUF_PROVIDER=package -DgRPC_PROTOBUF_PACKAGE_TYPE=MODULE
    cmake $WORKSPACE \
        -DABSL_PROPAGATE_CXX_STD=ON \
        -DgRPC_SSL_PROVIDER=package -DgRPC_PROTOBUF_PROVIDER=module -DProtobuf_PROTOC_EXECUTABLE=$PROTOBUF_ROOT/bin/protoc \
        -DCMAKE_BUILD_TYPE=$2 -DCMAKE_TOOLCHAIN_FILE=$WORKSPACE/toolchains/$1.cmake
    make

    if [[ $2 == "Release" ]]
    then
        cd $target/apps
        cp -v fig mint $TARGET_DIR/bin/$1/
    fi
}

build_musl() {
    local target=$WORKSPACE/build/$1-$2
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
mkdir amd64 armhf arm64 riscv64

# -----------------------------------------------------------------------------

if [ -d $WORKSPACE/gourd/cpp ]
then
    rm -r $WORKSPACE/gourd/cpp
fi
mkdir -p $WORKSPACE/gourd/cpp
$PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/protocols \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --cpp_out=$WORKSPACE/gourd/cpp --grpc_out=$WORKSPACE/gourd/cpp \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_cpp_plugin \
        $WORKSPACE/protocols/*.proto

# -----------------------------------------------------------------------------

build_gnu amd64 Debug
build_gnu amd64 Release
build_gnu arm64 Release
build_gnu armhf Release

build_musl coconut x86_64-linux-musl Debug amd64
build_musl coconut x86_64-linux-musl Release amd64
build_musl coconut aarch64-linux-musl Release arm64
build_musl coconut armv7l-linux-musleabihf Release armhf

# -----------------------------------------------------------------------------

cd $WORKSPACE/tmp
XZ_OPT=-9 tar -cJf $PACKAGE_NAME.tar.xz $PACKAGE_NAME
md5sum $PACKAGE_NAME.tar.xz

echo "done($GIT_VERSION)."
exit 0
