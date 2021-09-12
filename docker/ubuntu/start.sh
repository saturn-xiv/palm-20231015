#!/bin/sh

NAME=palm

if [ podman container exists $NAME ]
then
    podman start -i -a --events-backend=file palm
else
    podman run --name palm -it --userns=keep-id --hostname=palm --user=$(id -ur):$(id -gr) --network host --events-backend=file -v $PWD:/workspace:z palm-cpp
fi
