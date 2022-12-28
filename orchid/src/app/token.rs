use chrono::Duration;
use clap::Parser;
use palm::{crypto::Key, jwt::Jwt, Result};

use super::super::env::Agent;

#[derive(Parser, PartialEq, Eq, Debug, Clone)]
pub struct Config {
    #[arg(short = 'n', long)]
    pub name: String,
}

impl Config {
    pub fn launch(&self, key: &Key) -> Result<String> {
        let ttl = Duration::weeks(1 << 10);
        info!("generate token for {}({})", self.name, ttl);
        let jwt = Jwt::new(key.0.clone());
        let (nbf, exp) = Jwt::timestamps(ttl);

        let token = jwt.sum(
            None,
            &Agent {
                aud: self.name.clone(),
                exp,
                nbf,
            },
        )?;
        Ok(token)
    }
}
