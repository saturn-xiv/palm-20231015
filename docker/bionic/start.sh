#!/bin/sh

NAME=palm-bionic

if podman container exists $NAME
then
    podman start -i -a  $NAME
else
    podman run --name $NAME  -it --hostname=palm --network host -v $PWD:/workspace:z $NAME
fi
