#!/bin/bash

export CODE="palm-loquat"

podman run --rm -it --events-backend=file --hostname=palm --network host -v $PWD:/workspace:z $CODE
