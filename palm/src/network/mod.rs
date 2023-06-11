pub mod dhcpd;
pub mod dnsmasq;
pub mod ethernet;
pub mod iproute2;
pub mod iptables;
pub mod netplan;
pub mod nginx;

use std::any::type_name;
use std::fs::metadata;
use std::net::IpAddr;
use std::path::PathBuf;
use std::process::Command;
use std::result::Result as StdResult;

use askama::Template;
use eui48::MacAddress;
use ipnet::Ipv4Net;
use lazy_static::lazy_static;
use serde::{Deserialize, Serialize};
use validator::{Validate, ValidationErrors};

use super::Result;

lazy_static! {
    pub static ref GOOGLE_DNS_V4: Vec<&'static str> = vec!["8.8.8.8", "8.8.4.4",];
    pub static ref GOOGLE_DNS_V6: Vec<&'static str> =
        vec!["2001:4860:4860::8888", "2001:4860:4860::8844",];
    pub static ref GLOBAL_DNS_V4: Vec<&'static str> = vec!["1.1.1.1", "1.0.0.1",];
    pub static ref GLOBAL_DNS_V6: Vec<&'static str> =
        vec!["2606:4700:4700::1111", "2606:4700:4700::1001"];
    pub static ref ALI_DNS_V4: Vec<&'static str> = vec!["223.5.5.5", "223.6.6.6",];
    pub static ref ALI_DNS_V6: Vec<&'static str> = vec!["2400:3200::1", "2400:3200:baba::1"];
}

pub const BASH_HEADER: &str = r###"#!/bin/bash
set -e
"###;
pub const BASH_FOOTER: &str = r###"
echo 'done.'
exit 0
"###;

pub trait Etc: Template {
    fn file(&self) -> PathBuf;
}

#[cfg(debug_assertions)]
pub fn save<T: Etc>(it: &T) -> Result<()> {
    let file = it.file();
    info!("{} {}\n{}", type_name::<T>(), file.display(), it.render()?);
    Ok(())
}

#[cfg(not(debug_assertions))]
pub fn save<T: Etc>(it: &T) -> Result<()> {
    let file = it.file();
    info!("write {} to {}", type_name::<T>(), file.display());
    std::fs::write(&file, it.render()?)?;
    Ok(())
}

pub fn is_root() -> bool {
    nix::unistd::Uid::current().is_root()
}

pub fn logs() -> Result<Vec<String>> {
    let out = Command::new("journalctl").arg("--boot").output()?;
    let out = String::from_utf8(out.stdout)?;

    let mut items = Vec::new();
    for it in out.lines() {
        items.push(it.to_string());
    }
    Ok(items)
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Lan {
    pub device: String,
    pub address: String,
    pub mac: String,
    pub metric: u8,
}

impl Lan {
    fn validate_device(&self) -> bool {
        if let Ok(ref it) = metadata(ethernet::root().join(&self.device)) {
            if it.is_dir() {
                return true;
            }
        }
        false
    }
}

impl Validate for Lan {
    fn validate(&self) -> StdResult<(), ValidationErrors> {
        if self.address.parse::<Ipv4Net>().is_ok()
            && self.validate_device()
            && MacAddress::parse_str(&self.mac).is_ok()
            && self.metric > 0
        {
            return Ok(());
        }
        Err(ValidationErrors::new())
    }
}
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Dmz {
    pub device: String,
    pub metric: u8,
    pub address: String,
    pub mac: String,
}
impl Dmz {
    fn validate_device(&self) -> bool {
        if let Ok(ref it) = metadata(ethernet::root().join(&self.device)) {
            if it.is_dir() {
                return true;
            }
        }
        false
    }
}

impl Validate for Dmz {
    fn validate(&self) -> StdResult<(), ValidationErrors> {
        if self.address.parse::<Ipv4Net>().is_ok()
            && self.validate_device()
            && MacAddress::parse_str(&self.mac).is_ok()
            && self.metric > 0
        {
            return Ok(());
        }
        Err(ValidationErrors::new())
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum Ip {
    Dhcp {
        v6: bool,
    },
    Static {
        address: String,
        gateway: String,
        dns1: String,
        dns2: Option<String>,
    },
}

impl Validate for Ip {
    fn validate(&self) -> StdResult<(), ValidationErrors> {
        match *self {
            Self::Dhcp { .. } => Ok(()),
            Self::Static {
                ref address,
                ref gateway,
                ref dns1,
                ref dns2,
            } => {
                if address.parse::<Ipv4Net>().is_ok()
                    && gateway.parse::<Ipv4Net>().is_ok()
                    && dns1.parse::<Ipv4Net>().is_ok()
                {
                    if let Some(dns2) = dns2 {
                        if dns2.parse::<Ipv4Net>().is_ok() {
                            return Ok(());
                        }
                        return Ok(());
                    }
                }
                Err(ValidationErrors::new())
            }
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Wan {
    pub device: String,
    pub ip: Ip,
    pub mac: String,
    pub metric: u8,
}
impl Wan {
    pub fn route(&self) -> String {
        format!("rt.{}", self.device)
    }
    fn validate_device(&self) -> bool {
        if let Ok(ref it) = metadata(ethernet::root().join(&self.device)) {
            if it.is_dir() {
                return true;
            }
        }
        false
    }
}

impl Validate for Wan {
    fn validate(&self) -> StdResult<(), ValidationErrors> {
        if self.ip.validate().is_ok()
            && self.validate_device()
            && MacAddress::parse_str(&self.mac).is_ok()
            && self.metric > 0
        {
            return Ok(());
        }
        Err(ValidationErrors::new())
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Dns {
    pub items: Vec<String>,
}

impl Validate for Dns {
    fn validate(&self) -> StdResult<(), ValidationErrors> {
        for it in self.items.iter() {
            if it.parse::<IpAddr>().is_err() {
                return Err(ValidationErrors::new());
            }
        }
        Ok(())
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Host {
    pub mac: String,
    pub name: String,
    pub ip: String,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct WanPool {
    pub items: Vec<(Wan, u8)>,
}
