use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Query {
    pub appid: String,
    pub refresh_token: String,
    pub grant_type: String,
}
impl Query {
    pub const GRANT_TYPE: &'static str = "refresh_token";
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Response {
    pub access_token: String,
    pub expires_in: usize,
    pub refresh_token: String,
    pub openid: String,
    pub scope: String,
}
