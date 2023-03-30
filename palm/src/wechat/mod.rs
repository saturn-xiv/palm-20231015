pub mod mini_program;
pub mod oauth2;

use std::fmt::Debug;

use hyper::StatusCode;
use reqwest::Response;
use serde::{de::DeserializeOwned, Deserialize, Serialize};

use super::{cache::redis::Pool as RedisPool, HttpError, Result};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub app_id: String,
    pub app_secret: String,
}

impl Config {
    pub async fn body<T: DeserializeOwned + Debug>(res: Response) -> Result<T> {
        let status = res.status();
        let body = res.text().await?;
        debug!("receive {body}");
        if !status.is_success() {
            error!("{}\n{}", status, body);
            return Err(Box::new(HttpError(status, Some(body))));
        }
        if let Ok(it) = serde_json::from_str(&body) {
            return Ok(it);
        }

        let err: Error = serde_json::from_str(&body)?;
        error!("{:?}", err);
        Err(Box::new(HttpError(
            StatusCode::INTERNAL_SERVER_ERROR,
            Some(err.message),
        )))
    }
    pub fn url(path: &str) -> String {
        format!("https://api.weixin.qq.com{path}")
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Query {
    pub access_token: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Error {
    #[serde(rename = "errcode")]
    pub code: u32,
    #[serde(rename = "errmsg")]
    pub message: String,
}

pub struct Client {
    pub config: Config,
    pub redis: RedisPool,
}
