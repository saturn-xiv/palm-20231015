#!/bin/bash

set -e

for ((i=1; i<=6; i++))
do
    echo "setup redis node $i"
    if [ -d /var/lib/redis-node-$i ]
    then
        rm -r /var/lib/redis-node-$i
        mkdir -p /var/lib/redis-node-$i
        chown redis:redis /var/lib/redis-node-$i
        chmod 700 /var/lib/redis-node-$i
        
        systemctl restart redis-node-$i
    fi
done

sleep 3

echo "create redis cluster"
redis-cli --cluster create 127.0.0.1:6371 127.0.0.1:6372 127.0.0.1:6373 127.0.0.1:6374 127.0.0.1:6375 127.0.0.1:6376

echo "done."

exit 0
