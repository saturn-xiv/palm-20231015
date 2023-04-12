use chrono::Duration;
use clap::Parser;
use palm::{jwt::Jwt, Result};

use super::super::env::Config as Env;

#[derive(Parser, PartialEq, Eq, Debug, Clone)]
pub struct Config {
    #[arg(short = 's', long)]
    pub subject: String,
    #[arg(short = 'w', long, default_value = "20")]
    pub weeks: i64,
}

impl Config {
    pub fn launch(&self, config: &Env) -> Result<()> {
        let token = config
            .jwt
            .sign(&self.subject, Env::AUDIENCE, Duration::weeks(self.weeks))?;
        info!(
            "generate token to {}@{} for {} weeks:\n{}",
            self.subject,
            Env::AUDIENCE,
            self.weeks,
            token
        );
        Ok(())
    }
}
