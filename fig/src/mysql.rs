use std::fs::{create_dir_all, File};
use std::io::{Error as IoError, ErrorKind as IoErrorKind, Write};
use std::path::Path;
use std::process::{Command, Stdio};

use mysql::{prelude::*, Conn as DbConn, Opts as DbOpts};
use palm::Result;
use serde::{Deserialize, Serialize};

use super::timestamp_file;

#[derive(clap::Parser, Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    #[clap(short = 'H', long)]
    pub host: String,
    #[clap(short, long, default_value = "3306")]
    pub port: u16,
    #[clap(short, long)]
    pub name: String,
    #[clap(short, long, default_value = "root")]
    pub user: String,
    #[clap(short = 'P', long)]
    pub password: Option<String>,
}

impl Config {
    pub fn execute<P: AsRef<Path>>(&self, root: P) -> Result<String> {
        let root = root.as_ref();
        info!(
            "backup mysql://{}@{}:{}/{} to {}",
            self.user,
            self.host,
            self.port,
            self.name,
            root.display()
        );

        {
            let opt = DbOpts::from_url(&format!(
                "mysql://{}:{}@{}:{}/{}",
                self.user,
                self.password.as_deref().unwrap_or_default(),
                self.host,
                self.port,
                self.name
            ))?;
            let mut cli = DbConn::new(opt)?;
            let row: Option<String> = cli.query_first("select version()")?;

            info!(
                "{}",
                row.ok_or_else(|| Box::new(IoError::from(IoErrorKind::UnexpectedEof)))?
            );
        }

        let name = timestamp_file(&self.name, Some("sql"));
        let tmp = root.join(&name);
        create_dir_all(root)?;

        {
            let out = if let Some(ref password) = self.password {
                Command::new("mysqldump")
                    .arg("-h")
                    .arg(&self.host)
                    .arg("-P")
                    .arg(self.port.to_string())
                    .arg("-u")
                    .arg(&self.user)
                    .arg(format!("-p{}", password))
                    .arg(&self.name)
                    .stdout(Stdio::piped())
                    .output()?
            } else {
                Command::new("mysqldump")
                    .arg("-h")
                    .arg(&self.host)
                    .arg("-P")
                    .arg(self.port.to_string())
                    .arg("-u")
                    .arg(&self.user)
                    .arg(&self.name)
                    .stdout(Stdio::piped())
                    .output()?
            };

            if !out.status.success() {
                error!("({}) {}", out.status, std::str::from_utf8(&out.stderr)?);
                return Err(Box::new(IoError::from(IoErrorKind::UnexpectedEof)));
            }

            {
                debug!("generate {}", tmp.display());
                let mut file = File::create(&tmp)?;
                file.write_all(&out.stdout)?;
            }
        }

        info!(
            r###"USAGE:
$ unxz {file}.xz
$ mysql -h {host} -P {port} -u {user} -p {name} < {file}"###,
            file = name,
            user = self.user,
            host = self.host,
            port = self.port,
            name = self.name,
        );

        Ok(name)
    }
}
