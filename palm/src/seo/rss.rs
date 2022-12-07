use std::path::PathBuf;

use chrono::{DateTime, NaiveDateTime, Utc};
use rss::ChannelBuilder as RssChannelBuilder;

use super::super::Result;

pub struct Link {
    pub path: PathBuf,
    pub title: String,
    pub description: String,
    pub updated_at: NaiveDateTime,
}

impl From<super::Link> for Link {
    fn from(it: super::Link) -> Self {
        Self {
            path: it.path.clone(),
            title: it.title.clone(),
            description: it.description.clone(),
            updated_at: it.updated_at,
        }
    }
}

pub fn build(home: &str, title: &str, description: &str, links: &[Link]) -> Result<Vec<u8>> {
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
        let url = format!("{}/{}", home, it.path.display());
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
