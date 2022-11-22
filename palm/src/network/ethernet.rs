use std::fs::{read_dir, read_to_string, File};
use std::io::BufReader;
use std::path::{Component, Path, PathBuf};
use std::process::Command;

use tempfile::NamedTempFile;
use xml::reader::{EventReader, XmlEvent};

use super::super::{ops::router as ops_router, Result};

pub const ONBOARD: &str = "enp3s0";

pub fn root() -> PathBuf {
    Path::new(&Component::RootDir)
        .join("sys")
        .join("class")
        .join("net")
}

pub fn detect() -> Result<Vec<(String, String)>> {
    let mut items = Vec::new();
    let root = root();
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

impl ops_router::v1::Lan {
    // https://nmap.org/book/man-output.html
    pub fn scan(&self) -> Result<Vec<Host>> {
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
