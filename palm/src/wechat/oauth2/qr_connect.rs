use std::fmt;

use serde::{Deserialize, Serialize};

use super::super::super::orchid::v1;

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Query {
    pub code: String,
    pub state: String,
}

impl fmt::Display for v1::wechat_oauth2_qr_connect_request::Language {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "{}",
            match self {
                Self::Cn => "cn",
                Self::En => "en",
            }
        )
    }
}
