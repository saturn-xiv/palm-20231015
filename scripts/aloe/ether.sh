#!/bin/bash

set -e

create_ether() {
    local mac="f6:11:ec:8c:78:${1}${2}"
    local name="enp${1}s0f${2}"
    
    if [ ! -d "/sys/class/net/${name}" ]
    then
        echo "create ${name} for ${mac}"
        ip link add ${name} type dummy
        ifconfig ${name} hw ether ${mac}
    fi
}

modprobe dummy
for i in $(seq 2 3)
do
    for j in $(seq 1 4)
    do
        create_ether $i $j
    done
done

echo 'done.'
exit 0
