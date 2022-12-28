use hyper::StatusCode;
use palm::{HttpError, Result};
use reqwest::Client;
use serde::{Deserialize, Serialize};

use super::super::Config;

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Query {
    pub appid: String,
    pub secret: String,
    pub js_code: String,
    pub grant_type: String,
}
impl Query {
    const GRANT_TYPE: &str = "authorization_code";
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Response {
    pub session_key: String,
    pub unionid: Option<String>,
    pub errmsg: String,
    pub openid: String,
    pub errcode: i32,
}

// https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html
// https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html
impl Config {
    pub async fn code2session(&self, code: &str) -> Result<Response> {
        let client = Client::new();
        let response = client
            .get(Self::url("/cgi-bin/token"))
            .query(&Query {
                appid: self.app_id.to_string(),
                secret: self.app_secret.to_string(),
                js_code: code.to_string(),
                grant_type: Query::GRANT_TYPE.to_string(),
            })
            .send()
            .await?;
        let response: Response = response.json().await?;
        if response.errcode == 0 {
            return Ok(response);
        }
        Err(Box::new(HttpError(
            StatusCode::INTERNAL_SERVER_ERROR,
            Some(response.errmsg),
        )))
    }
}
