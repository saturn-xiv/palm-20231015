#!/bin/bash

export CODE="palm-carnation"

podman run --rm -it --events-backend=file --hostname=palm --network host -v $PWD:/workspace:z $CODE
