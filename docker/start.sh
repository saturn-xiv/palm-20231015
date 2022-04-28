#!/bin/sh


if [ "$#" -ne 2 ]
then
    echo "USAGE: $0 OS"
    exit 1
fi

export CODE="palm-cpp-$1"
export NAME="$CODE-$USER"

if podman container exists $NAME
then
    podman start -i -a $NAME
else
    podman run --name $NAME -it --events-backend=file --hostname=palm --network host -v $PWD:/workspace:z $CODE
fi
