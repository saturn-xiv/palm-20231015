use hyper::StatusCode;
use serde::{Deserialize, Serialize};

use super::super::{HttpError, Result};

#[derive(Serialize, Deserialize, Debug)]
pub struct Profile {
    #[serde(rename = "site-verify-id")]
    pub site_verify_id: Option<String>,
    #[serde(rename = "re-captcha")]
    pub re_captcha: Option<ReCaptcha>,
}

// https://developers.google.com/recaptcha/docs/v3
#[derive(Serialize, Deserialize, Debug)]
pub struct ReCaptcha {
    #[serde(rename = "site-key")]
    pub site_key: String,
    pub secret: String,
}

// https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#addsitemap
pub async fn ping(home: &str) -> Result<()> {
    let cli = reqwest::Client::new();
    let res = cli
        .get("https://www.google.com/ping")
        .query(&("sitemap", format!("{home}/sitemap.xml")))
        .send()
        .await?;

    debug!("{:#?}", res);
    if res.status() == reqwest::StatusCode::OK {
        return Ok(());
    }
    Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)))
}
