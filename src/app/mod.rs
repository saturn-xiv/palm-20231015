pub mod cache;
pub mod db;
pub mod generate;
pub mod rpc;
pub mod web;
pub mod worker;

use std::path::PathBuf;

use clap::{Parser, Subcommand};

use super::{env::Config, parser::from_toml, Result, BANNER, HOMEPAGE, VERSION};

#[derive(Parser, Debug)]
#[clap(about, version=VERSION, before_help=BANNER, after_help=HOMEPAGE, author)]
pub struct Args {
    #[clap(short, long, default_value = "config.toml")]
    pub config: PathBuf,
    #[clap(subcommand)]
    pub command: SubCommand,
}

#[derive(Subcommand, Debug)]
pub enum SubCommand {
    #[clap(about = "Generate config.toml")]
    GenerateConfig,
    #[clap(about = "Generate nginx.conf")]
    GenerateNginx(Nginx),
    #[clap(about = "Generate systemd.conf")]
    GenerateSystemd(Systemd),
    #[clap(about = "List all cache items")]
    CacheList,
    #[clap(about = "Clear cache items")]
    CacheClear,
    #[clap(about = "Migrate the database to the latest version")]
    DbMigrate,
    #[clap(about = "Revert migration to previous version")]
    DbRollback,
    #[clap(about = "Re-applying all the migrations")]
    DbRedo,
    #[clap(about = "Show current database versions")]
    DbStatus,
    #[clap(about = "Http Server")]
    Web,
    #[clap(about = "Worker process")]
    Worker(Worker),
    #[clap(about = "gRPC Server")]
    Rpc,
}

#[derive(clap::Parser, Debug)]
pub struct Nginx {
    #[clap(short, long)]
    pub name: String,
    #[clap(short, long)]
    pub ssl: bool,
}

#[derive(clap::Parser, Debug)]
pub struct Systemd {
    #[clap(short, long)]
    pub name: String,
}

#[derive(clap::Parser, Debug)]
pub struct Worker {
    #[clap(short, long)]
    pub queue: String,
}
pub fn launch() -> Result<()> {
    let args = Args::parse();
    match args.command {
        SubCommand::GenerateConfig => generate::config_toml(&args.config)?,
        SubCommand::GenerateNginx(cfg) => generate::nginx_conf(&cfg.name, cfg.ssl)?,
        SubCommand::GenerateSystemd(cfg) => generate::systemd_conf(&cfg.name)?,
        SubCommand::CacheClear => {
            let cfg: Config = from_toml(&args.config)?;
            cache::clear(&cfg)?;
        }
        SubCommand::CacheList => {
            let cfg: Config = from_toml(&args.config)?;
            cache::list(&cfg)?;
        }
        SubCommand::DbMigrate => {
            let cfg: Config = from_toml(&args.config)?;
            db::migrate(&cfg)?;
        }
        SubCommand::DbRollback => {
            let cfg: Config = from_toml(&args.config)?;
            db::rollback(&cfg)?;
        }
        SubCommand::DbRedo => {
            let cfg: Config = from_toml(&args.config)?;
            db::redo(&cfg)?;
        }
        SubCommand::DbStatus => {
            let cfg: Config = from_toml(&args.config)?;
            db::status(&cfg)?;
        }
        SubCommand::Web => {
            let cfg: Config = from_toml(&args.config)?;
            web::launch(&cfg)?;
        }
        SubCommand::Rpc => {
            let cfg: Config = from_toml(&args.config)?;
            rpc::launch(&cfg)?;
        }
        SubCommand::Worker(it) => {
            let cfg: Config = from_toml(&args.config)?;
            worker::launch(&cfg, &it.queue)?;
        }
    };

    Ok(())
}
