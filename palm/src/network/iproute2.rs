use std::collections::BTreeMap;
use std::path::{Component, Path, PathBuf};

use askama::Template;

use super::super::Result;
use super::Etc;

impl super::WanPool {
    #[cfg(debug_assertions)]
    pub fn apply(&self) -> Result<()> {
        let mut cmd = "route replace default".to_string();
        for (wan, weight) in self.items.iter() {
            let gateway = super::ethernet::gateway(&wan.device)?;
            cmd.push_str(&format!(" nexthop via {gateway} weight {weight}"));
        }
        info!("{cmd}");
        Ok(())
    }

    #[cfg(not(debug_assertions))]
    pub fn apply(&self) -> Result<()> {
        let mut cmd = std::process::Command::new("ip");
        let mut out = cmd.arg("route").arg("replace").arg("default");
        for (wan, weight) in self.items.iter() {
            let gw = super::ethernet::gateway(&wan.device)?;
            out = out
                .arg("nexthop")
                .arg("via")
                .arg(gw.to_string())
                .arg("weight")
                .arg(weight.to_string());
        }

        let out = out.output()?;
        let out = String::from_utf8(out.stdout)?;
        debug!("{}", out);
        Ok(())
    }
}

/*
ip route
route -n
tracert/traceroute www.google.com
ping -c 4 -I wlp0s20f0u5 www.google.com
ip rule sh
ip route list
curl cip.cc --interface wlp0s20f0u5
*/

// https://linux-ip.net/html/routing-tables.html
#[derive(Template)]
#[template(path = "iproute2/rt_tables.conf", escape = "none")]
pub struct Config {
    pub items: BTreeMap<u8, String>,
}

impl Config {
    pub fn new(wan: &[super::Wan]) -> Self {
        let mut items = BTreeMap::new();
        for it in wan {
            items.insert(it.metric, it.route());
        }
        Self { items }
    }
}

impl Etc for Config {
    fn file(&self) -> PathBuf {
        Path::new(&Component::RootDir)
            .join("etc")
            .join("iproute2")
            .join("rt_tables")
    }
}
