use std::path::{Component, Path, PathBuf};

use askama::Template;

use super::super::{ops::router as ops_router, Result};
use super::Etc;

#[cfg(debug_assertions)]
pub fn apply() -> Result<()> {
    info!("netplan apply");
    Ok(())
}

// yamllint xxx.yaml
// netplan generate
// netplan --debug apply
#[cfg(not(debug_assertions))]
pub fn apply() -> Result<()> {
    warn!("apply netplan settings");
    let out = std::process::Command::new("netplan")
        .arg("apply")
        .output()?;
    let out = String::from_utf8(out.stdout)?;
    info!("{}", out);
    Ok(())
}

// https://ubuntu.com/server/docs/network-configuration
impl ops_router::v1::Wan {
    pub fn save(&self) -> Result<()> {
        if let Some(ref ip) = self.ip {
            match ip {
                ops_router::v1::wan::Ip::Dhcp(ref it) => {
                    super::save(&Dhcp {
                        device: self.device.clone(),
                        mac: self.mac.clone(),
                        metric: self.metric,
                        v6: it.v6,
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
                        metric: self.metric,
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
    pub metric: u32,
    pub v6: bool,
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
    pub metric: u32,
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
