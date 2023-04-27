pub mod beian;
pub mod page;
pub mod site;
pub mod tag;

use std::collections::{BTreeMap, HashMap};
use std::path::{Path, PathBuf};

use palm::Result;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub domain: String,
    pub default_language: String,
    pub contact: Contact,
    pub beian: Option<beian::Config>,

    pub sites: BTreeMap<String, site::Site>,
    pub i18n: HashMap<String, String>,

    pub google: Option<site::Google>,
    pub baidu: Option<site::Baidu>,
    #[serde(rename = "index-now")]
    pub index_now: Option<site::IndexNow>,
}

impl Config {
    pub fn home(&self) -> String {
        format!("https://{}", self.domain)
    }

    pub fn new<P: AsRef<Path>>(_root: P) -> Result<Self> {
        // TODO
        todo!()
    }
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Author {
    pub email: String,
    pub name: String,
}

pub trait Theme {
    fn tag(&self, tag: &tag::Tag) -> Result<String>;
    fn page(&self, page: &page::Page) -> Result<String>;
    fn assets() -> Vec<PathBuf>;
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Contact {
    pub wechat: Option<Wechat>,
    pub address: Option<String>,
    pub phone: Option<String>,
    pub linkedin: Option<String>,
    pub github: Option<String>,
    pub medium: Option<String>,
    pub weibo: Option<String>,
    pub email: Option<String>,
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Wechat {
    pub id: String,
    pub qr: String,
}

// macro_rules! get_file_name {
//     ($x:expr) => {
//         if let Some(Some(name)) = $x.file_name().map(|x| x.to_str()) {
//             Ok(name.to_string())
//         } else {
//             Err(std::io::Error::new(
//                 std::io::ErrorKind::UnexpectedEof,
//                 format!("bad file name {}", $x.display()),
//             ))
//         }
//     };
// }
// macro_rules! get_yaml_string {
//     ($n:expr, $k:expr) => {
//         $n[$k]
//             .as_str()
//             .ok_or_else(|| {
//                 std::io::Error::new(std::io::ErrorKind::Other, format!("can't get {}", $k))
//             })?
//             .to_string()
//     };
// }
// macro_rules! yaml_to_string {
//     ($x:expr) => {
//         $x.as_str()
//             .ok_or_else(|| std::io::Error::new(std::io::ErrorKind::UnexpectedEof, "not a string"))?
//             .to_string()
//     };
// }

// macro_rules! get_yaml_optional_string {
//     ($n:expr, $k:expr) => {
//         $n[$k].as_str().map(|x| x.to_string())
//     };
// }

// macro_rules! get_yaml_string_or {
//     ($n:expr, $k:expr, $v:expr) => {
//         $n[$k].as_str().unwrap_or($v).to_string()
//     };
// }

// macro_rules! get_yaml_string_or_else {
//     ($n:expr, $k:expr, $f:expr) => {
//         $n[$k].as_str().map_or_else($f, |x| x.to_string())
//     };
// }

// macro_rules! load_yaml_strings {
//     ($v:expr, $n:expr, $k:expr) => {
//         if let Some(items) = $n[$k].as_vec() {
//             for it in items {
//                 if let Some(it) = it.as_str() {
//                     $v.push(it.to_string());
//                 }
//             }
//         }
//     };
// }
// pub mod beian;
// pub mod page;
// pub mod site;

// use std::fs::{copy as copy_file, create_dir_all, read_dir, read_to_string};
// use std::path::{Path, PathBuf};

// use askama::Template;
// use chrono::{Datelike, Utc};
// use palm::{copy_dir_all, Result};
// use serde::{Deserialize, Serialize};
// use yaml_rust::{Yaml, YamlLoader};

// #[derive(Serialize, Deserialize, Default, Debug, Clone)]
// pub struct Config {
//     pub home: String,
//     pub logo: String,
//     pub favicon: String,
//     pub default_language: String,
//     pub languages: Vec<String>,
//     pub keywords: Vec<String>,
//     pub authors: Vec<Author>,
//     pub copyright: String,
//     pub contact: Contact,
//     pub sites: Vec<site::Config>,
//     pub css: Vec<PathBuf>,
//     pub js: Vec<PathBuf>,
//     pub license: Option<String>,
//     pub beian: Option<beian::Config>,
// }

// #[derive(Serialize, Deserialize, Default, Debug, Clone)]
// pub struct Language {
//     pub code: String,
//     pub name: String,
// }

// pub struct Html {
//     pub language: String,
//     pub path: Option<PathBuf>,
//     pub body: String,
// }
// impl Html {
//     pub fn folder(&self) -> PathBuf {
//         match self.path {
//             Some(ref v) => Path::new(&self.language).join(v),
//             None => Path::new(&self.language).to_path_buf(),
//         }
//     }
// }

// impl Config {
//     pub const ASSETS: &str = "assets";
//     pub const APPLICATION_JS: &str = "application.js";
//     pub const MARKED_JS: &str = "marked.min.js";

//     pub fn new<P: AsRef<Path>>(root: P) -> Result<Self> {
//         let root = root.as_ref();
//         debug!("load global information from {}", root.display());
//         let mut it = Self::default();
//         {
//             let buf = read_to_string(root.join("config.yml"))?;
//             let cfg = YamlLoader::load_from_str(&buf)?;
//             let cfg = cfg.into_iter().next().unwrap_or(Yaml::BadValue);

//             it.home = get_yaml_string!(cfg, "home");
//             it.logo = get_yaml_string_or!(cfg, "favicon", "/logo.svg");
//             it.favicon = get_yaml_string_or!(cfg, "favicon", "/favicon.ico");
//             it.default_language = get_yaml_string_or!(cfg, "default-language", "en-US");
//             load_yaml_strings!(it.languages, cfg, "languages");
//             it.copyright =
//                 get_yaml_string_or_else!(cfg, "copyright", || format!("©{}", Utc::now().year()));
//             it.license = get_yaml_optional_string!(cfg, "license");
//             load_yaml_strings!(it.keywords, cfg, "keywords");

//             if let Some(authors) = cfg["authors"].as_vec() {
//                 for author in authors {
//                     let author = Author::new(author)?;
//                     it.authors.push(author);
//                 }
//             }

//             it.contact = Contact::new(&cfg["contact"]);

//             {
//                 let node = &cfg["beian"];
//                 if !node.is_badvalue() {
//                     it.beian = Some(beian::Config::new(node)?);
//                 }
//             }
//         }

//         for file in read_dir(root)? {
//             let file = file?;
//             let file = file.path();
//             if file.is_dir() {
//                 if let Some(name) = file.file_name() {
//                     if name == Self::ASSETS || name == ".git" || name == ".vscode" {
//                         continue;
//                     }
//                     let site = site::Config::new(&file)?;
//                     it.sites.push(site);
//                 }
//             }
//         }
//         Ok(it)
//     }

//     pub fn copy_assets(&self, src: impl AsRef<Path>, target: impl AsRef<Path>) -> Result<()> {
//         let src = src.as_ref();
//         let target = target.as_ref();
//         debug!("copy assets {} => {}", src.display(), target.display());
//         copy_dir_all(src.join(Self::ASSETS), target)?;

//         for site in self.sites.iter() {
//             for page in site.pages.iter() {
//                 for file in page.assets.iter() {
//                     let target = target.join(file.strip_prefix(src)?);
//                     debug!("copy assets {} => {}", file.display(), target.display());
//                     if let Some(it) = target.parent() {
//                         if !it.exists() {
//                             create_dir_all(it)?;
//                         }
//                     }
//                     copy_file(file, target)?;
//                 }
//             }
//         }
//         Ok(())
//     }
// }

// impl Contact {
//     pub fn new(node: &Yaml) -> Self {
//         Self {
//             wechat: Wechat::new(&node["wechat"]).ok(),
//             address: get_yaml_optional_string!(node, "address"),
//             phone: get_yaml_optional_string!(node, "phone"),
//             linkedin: get_yaml_optional_string!(node, "linkedin"),
//             github: get_yaml_optional_string!(node, "github"),
//             medium: get_yaml_optional_string!(node, "medium"),
//             weibo: get_yaml_optional_string!(node, "weibo"),
//             email: get_yaml_optional_string!(node, "email"),
//         }
//     }
// }

// impl Wechat {
//     pub fn new(node: &Yaml) -> Result<Self> {
//         let it = Self {
//             id: get_yaml_string!(node, "id"),
//             qr: get_yaml_string!(node, "qr"),
//         };
//         Ok(it)
//     }
// }

// #[derive(Serialize, Deserialize, Default, Debug, Clone)]
// pub struct Author {
//     pub id: String,
//     pub name: String,
// }

// impl Author {
//     pub fn new(node: &Yaml) -> Result<Self> {
//         let it = Self {
//             id: get_yaml_string!(node, "id"),
//             name: get_yaml_string!(node, "name"),
//         };
//         Ok(it)
//     }
// }
