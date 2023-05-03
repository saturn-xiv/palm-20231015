#!/bin/bash

set -e

function build_htdocs() {
    local www_root=/var/www/$1
    local repo=$www_root/repo.git
    local target=$www_root/htdocs
        
    if [ -d $repo ]
    then
        cd $repo
        git pull
        git submodule update --init --recursive
    else
        git clone --recurse-submodules $2 $repo
    fi

    cd $repo
    hugo --destination $target

    if [ ! -f $www_root/nginx.conf ]
    then
    cat > $www_root/nginx.conf <<EOF
server {
    listen 80;
    root $target;
    index index.html;
    server_name $1;
    access_log $www_root/logs/access.log;
    error_log $www_root/logs/error.log;
}
EOF
    fi
}

if [ "$#" -ne 2 ]
then
    echo "USAGE: $0 DOMAIN REPO"
    exit 1
fi

build_htdocs $1 $2

echo "done($1)."
exit 0
