#!/bin/bash

export CODE="palm-musa"

podman run --rm --events-backend=file --hostname=palm --network host $CODE /bin/bash -i -c "python . $*"
