use std::path::Path;

use hyper::StatusCode;
use palm::{
    cache::redis::Config as Redis, jwt::Jwt, parser::from_toml, session::Session,
    thrift::loquat::Config as Loquat, wechat::Config as WechatConfig, HttpError, Result,
};
use serde::{Deserialize, Serialize};
use tonic::Request;

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub redis: Redis,
    pub loquat: Loquat,
    pub clients: Vec<String>,
}

impl Config {
    pub const AUDIENCE: &'static str = env!("CARGO_PKG_NAME");

    pub fn wechat(&self, app_id: &str) -> Result<WechatConfig> {
        let file = Path::new("wechat").join(app_id).with_extension("toml");
        let it = from_toml(&file)?;
        Ok(it)
    }
    pub fn verify<T>(&self, req: &Request<T>) -> Result<String> {
        let ss = Session::new(req);
        if let Some(ref token) = ss.token {
            let subject = self.loquat.verify(token, Self::AUDIENCE)?;
            if self.clients.contains(&subject) {
                return Ok(subject);
            }
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some(format!("unknown client {subject}")),
            )));
        }
        Err(Box::new(HttpError(StatusCode::UNAUTHORIZED, None)))
    }
}
