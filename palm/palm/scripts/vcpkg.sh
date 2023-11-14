#!/bin/bash

set -e

export VCPKG_ROOT=$PWD/vcpkg

declare -a triplets=(
    "x64"
    "arm64"
    # "riscv64"
)

for t in "${triplets[@]}"
do
    $VCPKG_ROOT/vcpkg 
done

echo 'done.'
exit 0
