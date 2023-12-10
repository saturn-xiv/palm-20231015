macro_rules! to_protocol {
    ($x:expr) => {
        if $x {
            "tcp"
        } else {
            "udp"
        }
    };
}
macro_rules! to_accept {
    ($x:expr) => {
        if $x {
            "ACCEPT"
        } else {
            "DROP"
        }
    };
}

pub mod rule;

use log::info;
use std::fmt::{Error as FmtError, Write};
use std::process::Command;
use std::result::Result as StdResult;

use ipnet::Ipv4Net;
use serde::{Deserialize, Serialize};

use super::super::Result;

// https://www.digitalocean.com/community/tutorials/iptables-essentials-common-firewall-rules-and-commands

#[cfg(not(debug_assertions))]
pub fn apply() -> Result<()> {
    warn!("apply iptables settings");
    let out = Command::new("netfilter-persistent").arg("save").output()?;
    let out = String::from_utf8(out.stdout)?;
    info!("{}", out);
    Ok(())
}

#[cfg(debug_assertions)]
pub fn apply() -> Result<()> {
    info!("");
    Ok(())
}

pub fn status() -> Result<Vec<String>> {
    let out = Command::new("iptables").arg("--list").output()?;
    let out = String::from_utf8(out.stdout)?;

    let mut items = Vec::new();
    for it in out.lines() {
        items.push(it.to_string());
    }
    Ok(items)
}

pub trait Iptables {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError>;
}

pub struct Metric(pub Vec<super::Wan>);

impl Iptables for Metric {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        for it in self.0.iter() {
            let device = &it.device;
            let metric = it.metric;
            writeln!(buf, "ifmetric {device} {metric}")?;
        }
        Ok(())
    }
}
pub struct Persistent {}

impl Iptables for Persistent {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        writeln!(
            buf,
            r###"
netfilter-persistent save
# echo $(pwgen 32 1) | chpasswd
"###
        )?;
        Ok(())
    }
}

pub struct Flush {
    pub input: bool,
    pub output: bool,
    pub forward: bool,
}

impl Default for Flush {
    fn default() -> Self {
        Self {
            input: false,
            output: true,
            forward: false,
        }
    }
}

impl Iptables for Flush {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        let input = to_accept!(self.input);
        let output = to_accept!(self.output);
        let forward = to_accept!(self.forward);
        let hostname = "rt";

        // echo "net.ipv4.ip_forward=1" > /etc/sysctl.d/20-router.conf
        // echo "net.ipv4.tcp_syncookies=1" >> /etc/sysctl.d/20-router.conf
        // echo "net.ipv4.icmp_ignore_bogus_error_responses=1" >> /etc/sysctl.d/20-router.conf
        // echo "net.ipv4.fib_multipath_hash_policy=1" >> /etc/sysctl.d/20-router.conf
        // echo "net.ipv4.fib_multipath_use_neigh=1" >> /etc/sysctl.d/20-router.conf

        // ip rule add table 916
        // ip route add 10.173.0.0/16 via 10.170.72.254 dev pppoe-VWAN31 table 916
        // ip route add 10.170.0.0/16 via 10.170.72.254 dev pppoe-VWAN32 table 916

        writeln!(
            buf,
            r###"
# Resetting rules

echo 1 > /proc/sys/net/ipv4/ip_forward
echo 1 > /proc/sys/net/ipv4/tcp_syncookies
echo 1 > /proc/sys/net/ipv4/icmp_ignore_bogus_error_responses

echo 1 > /proc/sys/net/ipv4/fib_multipath_hash_policy
echo 1 > /proc/sys/net/ipv4/fib_multipath_use_neigh

echo "{hostname}" > /etc/hostname
cat > /etc/hosts <<EOF
127.0.0.1       localhost
::1             localhost
EOF

modprobe ip_nat_ftp

iptables -P INPUT {input}
iptables -P OUTPUT {output}
iptables -P FORWARD {forward}

iptables -F
iptables -X
iptables -t nat -F
iptables -t nat -X
iptables -t mangle -F
iptables -t mangle -X
iptables -t raw -F
iptables -t raw -X
iptables -t security -F
iptables -t security -X
"###
        )?;
        Ok(())
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Local {
    pub lan: Option<String>,
    pub dmz: Option<String>,
}

impl Iptables for Local {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        writeln!(
            buf,
            r###"
# Allowing Loopback Connections
iptables -A INPUT -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT

# Allowing ping
iptables -A INPUT -p icmp --icmp-type echo-request -j ACCEPT
iptables -A OUTPUT -p icmp --icmp-type echo-request -j ACCEPT
iptables -A INPUT -p icmp --icmp-type echo-reply -j ACCEPT
iptables -A OUTPUT -p icmp --icmp-type echo-reply -j ACCEPT

# Allowing Established and Related Incoming Connections
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
# Allowing Established Outgoing Connections
iptables -A OUTPUT -m conntrack --ctstate ESTABLISHED -j ACCEPT

# Dropping Invalid Packets
iptables -A INPUT -m conntrack --ctstate INVALID -j DROP
"###
        )?;

        for (tcp, port) in &[
            // http
            (true, 80),
            // dns
            (true, 53),
            (false, 53),
            // dhcpcd
            (false, 67),
        ] {
            if let Some(ref device) = self.lan {
                rule::Rule::In {
                    device: device.clone(),
                    tcp: *tcp,
                    port: *port,
                    source: None,
                }
                .write(buf)?;
            }
            if let Some(ref device) = self.dmz {
                rule::Rule::In {
                    device: device.clone(),
                    tcp: *tcp,
                    port: *port,
                    source: None,
                }
                .write(buf)?;
            }
        }

        Ok(())
    }
}

pub struct Forward {
    pub wan: String,
    pub lan: Ipv4Net,
}

impl Iptables for Forward {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        let wan = &self.wan;
        let lan_network = &self.lan.network();
        let lan_prefix_len = self.lan.prefix_len();
        writeln!(
            buf,
            r###"iptables -t nat -A POSTROUTING -o {wan} -s {lan_network}/{lan_prefix_len} -j MASQUERADE"###
        )?;
        Ok(())
    }
}

pub struct Block {
    pub device: String,
    pub source: String,
}

impl Iptables for Block {
    fn write<T: Write>(&self, buf: &mut T) -> StdResult<(), FmtError> {
        let device = &self.device;
        let source = &self.source;
        writeln!(buf, "iptables -A INPUT -i {device} -s {source} -j DROP")?;
        Ok(())
    }
}
