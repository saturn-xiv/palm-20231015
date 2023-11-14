#!/bin/bash

export CODE="palm-coconut"

podman run --rm -it --events-backend=file --hostname=palm --network host $CODE
