use chrono::Duration;
use clap::Parser;
use palm::{jwt::Jwt, Result};

use super::super::env::Config as Env;

#[derive(Parser, PartialEq, Eq, Debug, Clone)]
pub struct Token {
    #[arg(short, long)]
    pub agent: String,
    #[arg(short, long, default_value_t = 1<<12)]
    pub weeks: i64,
}

impl Token {
    pub fn launch(&self, config: &Env) -> Result<()> {
        let token = config
            .loquat
            .sign(&self.agent, "", Duration::weeks(self.weeks))?;
        println!("{token}");
        Ok(())
    }
}
