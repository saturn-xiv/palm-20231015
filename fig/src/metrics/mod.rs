pub mod journal;
pub mod nginx;
pub mod snmp;

use std::fs::File;
use std::io::prelude::*;
use std::path::PathBuf;

use palm::Result;
use serde::{Deserialize, Serialize};

#[derive(clap::Parser, Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Args {
    #[clap(short, long, default_value = "config.toml")]
    pub config: PathBuf,
}

impl Args {
    pub fn get(&self) -> Result<Config> {
        let mut file = File::open(&self.config)?;
        let mut buf = Vec::new();
        file.read_to_end(&mut buf)?;
        let it = toml::from_slice(&buf)?;
        Ok(it)
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub token: String,
    pub services: Vec<String>,
    pub files: Vec<PathBuf>,
    pub server: Server,
    pub snmp: snmp::Config,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Server {
    pub host: String,
    pub port: u16,
}

impl Config {
    pub fn start(&self) -> Result<()> {
        // TODO
        Ok(())
    }
}
