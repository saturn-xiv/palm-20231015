#!/bin/bash

set -e

export WORKSPACE=$PWD
export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)
export PACKAGE_NAME=palm-$GIT_VERSION
export TARGET=$WORKSPACE/tmp/$PACKAGE_NAME

function build_go() {
    cd $WORKSPACE/$1

    local pkg="github.com/saturn_xiv/$1/cmd"
    local ldflags="-s -w -X '$pkg.repo_url=$(git remote get-url origin)' -X '$pkg.author_name=$(git config --get user.name)' -X '$pkg.author_email=$(git config --get user.email)' -X '$pkg.build_time=$(date -R)' -X '$pkg.git_version=$(git describe --tags --always --dirty --first-parent)'"
    
    go build -ldflags "$ldflags"
    mkdir -p $TARGET/bin/x86_64
    mv $1 $TARGET/bin/x86_64/$1

    GOOS=linux GOARCH=arm64 go build -ldflags "$ldflags"
    mkdir -p $TARGET/bin/aarch64
    mv $1 $TARGET/bin/aarch64/$1
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

copy_node() {
    cd $TARGET
    local node_version="v20.10.0"
    local node_file="node-${node_version}-linux-$1.tar.xz"

    if [ ! -f $HOME/downloads/$node_file ]
    then
        wget -q -P $HOME/downloads https://nodejs.org/dist/${node_version}/$node_file
    fi
    tar xf $HOME/downloads/$node_file
    mv node-${node_version}-linux-$1 node-$1    
}

copy_jdk() {
    cd $TARGET
    local jdk_version="21.0.1"
    local jdk_hask="415e3f918a1f4062a0074a2794853d0d"
    local jdk_file="openjdk-${jdk_version}_linux-$1_bin.tar.gz"

    if [ ! -f $HOME/downloads/$jdk_file ]
    then
        wget -q -P $HOME/downloads https://download.java.net/java/GA/jdk21.0.1/${jdk_hash}/12/GPL/$jdk_file
    fi
    tar xf $HOME/downloads/$jdk_file
    mv jdk-${jdk_version} jdk-$1
}

# copy_metasequoia_assets() {
#     cd $WORKSPACE/metasequoia/

#     if [ ! -d node_modules ]
#     then
#         yarn install
#     fi

#     local -a packages=(
#         "bootstrap/dist"
#         "bulma/css"
#         "marked/marked.min.js"
#         "material-design-icons/iconfont"
#         "d3/dist"
#         "@fontsource/roboto"
#         "moment/dist"
#         "moment-timezone/builds/moment-timezone-with-data.min.js"
#         "@popperjs/core/dist"
#         "mdb-ui-kit/css"
#         "mdb-ui-kit/js"
#         "mdb-ui-kit/img"
#         "qrcodejs/qrcode.min.js"
#         "@fortawesome/fontawesome-free/js"
#         "@fortawesome/fontawesome-free/css"
#         "@fortawesome/fontawesome-free/svgs"
#         "@fortawesome/fontawesome-free/webfonts"
#         "@fortawesome/fontawesome-free/sprites"
#         "famfamfam-flags/dist"
#         "famfamfam-silk/dist"
#         "famfamfam-mini/dist"
#     )
#     for i in "${packages[@]}"
#     do
#         local p=node_modules/$i
#         local t=$(dirname "$TARGET/metasequoia/$p")
#         mkdir -p $t
#         cp -a $p $t/
#     done

# }

# -----------------------------------------------------------------------------

build_lily
build_morus
build_musa
build_gardenia
build_go fig
build_go aloe
build_go coconut

copy_jdk x64
copy_jdk aarch64
copy_node x64
copy_node arm64

cd $WORKSPACE
cp -r README.md LICENSE protocols $TARGET/
echo "$GIT_VERSION" > $TARGET/VERSION
echo "$(date -R)" >> $TARGET/VERSION

cd $WORKSPACE/tmp
echo "compressing $PACKAGE_NAME..."
XZ_OPT=-9 tar -cJf $PACKAGE_NAME.tar.xz $PACKAGE_NAME
md5sum $PACKAGE_NAME.tar.xz > $PACKAGE_NAME.txt

echo "done($PACKAGE_NAME)."
exit 0
