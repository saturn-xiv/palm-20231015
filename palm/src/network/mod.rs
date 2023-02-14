pub mod dhcpd;
pub mod dnsmasq;
pub mod ethernet;
pub mod iproute2;
pub mod iptables;
pub mod netplan;
pub mod nginx;

use std::any::type_name;
use std::fs::metadata;
use std::net::{IpAddr, Ipv4Addr};
use std::path::PathBuf;
use std::process::Command;
use std::result::Result as StdResult;

use askama::Template;
use eui48::MacAddress;
use ipnet::Ipv4Net;
use lazy_static::lazy_static;
use validator::{validate_length, Validate, ValidationErrors};

use super::{crypto::Password, ops::router as ops_router, Result};

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

impl ops_router::v1::Lan {
    fn validate_device(&self) -> bool {
        if let Ok(ref it) = metadata(ethernet::root().join(&self.device)) {
            if it.is_dir() {
                return true;
            }
        }
        false
    }
    fn validate_address(&self) -> bool {
        self.address.parse::<Ipv4Net>().is_ok()
    }
    fn validate_mac(&self) -> bool {
        MacAddress::parse_str(&self.mac).is_ok()
    }
}

impl Validate for ops_router::v1::Lan {
    fn validate(&self) -> StdResult<(), ValidationErrors> {
        if self.validate_address()
            && self.validate_device()
            && self.validate_mac()
            && self.metric > 0
        {
            return Ok(());
        }
        Err(ValidationErrors::new())
    }
}

impl ops_router::v1::Dmz {
    fn validate_device(&self) -> bool {
        if let Ok(ref it) = metadata(ethernet::root().join(&self.device)) {
            if it.is_dir() {
                return true;
            }
        }
        false
    }
    fn validate_address(&self) -> bool {
        self.address.parse::<Ipv4Net>().is_ok()
    }
    fn validate_mac(&self) -> bool {
        MacAddress::parse_str(&self.mac).is_ok()
    }
}

impl Validate for ops_router::v1::Dmz {
    fn validate(&self) -> StdResult<(), ValidationErrors> {
        if self.validate_address()
            && self.validate_device()
            && self.validate_mac()
            && self.metric > 0
        {
            return Ok(());
        }
        Err(ValidationErrors::new())
    }
}

impl ops_router::v1::Static {
    fn validate_address(&self) -> bool {
        self.address.parse::<Ipv4Net>().is_ok()
    }
    fn validate_gateway(&self) -> bool {
        self.gateway.parse::<Ipv4Addr>().is_ok()
    }
    fn validate_dns1(&self) -> bool {
        self.dns1.parse::<Ipv4Addr>().is_ok()
    }
    fn validate_dns2(&self) -> bool {
        if let Some(ref it) = self.dns2 {
            return it.parse::<Ipv4Addr>().is_ok();
        }
        true
    }
}

impl Validate for ops_router::v1::Static {
    fn validate(&self) -> StdResult<(), ValidationErrors> {
        if self.validate_address()
            && self.validate_gateway()
            && self.validate_dns1()
            && self.validate_dns2()
        {
            return Ok(());
        }
        Err(ValidationErrors::new())
    }
}

impl ops_router::v1::Wan {
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
    fn validate_ip(&self) -> bool {
        if let Some(ops_router::v1::wan::Ip::Dhcp(_)) = self.ip {
            return true;
        }
        if let Some(ops_router::v1::wan::Ip::Static(ref it)) = self.ip {
            return it.validate().is_ok();
        }
        false
    }
    fn validate_mac(&self) -> bool {
        MacAddress::parse_str(&self.mac).is_ok()
    }
}

impl Validate for ops_router::v1::Wan {
    fn validate(&self) -> StdResult<(), ValidationErrors> {
        if self.validate_ip() && self.validate_device() && self.validate_mac() && self.metric > 0 {
            return Ok(());
        }
        Err(ValidationErrors::new())
    }
}

impl Validate for ops_router::v1::Dns {
    fn validate(&self) -> StdResult<(), ValidationErrors> {
        for it in self.items.iter() {
            if it.parse::<IpAddr>().is_err() {
                return Err(ValidationErrors::new());
            }
        }
        Ok(())
    }
}

impl ops_router::v1::UserProfile {
    pub fn password<P: Password>(hmac: &P, plain: &str) -> Result<String> {
        let buf = hmac.sign(plain.as_bytes())?;
        let it = String::from_utf8_lossy(&buf[..]);
        Ok(it.to_string())
    }
    pub fn verify<P: Password>(&self, hmac: &P, code: &str) -> bool {
        hmac.verify(code.as_bytes(), self.password.as_bytes())
    }
}

impl Validate for ops_router::v1::UserProfile {
    fn validate(&self) -> StdResult<(), ValidationErrors> {
        if validate_length(&self.nickname, Some(2), Some(32), None)
            && validate_length(&self.password, Some(6), Some(32), None)
        {
            return Ok(());
        }
        Err(ValidationErrors::new())
    }
}
