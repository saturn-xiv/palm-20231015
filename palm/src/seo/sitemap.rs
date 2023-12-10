use std::io::{Error as IoError, ErrorKind as IoErrorKind};

use chrono::{DateTime, FixedOffset, NaiveDateTime, Utc};
pub use sitemap::structs::ChangeFreq;
use sitemap::{
    structs::{SiteMapEntry, UrlEntry},
    writer::SiteMapWriter,
};

use super::super::Result;

pub const FILE: &str = "sitemap.xml";

pub struct Link {
    pub path: String,
    pub change_freq: ChangeFreq,
    pub priority: f32,
    pub updated_at: NaiveDateTime,
}

impl From<super::Link> for Link {
    fn from(it: super::Link) -> Self {
        Self {
            path: it.path.clone(),
            change_freq: ChangeFreq::from(it.change_freq),
            priority: it.priority,
            updated_at: it.updated_at,
        }
    }
}

pub fn index(home: &str, links: &[String]) -> Result<Vec<u8>> {
    let mut buf = Vec::new();
    let writer = SiteMapWriter::new(&mut buf);
    {
        let mut writer = writer.start_sitemapindex()?;
        for it in links {
            writer.sitemap(SiteMapEntry::builder().loc(format!("{home}{it}")))?;
        }
        writer.end()?;
    }

    Ok(buf)
}

pub fn urlset(home: &str, links: &[Link]) -> Result<Vec<u8>> {
    let mut buf = Vec::new();
    let writer = SiteMapWriter::new(&mut buf);
    {
        let mut writer = writer.start_urlset()?;
        for it in links {
            writer.url(
                UrlEntry::builder()
                    .lastmod(
                        DateTime::<Utc>::from_naive_utc_and_offset(it.updated_at, Utc)
                            .with_timezone(&FixedOffset::east_opt(0).ok_or_else(|| {
                                Box::new(IoError::new(IoErrorKind::Other, "bad datetime"))
                            })?),
                    )
                    .changefreq(it.change_freq.clone())
                    .priority(it.priority)
                    .loc(format!("{}{}", home, it.path)),
            )?;
        }
        writer.end()?;
    }

    Ok(buf)
}
