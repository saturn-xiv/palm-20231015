use std::fs::File;
use std::io::BufReader;
use std::process::Command;

use askama::Template;
use diesel::sqlite::SqliteConnection as Db;
use palm::{
    crypto::{Hmac, Password},
    ops::router::v1,
    Result,
};
use tempfile::NamedTempFile;
use xml::reader::{EventReader, XmlEvent};

use super::models::setting::Dao as SettingDao;

pub fn ethernet() -> Result<Vec<(String, String)>> {
    // TODO
    todo!()
}

pub fn launch(db: &mut Db) -> Result<String> {
    // TODO
    todo!()
}

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
            device: "enp3s0".to_string(),
            network: "192.168.0.0".to_string(),
            cidr: 24,
        };
        info!("set lan {:?}", it);
        SettingDao::set(db, None, &it)?;
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
                .arg(format!("{}/{}", self.network, self.cidr))
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

#[derive(Template)]
#[template(path = "etc/dhcp/dhcpd.conf", escape = "none")]
pub struct DhcpdConf {
    pub subnet: String,
    pub netmask: String,
    pub begin: String,
    pub end: String,
    pub gateway: String,
    pub dns: String,
}
