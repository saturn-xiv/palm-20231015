use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Query {
    pub appid: String,
    pub secret: String,
    pub js_code: String,
    pub grant_type: String,
}
impl Query {
    pub const GRANT_TYPE: &str = "authorization_code";
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Response {
    pub session_key: String,
    pub unionid: String,
    pub openid: String,
}
