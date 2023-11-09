#!/bin/bash

set -e

export CODE="palm-morus"

if [ "$#" -ne 1 ]
then
    echo "USAGE: $0 HASH"
    exit 1
fi

podman run -d --rm --events-backend=file --hostname=palm --network host $CODE /usr/bin/node morus.$1.bundle.js config.json

exit 0
