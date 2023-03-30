use std::fmt;

use serde::{Deserialize, Serialize};

use super::super::super::orchid::v1;

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Query {
    pub access_token: String,
    pub openid: String,
    pub lang: String,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Response {
    pub openid: String,
    pub nickname: String,
    pub sex: i32,
    pub province: String,
    pub city: String,
    pub country: String,
    pub headimgurl: Option<String>,
    pub privilege: Vec<String>,
    pub unionid: String,
}

impl Response {
    pub fn is_male(&self) -> bool {
        self.sex == 1
    }
}

impl fmt::Display for v1::wechat_oauth2_login_request::Language {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "{}",
            match self {
                Self::Cn => "zh_CN",
                Self::Tw => "zh_TW",
                Self::En => "en",
            }
        )
    }
}
