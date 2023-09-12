#!/bin/bash

export CODE="container-registry.oracle.com/database/free:latest"
export NAME="palm-oracle-db"
export DATA_DIR=$PWD/data

if [ ! -d $DATA_DIR ]
then
    mkdir -p $DATA_DIR
fi

if podman container exists $NAME
then
    podman start -i -a $NAME
else    
    podman run -d --name $NAME --events-backend=file --hostname=palm --network host \
        -e ORACLE_PWD=change-me -e ORACLE_CHARACTERSET=AL32UTF8 -v $DATA_DIR:/opt/oracle/oradata \
        $CODE
fi
