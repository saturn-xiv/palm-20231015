#!/bin/bash

set -e

if [ "$#" -ne 1 ]
then
    echo "USAGE: $0 DOMAIN"
    exit 1
fi

echo "check /var/lib/$1"
if [ ! -d /var/lib/$1 ]
then
    mkdir -p /var/lib/$1
    chmod 700 /var/lib/$1
    chown -R www-data:www-data /var/lib/$1
fi

echo "check /lib/systemd/system/api.$1.service"
if [ ! -f /lib/systemd/system/api.$1.service ]
then
    cat > /lib/systemd/system/api.$1.service <<EOF
[Unit]
Description=A total free education & translation & ops solution.
After=network.target

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=/var/lib/$1
ExecStart=/opt/palm/bin/amd64/fig web -p 8080
Restart=always
RestartSec=10s

Environment="RUST_LOG=debug"

[Install]
WantedBy=multi-user.target
EOF
    chmod 444 /lib/systemd/system/api.$1.service
    systemctl daemon-reload
    systemctl enable api.$1
fi

echo "check /lib/systemd/system/rpc.$1.service"
if [ ! -f /lib/systemd/system/rpc.$1.service ]
then
    cat > /lib/systemd/system/rpc.$1.service <<EOF
[Unit]
Description=A total free education & translation & ops solution.
After=network.target

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=/var/lib/$1
ExecStart=/opt/palm/bin/amd64/fig rpc -p 8080
Restart=always
RestartSec=10s

Environment="RUST_LOG=debug"

[Install]
WantedBy=multi-user.target
EOF
    chmod 444 /lib/systemd/system/rpc.$1.service
    systemctl daemon-reload
    systemctl enable rpc.$1
fi

echo "done.($1)"
exit 0
