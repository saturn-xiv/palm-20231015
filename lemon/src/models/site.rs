use std::cmp::Ordering;
use std::collections::{BTreeMap, HashMap};
use std::fs::{read_dir, read_to_string};
use std::path::Path;

use palm::Result;
use serde::{Deserialize, Serialize};
use yaml_rust::{Yaml, YamlLoader};

use super::page::Config as Page;

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub title: String,
    pub description: String,
    pub language: String,
    pub tags: Vec<Tag>,
    pub pages: Vec<Page>,
    pub panels: HashMap<String, Panel>,
    pub contact: Contact,
    pub welcome: Option<Welcome>,
    pub nav: BTreeMap<String, Vec<NavBar>>,
}

impl Config {
    pub fn by_tag(&self, tag: &str) -> Vec<Page> {
        let tag = tag.to_string();
        let mut items: Vec<Page> = self
            .pages
            .clone()
            .into_iter()
            .filter(|x| x.tags.contains(&tag))
            .collect::<_>();
        items.sort_by(|x, y| {
            y.published_at
                .partial_cmp(&x.published_at)
                .unwrap_or(Ordering::Equal)
        });
        items
    }
    pub fn by_author(&self, author: &str) -> Vec<Page> {
        let mut items: Vec<Page> = self
            .pages
            .clone()
            .into_iter()
            .filter(|x| {
                if let Some(ref it) = x.author {
                    it == author
                } else {
                    false
                }
            })
            .collect::<_>();

        items.sort_by(|x, y| {
            y.published_at
                .partial_cmp(&x.published_at)
                .unwrap_or(Ordering::Equal)
        });
        items
    }
    pub fn new<P: AsRef<Path>>(root: P) -> Result<Self> {
        let root = root.as_ref();
        debug!("load site information from {}", root.display());
        let mut it = Self::default();
        if let Some(lang) = root.file_name() {
            it.language = lang.to_string_lossy().to_string();
        }

        {
            let buf = read_to_string(&root.join("config.yml"))?;
            let cfg = YamlLoader::load_from_str(&buf)?;
            let cfg = cfg.into_iter().next().unwrap_or(Yaml::BadValue);

            it.title = get_yaml_string!(cfg, "title");
            it.description = get_yaml_string!(cfg, "description");

            {
                debug!("load welcome panel");
                let cfg = &cfg["welcome"];
                if !cfg.is_badvalue() {
                    it.welcome = Some(Welcome::new(cfg)?);
                }
            }
            debug!("load contact info");
            it.contact = Contact::new(&cfg["contact"])?;

            debug!("load tag list");
            if let Some(tags) = cfg["tags"].as_vec() {
                for tag in tags {
                    let tag = Tag::new(tag)?;
                    it.tags.push(tag);
                }
            }
            debug!("load nav list");
            if let Some(nav) = cfg["nav"].as_hash() {
                for (key, val) in nav {
                    let id = yaml_to_string!(key);
                    let mut nav = Vec::new();
                    if let Some(items) = val.as_vec() {
                        for val in items {
                            let item = NavBar::new(val)?;
                            nav.push(item);
                        }
                    }
                    it.nav.insert(id, nav);
                }
            }
            debug!("load panels");
            if let Some(nav) = cfg["panels"].as_hash() {
                for (key, val) in nav {
                    let id = yaml_to_string!(key);
                    let item = Panel::new(val)?;
                    it.panels.insert(id, item);
                }
            }
        }

        for file in read_dir(root)? {
            let file = file?;
            let file = file.path();
            if file.is_dir() {
                let page = Page::new(file)?;
                it.pages.push(page);
            }
        }

        Ok(it)
    }
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Welcome {
    pub title: String,
    pub body: String,
    pub to: String,
    pub logo: String,
    pub button: String,
}

impl Welcome {
    pub fn new(node: &Yaml) -> Result<Self> {
        let it = Self {
            title: get_yaml_string!(node, "title"),
            body: get_yaml_string!(node, "body"),
            to: get_yaml_string!(node, "to"),
            logo: get_yaml_string!(node, "logo"),
            button: get_yaml_string!(node, "button"),
        };
        Ok(it)
    }
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Tag {
    pub id: String,
    pub name: String,
}

impl Tag {
    pub fn new(node: &Yaml) -> Result<Self> {
        let it = Self {
            id: get_yaml_string!(node, "id"),
            name: get_yaml_string!(node, "name"),
        };
        Ok(it)
    }
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Panel {
    pub tag: String,
    pub name: String,
    pub button: String,
}

impl Panel {
    pub fn new(node: &Yaml) -> Result<Self> {
        let it = Self {
            tag: get_yaml_string!(node, "tag"),
            name: get_yaml_string!(node, "name"),
            button: get_yaml_string!(node, "button"),
        };
        Ok(it)
    }
}
#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Contact {
    pub title: String,
    pub body: String,
}

impl Contact {
    pub fn new(node: &Yaml) -> Result<Self> {
        let it = Self {
            title: get_yaml_string!(node, "title"),
            body: get_yaml_string!(node, "body"),
        };
        Ok(it)
    }
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct NavBar {
    pub to: String,
    pub title: String,
    pub items: Vec<Self>,
}

impl NavBar {
    pub fn new(node: &Yaml) -> Result<Self> {
        let mut it = Self {
            title: get_yaml_string!(node, "title"),
            to: get_yaml_string!(node, "to"),
            items: Vec::new(),
        };
        if let Some(links) = node["items"].as_vec() {
            for link in links {
                let item = Self::new(link)?;
                it.items.push(item);
            }
        }
        Ok(it)
    }
}
