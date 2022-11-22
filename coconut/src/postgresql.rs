use std::fs::create_dir_all;
use std::path::Path;
use std::process::Command;

use clap::Parser;
use palm::{print_command_output, timestamp_file, Result};
use postgres::{Client as DbClient, NoTls};

#[derive(Parser, PartialEq, Eq, Debug, Clone)]
pub struct Config {
    #[arg(short = 'H', long, default_value = "127.0.0.1")]
    pub host: String,
    #[arg(short, long, default_value = "5432")]
    pub port: u16,
    #[arg(short, long)]
    pub name: String,
    #[arg(short, long, default_value = "postgres")]
    pub user: String,
    #[arg(short = 'P', long)]
    pub password: Option<String>,
}

impl Config {
    pub fn launch<P: AsRef<Path>>(&self, target: P) -> Result<String> {
        let target = target.as_ref();
        info!(
            "backup postgresql://{}@{}:{}/{} to {}",
            self.user,
            self.host,
            self.port,
            self.name,
            target.display()
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
        let tmp = target.join(&name);
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
