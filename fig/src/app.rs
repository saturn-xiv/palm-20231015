use std::path::Path;

use clap::{Parser, Subcommand};

use super::{
    metrics::Args as Metrics, mysql::Config as MySql, oracle::Config as Oracle,
    postgresql::Config as PostgreSql, rsync::Config as Rsync, tar, Result,
};

#[derive(Parser, Debug)]
#[clap(about,
    version=env!("CARGO_PKG_VERSION"),
    after_help=env!("CARGO_PKG_HOMEPAGE"), author)
]
pub struct Args {
    #[clap(short, long, default_value = "7")]
    pub keep: usize,
    #[clap(short, long, default_value = Self::DEFAULT_TARGET)]
    pub target: String,
    #[clap(subcommand)]
    pub command: SubCommand,
}

impl Args {
    const DEFAULT_TARGET: &'static str = "~/tmp OR /tmp";
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
    #[clap(about = "Rsync")]
    Metrics(Metrics),
}

pub fn launch() -> Result<()> {
    let args = Args::parse();
    let target = if args.target == Args::DEFAULT_TARGET {
        dirs::home_dir().unwrap_or_else(|| Path::new("/tmp").to_path_buf())
    } else {
        Path::new(&args.target).to_path_buf()
    };
    if let SubCommand::Postgresql(ref it) = args.command {
        let name = it.execute(&target)?;
        return tar(&target, &name, args.keep);
    }
    if let SubCommand::Mysql(ref it) = args.command {
        let name = it.execute(&target)?;
        return tar(&target, &name, args.keep);
    }
    if let SubCommand::Oracle(ref it) = args.command {
        let name = it.execute(&target)?;
        return tar(&target, &name, args.keep);
    }
    if let SubCommand::Rsync(ref it) = args.command {
        let name = it.execute(&target)?;
        return tar(&target, &name, args.keep);
    }
    if let SubCommand::Metrics(ref it) = args.command {
        let cfg = it.get()?;
        return cfg.start();
    }
    Ok(())
}
