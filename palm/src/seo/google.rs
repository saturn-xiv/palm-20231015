use hyper::StatusCode;

use super::super::{HttpError, Result};

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
