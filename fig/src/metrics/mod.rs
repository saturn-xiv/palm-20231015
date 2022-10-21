pub mod snmp;

use std::path::PathBuf;

use serde::{Deserialize, Serialize};

use super::Result;

#[derive(clap::Parser, Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Args {
    #[clap(short, long, default_value = "config.toml")]
    pub config: PathBuf,
}

impl Args {
    pub fn execute(&self) -> Result<()> {
        Ok(())
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub files: Vec<PathBuf>,
    pub snmp: snmp::Config,
}

// journalctl --utc --all -f
