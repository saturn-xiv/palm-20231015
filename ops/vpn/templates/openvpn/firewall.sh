#!/bin/sh

set -e

echo "1" > /proc/sys/net/ipv4/ip_forward

iptables -t nat -I POSTROUTING -s {{vpn_network}} -o {{wan_dvice}} -j MASQUERADE

exit 0
