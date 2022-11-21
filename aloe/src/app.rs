use std::ops::Deref;
use std::path::PathBuf;

use clap::Parser;
use palm::{parser::from_toml, Result, BANNER, HOMEPAGE, VERSION};

use super::env::Config;

#[derive(Parser, Debug)]
#[clap(about, version=&VERSION.deref()[..], before_help=BANNER, after_help=HOMEPAGE, author)]
pub struct Args {
    #[clap(short, long, default_value = "config.toml")]
    pub config: PathBuf,
}

pub async fn launch() -> Result<()> {
    let args = Args::parse();
    {
        info!("load config from {}", args.config.display());
        palm::check_config_permission(&args.config)?;
    }
    let cfg: Config = from_toml(&args.config)?;
    Ok(())
}
