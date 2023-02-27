#!/bin/bash

set -e

echo "check /var/log/envoy"
if [ ! -d /var/log/envoy ]
then
    mkdir -p /var/log/envoy
    chmod 700 /var/log/envoy
    # chown -R www-data:www-data /var/log/envoy
fi

echo "check /lib/systemd/system/envoy.service"
if [ ! -f /lib/systemd/system/envoy.service ]
then
    cat > /lib/systemd/system/envoy.service <<EOF
[Unit]
Description=Envoy proxy for gRPC service.
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/var/log/envoy
ExecStart=/usr/bin/envoy -c /etc/envoy.yaml -l debug
Restart=always
RestartSec=10s

[Install]
WantedBy=multi-user.target
EOF
    chmod 444 /lib/systemd/system/envoy.service
    systemctl daemon-reload
    systemctl enable envoy
fi


echo "done."
exit 0
