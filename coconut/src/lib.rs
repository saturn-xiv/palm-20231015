#[macro_use]
extern crate log;

pub mod mysql;
pub mod oracle;
pub mod postgresql;
pub mod rsync;

use std::ops::Deref;
use std::path::PathBuf;

use clap::{Parser, Subcommand};
use palm::{tar, Result, VERSION};

pub const NAME: &str = env!("CARGO_PKG_NAME");
pub const DESCRIPTION: &str = env!("CARGO_PKG_DESCRIPTION");
pub const HOMEPAGE: &str = env!("CARGO_PKG_HOMEPAGE");
pub const AUTHORS: &str = env!("CARGO_PKG_AUTHORS");

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
