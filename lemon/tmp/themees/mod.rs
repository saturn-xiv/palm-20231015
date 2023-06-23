pub mod clean_white;
pub mod docsy;
pub mod gantry;
pub mod hinode;
pub mod universal;
pub mod x_corporation;

use std::fmt;

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub enum Theme {
    CleanWhite,
    Docsy,
    Gantry,
    Hinode,
    #[default]
    Universal,
    XCorporation,
}

impl fmt::Display for Theme {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Theme::CleanWhite => fmt.write_str("clean-white"),
            Theme::Docsy => fmt.write_str("docsy"),
            Theme::Gantry => fmt.write_str("gantry"),
            Theme::Hinode => fmt.write_str("hinode"),
            Theme::Universal => fmt.write_str("universal"),
            Theme::XCorporation => fmt.write_str("x-corporation"),
        }
    }
}

pub struct Layout {}

impl Layout {
    pub const AUTHOR_NAME: &'static str = "site.author.name";
    pub const AUTHOR_EMAIL: &'static str = "site.author.email";
    pub const SITE_TITLE: &'static str = "site.title";
    pub const SITE_SUBHEAD: &'static str = "site.subhead";
    pub const SITE_DESCRIPTION: &'static str = "site.description";
}
