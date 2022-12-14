use askama::Template;
use palm::Result;
use serde::{Deserialize, Serialize};
use yaml_rust::Yaml;

#[derive(Template, Serialize, Deserialize, Default, Debug, Clone)]
#[template(path = "widgets/beian.html")]
pub struct Config {
    pub icp: Icp,
    pub gongan: Gongan,
}

impl Config {
    pub fn new(node: &Yaml) -> Result<Self> {
        Ok(Self {
            icp: Icp::new(&node["icp"])?,
            gongan: Gongan::new(&node["gongan"])?,
        })
    }
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Icp {
    pub code: String,
}

impl Icp {
    pub fn new(node: &Yaml) -> Result<Self> {
        Ok(Self {
            code: get_yaml_string!(node, "code"),
        })
    }
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Gongan {
    pub code: String,
    pub title: String,
}

impl Gongan {
    pub fn new(node: &Yaml) -> Result<Self> {
        Ok(Self {
            code: get_yaml_string!(node, "code"),
            title: get_yaml_string!(node, "title"),
        })
    }
}
