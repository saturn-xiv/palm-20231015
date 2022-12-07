use std::fs::{metadata, read_dir, read_to_string};
use std::path::{Path, PathBuf};

use chrono::{DateTime, NaiveDateTime, Utc};
use palm::Result;
use serde::{Deserialize, Serialize};
use yaml_rust::{Yaml, YamlLoader};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub name: String,
    pub title: String,
    pub author: Option<String>,
    pub cover: Option<String>,
    pub summary: Option<String>,
    pub body: String,
    pub tags: Vec<String>,
    pub previous: Option<String>,
    pub next: Option<String>,
    pub assets: Vec<PathBuf>,
    pub published_at: NaiveDateTime,
}
impl Config {
    const README: &str = "README.md";
    const CONFIG: &str = "config.yml";

    pub fn new(root: impl AsRef<Path>) -> Result<Self> {
        let root = root.as_ref();
        let mut it = Self::default();

        {
            let buf = read_to_string(&root.join(Self::CONFIG))?;
            let cfg = YamlLoader::load_from_str(&buf)?;
            let cfg = cfg.into_iter().next().unwrap_or(Yaml::BadValue);

            it.author = get_yaml_optional_string!(cfg, "author");
            it.cover = get_yaml_optional_string!(cfg, "cover");
            it.summary = get_yaml_optional_string!(cfg, "summary");
            it.previous = get_yaml_optional_string!(cfg, "previous");
            it.next = get_yaml_optional_string!(cfg, "next");
            it.title = get_yaml_string!(cfg, "title");
            load_yaml_strings!(it.tags, cfg, "tags");

            if let Some(v) = cfg["published_at"].as_str() {
                it.published_at = DateTime::parse_from_rfc2822(v)?.naive_utc();
            } else {
                let mt = metadata(root.join(Self::README))?;
                let mt = mt.modified()?;
                let mt: DateTime<Utc> = mt.into();
                it.published_at = mt.naive_utc();
            }
        }

        for file in read_dir(root)? {
            let file = file?;
            let file = file.path();

            if file.is_file() {
                if let Some(Some(name)) = file.file_name().map(|x| x.to_str()) {
                    match name {
                        Self::CONFIG | Self::README => {}
                        _ => {
                            it.assets.push(file);
                        }
                    }
                }
            }
        }

        it.name = get_file_name!(root)?;
        it.body = read_to_string(root.join(Self::README))?;
        Ok(it)
    }
}
