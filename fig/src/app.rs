use std::path::Path;

use clap::{Parser, Subcommand};

use super::{
    mysql::Config as MySql, oracle::Config as Oracle, postgresql::Config as PostgreSql,
    rsync::Config as Rsync, Result,
};

#[derive(Parser, Debug)]
#[clap(about,
    version=env!("CARGO_PKG_VERSION"),
    after_help=env!("CARGO_PKG_HOMEPAGE"), author)
]
pub struct Args {
    #[clap(short, long, default_value = "7")]
    pub keep: usize,
    #[clap(subcommand)]
    pub command: SubCommand,
}

impl Args {
    pub fn flush<P: AsRef<Path>>(&self, file: P) -> Result<()> {
        let file = file.as_ref();
        debug!(
            "check file {}, keep recent {} records",
            file.display(),
            self.keep
        );
        Ok(())
    }
}

#[derive(Subcommand, PartialEq, Eq, Debug)]
pub enum SubCommand {
    #[clap(about = "PostgreSql")]
    Postgresql(PostgreSql),
    #[clap(about = "MySql")]
    Mysql(MySql),
    #[clap(about = "Oracle")]
    Oracle(Oracle),
    #[clap(about = "Rsync")]
    Rsync(Rsync),
}

pub fn launch() -> Result<()> {
    let args = Args::parse();
    if let SubCommand::Postgresql(ref it) = args.command {
        let f = it.execute()?;
        args.flush(f)?;
        return Ok(());
    }
    if let SubCommand::Mysql(ref it) = args.command {
        let f = it.execute()?;
        args.flush(f)?;
        return Ok(());
    }
    if let SubCommand::Oracle(ref it) = args.command {
        let f = it.execute()?;
        args.flush(f)?;
        return Ok(());
    }
    if let SubCommand::Rsync(ref it) = args.command {
        let f = it.execute()?;
        args.flush(f)?;
        return Ok(());
    }

    Ok(())
}
