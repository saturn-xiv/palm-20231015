use std::path::Path;
use std::path::PathBuf;

use serde::{Deserialize, Serialize};

use super::Result;

#[derive(clap::Parser, Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub host: String,
    pub name: String,
    pub port: Option<u16>,
    pub user: Option<String>,
    pub password: Option<String>,
}

impl Config {
    pub fn execute<P: AsRef<Path>>(&self, root: P) -> Result<PathBuf> {
        todo!()
    }
}
