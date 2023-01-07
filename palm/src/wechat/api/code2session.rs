use reqwest::Client;
use serde::{Deserialize, Serialize};

use super::super::super::{nut::v1::WechatProfile, Result};

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
    pub openid: String,
}

// https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html
// https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html
impl WechatProfile {
    pub async fn code2session(&self, code: &str) -> Result<Response> {
        debug!("wechat code to session {code}");
        let client = Client::new();
        let response = client
            .get(Self::url("/sns/jscode2session"))
            .query(&Query {
                appid: self.app_id.to_string(),
                secret: self.app_secret.to_string(),
                js_code: code.to_string(),
                grant_type: Query::GRANT_TYPE.to_string(),
            })
            .send()
            .await?;
        let response: Response = Self::body(response).await?;
        Ok(response)
    }
}
