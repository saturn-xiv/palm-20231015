use serde::{Deserialize, Serialize};

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
