use hyper::StatusCode;
use palm::{
    cache::redis::Config as Redis, crypto::Key, jwt::Jwt, nut::v1::WechatProfile, session::Session,
    HttpError, Result,
};
use serde::{Deserialize, Serialize};

use super::google::Config as Google;

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct WeChat {
    pub app_id: String,
    pub app_secret: String,
}

impl From<WeChat> for WechatProfile {
    fn from(item: WeChat) -> Self {
        Self {
            app_id: item.app_id.clone(),
            app_secret: item.app_secret,
        }
    }
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    #[serde(rename = "jwt-key")]
    pub jwt_key: Key,
    pub redis: Redis,
    pub wechat: Vec<WeChat>,
    pub google: Vec<Google>,
    pub agents: Vec<String>,
}

impl Config {
    pub fn auth(&self, ss: &Session) -> Result<()> {
        let jwt = Jwt::new(self.jwt_key.0.clone());
        if let Some(ref token) = ss.token {
            let payload = jwt.parse::<Agent>(token)?;
            if self.agents.contains(&payload.claims.aud) {
                return Ok(());
            }
            error!("unknown agent {}", payload.claims.aud);
        } else {
            error!("agent token is nil");
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
