use std::collections::HashMap;

use askama::Template;

use super::super::super::{
    i18n::I18n,
    models::{
        page::Config as PageItem,
        site::{Config as Site, Contact as SiteContact, NavBar, Tag},
        Author, Config as Env, Contact, Language,
    },
};

#[derive(Template)]
#[template(path = "hinode/home.html")]
pub struct Home {
    pub title: String,
    pub site: Layout,
}

impl Home {
    pub fn new(i18n: &I18n, env: &Env, site: &Site) -> Self {
        Self {
            title: i18n.t(&site.language, "pages.home.title"),
            site: Layout::new(i18n, env, site),
        }
    }
}

#[derive(Template)]
#[template(path = "hinode/page.html")]
pub struct Page {
    pub author: Option<Author>,
    pub page: PageItem,
    pub site: Layout,
    pub tags: Vec<Tag>,
}

impl Page {
    pub fn new(i18n: &I18n, env: &Env, site: &Site, page: &PageItem) -> Self {
        let mut author = None;
        if let Some(ref code) = page.author {
            for it in env.authors.iter() {
                if &it.code == code {
                    author = Some(it.clone());
                }
            }
        }
        let mut tags = Vec::new();
        for code in page.tags.iter() {
            for it in site.tags.iter() {
                if &it.code == code {
                    tags.push(it.clone());
                }
            }
        }
        Self {
            author,
            site: Layout::new(i18n, env, site),
            page: page.clone(),
            tags,
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
            pages: site.by_author(&author.code),
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
            pages: site.by_tag(&tag.code),
        }
    }
}

pub struct Layout {
    pub logo: String,
    pub favicon: String,
    pub language: String,
    pub languages: Vec<Language>,
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
}

impl Layout {
    pub fn new(i18n: &I18n, env: &Env, site: &Site) -> Self {
        let languages: Vec<Language> = env
            .languages
            .iter()
            .map(|x| Language {
                code: x.clone(),
                name: i18n.t(x, &format!("languages.{}", x)),
            })
            .collect::<_>();
        let pages = {
            let mut items = HashMap::new();
            for it in site.pages.iter() {
                items.insert(it.name.clone(), it.title.clone());
            }
            items
        };
        Self {
            logo: env.logo.clone(),
            favicon: env.favicon.clone(),
            language: site.language.clone(),
            languages,
            footer: site.contact.clone(),
            license: env.license.clone(),
            title: site.title.clone(),
            copyright: env.copyright.clone(),
            description: site.description.clone(),
            contact: env.contact.clone(),
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
        }
    }
}
