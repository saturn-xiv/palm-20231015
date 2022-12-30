pub mod code2session;
pub mod get_access_token;
pub mod get_api_domain_ip;
pub mod get_phone_number;

use std::fmt::Debug;

use hyper::StatusCode;
use reqwest::Response;
use serde::{de::DeserializeOwned, Deserialize, Serialize};

use super::super::{HttpError, Result};
use super::Config;

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
