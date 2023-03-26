use hyper::StatusCode;
use palm::{
    cache::redis::Config as Redis, jwt::Jwt, session::Session, tink::Loquat,
    wechat::Config as WeChat, HttpError, Result,
};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub loquat: Loquat,
    pub redis: Redis,
    pub wechat: Vec<WeChat>,
    pub agents: Vec<String>,
}

impl Config {
    pub fn auth(&self, ss: &Session) -> Result<()> {
        if let Some(ref token) = ss.token {
            let sub = self.loquat.verify(token, "")?;
            if self.agents.contains(&sub) {
                return Ok(());
            }
            error!("unknown agent {}", sub);
        } else {
            error!("agent token is nil");
        }
        Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)))
    }
}
