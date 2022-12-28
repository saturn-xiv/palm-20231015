use palm::Result;
use reqwest::Client;
use serde::{Deserialize, Serialize};

use super::super::Config;

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
impl Config {
    pub async fn get_access_token(&self) -> Result<Response> {
        let client = Client::new();
        let response = client
            .get(Self::url("/sns/jscode2session"))
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
