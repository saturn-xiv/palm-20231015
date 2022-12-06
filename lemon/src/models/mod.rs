macro_rules! get_file_name {
    ($x:expr) => {
        if let Some(Some(name)) = $x.file_name().map(|x| x.to_str()) {
            Ok(name.to_string())
        } else {
            Err(std::io::Error::new(
                std::io::ErrorKind::UnexpectedEof,
                format!("bad file name {}", $x.display()),
            ))
        }
    };
}

macro_rules! yaml_to_string {
    ($x:expr) => {
        $x.as_str()
            .ok_or_else(|| std::io::Error::new(std::io::ErrorKind::UnexpectedEof, "not a string"))?
            .to_string()
    };
}

macro_rules! get_yaml_string {
    ($n:expr, $k:expr) => {
        $n[$k]
            .as_str()
            .ok_or_else(|| {
                std::io::Error::new(std::io::ErrorKind::Other, format!("can't get {}", $k))
            })?
            .to_string()
    };
}

macro_rules! get_yaml_optional_string {
    ($n:expr, $k:expr) => {
        $n[$k].as_str().map(|x| x.to_string())
    };
}

macro_rules! get_yaml_string_or {
    ($n:expr, $k:expr, $v:expr) => {
        $n[$k].as_str().unwrap_or($v).to_string()
    };
}

macro_rules! get_yaml_string_or_else {
    ($n:expr, $k:expr, $f:expr) => {
        $n[$k].as_str().map_or_else($f, |x| x.to_string())
    };
}

macro_rules! load_yaml_strings {
    ($v:expr, $n:expr, $k:expr) => {
        if let Some(items) = $n[$k].as_vec() {
            for it in items {
                if let Some(it) = it.as_str() {
                    $v.push(it.to_string());
                }
            }
        }
    };
}

pub mod page;
pub mod site;

use std::fs::{copy as copy_file, create_dir_all, read_dir, read_to_string};
use std::path::Path;

use chrono::{Datelike, Utc};
use palm::{copy_dir_all, Result};
use serde::{Deserialize, Serialize};
use yaml_rust::{Yaml, YamlLoader};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub default_language: String,
    pub languages: Vec<String>,
    pub authors: Vec<Author>,
    pub copyright: String,
    pub contact: Contact,
    pub sites: Vec<site::Config>,
}

impl Config {
    pub const ASSETS: &str = "assets";
    pub fn new<P: AsRef<Path>>(root: P) -> Result<Self> {
        let root = root.as_ref();
        let mut it = Self::default();
        {
            let buf = read_to_string(&root.join("config.yml"))?;
            let cfg = YamlLoader::load_from_str(&buf)?;
            let cfg = cfg.into_iter().next().unwrap_or(Yaml::BadValue);
            it.default_language = get_yaml_string_or!(cfg, "default-language", "en-US");
            load_yaml_strings!(it.languages, cfg, "languages");
            it.copyright =
                get_yaml_string_or_else!(cfg, "copyright", || format!("©{}", Utc::now().year()));

            if let Some(authors) = cfg["authors"].as_vec() {
                for author in authors {
                    let author = Author::new(author)?;
                    it.authors.push(author);
                }
            }

            it.contact = Contact::new(&cfg["contact"]);
        }

        for file in read_dir(root)? {
            let file = file?;
            let file = file.path();
            if file.is_dir() {
                if let Some(name) = file.file_name() {
                    if name != Self::ASSETS {
                        let site = site::Config::new(&file)?;
                        it.sites.push(site);
                    }
                }
            }
        }
        Ok(it)
    }

    pub fn copy_assets(&self, src: impl AsRef<Path>, target: impl AsRef<Path>) -> Result<()> {
        let src = src.as_ref();
        let target = target.as_ref();
        debug!("copy assets {} => {}", src.display(), target.display());
        copy_dir_all(&src.join(Self::ASSETS), target)?;

        for site in self.sites.iter() {
            for page in site.pages.iter() {
                for file in page.assets.iter() {
                    let target = target.join(file.strip_prefix(src)?);
                    debug!("copy assets {} => {}", file.display(), target.display());
                    if let Some(it) = target.parent() {
                        if !it.exists() {
                            create_dir_all(it)?;
                        }
                    }
                    copy_file(file, target)?;
                }
            }
        }
        Ok(())
    }
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Contact {
    pub wechat: Option<String>,
    pub address: Option<String>,
    pub phone: Option<String>,
    pub linkedin: Option<String>,
    pub github: Option<String>,
    pub medium: Option<String>,
    pub weibo: Option<String>,
}

impl Contact {
    pub fn new(node: &Yaml) -> Self {
        Self {
            wechat: get_yaml_optional_string!(node, "wechat"),
            address: get_yaml_optional_string!(node, "address"),
            phone: get_yaml_optional_string!(node, "phone"),
            linkedin: get_yaml_optional_string!(node, "linkedin"),
            github: get_yaml_optional_string!(node, "github"),
            medium: get_yaml_optional_string!(node, "medium"),
            weibo: get_yaml_optional_string!(node, "weibo"),
        }
    }
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Author {
    pub code: String,
    pub name: String,
}

impl Author {
    pub fn new(node: &Yaml) -> Result<Self> {
        let it = Self {
            code: get_yaml_string!(node, "code"),
            name: get_yaml_string!(node, "name"),
        };
        Ok(it)
    }
}
