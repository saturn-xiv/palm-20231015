use std::cmp::Ordering;
use std::collections::HashMap;

use askama::Template;

use super::super::super::{
    i18n::I18n,
    models::{
        page::Config as PageItem,
        site::{Config as Site, Contact as SiteContact, NavBar, Panel as PanelItem, Tag, Welcome},
        Author, Config as Env, Contact, Language,
    },
};

#[derive(Template)]
#[template(path = "hinode/home.html")]
pub struct Home {
    pub title: String,
    pub site: Layout,
    pub central: Option<Vec<PageItem>>,
    pub bottom: Option<Vec<PageItem>>,
}

impl Home {
    pub fn new(i18n: &I18n, env: &Env, site: &Site) -> Self {
        let central = site.panels.get("central").map(|panel| {
            let mut items = Vec::new();
            for it in site.pages.iter() {
                if it.tags.contains(&panel.tag) {
                    items.push(it.clone());
                }
            }
            items.sort_by(|x, y| {
                y.published_at
                    .partial_cmp(&x.published_at)
                    .unwrap_or(Ordering::Equal)
            });
            items
        });
        let bottom = site.panels.get("bottom").map(|panel| {
            let mut items = Vec::new();
            for it in site.pages.iter() {
                if it.tags.contains(&panel.tag) {
                    items.push(it.clone());
                }
            }
            items.sort_by(|x, y| {
                y.published_at
                    .partial_cmp(&x.published_at)
                    .unwrap_or(Ordering::Equal)
            });
            items
        });
        Self {
            title: i18n.t(&site.language, "pages.home.title"),
            site: Layout::new(i18n, env, site),
            central,
            bottom,
        }
    }
}

#[derive(Template)]
#[template(path = "hinode/page.html")]
pub struct Page {
    pub author: Option<Author>,
    pub page: PageItem,
    pub site: Layout,
}

impl Page {
    pub fn new(i18n: &I18n, env: &Env, site: &Site, page: &PageItem) -> Self {
        let mut author = None;
        if let Some(ref id) = page.author {
            for it in env.authors.iter() {
                if &it.id == id {
                    author = Some(it.clone());
                }
            }
        }

        Self {
            author,
            site: Layout::new(i18n, env, site),
            page: page.clone(),
        }
    }
}

#[derive(Template)]
#[template(path = "hinode/by-author.html")]
pub struct ByAuthor {
    pub author: Author,
    pub site: Layout,
    pub pages: Vec<PageItem>,
}

impl ByAuthor {
    pub fn new(i18n: &I18n, env: &Env, site: &Site, author: &Author) -> Self {
        Self {
            author: author.clone(),
            site: Layout::new(i18n, env, site),
            pages: site.by_author(&author.id),
        }
    }
}

#[derive(Template)]
#[template(path = "hinode/by-tag.html")]
pub struct ByTag {
    pub tag: Tag,
    pub site: Layout,
    pub pages: Vec<PageItem>,
}

impl ByTag {
    pub fn new(i18n: &I18n, env: &Env, site: &Site, tag: &Tag) -> Self {
        Self {
            tag: tag.clone(),
            site: Layout::new(i18n, env, site),
            pages: site.by_tag(&tag.id),
        }
    }
}

pub struct Layout {
    pub logo: String,
    pub favicon: String,
    pub language: String,
    pub languages: Vec<Language>,
    pub keywords: String,
    pub title: String,
    pub copyright: String,
    pub license: Option<String>,
    pub description: String,
    pub contact: Contact,
    pub top_nav_bar: Vec<NavBar>,
    pub css: Vec<String>,
    pub js: Vec<String>,
    pub i18n: HashMap<String, String>,
    pub footer: SiteContact,
    pub pages: HashMap<String, String>,
    pub tags: HashMap<String, String>,
    pub authors: HashMap<String, String>,
    pub panels: HashMap<String, PanelItem>,
    pub welcome: Option<Welcome>,
}

impl Layout {
    pub fn new(i18n: &I18n, env: &Env, site: &Site) -> Self {
        let languages: Vec<Language> = env
            .languages
            .iter()
            .map(|x| Language {
                code: x.clone(),
                name: i18n.t(x, &format!("languages.{x}")),
            })
            .collect::<_>();
        let pages = {
            let mut items = HashMap::new();
            for it in site.pages.iter() {
                items.insert(it.name.clone(), it.title.clone());
            }
            items
        };
        let tags = {
            let mut items = HashMap::new();
            for it in site.tags.iter() {
                items.insert(it.id.clone(), it.name.clone());
            }
            items
        };
        let authors = {
            let mut items = HashMap::new();
            for it in env.authors.iter() {
                items.insert(it.id.clone(), it.name.clone());
            }
            items
        };
        Self {
            logo: env.logo.clone(),
            welcome: site.welcome.clone(),
            keywords: env.keywords.join(", "),
            favicon: env.favicon.clone(),
            language: site.language.clone(),
            footer: site.contact.clone(),
            license: env.license.clone(),
            title: site.title.clone(),
            copyright: env.copyright.clone(),
            description: site.description.clone(),
            contact: env.contact.clone(),
            panels: site.panels.clone(),
            top_nav_bar: site.nav.get("top").cloned().unwrap_or_default(),
            css: env
                .css
                .iter()
                .map(|x| x.display().to_string())
                .collect::<_>(),
            js: env
                .js
                .iter()
                .map(|x| x.display().to_string())
                .collect::<_>(),
            i18n: i18n.by_lang(&site.language),
            pages,
            tags,
            authors,
            languages,
        }
    }
}
