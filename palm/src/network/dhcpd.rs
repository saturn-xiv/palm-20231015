use std::fs::write as write_file;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::path::{Component, Path, PathBuf};
use std::process::Command;

use askama::Template;
use ipnet::Ipv4Net;

use super::super::{ops::router as ops_router, Result};
use super::Etc;

pub fn apply() -> Result<()> {
    warn!("apply dhcpd settings");
    let out = Command::new("systemctl")
        .arg("restart")
        .arg("isc-dhcp-server")
        .output()?;
    let out = String::from_utf8(out.stdout)?;
    info!("{}", out);
    Ok(())
}

impl ops_router::v1::Lan {
    // https://help.ubuntu.com/community/isc-dhcp-server
    pub fn save(&self, hosts: Vec<Host>) -> Result<()> {
        let net: Ipv4Net = self.address.parse()?;
        let children = net.hosts();

        Conf {
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
        }
        .save()?;
        Ok(())
    }
}

#[derive(Template)]
#[template(path = "dhcp/dhcpd.conf", escape = "none")]
pub struct Conf {
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
    pub name: String,
    pub ip: String,
}

impl Etc for Conf {
    fn save(&self) -> Result<PathBuf> {
        let file = Path::new(&Component::RootDir)
            .join("etc")
            .join("dhcp")
            .join("dhcpd.conf");
        let file = file.with_extension("yaml");
        info!("write {}", file.display());
        write_file(&file, self.render()?)?;
        Ok(file)
    }
}
