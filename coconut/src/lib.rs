#[macro_use]
extern crate lazy_static;
#[macro_use]
extern crate log;

pub mod mysql;
pub mod oracle;
pub mod postgresql;
pub mod rsync;

use std::error::Error as StdError;
use std::fs::{read_dir, remove_file};
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::ops::Deref;
use std::path::{Path, PathBuf};
use std::process::{Command, Output};
use std::result::Result as StdResult;

use chrono::Utc;
use clap::{Parser, Subcommand};

pub const NAME: &str = env!("CARGO_PKG_NAME");
pub const DESCRIPTION: &str = env!("CARGO_PKG_DESCRIPTION");
pub const HOMEPAGE: &str = env!("CARGO_PKG_HOMEPAGE");
pub const AUTHORS: &str = env!("CARGO_PKG_AUTHORS");

include!(concat!(env!("OUT_DIR"), "/env.rs"));

lazy_static! {
    static ref VERSION: String = format!("{}({})", GIT_VERSION, BUILD_TIME);
}

pub type Error = Box<dyn StdError + Send + Sync>;
pub type Result<T> = StdResult<T, Error>;

#[derive(Parser, Debug)]
#[command(about,
    version=&VERSION.deref()[..],
    after_help=env!("CARGO_PKG_HOMEPAGE"), author)
]
pub struct Args {
    #[arg(short, long, default_value = "7")]
    pub keep: usize,
    #[arg(short, long, default_value = Self::DEFAULT_TARGET)]
    pub target: PathBuf,
    #[command(subcommand)]
    pub command: SubCommand,
}

impl Args {
    const DEFAULT_TARGET: &'static str = "/tmp";

    pub fn launch(&self) -> Result<()> {
        match &self.command {
            SubCommand::Postgresql(ref cfg) => {
                let name = cfg.launch(&self.target)?;
                tar(&self.target, &name, self.keep)?;
            }
            SubCommand::Mysql(ref cfg) => {
                let name = cfg.launch(&self.target)?;
                tar(&self.target, &name, self.keep)?;
            }
            SubCommand::Oracle(ref cfg) => {
                let name = cfg.launch(&self.target)?;
                tar(&self.target, &name, self.keep)?;
            }
            SubCommand::Rsync(ref cfg) => {
                let name = cfg.launch(&self.target)?;
                tar(&self.target, &name, self.keep)?;
            }
        };
        info!("done.");
        Ok(())
    }
}

#[derive(Subcommand, PartialEq, Eq, Debug)]
pub enum SubCommand {
    #[clap(about = "Backup PostgreSql database")]
    Postgresql(postgresql::Config),
    #[clap(about = "Backup MySql database")]
    Mysql(mysql::Config),
    #[clap(about = "Backup Oracle database")]
    Oracle(oracle::Config),
    #[clap(about = "Backup folder from remote/local host")]
    Rsync(rsync::Config),
}

pub fn timestamp_file(name: &str, ext: Option<&str>) -> String {
    let ts = Utc::now().format("%Y%m%d%H%M%S%3f");
    match ext {
        Some(ext) => format!("{}-{}.{}", name, ts, ext),
        None => format!("{}-{}", name, ts),
    }
}

pub fn tar<P: AsRef<Path>>(root: P, name: &str, keep: usize) -> Result<()> {
    let root = root.as_ref();

    let tmp = {
        let it = root.join(name);
        if it.is_dir() {
            let it = it.with_extension("tar");
            {
                debug!("generate {}", it.display());
                let out = Command::new("tar")
                    .arg("--remove-files")
                    .arg("-C")
                    .arg(root)
                    .arg("-cf")
                    .arg(&it)
                    .arg(name)
                    .output()?;
                print_command_output(&out)?;
            }
            it
        } else {
            it
        }
    };
    {
        debug!("compress {}", tmp.display());
        let out = Command::new("xz").arg("-9").arg(&tmp).output()?;
        print_command_output(&out)?;
    }
    {
        info!(
            "check file {}, keep recent {} records",
            root.display(),
            keep
        );
        let mut items = Vec::new();
        for it in read_dir(root)? {
            let it = it?;
            let it = it.path();
            if it.is_file() {
                if let Some(ext) = it.extension() {
                    if ext == "xz" {
                        debug!("find file {}", it.display());
                        items.push(it);
                    }
                }
            }
        }
        items.sort();
        items.reverse();
        if items.len() > keep {
            for it in &items[keep..] {
                debug!("delete file {}", it.display());
                remove_file(it)?;
            }
        }
    }
    Ok(())
}

pub fn print_command_output(out: &Output) -> Result<()> {
    if out.status.success() {
        info!("({}) {}", out.status, std::str::from_utf8(&out.stdout)?);
        return Ok(());
    }

    error!("({}) {}", out.status, std::str::from_utf8(&out.stderr)?);
    Err(Box::new(IoError::from(IoErrorKind::UnexpectedEof)))
}
