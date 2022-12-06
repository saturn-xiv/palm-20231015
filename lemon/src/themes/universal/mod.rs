use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub base_url: String,
    pub title: String,
    pub keywords: Vec<String>,
    pub description: String,
    pub copyright: String,

    pub default_content_language: String,
    pub languages: Vec<String>,

    pub top_bar: TopBar,
    pub menus: Vec<Menu>,

    pub summary_length: usize,
    pub paginate: usize,
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Menu {
    pub id: String,
    pub name: String,
    pub weight: usize,
    pub url: Option<String>,
    pub items: Option<Vec<Self>>,
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct TopBar {
    pub phone: Option<String>,
    pub address: Option<String>,
    pub email: Option<String>,
    pub facebook: Option<String>,
    pub twitter: Option<String>,
    pub wechat: Option<String>,
    pub github: Option<String>,
}
