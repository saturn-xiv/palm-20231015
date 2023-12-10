use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Query {
    pub appid: String,
    pub secret: String,
    pub code: String,
    pub grant_type: String,
}
impl Query {
    pub const GRANT_TYPE: &'static str = "authorization_code";
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Response {
    pub access_token: String,
    pub expires_in: usize,
    pub refresh_token: String,
    pub openid: String,
    pub scope: String,
    pub unionid: Option<String>,
}
