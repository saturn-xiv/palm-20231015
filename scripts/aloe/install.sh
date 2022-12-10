#!/bin/bash

set -e

setup_ubuntu() {
    apt update
    apt -y upgrade
    # isc-dhcp-server
    apt -y install crun podman buildah \
        dnsmasq netplan.io ifmetric ldnsutils net-tools \
        openssl nmap pwgen sqlite3 yamllint \
        iptables iptables-persistent iproute2 traceroute iftop
    apt clean
    apt -y autoremove
    
    if [ -f /etc/netplan/00-installer-config.yaml ]
    then
        mv /etc/netplan/00-installer-config.yaml $HOME/etc.netplan.00-installer-config.yaml
    fi
    sed -ie 's/#UseDNS yes/UseDNS no/g' /etc/ssh/sshd_config
}

install_aloe() {
    local root=/opt/palm
    if [ -d $root ]
    then
        rm -r $root
    fi
    mkdir -p $root
    cd $root
    tar xf $1

    cat > $root/envoy.yml <<EOF
EOF

    cat > $root/start.sh <<EOF
#!/bin/bash

set -e

if [ ! -f $root/config.toml ]
then
    cat > $root/config.toml <<EOF_
secrets = "$(openssl rand -base64 32)"

[rpc]
port = 9999

EOF_
    chmod 400 $root/config.toml
fi


export ENVOY_NAME=docker.io/envoyproxy/envoy:v1.24-latest
podman pull \$ENVOY_NAME
podman run --rm -it --events-backend=file --hostname=palm --network host \
    -v $root/envoy.yml:/envoy.yml -p 9901:9901 -p 9901:9901 \
    \$ENVOY_NAME -c /envoy.yml

echo 'done.'
exit 0

EOF
}

. /etc/os-release

if [ "$#" -ne 1 ]
then
    echo "USAGE: $0 FILE"
    exit 1
fi


if [ $ID == "ubuntu" ]
then   
    setup_ubuntu
    # install_aloe $1
else
    echo "unknown os $ID"
    eixt 1
fi

echo "done($1)."
exit 0
