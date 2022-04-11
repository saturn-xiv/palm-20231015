use askama::Template;
use serde::{Deserialize, Serialize};
use validator::Validate;

#[derive(Template, Validate, Serialize, Deserialize)]
#[template(path = "google/verify.html", escape = "none")]

pub struct Form {
    #[validate(length(min = 1))]
    pub site_verify_code: String,
}

impl Form {
    pub const KEY: &'static str = "site.google";
}
