# OpenVPN with PostgreSQL

## Install OpenVPN

```bash
sudo apt install openvpn easy-rsa net-tools libpam-pgsql
```

## Create CA

```bash
make-cadir /etc/openvpn/easy-rsa

cd /opt/openvpn
openvpn --genkey tls-auth ta.key

cd /etc/openvpn/easy-rsa
./easyrsa init-pki
./easyrsa build-ca
./easyrsa gen-dh

# for server
./easyrsa gen-req SERVER_NAME nopass
./easyrsa sign-req server SERVER_NAME
cp pki/dh.pem pki/ca.crt pki/issued/SERVER_NAME.crt pki/private/SERVER_NAME.key /etc/openvpn/
echo 'net.ipv4.ip_forward=1' >> /etc/sysctl.conf
sysctl -p /etc/sysctl.conf
# /usr/share/doc/openvpn/examples/sample-config-files/server.conf => /etc/openvpn/server.conf
systemctl start openvpn@server

# /usr/share/doc/openvpn/examples/sample-config-files/client.conf => /etc/openvpn/client.conf
./easyrsa gen-req CLIENT_NAME nopass
./easyrsa sign-req client CLIENT_NAME
cp ../ta.key pki/ca.crt pki/issued/CLIENT_NAME.crt pki/private/CLIENT_NAME.key /etc/openvpn/

```

## Server setting

```bash

```

## Documents

- [Service - OpenVPN](https://ubuntu.com/server/docs/service-openvpn)
