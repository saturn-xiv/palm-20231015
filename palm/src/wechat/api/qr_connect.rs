use serde::{Deserialize, Serialize};
use url::{ParseError as UrlParseError, Url};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Request {
    pub home: String,
    pub state: String,
    pub english: bool,
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
            .append_pair("lang", if self.english { "en" } else { "cn" });
        it.set_fragment(Some("wechat_redirect"));

        Ok(it)
    }
}
