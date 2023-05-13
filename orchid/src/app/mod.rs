pub mod generate_token;
pub mod rpc;

use std::ops::Deref;
use std::path::PathBuf;
use std::sync::Arc;

use clap::{Parser, Subcommand};
use palm::{parser::from_toml, Result, VERSION};

use super::env::Config;

pub const DESCRIPTION: &str = env!("CARGO_PKG_DESCRIPTION");

#[derive(Parser, Debug)]
#[command(about,
    version=&VERSION.deref()[..],
    after_help=env!("CARGO_PKG_HOMEPAGE"), author)
]
pub struct Args {
    #[arg(short, long, default_value = "config.toml")]
    pub config: PathBuf,
    #[command(subcommand)]
    pub command: SubCommand,
}

impl Args {
    pub fn launch(&self) -> Result<()> {
        let env: Config = from_toml(&self.config)?;
        match &self.command {
            SubCommand::Rpc(ref it) => {
                let env = Arc::new(env);
                it.launch(env)?;
            }
            SubCommand::GenerateToken(ref it) => {
                it.launch(&env)?;
            }
        };
        Ok(())
    }
}

#[derive(Subcommand, PartialEq, Eq, Debug)]
pub enum SubCommand {
    #[clap(about = "Start a gRPC server")]
    Rpc(rpc::Config),
    #[clap(about = "Generate a jwt token")]
    GenerateToken(generate_token::Config),
}
