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
                    Dhcp {
                        device: self.device.clone(),
                    }
                    .save()?;
                }
                ops_router::v1::wan::Ip::Static(ref ip) => {
                    Static {
                        device: self.device.clone(),
                        address: ip.address.clone(),
                        gateway: ip.gateway.clone(),
                        dns1: ip.dns1.clone(),
                        dns2: ip.dns2.clone().unwrap_or_else(|| "8.8.8.8".to_string()),
                    }
                    .save()?;
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
}

impl Etc for Dhcp {
    fn file(&self) -> PathBuf {
        let it = Path::new(&Component::RootDir)
            .join("etc")
            .join("netplan")
            .join(&self.device);
        it.with_extension("yaml")
    }

    #[cfg(debug_assertions)]
    fn save(&self) -> Result<()> {
        let file = self.file();
        info!("{}\n{}", file.display(), self.render()?);
        Ok(())
    }

    #[cfg(not(debug_assertions))]
    fn save(&self) -> Result<()> {
        let file = self.file();
        info!("write {}", file.display());
        std::fs::write(&file, self.render()?)?;
        Ok(())
    }
}

#[derive(Template)]
#[template(path = "netplan/static.conf", escape = "none")]
pub struct Static {
    pub device: String,
    pub address: String,
    pub gateway: String,
    pub dns1: String,
    pub dns2: String,
}

impl Etc for Static {
    fn file(&self) -> PathBuf {
        let it = Path::new(&Component::RootDir)
            .join("etc")
            .join("netplan")
            .join(&self.device);
        it.with_extension("yaml")
    }

    #[cfg(debug_assertions)]
    fn save(&self) -> Result<()> {
        let file = self.file();
        info!("{}\n{}", file.display(), self.render()?);
        Ok(())
    }

    #[cfg(not(debug_assertions))]
    fn save(&self) -> Result<()> {
        let file = self.file();
        info!("write {}", file.display());
        std::fs::write(&file, self.render()?)?;
        Ok(())
    }
}
