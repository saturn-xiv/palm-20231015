#[allow(
    unused_imports,
    clippy::extra_unused_lifetimes,
    clippy::derivable_impls,
    clippy::derive_partial_eq_without_eq
)]
pub mod rpc;
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
    pub opensearch: OpenSearch,
    pub snmp: snmp::Config,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct OpenSearch {
    pub host: String,
    pub port: Option<u16>,
    pub namespace: String,
}
