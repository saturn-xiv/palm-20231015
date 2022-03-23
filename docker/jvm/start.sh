#!/bin/sh

export CODE="palm-jvm"
export NAME="$CODE-$USER"

if podman container exists $NAME
then
    podman start -i -a $NAME
else
    podman run --name $NAME --events-backend=file -it --hostname=palm --network host -v $PWD:/workspace:z $CODE
fi
