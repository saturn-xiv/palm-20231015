#!/bin/bash

set -e

setup_ubuntu() {
    apt update
    apt -y upgrade
    apt -y install iptables
    apt clean
    apt -y autoremove
}

install_aloe() {
    local root=/opt/palm
    if [ -d $root ]
    then
        rm -r $root
    fi
    mkdir -p $root
    cd $root
    tar xf $1
}

. /etc/os-release

if [ "$#" -ne 1 ]
then
    echo "USAGE: $0 FILE"
    exit 1
fi


if [ $ID == "ubuntu" ]
then   
    setup_ubuntu
    install_aloe $1
else
    echo "unknown os $ID"
    eixt 1
fi

echo "done($1)."
exit 1
