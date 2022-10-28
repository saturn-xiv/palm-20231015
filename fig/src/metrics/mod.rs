pub mod journal;
pub mod nginx;
pub mod snmp;

use std::fs::File;
use std::io::prelude::*;
use std::path::PathBuf;
use std::str::FromStr;

use palm::{ops::metrics::v1::report_client::ReportClient, search::Config as OpenSearch, Result};
use serde::{Deserialize, Serialize};
use tonic::transport::Endpoint;

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
    pub server: String,
    pub services: Vec<String>,
    pub files: Vec<PathBuf>,
    pub nginx: Vec<PathBuf>,
    pub opensearch: OpenSearch,
    pub snmp: snmp::Config,
}

impl Config {
    pub async fn heartbeat(&self) -> Result<()> {
        let mut _client = ReportClient::connect(Endpoint::from_str(&self.server)?).await?;
        Ok(())
    }
    pub async fn start(&self) -> Result<()> {
        // TODO
        self.heartbeat().await?;
        Ok(())
    }
}
