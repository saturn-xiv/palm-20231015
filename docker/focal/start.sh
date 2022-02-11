#!/bin/sh

NAME=palm

if podman container exists $NAME
then
    # --events-backend=file
    podman start -i -a  $NAME
else
    # --privileged --userns=keep-id --user=$(id -ur):$(id -gr) --events-backend=file
    podman run --name $NAME  -it --hostname=palm --network host -v $PWD:/workspace:z $NAME
fi
