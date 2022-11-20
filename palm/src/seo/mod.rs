pub mod baidu;
pub mod google;
pub mod index_now;

use chrono::NaiveDateTime;
use rss::ChannelBuilder as RssChannelBuilder;

use super::{cache::redis::ClusterConnection, Result};

// https://www.sitemaps.org/protocol.html#
// https://validator.w3.org/feed/docs/rss2.html
pub struct Link {
    pub url: String,
    pub title: String,
    pub description: String,
    pub change_freq: String,
    pub updated_at: NaiveDateTime,
}

pub trait Provider {
    fn by_lang(&mut self, lang: &str) -> Result<Vec<Link>>;
}

impl Provider for ClusterConnection {
    fn by_lang(&mut self, lang: &str) -> Result<Vec<Link>> {
        // TODO
        todo!()
    }
}
pub fn sitemap_indexes(home: &str, links: &[String]) -> Result<Vec<u8>> {
    todo!()
}
pub fn sitemap_urlset(home: &str, links: &[Link]) -> Result<Vec<u8>> {
    todo!()
}
pub fn rss(home: &str, title: &str, description: &str, links: &[Link]) -> Result<Vec<u8>> {
    let ch = RssChannelBuilder::default()
        .title(title.to_string())
        .link(home.to_string())
        .description(description.to_string())
        .build();

    let mut buf = Vec::new();
    ch.write_to(&mut buf)?;
    Ok(buf)
}
