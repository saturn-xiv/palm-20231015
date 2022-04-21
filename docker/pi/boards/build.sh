#!/bin/bash

set -e


export WORKSPACE=$PWD
export VERSION=$(git describe --tags --always --dirty --first-parent)
export SD_TARGET=$WORKSPACE/tmp/sd-cards/$VERSION

# https://openwrt.org/toh/raspberry_pi_foundation/raspberry_pi

# https://buildroot.org/downloads/manual/manual.html
# make list-defconfigs raspberrypi3_64_defconfig menuconfig
# ls output/images 
function build_raspberry() {
    cd $HOME/build/buildroot
    cp $WORKSPACE/docker/pi/boards/raspberry-${1} .config
    make
    mv $HOME/build/buildroot/output/images/sdcard.img $SD_TARGET/raspberry-${1}.img
}

# https://wiki.friendlyarm.com/wiki/index.php/How_to_Build_FriendlyWrt
function build_nano_h3() {
    cd $HOME/build/friendlyarm/h3
    ./build.sh nanopi_${1}.mk
}

mkdir -p $SD_TARGET
declare -a raspberry=(
    "3"
    # "4"
    # "4-qt"
)

for i in "${raspberry[@]}"
do
    build_raspberry $i
done

declare -a nano_h3=(
    "duo2"
)
for i in "${nano_h3[@]}"
do
    build_nano_h3 $i
done

echo 'done.'

exit 0