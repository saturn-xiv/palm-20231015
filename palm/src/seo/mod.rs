pub mod baidu;
pub mod google;
pub mod index_now;
pub mod rss;
pub mod sitemap;

use std::any::type_name;
use std::cmp::{Ord, Ordering};

use askama::Template;
use chrono::NaiveDateTime;
use redis::Commands;
use serde::{Deserialize, Serialize};

use super::{cache::redis::ClusterConnection, Result};

// https://developers.google.com/search/docs/advanced/robots/create-robots-txt
#[derive(Template)]
#[template(path = "robots.txt", escape = "none")]
pub struct RobotsTxt {
    pub home: String,
}

impl RobotsTxt {
    pub const FILE: &str = "robots.txt";
}

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
