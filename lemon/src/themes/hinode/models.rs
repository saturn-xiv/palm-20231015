use askama::Template;

use super::super::super::{
    i18n::I18n,
    models::{
        page::Config as PageItem,
        site::{Config as Site, NavBar, Tag},
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
    pub language: String,
    pub languages: Vec<Language>,
    pub title: String,
    pub copyright: String,
    pub description: String,
    pub contact: Contact,
    pub top_nav_bar: Vec<NavBar>,
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
        Self {
            language: site.language.clone(),
            languages,
            title: site.title.clone(),
            copyright: env.copyright.clone(),
            description: site.description.clone(),
            contact: env.contact.clone(),
            top_nav_bar: site.nav.get("top").cloned().unwrap_or_default(),
        }
    }
}
