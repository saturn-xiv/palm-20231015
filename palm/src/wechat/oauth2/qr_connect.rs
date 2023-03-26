use std::fmt;

use serde::{Deserialize, Serialize};
use url::{ParseError as UrlParseError, Url};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Request {
    pub home: String,
    pub state: String,
    pub lang: Language,
}

impl Request {
    // https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html
    pub fn build(&self, app_id: &str) -> Result<Url, UrlParseError> {
        let mut it = Url::parse("https://open.weixin.qq.com/connect/qrconnect")?;
        it.query_pairs_mut()
            .append_pair("appid", app_id)
            .append_pair(
                "redirect_uri",
                &format!("{}/api/wechat/web/user/sign-in", self.home),
            )
            .append_pair("response_type", "code")
            .append_pair("scope", "snsapi_login")
            .append_pair("state", &self.state)
            .append_pair("lang", &self.lang.to_string());
        it.set_fragment(Some("wechat_redirect"));

        Ok(it)
    }
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Query {
    pub code: String,
    pub state: String,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum Language {
    CN,
    EN,
}
impl fmt::Display for Language {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "{}",
            match self {
                Self::CN => "cn",
                Self::EN => "en",
            }
        )
    }
}

impl Default for Language {
    fn default() -> Self {
        Self::CN
    }
}
