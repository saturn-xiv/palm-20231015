#!/bin/sh

export CODE="palm-lily"

podman run -it --rm --events-backend=file --hostname=palm --network host $CODE
