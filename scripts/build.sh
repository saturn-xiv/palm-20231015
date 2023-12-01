#!/bin/bash

set -e

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export PACKAGE_NAME=palm-$GIT_VERSION
export TARGET=$WORKSPACE/tmp/$PACKAGE_NAME

function build_metasequoia() {
    cd $WORKSPACE/metasequoia

    go build -ldflags "-s -w"
    mkdir -p $TARGET/metasequoia/x86_64
    mv palm $TARGET/metasequoia/x86_64/

    GOOS=linux GOARCH=arm64 go build -ldflags "-s -w"
    mkdir -p $TARGET/metasequoia/aarch64
    mv palm $TARGET/metasequoia/aarch64/
}

function build_morus() {
    cd $WORKSPACE/morus
    if [ ! -d node_modules ]
    then
        npm install
    fi
    npx webpack --mode=production    
    cp -r dist $TARGET/morus
    cp README.md config.orig.json $TARGET/morus/
}

function build_musa() {
    cd $WORKSPACE/musa
    mvn clean
    mvn package -Dmaven.test.skip=true

    mkdir -p $TARGET/musa
    cp -r README.md application-orig.properties com mybatis-config.xml wechatpay-orig\
        target/musa-*.jar $TARGET/musa/
}

function build_gardenia() {
    cd $WORKSPACE/gardenia
    mvn clean
    mvn package

    mkdir -p $TARGET/gardenia
    cp -r README.md application-orig.properties \
        target/gardenia-*.jar $TARGET/gardenia/
}

function build_lily() {
    cd $WORKSPACE/lily
    mkdir -p $TARGET/lily
    cp -r README.md __main__.py palm $TARGET/lily/
}

copy_jdk() {
    cd $TARGET
    local jdk_version="21.0.1"

    if [ ! -f $HOME/downloads/openjdk-${jdk_version}_linux-x64_bin.tar.gz ]
    then
        wget -q -P $HOME/downloads https://download.java.net/java/GA/jdk21.0.1/415e3f918a1f4062a0074a2794853d0d/12/GPL/openjdk-21.0.1_linux-x64_bin.tar.gz
    fi
    tar xf $HOME/downloads/openjdk-${jdk_version}_linux-x64_bin.tar.gz
    mv jdk-${jdk_version} jdk-${jdk_version}-x64

    if [ ! -f $HOME/downloads/openjdk-${jdk_version}_linux-aarch64_bin.tar.gz ]
    then
        wget -q -P $HOME/downloads https://download.java.net/java/GA/jdk21.0.1/415e3f918a1f4062a0074a2794853d0d/12/GPL/openjdk-21.0.1_linux-aarch64_bin.tar.gz
    fi
    tar xf $HOME/downloads/openjdk-${jdk_version}_linux-aarch64_bin.tar.gz
    mv jdk-${jdk_version} jdk-${jdk_version}-aarch64
}

copy_assets() {
    cd $WORKSPACE

    if [ ! -d node_modules ]
    then
        yarn install
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
        local t=$(dirname "$TARGET/$p")
        mkdir -p $t
        cp -a $p $t/
    done

    cp -r README.md LICENSE protocols $TARGET/

    echo "$GIT_VERSION" > $TARGET/VERSION
    echo "$(date -R)" >> $TARGET/VERSION
}

# -----------------------------------------------------------------------------

build_lily
build_morus
build_musa
build_gardenia
build_metasequoia

copy_jdk
copy_assets

cd $WORKSPACE/tmp
echo "compressing $PACKAGE_NAME..."
XZ_OPT=-9 tar -cJf $PACKAGE_NAME.tar.xz $PACKAGE_NAME
md5sum $PACKAGE_NAME.tar.xz > $PACKAGE_NAME.txt

echo "done($PACKAGE_NAME)."
exit 0
