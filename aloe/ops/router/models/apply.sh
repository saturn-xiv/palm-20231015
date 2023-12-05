#!/bin/bash

set -e

echo "setup system"

modprobe bonding miimon=100  mode=6
# modinfo bonding

echo "{{ .Name }}" > /etc/hostname

cat > /etc/locale.gen <<EOF
en_US.UTF-8 UTF-8
EOF
locale-gen

systemctl enable systemd-networkd
systemctl enable systemd-resolved
systemctl enable systemd-timesyncd
systemctl enable dnsmasq

ln -sf /run/systemd/resolve/stub-resolv.conf /etc/resolv.conf
ln -sf /usr/share/zoneinfo/UTC /etc/localtime
timedatectl set-ntp true

# https://man.archlinux.org/man/systemd.network.5
echo "setup systemd network"
if [ -d /etc/systemd/network ]
then
    rm -rv /etc/systemd/network
fi
mkdir -p /etc/systemd/network

{{ range .Wan }}
    cat > /etc/systemd/network/20-wan-{{ .Device }}.network <<EOF
[Match]
Name={{ .Device }}

{{ if .Dhcp }}
[Network]
DHCP=yes

[DHCPv4]
RouteMetric={{ .Metric }}
{{ else }}
[Network]
Address={{ .Address }}
Gateway={{ .Gateway }}
DNS={{ .DNS }}
Metric={{ .Metric }}
{{ end }}
EOF
{{ end }}

cat > /etc/systemd/network/20-dmz-{{ .Dmz.Device }}.network <<EOF
[Match]
Name={{ .Device }}

[Network]
Address={{ .Address }}
EOF
cat > /etc/systemd/network/20-lan-{{ .Lan.Device }}.network <<EOF
[Match]
Name={{ .Device }}

[Network]
Address={{ .Address }}
EOF
cat > /etc/systemd/network/20-guest-{{ .Guest.Device }}.network <<EOF
[Match]
Name={{ .Device }}

[Network]
Address={{ .Address }}
EOF

echo "setup dnsmasq"
# https://www.iana.org/assignments/bootp-dhcp-parameters/bootp-dhcp-parameters.xhtml
# dnsmasq --test
# drill www.google.com
# cat /var/lib/misc/dnsmasq.leases
if [ -d /etc/dnsmasq ]
then
    rm -rv /etc/dnsmasq
fi
mkdir -p /etc/dnsmasq

{{ range .Dnsmasq.Items }}
cat > /etc/dnsmasq/{{ .Device }}.conf <<EOF
interface={{ .Device }}
bind-interfaces

# default gateway
dhcp-option=3,{{ .Address }}
# time server
dhcp-option=4,{{ .Address }}
# dns
dhcp-option=6,{{ .Address }}

dhcp-range={{ .DhcpRange.Begin }},{{ .DhcpRange.End }},2h

{{ range .StaticIps }}
dhcp-host={{ .Mac }},{{ .Ip }}
{{ end }}

listen-address={{ .Address }}
cache-size=10000

conf-file=/usr/share/dnsmasq/trust-anchors.conf
dnssec

no-resolv
{{ range .DnsServers }}
server={{ . }}
{{ end }}
EOF

cat > /usr/lib/systemd/system/dnsmasq-{{ .Device }}.service <<EOF
[Unit]
Description=dnsmasq - A lightweight DHCP and caching DNS server({{ .Device }})
Documentation=man:dnsmasq(8)
After=network.target
Before=network-online.target nss-lookup.target
Wants=nss-lookup.target

[Service]
Type=dbus
BusName=uk.org.thekelleys.dnsmasq
ExecStartPre=/usr/bin/dnsmasq --test
ExecStart=/usr/bin/dnsmasq -k --enable-dbus --user=dnsmasq --conf-file /etc/dnsmasq/{{ .Device }}.conf --pid-file /var/run/dnsmasq-{{ .Device }}.pid
ExecReload=/bin/kill -HUP \$MAINPID
Restart=on-failure
PrivateDevices=true
ProtectSystem=full

[Install]
WantedBy=multi-user.target
{{ end }}
EOF

systemctl enable dnsmasq-{{ .Device }}
{{ end }}

echo "setup firewalls"

echo 'done.'
exit 0
