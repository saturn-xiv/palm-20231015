use std::path::{Component, Path, PathBuf};
use std::process::Command;

use askama::Template;

use super::super::{ops::router as ops_router, Result};
use super::Etc;

pub fn apply() -> Result<()> {
    warn!("apply netplan settings");
    let out = Command::new("netplan").arg("apply").output()?;
    let out = String::from_utf8(out.stdout)?;
    info!("{}", out);
    Ok(())
}

// https://ubuntu.com/server/docs/network-configuration
impl ops_router::v1::Wan {
    pub fn save(&self) -> Result<()> {
        if let Some(ref ip) = self.ip {
            match ip {
                ops_router::v1::wan::Ip::Dhcp(_) => {
                    super::save(&Dhcp {
                        device: self.device.clone(),
                        mac: self.mac.clone(),
                    })?;
                }
                ops_router::v1::wan::Ip::Static(ref ip) => {
                    super::save(&Static {
                        device: self.device.clone(),
                        mac: self.mac.clone(),
                        address: ip.address.clone(),
                        gateway: ip.gateway.clone(),
                        dns1: ip.dns1.clone(),
                        dns2: ip.dns2.clone(),
                        priority: self.priority,
                        table: Some(self.route()),
                    })?;
                }
            }
        }
        Ok(())
    }
}

#[derive(Template)]
#[template(path = "netplan/dhcp.conf", escape = "none")]
pub struct Dhcp {
    pub device: String,
    pub mac: String,
}

impl Etc for Dhcp {
    fn file(&self) -> PathBuf {
        let it = Path::new(&Component::RootDir)
            .join("etc")
            .join("netplan")
            .join(&self.device);
        it.with_extension("yaml")
    }
}

#[derive(Template)]
#[template(path = "netplan/static.conf", escape = "none")]
pub struct Static {
    pub device: String,
    pub mac: String,
    pub address: String,
    pub gateway: String,
    pub dns1: String,
    pub dns2: Option<String>,
    pub priority: u32,
    pub table: Option<String>,
}

impl Etc for Static {
    fn file(&self) -> PathBuf {
        let it = Path::new(&Component::RootDir)
            .join("etc")
            .join("netplan")
            .join(&self.device);
        it.with_extension("yaml")
    }
}
