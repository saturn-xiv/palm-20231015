use std::path::Path;
use std::process::Command;
use std::{fs::create_dir_all, path::PathBuf};

use serde::{Deserialize, Serialize};

use super::{print_command_output, timestamp_file, Result};

#[derive(clap::Parser, Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    #[clap(short = 'H', long)]
    pub host: Option<String>,
    #[clap(short, long)]
    pub source: PathBuf,
    #[clap(short, long, default_value = "22")]
    pub port: u16,
    #[clap(short, long, default_value = "root")]
    pub user: String,
    #[clap(short = 'P', long)]
    pub password: Option<String>,
    #[clap(short, long, default_value = Self::KEY )]
    pub key: String,
}

impl Config {
    const KEY: &'static str = "~/.ssh/id_ed25519 OR ~/.ssh/id_rsa";

    pub fn execute<P: AsRef<Path>>(&self, root: P) -> Result<String> {
        let root = root.as_ref();

        let name = timestamp_file(&self.user, None);
        let tmp = root.join(&name);
        create_dir_all(root)?;

        let out = match self.host {
            Some(ref host) => {
                info!(
                    "backup ssh://{}@{}:{}:{} to {}",
                    self.user,
                    host,
                    self.port,
                    self.source.display(),
                    root.display()
                );
                Command::new("rsync")
                    .arg("-a")
                    .arg("-c")
                    .arg("-z")
                    .arg("-q")
                    .arg("-e")
                    .arg(&self.ssh())
                    .arg(&format!("{}:{}", host, self.source.display()))
                    .arg(&tmp)
                    .output()?
            }
            None => {
                info!("backup {} to {}", self.source.display(), root.display());
                Command::new("cp")
                    .arg("-a")
                    .arg(&self.source)
                    .arg(&tmp)
                    .output()?
            }
        };
        print_command_output(&out)?;
        Ok(name)
    }

    fn ssh(&self) -> String {
        if let Some(key) = self.key_file() {
            return format!(
                "ssh -o StrictHostKeyChecking=yes -p {} -l {} -i {}",
                self.port,
                self.user,
                key.display(),
            );
        }
        if let Some(ref password) = self.password {
            return format!(
                r###"sshpass -p "{}" ssh -o StrictHostKeyChecking=yes -p {} -l {}"###,
                password, self.port, self.user,
            );
        }
        format!(
            "ssh -o StrictHostKeyChecking=yes -p {} -l {}",
            self.port, self.user
        )
    }

    fn key_file(&self) -> Option<PathBuf> {
        if self.key != Self::KEY {
            return Some(Path::new(&self.key).to_path_buf());
        }
        if let Some(home) = dirs::home_dir() {
            let home = home.join(".ssh");
            for it in ["id_ed25519", "id_rsa"] {
                let it = home.join(it);
                if it.is_file() {
                    return Some(it);
                }
            }
        }
        None
    }
}
