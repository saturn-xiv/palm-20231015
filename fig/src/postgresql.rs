use std::path::PathBuf;
use std::process::Command;

use serde::{Deserialize, Serialize};

use super::Result;

#[derive(clap::Parser, Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    #[clap(short = 'H', long)]
    pub host: String,
    #[clap(short, long)]
    pub name: String,
    #[clap(short, long, default_value = "5432")]
    pub port: u16,
    #[clap(short, long, default_value = "postgres")]
    pub user: String,
    #[clap(short = 'P', long)]
    pub password: Option<String>,
}

impl Config {
    pub fn execute(&self) -> Result<PathBuf> {
        info!(
            "backup postgresql://{}@{}:{}/{}",
            self.user, self.host, self.port, self.name
        );
        let out = Command::new("sh").arg("-c").arg("echo hello").output()?;
        info!(
            "status: {}\nstdout: {}\nstderr:{}",
            out.status,
            std::str::from_utf8(&out.stdout)?,
            std::str::from_utf8(&out.stderr)?
        );
        todo!()
    }
}
