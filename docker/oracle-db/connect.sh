#!/bin/sh

podman exec -it palm-oracle-db sqlplus sys@localhost:1521/FREE as sysdba
