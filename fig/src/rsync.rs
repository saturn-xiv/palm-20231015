use std::path::PathBuf;

use serde::{Deserialize, Serialize};

use super::Result;

#[derive(clap::Parser, Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    #[clap(short = 'H', long)]
    pub host: String,
    #[clap(short, long)]
    pub remote: String,
    #[clap(short, long, default_value = "22")]
    pub port: u16,
    #[clap(short, long, default_value = "root")]
    pub user: String,
    #[clap(short = 'P', long)]
    pub password: Option<String>,
    #[clap(short, long, default_value = "~/.ssh/id_ed25519")]
    pub key: String,
}

impl Config {
    pub fn execute(&self) -> Result<PathBuf> {
        todo!()
    }
}
