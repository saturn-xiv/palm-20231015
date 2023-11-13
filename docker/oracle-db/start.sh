#!/bin/bash

export CODE="container-registry.oracle.com/database/free:latest"
export NAME="palm-oracle-db"
export DATA_DIR=$PWD/data

if [ ! -d $DATA_DIR ]
then
    mkdir -p $DATA_DIR
    chmod 777 $DATA_DIR
fi

if podman container exists $NAME
then
    podman start $NAME
else
    podman run -d --name $NAME --events-backend=file -p 1521:1521 \
        -e ORACLE_PWD=change-me -e ORACLE_CHARACTERSET=AL32UTF8 -v $DATA_DIR:/opt/oracle/oradata \
        $CODE
fi
