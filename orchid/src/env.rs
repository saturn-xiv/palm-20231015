use std::path::Path;

use hyper::StatusCode;
use palm::{
    cache::redis::Config as Redis, jwt::Jwt, parser::from_toml, session::Session, thrift::Thrift,
    wechat::Config as WechatConfig, HttpError, Result,
};
use serde::{Deserialize, Serialize};
use tonic::Request;

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub redis: Redis,
    pub jwt: Thrift,
    pub clients: Vec<String>,
}

impl Config {
    pub fn wechat(&self, app_id: &str) -> Result<WechatConfig> {
        let file = Path::new("wechat").join(app_id).with_extension("toml");
        let it = from_toml(&file)?;
        Ok(it)
    }

    pub fn verify<T>(&self, req: &Request<T>) -> Result<()> {
        let ss = Session::new(req);
        if let Some(ref token) = ss.token {
            let subject = self.jwt.verify(token, "")?;
            if self.clients.contains(&subject) {
                return Ok(());
            }
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some(format!("unknown client {subject}")),
            )));
        }
        Err(Box::new(HttpError(StatusCode::UNAUTHORIZED, None)))
    }
}
