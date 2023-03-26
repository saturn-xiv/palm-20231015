use std::fmt;

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Query {
    pub access_token: String,
    pub openid: String,
    pub lang: String,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum Language {
    CN,
    TW,
    EN,
}

impl fmt::Display for Language {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "{}",
            match self {
                Self::CN => "zh_CN",
                Self::TW => "zh_TW",
                Self::EN => "en",
            }
        )
    }
}

impl Default for Language {
    fn default() -> Self {
        Self::EN
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Response {
    pub openid: String,
    pub nickname: String,
    pub sex: u8,
    pub province: String,
    pub city: String,
    pub country: String,
    pub headimgurl: Option<String>,
    pub privilege: Vec<String>,
    pub unionid: String,
}

impl Response {
    pub fn is_meal(&self) -> bool {
        self.sex == 1
    }
}
