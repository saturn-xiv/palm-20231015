#!/bin/bash

set -e

if [ "$#" -ne 1 ]
then
    echo "USAGE: $0 VERSION"
    exit 1
fi

export CODE="palm-musa"

podman run --rm --events-backend=file --hostname=palm --network host $CODE /usr/bin/java -jar musa-$1.jar

exit 0
