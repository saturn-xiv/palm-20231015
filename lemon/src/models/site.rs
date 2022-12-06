use std::collections::BTreeMap;
use std::fs::{read_dir, read_to_string};
use std::path::Path;

use palm::Result;
use serde::{Deserialize, Serialize};
use yaml_rust::{Yaml, YamlLoader};

use super::page::Config as Page;

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub language: String,
    pub tags: Vec<Tag>,
    pub pages: Vec<Page>,
    pub contact: Contact,
    pub nav: BTreeMap<String, NavBar>,
}

impl Config {
    pub fn new<P: AsRef<Path>>(root: P) -> Result<Self> {
        let root = root.as_ref();
        let mut it = Self::default();
        if let Some(lang) = root.file_name() {
            it.language = lang.to_string_lossy().to_string();
        }

        {
            let buf = read_to_string(&root.join("config.yml"))?;
            let cfg = YamlLoader::load_from_str(&buf)?;
            let cfg = cfg.into_iter().next().unwrap_or(Yaml::BadValue);

            it.contact = Contact::new(&cfg["contact"])?;
            if let Some(tags) = cfg["tags"].as_vec() {
                for tag in tags {
                    let tag = Tag::new(tag)?;
                    it.tags.push(tag);
                }
            }
            if let Some(nav) = cfg["nav"].as_hash() {
                for (key, val) in nav {
                    let code = yaml_to_string!(key);
                    let item = NavBar::new(val)?;
                    it.nav.insert(code, item);
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
pub struct Tag {
    pub code: String,
    pub name: String,
}

impl Tag {
    pub fn new(node: &Yaml) -> Result<Self> {
        let it = Self {
            code: get_yaml_string!(node, "code"),
            name: get_yaml_string!(node, "name"),
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
