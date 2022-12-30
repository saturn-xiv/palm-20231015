use reqwest::Client;
use serde::{Deserialize, Serialize};

use super::super::super::Result;
use super::super::Config;

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Request {
    pub code: String,
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Query {
    pub access_token: String,
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Response {
    pub phone_info: PhoneInfo,
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct PhoneInfo {
    #[serde(rename = "phoneNumber")]
    pub phone_number: String,
    #[serde(rename = "purePhoneNumber")]
    pub pure_phone_number: String,
    #[serde(rename = "countryCode")]
    pub country_code: String,
    #[serde(rename = "watermark")]
    pub water_mark: WaterMark,
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct WaterMark {
    pub timestamp: u64,
    pub appid: String,
}

// https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html
// https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/phone-number/getPhoneNumber.html
impl Config {
    pub async fn get_phone_number(&self, code: &str, access_token: &str) -> Result<Response> {
        let client = Client::new();
        let response = client
            .post(Self::url("/wxa/business/getuserphonenumber"))
            .query(&Query {
                access_token: access_token.to_string(),
            })
            .json(&Request {
                code: code.to_string(),
            })
            .send()
            .await?;
        let response: Response = Self::body(response).await?;
        Ok(response)
    }
}
