#[macro_use]
extern crate log;

pub mod app;
pub mod i18n;
pub mod models;
pub mod themes;

use std::fs::{create_dir_all, remove_dir_all, File};
use std::io::Write;
use std::path::Path;

use askama::Template;
use chrono::Utc;
use palm::{
    copy_dir_all,
    seo::{
        rss::{build as rss_build, Link as RssLink, RSS},
        sitemap::{
            index as sitemap_index, urlset as sitemap_urlset, ChangeFreq, Link as SitemapLink,
            FILE as SITEMAP_FILE,
        },
        RobotsTxt,
    },
    Result,
};
use serde::{Deserialize, Serialize};
use validator::Validate;

pub fn build<P: AsRef<Path>, T: models::Theme>(
    target: P,
    config: &models::Config,
    theme: &T,
) -> Result<()> {
    let target = target.as_ref();
    info!("generate whole site on {}", target.display());
    // check target folder
    if target.exists() {
        remove_dir_all(target)?;
    }
    let home = config.home();
    // copy assets folder
    copy_dir_all(Home::ASSETS, target.join(Home::ASSETS))?;

    // /index.html
    {
        let file = target.join(Home::INDEX);
        debug!("generate {}", file.display());
        let mut file = File::create(&file)?;
        let body = Home {
            lang: config.default_language.clone(),
        }
        .render()?;
        file.write_all(body.as_bytes())?;
    }
    // /robots.txt
    {
        let file = target.join(RobotsTxt::FILE);
        debug!("generate {}", file.display());
        let mut file = File::create(&file)?;
        let body = RobotsTxt { home: home.clone() }.render()?;
        file.write_all(body.as_bytes())?;
    }
    // /sitemap
    {
        let mut sitemap_indexes = Vec::new();
        for (lang, site) in config.sites.iter() {
            let target = target.join(lang);
            create_dir_all(&target)?;

            sitemap_indexes.push(format!("/{}/{}", lang, SITEMAP_FILE));

            let mut sitemap_links = Vec::new();
            let mut rss_links = Vec::new();

            for tag in site.tags.iter() {
                let target = target.join(&tag.name);
                create_dir_all(&target)?;

                {
                    let buf = theme.tag(tag)?;
                    let file = target.join(Home::INDEX);
                    debug!("generate {}", file.display());
                    let mut file = File::create(&file)?;
                    file.write_all(buf.as_bytes())?;
                }

                sitemap_links.push(SitemapLink {
                    path: format!("/{}/{}/", lang, tag.name),
                    change_freq: ChangeFreq::Weekly,
                    priority: 0.2,
                    updated_at: Utc::now().naive_local(),
                });
            }
            for page in site.pages.iter() {
                let target = target.join(&page.name);
                create_dir_all(&target)?;

                for att in page.attachments.iter() {
                    let file = target.join(&att.name);
                    debug!("generate {}", file.display());
                    let mut file = File::create(&file)?;
                    file.write_all(&att.body)?;
                }

                {
                    let buf = theme.page(page)?;
                    let file = target.join(Home::INDEX);
                    debug!("generate {}", file.display());
                    let mut file = File::create(&file)?;
                    file.write_all(buf.as_bytes())?;
                }

                let path = format!("/{}/{}/", lang, page.name);
                sitemap_links.push(SitemapLink {
                    path: path.clone(),
                    change_freq: ChangeFreq::Monthly,
                    priority: 0.8,
                    updated_at: page.updated_at,
                });
                if let Some(ref summary) = page.summary {
                    rss_links.push(RssLink {
                        path,
                        title: page.title.clone(),
                        description: summary.clone(),
                        updated_at: page.updated_at,
                    });
                }
            }

            // /{lang}/index.html
            {
                let buf = theme.page(&site.home)?;
                let file = target.join(Home::INDEX);
                debug!("generate {}", file.display());
                let mut file = File::create(&file)?;
                file.write_all(buf.as_bytes())?;
            }
            sitemap_links.push(SitemapLink {
                path: format!("/{}/", lang),
                change_freq: ChangeFreq::Monthly,
                priority: 0.9,
                updated_at: Utc::now().naive_local(),
            });

            // /{lang}/sitemap.xml
            {
                let buf = sitemap_urlset(&home, &sitemap_links)?;
                let file = target.join(SITEMAP_FILE);
                debug!("generate {}", file.display());
                let mut file = File::create(&file)?;
                file.write_all(&buf)?;
            }

            // /{lang}/rss.xml
            {
                let buf = rss_build(&home, &site.title, &site.description, &rss_links)?;
                let file = target.join(RSS);
                debug!("generate {}", file.display());
                let mut file = File::create(&file)?;
                file.write_all(&buf)?;
            }
        }

        // /sitemap.xml
        {
            let buf = sitemap_index(&home, &sitemap_indexes)?;
            let file = target.join(SITEMAP_FILE);
            debug!("generate {}", file.display());
            let mut file = File::create(&file)?;
            file.write_all(&buf)?;
        }
    }

    Ok(())
}

#[derive(Template, Validate, Serialize, Deserialize)]
#[template(path = "home.html")]
pub struct Home {
    #[validate(length(min = 1, max = 8))]
    pub lang: String,
}
impl Home {
    const INDEX: &str = "index.html";
    const ASSETS: &str = "assets";
}

#[derive(Template, Validate, Serialize, Deserialize)]
#[template(path = "baidu/verify.html", escape = "none")]

pub struct BaiduRequest {
    #[validate(length(min = 1))]
    pub site_verify_code: String,
    #[validate(length(min = 1))]
    pub site_verify_content: String,
}

#[derive(Template, Validate, Serialize, Deserialize)]
#[template(path = "index-now/verify.txt", escape = "none")]

pub struct IndexNowRequest {
    #[validate(length(min = 1))]
    pub key: String,
}

#[derive(Template, Validate, Serialize, Deserialize)]
#[template(path = "google/verify.html", escape = "none")]

pub struct GoogleRequest {
    #[validate(length(min = 1))]
    pub site_verify_code: String,
}
