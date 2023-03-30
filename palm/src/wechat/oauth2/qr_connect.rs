use std::fmt::{self, Display};

use serde::{Deserialize, Serialize};
use url::Url;

use super::super::super::{orchid::v1, Result};

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
                Self::Tw => "tw",
            }
        )
    }
}

pub fn url<S: Display>(
    app_id: &str,
    redirect_uri: &str,
    state: &S,
    lang: v1::wechat_oauth2_qr_connect_request::Language,
) -> Result<String> {
    let mut it = Url::parse("https://open.weixin.qq.com/connect/qrconnect")?;
    it.query_pairs_mut()
        .append_pair("appid", app_id)
        .append_pair("redirect_uri", redirect_uri)
        .append_pair("response_type", "code")
        .append_pair("scope", "snsapi_login")
        .append_pair("state", &state.to_string())
        .append_pair("lang", &lang.to_string());
    it.set_fragment(Some("wechat_redirect"));

    Ok(it.to_string())
}
