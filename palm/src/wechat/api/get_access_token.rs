use reqwest::Client;
use serde::{Deserialize, Serialize};

use super::super::super::{nut::v1::WechatProfile, Result};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Query {
    pub appid: String,
    pub secret: String,
    pub grant_type: String,
}
impl Query {
    const GRANT_TYPE: &str = "client_credential";
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Response {
    pub access_token: String,
    pub expires_in: usize,
}

// https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-access-token/getAccessToken.html
impl WechatProfile {
    pub async fn get_access_token(&self) -> Result<Response> {
        debug!("wechat get access token");
        let client = Client::new();
        let response = client
            .get(Self::url("/cgi-bin/token"))
            .query(&Query {
                appid: self.app_id.to_string(),
                secret: self.app_secret.to_string(),
                grant_type: Query::GRANT_TYPE.to_string(),
            })
            .send()
            .await?;
        let response: Response = Self::body(response).await?;
        Ok(response)
    }
}
