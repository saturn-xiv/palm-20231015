pub mod baidu;
pub mod google;
pub mod index_now;

use std::any::type_name;
use std::cmp::{Ord, Ordering};
use std::io::{Error as IoError, ErrorKind as IoErrorKind};

use chrono::{DateTime, FixedOffset, NaiveDateTime, Utc};
use redis::Commands;
use rss::ChannelBuilder as RssChannelBuilder;
use serde::{Deserialize, Serialize};
use sitemap::{
    structs::{SiteMapEntry, UrlEntry},
    writer::SiteMapWriter,
};

use super::{cache::redis::ClusterConnection, Result};

// https://www.sitemaps.org/protocol.html#
// https://validator.w3.org/feed/docs/rss2.html
#[derive(Serialize, Deserialize, Debug)]
#[serde(rename_all = "camelCase")]
pub struct Link {
    pub path: String,
    pub title: String,
    pub description: String,
    pub change_freq: String,
    pub priority: f32,
    pub updated_at: NaiveDateTime,
}

impl PartialEq for Link {
    fn eq(&self, other: &Self) -> bool {
        self.path == other.path
    }
}
impl Eq for Link {}

impl PartialOrd for Link {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

impl Ord for Link {
    fn cmp(&self, other: &Self) -> Ordering {
        self.updated_at.cmp(&other.updated_at)
    }
}

pub trait Provider {
    fn by_lang(&mut self, lang: &str) -> Result<Vec<Link>>;
    fn append(&mut self, lang: &str, links: Vec<Link>) -> Result<()>;
}

impl Provider for ClusterConnection {
    fn by_lang(&mut self, lang: &str) -> Result<Vec<Link>> {
        let buf: Vec<u8> = Commands::hget(self, type_name::<Link>(), lang)?;
        let items = flexbuffers::from_slice(buf.as_slice())?;
        Ok(items)
    }
    fn append(&mut self, lang: &str, links: Vec<Link>) -> Result<()> {
        let mut items = Provider::by_lang(self, lang).unwrap_or_default();
        items.extend(links);
        items.dedup();
        items.sort();
        items.reverse();

        let buf = flexbuffers::to_vec(&items)?;
        Commands::hset(self, type_name::<Link>(), lang, buf.as_slice())?;
        Ok(())
    }
}
pub fn sitemap_index(home: &str, links: &[String]) -> Result<Vec<u8>> {
    let mut buf = Vec::new();
    let writer = SiteMapWriter::new(&mut buf);
    {
        let mut writer = writer.start_sitemapindex()?;
        for it in links {
            writer.sitemap(SiteMapEntry::builder().loc(format!("{}{}", home, it)))?;
        }
        writer.end()?;
    }

    Ok(buf)
}
pub fn sitemap_urlset(home: &str, links: &[Link]) -> Result<Vec<u8>> {
    let mut buf = Vec::new();
    let writer = SiteMapWriter::new(&mut buf);
    {
        let mut writer = writer.start_urlset()?;
        for it in links {
            writer.url(
                UrlEntry::builder()
                    .lastmod(DateTime::<Utc>::from_utc(it.updated_at, Utc).with_timezone(
                        &FixedOffset::east_opt(0).ok_or_else(|| {
                            Box::new(IoError::new(IoErrorKind::Other, "bad datetime"))
                        })?,
                    ))
                    .changefreq(it.change_freq.clone().into())
                    .priority(it.priority)
                    .loc(format!("{}{}", home, it.path)),
            )?;
        }
        writer.end()?;
    }

    Ok(buf)
}
pub fn rss(home: &str, title: &str, description: &str, links: &[Link]) -> Result<Vec<u8>> {
    let pub_date: DateTime<Utc> = links
        .first()
        .map_or_else(Utc::now, |x| DateTime::<Utc>::from_utc(x.updated_at, Utc));
    let mut ch = RssChannelBuilder::default()
        .title(title.to_string())
        .link(home.to_string())
        .pub_date(Some(pub_date.to_rfc2822()))
        .description(description.to_string())
        .build();
    for it in links {
        let url = format!("{}{}", home, it.path);
        ch.items.push(rss::Item {
            guid: Some(rss::Guid {
                value: url.clone(),
                permalink: true,
            }),
            title: Some(it.title.clone()),
            link: Some(url),
            description: Some(it.description.clone()),
            pub_date: Some(DateTime::<Utc>::from_utc(it.updated_at, Utc).to_rfc2822()),
            ..Default::default()
        });
    }
    let mut buf = Vec::new();
    ch.write_to(&mut buf)?;
    Ok(buf)
}
