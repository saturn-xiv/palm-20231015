pub mod rpc;
pub mod web;
pub mod worker;

use std::ops::Deref;
use std::path::PathBuf;

use clap::{AppSettings, Clap};

use super::{
    env::Config,
    i18n,
    models::{AUTH_MIGRATION, FORUM_MIGRATION},
    orm::console::Database,
    parser::from_toml,
    settings, Result, VERSION,
};

#[derive(Clap)]
#[clap(
    about = env!("CARGO_PKG_DESCRIPTION"),
    author = env!("CARGO_PKG_AUTHORS"),
    after_help = env!("CARGO_PKG_HOMEPAGE"),
    version = VERSION
)]
#[clap(setting = AppSettings::ColoredHelp)]
pub struct Opts {
    #[clap(short, long, about = "Config file", default_value = "config.toml")]
    pub config: PathBuf,
    #[clap(subcommand)]
    pub sub_cmd: SubCommand,
}

#[derive(Clap)]
pub enum SubCommand {
    #[clap(subcommand, about = "Database")]
    Db(Database),
    #[clap(about = "Http Server")]
    Web,
    #[clap(about = "Worker process")]
    Worker,
    #[clap(about = "gRPC Server")]
    Rpc,
}

pub async fn launch() -> Result<()> {
    let opts: Opts = Opts::parse();
    let cfg: Config = from_toml(&opts.config)?;
    match opts.sub_cmd {
        SubCommand::Db(opt) => {
            let db = cfg.database.open()?;
            let db = db.get()?;
            let db = db.deref();
            opt.launch(
                db,
                &[
                    settings::MIGRATION.deref(),
                    i18n::locale::MIGRATION.deref(),
                    AUTH_MIGRATION.deref(),
                    FORUM_MIGRATION.deref(),
                ],
            )?;
        }
        SubCommand::Rpc => {
            rpc::launch(&cfg).await?;
        }
        SubCommand::Web => {
            // TODO
        }
        SubCommand::Worker => {
            // TODO
        }
    };
    Ok(())
}
