#!/bin/bash

set -e

cargo fmt

declare -a actions=(
    "clippy"
    "build"
)

declare -a features=(
    "postgresql"
    "mysql"
    "sqlite"
)


for f in "${features[@]}"
do
    for a in "${actions[@]}"
    do
        cargo $a --features $f --package nut
    done
done

declare -a packages=(
    "fig"
    "loquat"
)

for p in "${packages[@]}"
do
    for a in "${actions[@]}"
    do
        cargo $a --package $p
    done
done

echo "done."
exit 0
