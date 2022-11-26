use std::io::{prelude::*, Error as IoError, ErrorKind as IoErrorKind};
use std::net::Ipv4Addr;
use std::path::{Component, Path, PathBuf};
use std::process::Command;

use askama::Template;
use ipnet::Ipv4Net;
use tempfile::NamedTempFile;

use super::super::{ops::router::v1 as ops_router_v1, Result};
use super::Etc;

pub struct Arp {
    pub hosts: Vec<Host>,
}

impl Arp {
    pub fn bind(&self) -> Result<()> {
        let mut file = NamedTempFile::new()?;
        {
            let file = file.as_file_mut();
            for it in self.hosts.iter() {
                writeln!(file, "{} {}", it.ip, it.mac)?;
            }
        }
        warn!("bind arp table {} hosts", self.hosts.len());
        let out = Command::new("arp").arg("-f").arg(file.path()).output()?;
        let out = String::from_utf8(out.stdout)?;
        info!("{}", out);
        Ok(())
    }
}

pub fn apply() -> Result<()> {
    warn!("apply dnsmasq settings");
    let out = Command::new("systemctl")
        .arg("restart")
        .arg("dnsmasq")
        .output()?;
    let out = String::from_utf8(out.stdout)?;
    info!("{}", out);
    super::save(&Reslov)?;
    Ok(())
}

macro_rules! to_zone {
    ($x:expr, $h:expr) => {{
        let net: Ipv4Net = $x.address.parse()?;
        let children = net.hosts();
        let hosts: Vec<Host> = $h
            .iter()
            .filter(|x| {
                x.ip.parse::<Ipv4Addr>()
                    .map(|x| net.contains(&x))
                    .unwrap_or(false)
            })
            .map(|x| Host {
                mac: x.mac.clone(),
                ip: x.ip.clone(),
            })
            .collect::<_>();

        super::save(&super::netplan::Static {
            device: $x.device.clone(),
            mac: $x.mac.clone(),
            address: $x.address.clone(),
            gateway: net.addr().to_string(),
            dns1: $x.dns1.clone(),
            dns2: $x.dns2.clone(),
            metric: $x.metric,
        })?;
        Zone {
            device: $x.device.clone(),
            netmask: net.netmask().to_string(),
            network: net.network().to_string(),
            broadcast: net.broadcast().to_string(),
            address: net.addr().to_string(),
            begin: children
                .into_iter()
                .nth(1)
                .ok_or_else(|| {
                    IoError::new(
                        IoErrorKind::Other,
                        format!("bad dhcp range({})' first", $x.address),
                    )
                })?
                .to_string(),
            end: children
                .rev()
                .nth(1)
                .ok_or_else(|| {
                    IoError::new(
                        IoErrorKind::Other,
                        format!("bad dhcp range({})' second", $x.address),
                    )
                })?
                .to_string(),

            hosts,
        }
    }};
}

/*
dnsmasq --test
dig @xxx.xxx.xxx.xxx -4 www.google.com
drill www.google.com
nslookup www.google.com
ping -I eth1 www.google.com

https://wiki.archlinux.org/title/dnsmasq
https://www.iana.org/assignments/bootp-dhcp-parameters/bootp-dhcp-parameters.xhtml
https://thekelleys.org.uk/dnsmasq/docs/dnsmasq-man.html

*/

pub fn save(
    lan: &ops_router_v1::Lan,
    dmz: &ops_router_v1::Dmz,
    dns: &ops_router_v1::Dns,
    hosts: &[ops_router_v1::Host],
) -> Result<()> {
    let lan = to_zone!(lan, hosts);
    let dmz = to_zone!(dmz, hosts);
    super::save(&Conf {
        lan,
        dmz,
        dns: dns.items.clone(),
    })?;
    Ok(())
}

#[derive(Template)]
#[template(path = "dnsmasq.conf", escape = "none")]
pub struct Conf {
    pub lan: Zone,
    pub dmz: Zone,
    pub dns: Vec<String>,
}

pub struct Zone {
    pub device: String,
    pub network: String,
    pub broadcast: String,
    pub netmask: String,
    pub begin: String,
    pub end: String,
    pub address: String,
    pub hosts: Vec<Host>,
}

pub struct Host {
    pub mac: String,
    pub ip: String,
}

impl Etc for Conf {
    fn file(&self) -> PathBuf {
        Path::new(&Component::RootDir)
            .join("etc")
            .join("dnsmasq.conf")
    }
}

#[derive(Template)]
#[template(path = "resolv.conf", escape = "none")]
pub struct Reslov;

impl Etc for Reslov {
    fn file(&self) -> PathBuf {
        Path::new(&Component::RootDir)
            .join("etc")
            .join("resolv.conf")
    }
}
