#!/bin/bash

set -e

export GIT_VERSION=$(git describe --tags --always --dirty --first-parent)


declare -a targets=(
    "x86_64-unknown-linux-gnu"
    "x86_64-unknown-linux-musl"
    "aarch64-unknown-linux-musl"
)

for t in "${targets[@]}"
do
    cargo build --quiet --release --target $t -p coconut
done

echo "done($GIT_VERSION)."

exit 0
