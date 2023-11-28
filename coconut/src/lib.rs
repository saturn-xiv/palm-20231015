#[macro_use]
extern crate log;

pub mod mysql;
pub mod oracle;
pub mod postgresql;
pub mod rsync;
pub mod youtube;

use std::ops::Deref;

use clap::{Parser, Subcommand};
use palm::{tar, Result, VERSION};

pub const NAME: &str = env!("CARGO_PKG_NAME");
pub const DESCRIPTION: &str = env!("CARGO_PKG_DESCRIPTION");
pub const HOMEPAGE: &str = env!("CARGO_PKG_HOMEPAGE");
pub const AUTHORS: &str = env!("CARGO_PKG_AUTHORS");

/*
crontab ONLY allow /bin;/usr/bin

tail -f /var/spool/mail/$USER
tail -f /var/log/cron
*/
#[derive(Parser, Debug)]
#[command(about,
    version=&VERSION.deref()[..],
    after_help=env!("CARGO_PKG_HOMEPAGE"), author)
]
pub struct Args {
    #[command(subcommand)]
    pub command: SubCommand,
}

impl Args {
    const DEFAULT_TARGET: &'static str = "/tmp";
    const DEFAULT_KEEP: &'static str = "7";

    pub async fn launch(&self) -> Result<()> {
        match &self.command {
            SubCommand::Postgresql(ref cfg) => {
                let name = cfg.launch(&cfg.target)?;
                tar(&cfg.target, &name, cfg.keep)?;
            }
            SubCommand::Mysql(ref cfg) => {
                let name = cfg.launch(&cfg.target)?;
                tar(&cfg.target, &name, cfg.keep)?;
            }
            SubCommand::Oracle(ref cfg) => {
                let name = cfg.launch(&cfg.target)?;
                tar(&cfg.target, &name, cfg.keep)?;
            }
            SubCommand::Rsync(ref cfg) => {
                let name = cfg.launch(&cfg.target)?;
                tar(&cfg.target, &name, cfg.keep)?;
            }
            SubCommand::Youtube(ref cfg) => {
                cfg.launch().await?;
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
    #[clap(about = "YouTube management")]
    Youtube(youtube::Action),
}
