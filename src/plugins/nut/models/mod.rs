pub mod attachment;
pub mod category;
pub mod leave_word;
pub mod log;
pub mod tag;
pub mod user;
pub mod vote;

use std::fmt;
use std::str::FromStr;

use chrono::NaiveDateTime;
use hyper::StatusCode;
use serde::{Deserialize, Serialize};

use super::super::super::{Error, HttpError, Result};

pub enum Operation {
    Read,
    Write,
    Create,
    Update,
    Remove,
}

impl Operation {
    pub const READ: &'static str = "read";
    pub const WRITE: &'static str = "write";
    pub const CREATE: &'static str = "create";
    pub const UPDATE: &'static str = "update";
    pub const REMOVE: &'static str = "remove";
}

impl fmt::Display for Operation {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Self::Read => fmt.write_str(Self::READ),
            Self::Write => fmt.write_str(Self::WRITE),
            Self::Create => fmt.write_str(Self::CREATE),
            Self::Update => fmt.write_str(Self::UPDATE),
            Self::Remove => fmt.write_str(Self::REMOVE),
        }
    }
}

impl FromStr for Operation {
    type Err = Error;

    fn from_str(s: &str) -> Result<Self> {
        match s {
            Self::READ => Ok(Self::Read),
            Self::WRITE => Ok(Self::Write),
            Self::CREATE => Ok(Self::Create),
            Self::UPDATE => Ok(Self::Update),
            Self::REMOVE => Ok(Self::Remove),
            _ => Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some(format!("unknown operation {}", s)),
            ))),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq, Clone)]
#[serde(rename_all = "camelCase")]
pub enum Status {
    Publish,
    Future { at: NaiveDateTime },
    Draft,
    Pending,
    Private,
    Trash,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq, Clone)]
#[serde(rename_all = "camelCase")]
pub enum WYSIWYGEditor {
    Markdown,
    Quill,
    Draft,
    Textarea,
}

impl WYSIWYGEditor {
    pub const MARKDOWN: &'static str = "markdown";
    pub const QUILL: &'static str = "quill";
    pub const DRAFT: &'static str = "draft";
    pub const TEXTAREA: &'static str = "textarea";
}

impl Default for WYSIWYGEditor {
    fn default() -> Self {
        Self::Textarea
    }
}

impl fmt::Display for WYSIWYGEditor {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Self::Markdown => fmt.write_str(Self::MARKDOWN),
            Self::Quill => fmt.write_str(Self::QUILL),
            Self::Draft => fmt.write_str(Self::DRAFT),
            Self::Textarea => fmt.write_str(Self::TEXTAREA),
        }
    }
}

impl FromStr for WYSIWYGEditor {
    type Err = Error;

    fn from_str(s: &str) -> Result<Self> {
        match s {
            Self::MARKDOWN => Ok(Self::Markdown),
            Self::QUILL => Ok(Self::Quill),
            Self::DRAFT => Ok(Self::Draft),
            Self::TEXTAREA => Ok(Self::Textarea),
            _ => Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some(format!("unknown editor {}", s)),
            ))),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct WYSIWYG {
    pub content: String,
    pub editor: WYSIWYGEditor,
}
