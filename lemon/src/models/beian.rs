use askama::Template;
use serde::{Deserialize, Serialize};

#[derive(Template, Serialize, Deserialize, Default, Debug, Clone)]
#[template(path = "widgets/beian.html")]
pub struct Config {
    pub icp: Icp,
    pub gongan: Gongan,
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Icp {
    pub code: String,
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Gongan {
    pub code: String,
    pub title: String,
}
