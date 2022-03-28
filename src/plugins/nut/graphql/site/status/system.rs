use std::fs::read_to_string;
use std::process::Command;

use juniper::GraphQLObject;
use serde::{Deserialize, Serialize};

use super::super::super::super::super::super::Result;

#[derive(GraphQLObject, Serialize, Deserialize, Debug)]
pub struct SystemStatus {
    pub version: String,
    pub cpu: String,
    pub memory: String,
    pub boot: String,
    pub disk: String,
    pub load: String,
    pub fs: String,
    pub swap: String,
    pub uptime: String,
    pub network: String,
}
impl SystemStatus {
    pub fn new() -> Result<Self> {
        let it = Self {
            version: read_to_string("/proc/version")?,
            cpu: read_to_string("/proc/cpuinfo")?,
            memory: read_to_string("/proc/meminfo")?,
            boot: read_to_string("/proc/cmdline")?,
            disk: {
                // read_to_string("/proc/diskstats")?
                let it = Command::new("df").arg("-h").output()?;
                String::from_utf8(it.stdout)?
            },
            load: {
                let it = Command::new("top").arg("-b").arg("-n").arg("1").output()?;
                String::from_utf8(it.stdout)?
            },
            fs: read_to_string("/proc/mounts")?,
            swap: read_to_string("/proc/swaps")?,
            uptime: read_to_string("/proc/uptime")?,
            network: {
                let it = Command::new("ip").arg("address").output()?;
                String::from_utf8(it.stdout)?
            },
        };
        Ok(it)
    }
}
#[derive(GraphQLObject, Serialize, Deserialize, Debug)]
pub struct Os {
    pub sys_name: String,
    pub node_name: String,
    pub machine: String,
    pub version: String,
    pub release: String,
}

impl Default for Os {
    fn default() -> Self {
        let it = nix::sys::utsname::uname();
        Self {
            sys_name: it.sysname().to_string(),
            node_name: it.nodename().to_string(),
            machine: it.machine().to_string(),
            version: it.version().to_string(),
            release: it.release().to_string(),
        }
    }
}
