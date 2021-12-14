#!/bin/sh

NAME=palm-musl

if podman container exists $NAME
then
    podman start -i -a --events-backend=file $NAME
else
    podman run --name $NAME --privileged=true -it --userns=keep-id --hostname=palm --user=$(id -ur):$(id -gr) --network host --events-backend=file -v $PWD:/workspace:z $NAME
fi
