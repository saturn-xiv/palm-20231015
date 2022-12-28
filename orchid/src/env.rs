use hyper::StatusCode;
use palm::{
    cache::redis::Config as Redis, crypto::Key, jwt::Jwt, session::Session, HttpError, Result,
};
use serde::{Deserialize, Serialize};

use super::{google::Config as Google, wechat::Config as WeChat};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub secrets: Key,
    pub redis: Redis,
    pub wechat: Vec<WeChat>,
    pub google: Vec<Google>,
    pub agents: Vec<String>,
}

impl Config {
    pub fn auth(&self, ss: &Session) -> Result<()> {
        let jwt = Jwt::new(self.secrets.0.clone());
        if let Some(ref token) = ss.token {
            let payload = jwt.parse::<Agent>(token)?;
            if self.agents.contains(&payload.claims.aud) {
                return Ok(());
            }
        }
        Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)))
    }
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Agent {
    pub aud: String,
    pub nbf: i64,
    pub exp: i64,
}
