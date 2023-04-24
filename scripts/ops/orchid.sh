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

echo "check /lib/systemd/system/$1.service"
if [ ! -f /lib/systemd/system/$1.service ]
then
    cat > /lib/systemd/system/$1.service <<EOF
[Unit]
Description=OAuth services.
After=network.target

[Service]
Type=simple
User=nobody
Group=nogroup
WorkingDirectory=/var/lib/$1
ExecStart=/opt/palm/bin/amd64/orchid server -p 8080
Restart=always
RestartSec=10s

Environment="RUST_LOG=debug"

[Install]
WantedBy=multi-user.target
EOF
    chmod 444 /lib/systemd/system/$1.service
    systemctl daemon-reload
    systemctl enable $1
fi


echo "done.($1)"
exit 0
