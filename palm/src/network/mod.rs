pub mod dhcpd;
pub mod ethernet;
pub mod iptables;
pub mod netplan;

use std::fs::metadata;
use std::net::Ipv4Addr;
use std::path::PathBuf;
use std::process::Command;
use std::result::Result as StdResult;

use ipnet::Ipv4Net;
use validator::{Validate, ValidationErrors};

use super::{ops::router as ops_router, Result};

pub trait Etc {
    fn save(&self) -> Result<PathBuf>;
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
        if let Ok(ref it) = metadata(&ethernet::root().join(&self.device)) {
            if it.is_dir() {
                return true;
            }
        }
        false
    }
    fn validate_address(&self) -> bool {
        self.address.parse::<Ipv4Net>().is_ok()
    }
}

impl Validate for ops_router::v1::Lan {
    fn validate(&self) -> StdResult<(), ValidationErrors> {
        if self.validate_address() && self.validate_device() {
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
    fn validate_device(&self) -> bool {
        if let Ok(ref it) = metadata(&ethernet::root().join(&self.device)) {
            if it.is_dir() {
                return true;
            }
        }
        false
    }
    fn validate_ip(&self) -> bool {
        if let Some(ops_router::v1::wan::Ip::Static(ref it)) = self.ip {
            return it.validate().is_ok();
        }
        false
    }
}

impl Validate for ops_router::v1::Wan {
    fn validate(&self) -> StdResult<(), ValidationErrors> {
        if self.validate_ip() && self.validate_device() {
            return Ok(());
        }
        Err(ValidationErrors::new())
    }
}
