use std::io::{prelude::*, Error as IoError, ErrorKind as IoErrorKind};
use std::path::{Component, Path, PathBuf};
use std::process::Command;

use askama::Template;
use ipnet::Ipv4Net;
use tempfile::NamedTempFile;

use super::super::{ops::router as ops_router, Result};
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
    Ok(())
}

pub trait Dnsmasq {
    fn save(&self, hosts: Vec<Host>) -> Result<()>;
}

impl Dnsmasq for ops_router::v1::Lan {
    // https://wiki.archlinux.org/title/dnsmasq
    // https://www.iana.org/assignments/bootp-dhcp-parameters/bootp-dhcp-parameters.xhtml
    fn save(&self, hosts: Vec<Host>) -> Result<()> {
        let net: Ipv4Net = self.address.parse()?;
        let children = net.hosts();

        super::save(&Conf {
            device: self.device.clone(),
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
                        format!("bad dhcp range({})' first", self.address),
                    )
                })?
                .to_string(),
            end: children
                .rev()
                .nth(1)
                .ok_or_else(|| {
                    IoError::new(
                        IoErrorKind::Other,
                        format!("bad dhcp range({})' second", self.address),
                    )
                })?
                .to_string(),

            hosts,
        })?;
        Ok(())
    }
}

#[derive(Template)]
#[template(path = "dnsmasq.conf", escape = "none")]
pub struct Conf {
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
