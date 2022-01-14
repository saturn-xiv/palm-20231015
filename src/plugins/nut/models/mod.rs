pub mod attachment;
pub mod category;
pub mod friend_link;
pub mod leave_word;
pub mod log;
pub mod notification;
pub mod tag;
pub mod user;
pub mod view_counter;
pub mod vote;

use std::default::Default;
use std::fmt::{self};

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Font {}
#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Color {}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Icon {}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub enum WYSIWYGEditor {
    Markdown,
    Quill,
    Draft,
    Textarea,
}

impl Default for WYSIWYGEditor {
    fn default() -> Self {
        Self::Textarea
    }
}

impl fmt::Display for WYSIWYGEditor {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Self::Markdown => fmt.write_str("markdown"),
            Self::Quill => fmt.write_str("quill"),
            Self::Draft => fmt.write_str("draft"),
            Self::Textarea => fmt.write_str("textarea"),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct WYSIWYG {
    pub content: String,
    pub editor: WYSIWYGEditor,
}
