use std::collections::HashMap;
use std::fs::{read_dir, read_to_string, File};
use std::io::{prelude::*, BufReader, Error as IoError, ErrorKind as IoErrorKind};
use std::net::Ipv4Addr;
use std::path::{Component, Path, PathBuf};
use std::process::Command;

use byteorder::{ByteOrder, NativeEndian, NetworkEndian};
use eui48::MacAddress;
use tempfile::NamedTempFile;
use xml::reader::{EventReader, XmlEvent};

use super::super::{ops::router::v1 as ops_router_v1, Result};

impl ops_router_v1::router_status_response::Ip {
    pub fn new() -> Result<Self> {
        let address = {
            let out = Command::new("ip").arg("address").output()?;
            String::from_utf8(out.stdout)?
        };
        let route = {
            let out = Command::new("ip").arg("route").output()?;
            String::from_utf8(out.stdout)?
        };
        let rule = {
            let out = Command::new("ip").arg("rule").output()?;
            String::from_utf8(out.stdout)?
        };
        Ok(Self {
            address,
            route,
            rule,
        })
    }
}

pub fn gateway(device: &str) -> Result<Ipv4Addr> {
    let file = File::open(
        Path::new(&Component::RootDir)
            .join("proc")
            .join("net")
            .join("route"),
    )?;
    for line in BufReader::new(file).lines() {
        let line = line?;
        let args: Vec<&str> = line.split('\t').collect::<_>();
        if args.len() >= 3 && args[0] == device {
            let dest = u32::from_str_radix(args[1], 16)?;
            let gw = u32::from_str_radix(args[2], 16)?;
            if dest == 0 || gw != 0 {
                let gw = {
                    let mut buf = [0; 4];
                    NativeEndian::write_u32(&mut buf, gw);
                    NetworkEndian::read_u32(&buf)
                };
                return Ok(Ipv4Addr::from(gw));
            }
        }
    }
    Err(Box::new(IoError::new(
        IoErrorKind::NotFound,
        format!("gateway of {device}"),
    )))
}

pub fn root() -> PathBuf {
    Path::new(&Component::RootDir)
        .join("sys")
        .join("class")
        .join("net")
}

pub fn mac_address(device: &str) -> Result<MacAddress> {
    let it = read_to_string(root().join(device).join("address"))?;
    let it = it.trim();
    let it = MacAddress::parse_str(it)?;
    Ok(it)
}

pub fn detect() -> Result<HashMap<String, MacAddress>> {
    let mut items = HashMap::new();
    let root = root();
    for it in read_dir(root)? {
        let it = it?.path();
        if let Some(Some(device)) = it.file_name().map(|x| x.to_str()) {
            if device != "lo" {
                items.insert(device.to_string(), mac_address(device)?);
            }
        }
    }

    Ok(items)
}

pub struct ArpScanner(pub String);

impl ArpScanner {
    // https://nmap.org/book/man-output.html
    pub fn scan(&self) -> Result<Vec<Host>> {
        let file = NamedTempFile::new()?;
        {
            debug!("write nmap({}) to {}", self.0, file.path().display());
            let out = if super::is_root() {
                Command::new("nmap")
                    .arg("-oX")
                    .arg(file.path())
                    .arg("-sn")
                    .arg(&self.0)
                    .output()?
            } else {
                Command::new("sudo")
                    .arg("nmap")
                    .arg("-oX")
                    .arg(file.path())
                    .arg("-sn")
                    .arg(&self.0)
                    .output()?
            };

            let out = String::from_utf8(out.stdout)?;
            debug!("{}", out);
        }

        let file = file.as_file();
        Host::load(file)
    }
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
