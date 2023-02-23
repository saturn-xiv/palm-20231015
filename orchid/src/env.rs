use hyper::StatusCode;
use palm::{
    cache::redis::Config as Redis, jwt::Jwt, nut::v1::WechatProfile, session::Session,
    tink::Loquat, HttpError, Result,
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
    pub loquat: Loquat,
    pub redis: Redis,
    pub wechat: Vec<WeChat>,
    pub google: Vec<Google>,
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
