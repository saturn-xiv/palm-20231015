use std::fs::create_dir_all;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::path::{Path, PathBuf};
use std::process::Command;

use clap::Parser;
use palm::{print_command_output, timestamp_file, Result};

#[derive(Parser, PartialEq, Eq, Debug, Clone)]
pub struct Config {
    #[arg(short, long, default_value = super::Args::DEFAULT_KEEP)]
    pub keep: usize,
    #[arg(short, long, default_value = super::Args::DEFAULT_TARGET)]
    pub target: PathBuf,
    #[arg(short = 'H', long, help = "Keep it empty if backup from local")]
    pub host: Option<String>,
    #[arg(short, long, default_value = "22")]
    pub port: u16,
    #[arg(short, long)]
    pub source: PathBuf,
    #[arg(short, long, default_value = "root")]
    pub user: String,
    #[arg(short = 'P', long)]
    pub password: Option<String>,
    #[arg(short = 'K', long)]
    pub key: Option<PathBuf>,
}

impl Config {
    pub fn launch<P: AsRef<Path>>(&self, target: P) -> Result<String> {
        let target = target.as_ref();

        let name = timestamp_file(&self.user, None);
        let tmp = target.join(&name);
        create_dir_all(target)?;

        let out = match self.host {
            Some(ref host) => {
                info!(
                    "backup ssh://{}@{}:{}:{} to {}",
                    self.user,
                    host,
                    self.port,
                    self.source.display(),
                    target.display()
                );
                match self.password {
                    Some(ref password) => Command::new("sshpass")
                        .arg("-p")
                        .arg(password)
                        .arg("rsync")
                        .arg("-a")
                        .arg("-z")
                        .arg("-q")
                        .arg("-e")
                        .arg(format!(
                            "ssh -o StrictHostKeyChecking=yes -p {} -l {}",
                            self.port, self.user,
                        ))
                        .arg(&format!("{}:{}", host, self.source.display()))
                        .arg(&tmp)
                        .output(),
                    None => Command::new("rsync")
                        .arg("-a")
                        .arg("-z")
                        .arg("-q")
                        .arg("-e")
                        .arg(format!(
                            "ssh -o StrictHostKeyChecking=yes -p {} -l {} -i {}",
                            self.port,
                            self.user,
                            self.ssh_key_file()?.display(),
                        ))
                        .arg(&format!("{}:{}", host, self.source.display()))
                        .arg(&tmp)
                        .output(),
                }
            }
            None => {
                info!("backup {} to {}", self.source.display(), target.display());
                Command::new("cp")
                    .arg("-a")
                    .arg(&self.source)
                    .arg(&tmp)
                    .output()
            }
        }?;

        print_command_output(&out)?;
        Ok(name)
    }

    fn ssh_key_file(&self) -> Result<PathBuf> {
        if let Some(ref it) = self.key {
            return Ok(it.clone());
        }
        if let Some(ref home) = dirs::home_dir() {
            let home = home.join(".ssh");
            for it in ["id_ed25519", "id_rsa"] {
                let it = home.join(it);
                if it.is_file() {
                    return Ok(it);
                }
            }
        }
        Err(Box::new(IoError::from(IoErrorKind::UnexpectedEof)))
    }
}
