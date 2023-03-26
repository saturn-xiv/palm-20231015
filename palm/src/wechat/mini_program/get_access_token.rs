use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Query {
    pub appid: String,
    pub secret: String,
    pub grant_type: String,
}
impl Query {
    pub const GRANT_TYPE: &str = "client_credential";
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Response {
    pub access_token: String,
    pub expires_in: usize,
}
