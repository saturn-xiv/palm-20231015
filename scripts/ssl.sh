#!/bin/bash

set -e

function generate_certs() {
    mkdir -p $1
    cd $1

    local days=3560

    # openssl rand -writerand $HOME/.rnd

    if [ -f ca.key ]
    then
        echo 'ca.key already exists.'
    else
        echo 'generate ca.key'
        openssl genrsa -out ca.key 4096
    fi
    echo "show ca.key"
    openssl rsa -noout -text -in ca.key

    if [ -f ca.crt ]
    then
        echo 'ca.crt already exists.'
    else
        echo 'generate ca.crt'
        openssl req -new -x509 -days $days -key ca.key -out ca.crt -subj "/CN=*.$1"
    fi
    echo "show ca.crt"
    openssl x509 -noout -text -in ca.crt

    local node_key="$2.key"
    local node_csr="$2.csr"
    local node_crt="$2.crt"
    
    if [ -f $node_key ]
    then
        echo "$node_key already exists"        
    else
        echo "generate $node_key"
        openssl genrsa -out $node_key 4096        
    fi
    echo "show $node_key"
    openssl rsa -noout -text -in $node_key

    if [ -f $node_csr ]
    then
        echo "$node_csr already exists"
    else
        openssl req -new -key $node_key -out $node_csr -subj "/CN=$2.$1"        
    fi
    echo "show $node_csr"
    openssl req -noout -text -in $node_csr

    if [ -f $node_crt ]
    then
        echo "$node_crt already exists"
    else
        echo "generate $node_crt"
        openssl x509 -req -days $days -in $node_csr -out $node_crt -CAcreateserial -CA ca.crt -CAkey ca.key
    fi
    echo "show $node_crt"
    openssl x509 -noout -text -in $node_crt
    
    echo "verify..."
    openssl verify -CAfile ca.crt $node_crt
    
    
}

if [ "$#" -ne 2 ]
then
    echo "USAGE: $0 DOMAIN NODE"
    exit 1
fi


generate_certs $1 $2

echo 'done.'
exit 0
