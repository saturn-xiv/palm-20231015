use std::fmt;

use super::v1;

impl fmt::Display for v1::wechat_oauth2_qr_connect_request::Language {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "{}",
            match self {
                Self::Cn => "cn",
                Self::En => "en",
                Self::Tw => "tw",
            }
        )
    }
}
