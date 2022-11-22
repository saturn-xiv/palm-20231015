use std::fs::{read_dir, read_to_string, write as write_file, File};
use std::io::BufReader;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::path::{Component, Path, PathBuf};
use std::process::Command;

use askama::Template;
use diesel::sqlite::SqliteConnection as Db;
use ipnet::Ipv4Net;
use palm::{
    crypto::{Hmac, Password},
    ops::router::v1,
    Result,
};
use tempfile::NamedTempFile;
use xml::reader::{EventReader, XmlEvent};

use super::models::{host::Dao as HostDao, setting::Dao as SettingDao};

pub fn launch(db: &mut Db) -> Result<String> {
    let mut buf = String::new();
    buf.push_str(
        r###"#!/bin/bash
set -e
        "###,
    );

    {
        let lan: v1::Lan = SettingDao::get(db, None)?;

        // https://help.ubuntu.com/community/isc-dhcp-server
        {
            let net: Ipv4Net = lan.address.parse()?;

            let hosts = net.hosts();

            DhcpdConf {
                netmask: net.netmask().to_string(),
                network: net.network().to_string(),
                broadcast: net.broadcast().to_string(),
                address: net.addr().to_string(),
                begin: hosts
                    .into_iter()
                    .nth(1)
                    .ok_or_else(|| {
                        IoError::new(
                            IoErrorKind::Other,
                            format!("bad dhcp range({})' first", lan.address),
                        )
                    })?
                    .to_string(),
                end: hosts
                    .rev()
                    .nth(1)
                    .ok_or_else(|| {
                        IoError::new(
                            IoErrorKind::Other,
                            format!("bad dhcp range({})' second", lan.address),
                        )
                    })?
                    .to_string(),

                hosts: HostDao::all(db)?
                    .iter()
                    .filter(|x| x.fixed)
                    .map(|x| Host {
                        name: x.name.clone(),
                        mac: x.mac.clone(),
                        ip: x.ip.clone(),
                    })
                    .collect::<_>(),
            }
            .save()?;
        }

        // https://ubuntu.com/server/docs/network-configuration
        for (device, _) in ethernet()?.iter() {
            if device == &lan.device {
                continue;
            }
            let it: v1::Wan = SettingDao::get(db, Some(device))?;
            if let Some(ref ip) = it.ip {
                match ip {
                    v1::wan::Ip::Dhcp(_) => {
                        NetplanDhcp {
                            device: it.device.clone(),
                        }
                        .save()?;
                    }
                    v1::wan::Ip::Static(ref ip) => {
                        NetplanStatic {
                            device: it.device.clone(),
                            address: ip.address.clone(),
                            gateway: ip.gateway.clone(),
                            dns1: ip.dns1.clone(),
                            dns2: ip.dns2.clone().unwrap_or_else(|| "8.8.8.8".to_string()),
                        }
                        .save()?;
                    }
                }
            }
        }

        // https://help.ubuntu.com/community/IptablesHowTo
    }
    buf.push_str(
        r###"

netplan apply
systemctl restart isc-dhcp-server 

echo $(pwgen 32 1) | chpasswd

echo 'done.'
exit 0
        "###,
    );
    Ok(buf)
}

pub fn ethernet() -> Result<Vec<(String, String)>> {
    let mut items = Vec::new();
    let root = palm::network::enternet_root();
    for it in read_dir(&root)? {
        let it = it?.path();
        if let Some(Some(device)) = it.file_name().map(|x| x.to_str()) {
            if device != "lo" {
                let mac = read_to_string(root.join(device).join("address"))?;
                let mac = mac.trim();
                items.push((device.to_string(), mac.to_string()));
            }
        }
    }

    Ok(items)
}

pub const ONBOARD_ETHERNET: &str = "enp3s0";

pub fn setup(db: &mut Db, hmac: &Hmac) -> Result<()> {
    {
        let it = v1::UserProfile {
            nickname: "admin".to_string(),
            password: String::from_utf8(hmac.sum("123456".as_bytes())?)?,
        };
        info!("set user: {}", it.nickname);
        SettingDao::set(db, None, &it)?;
    }
    {
        let it = v1::Lan {
            device: ONBOARD_ETHERNET.to_string(),
            address: "192.168.0.1/24".to_string(),
        };
        info!("set lan {:?}", it);
        SettingDao::set(db, None, &it)?;
    }

    for (device, mac) in ethernet()?.iter() {
        SettingDao::set(
            db,
            Some(device),
            &v1::Wan {
                device: device.clone(),
                mac: mac.clone(),
                capacity: 16,
                ip: Some(v1::wan::Ip::Dhcp(v1::Dhcp::default())),
                ..Default::default()
            },
        )?;
    }

    Ok(())
}

pub trait LanScanner {
    type Item;
    fn scan(&self) -> Result<Vec<Host>>;
}

impl LanScanner for v1::Lan {
    type Item = Self;
    // https://nmap.org/book/man-output.html
    fn scan(&self) -> Result<Vec<Host>> {
        let file = NamedTempFile::new()?;
        {
            debug!("write to {}", file.path().display());
            let out = Command::new("nmap")
                .arg("-oX")
                .arg(file.path())
                .arg("-sn")
                .arg(&self.address)
                .output()?;
            let out = String::from_utf8(out.stdout)?;
            debug!("{}", out);
        }

        let file = file.as_file();
        Host::load(file)
    }
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

#[derive(Debug, Clone, Default)]
pub struct Host {
    pub name: String,
    pub mac: String,
    pub ip: String,
}

impl Host {
    pub fn load(file: &File) -> Result<Vec<Self>> {
        let file = BufReader::new(file);
        let parser = EventReader::new(file);

        let mut items = Vec::new();

        {
            let mut it = Host::default();

            for event in parser {
                match event? {
                    XmlEvent::StartElement {
                        name, attributes, ..
                    } => {
                        if name.local_name == "address" {
                            let mut key = String::new();
                            let mut val = String::new();
                            for at in attributes {
                                match at.name.local_name.as_str() {
                                    "addrtype" => {
                                        key = at.value;
                                    }
                                    "addr" => {
                                        val = at.value;
                                    }
                                    _ => {}
                                }
                            }
                            match key.as_str() {
                                "mac" => {
                                    it.mac = val;
                                }
                                "ipv4" => {
                                    it.ip = val;
                                }
                                _ => {}
                            }
                        }
                    }
                    XmlEvent::EndElement { name } => {
                        if name.local_name == "host" {
                            items.push(it.clone());
                        }
                    }
                    _ => {}
                }
            }
        }

        Ok(items)
    }
}

pub trait Etc {
    fn save(&self) -> Result<PathBuf>;
}

#[derive(Template)]
#[template(path = "etc/dhcp/dhcpd.conf", escape = "none")]
pub struct DhcpdConf {
    pub network: String,
    pub broadcast: String,
    pub netmask: String,
    pub begin: String,
    pub end: String,
    pub address: String,
    pub hosts: Vec<Host>,
}

impl Etc for DhcpdConf {
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

#[derive(Template)]
#[template(path = "etc/netplan/dhcp.conf", escape = "none")]
pub struct NetplanDhcp {
    pub device: String,
}

impl Etc for NetplanDhcp {
    fn save(&self) -> Result<PathBuf> {
        let file = Path::new(&Component::RootDir)
            .join("etc")
            .join("netplan")
            .join(&self.device);
        let file = file.with_extension("yaml");
        info!("write {}", file.display());
        write_file(&file, self.render()?)?;
        Ok(file)
    }
}

#[derive(Template)]
#[template(path = "etc/netplan/static.conf", escape = "none")]
pub struct NetplanStatic {
    pub device: String,
    pub address: String,
    pub gateway: String,
    pub dns1: String,
    pub dns2: String,
}

impl Etc for NetplanStatic {
    fn save(&self) -> Result<PathBuf> {
        let file = Path::new(&Component::RootDir)
            .join("etc")
            .join("netplan")
            .join(&self.device);
        let file = file.with_extension("yaml");
        info!("write {}", file.display());
        write_file(&file, self.render()?)?;
        Ok(file)
    }
}
