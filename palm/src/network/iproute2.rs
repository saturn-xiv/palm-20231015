use std::collections::BTreeMap;
use std::path::{Component, Path, PathBuf};

use askama::Template;

use super::super::ops::router::v1 as ops_router;
use super::Etc;

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
    pub items: BTreeMap<u32, String>,
}

impl Config {
    pub fn new(wan: &[ops_router::Wan]) -> Self {
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
