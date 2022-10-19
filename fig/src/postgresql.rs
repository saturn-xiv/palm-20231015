use std::fs::create_dir_all;
use std::path::Path;
use std::process::Command;

use postgres::{Client as DbClient, NoTls};
use serde::{Deserialize, Serialize};

use super::{print_command_output, timestamp_file, Result};

#[derive(clap::Parser, Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    #[clap(short = 'H', long)]
    pub host: String,
    #[clap(short, long, default_value = "5432")]
    pub port: u16,
    #[clap(short, long)]
    pub name: String,
    #[clap(short, long, default_value = "postgres")]
    pub user: String,
    #[clap(short = 'P', long)]
    pub password: Option<String>,
}

impl Config {
    pub fn execute<P: AsRef<Path>>(&self, root: P) -> Result<String> {
        let root = root.as_ref();
        info!(
            "backup postgresql://{}@{}:{}/{} to {}",
            self.user,
            self.host,
            self.port,
            self.name,
            root.display()
        );
        let db = format!(
            "postgresql://{}:{}@{}:{}/{}",
            self.user,
            self.password.as_deref().unwrap_or_default(),
            self.host,
            self.port,
            self.name
        );
        {
            let mut cli = DbClient::connect(&db, NoTls)?;
            let row = cli.query_one("select version()", &[])?;
            let it: &str = row.get(0);
            info!("{}", it);
        }

        let name = timestamp_file(&self.name, None);
        let tmp = root.join(&name);
        create_dir_all(&tmp)?;
        {
            let file = tmp.join("schema.sql");
            debug!("generate {}", file.display());
            let out = Command::new("pg_dump")
                .arg("-O")
                .arg("-s")
                .arg("-w")
                .arg("-d")
                .arg(&db)
                .arg("-f")
                .arg(file)
                .output()?;
            print_command_output(&out)?;
        }
        {
            let file = tmp.join("data.dump");
            debug!("generate {}", file.display());
            let out = Command::new("pg_dump")
                .arg("-Fc")
                .arg("-O")
                .arg("-a")
                .arg("-w")
                .arg(&db)
                .arg("-f")
                .arg(file)
                .output()?;
            print_command_output(&out)?;
        }

        info!(
            r###"USAGE:
$ tar xf {file}.tar.xz
$ cd {file}
$ psql -h {host} -p {port} -U {user} -d {name} < schema.sql
$ pg_restore -Fc -h {host} -p {port} -U {user} -d {name} < data.dump"###,
            file = name,
            user = self.user,
            host = self.host,
            port = self.port,
            name = self.name,
        );
        Ok(name)
    }
}
