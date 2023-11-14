#!/bin/bash

set -e

if [ "$#" -ne 1 ]
then
    echo "USAGE: $0 VERSION"
    exit 1
fi

export CODE="palm-gardenia"

podman run --rm --events-backend=file --hostname=palm --network host $CODE /usr/bin/java -jar gardenia-$1.jar

exit 0
