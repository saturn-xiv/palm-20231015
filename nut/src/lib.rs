#[macro_use]
extern crate diesel;
#[macro_use]
extern crate log;
#[macro_use]
extern crate lazy_static;

pub mod app;
pub mod aws;
pub mod cache;
pub mod crypto;
pub mod env;
pub mod i18n;
pub mod image_magick;
pub mod jwt;
pub mod mailer;
pub mod models;
pub mod orm;
pub mod parser;
pub mod queue;
pub mod result;
pub mod settings;

use std::default::Default;
use std::fmt;
use std::io::prelude::*;
use std::str::FromStr;

use hyper::StatusCode;
use serde::{Deserialize, Serialize};
use xml::writer::{EventWriter, Result as XmlWriterResult};

pub use self::result::{Error, HttpError, HttpResult, Result};

include!(concat!(env!("OUT_DIR"), "/env.rs"));

pub const NAME: &str = env!("CARGO_PKG_NAME");
pub const DESCRIPTION: &str = env!("CARGO_PKG_DESCRIPTION");
pub const HOMEPAGE: &str = env!("CARGO_PKG_HOMEPAGE");
pub const AUTHORS: &str = env!("CARGO_PKG_AUTHORS");
// pub const BANNER: &str = include_str!("banner.txt");

#[derive(Serialize, Deserialize, PartialEq, Eq, PartialOrd, Ord, Hash, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub enum Environment {
    Production,
    Development,
    Test,
}

impl Default for Environment {
    fn default() -> Self {
        Self::Development
    }
}

impl fmt::Display for Environment {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Environment::Production => fmt.write_str("production"),
            Environment::Development => fmt.write_str("development"),
            Environment::Test => fmt.write_str("test"),
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub enum MediaType {
    Html,
    Markdown,
    PlainText,
}

impl MediaType {
    const HTML: &'static str = "html";
    const MARKDOWN: &'static str = "markdown";
    const PLAIN_TEXT: &'static str = "plain/text";
}

impl fmt::Display for MediaType {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Self::Html => write!(fmt, "{}", Self::HTML),
            Self::Markdown => write!(fmt, "{}", Self::MARKDOWN),
            Self::PlainText => write!(fmt, "{}", Self::PLAIN_TEXT),
        }
    }
}

impl FromStr for MediaType {
    type Err = Error;

    fn from_str(s: &str) -> std::result::Result<Self, Self::Err> {
        match s {
            Self::HTML => Ok(Self::Html),
            Self::MARKDOWN => Ok(Self::Markdown),
            Self::PLAIN_TEXT => Ok(Self::PlainText),
            _ => Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some(format!("unknown media type {:?}", s)),
            ))),
        }
    }
}

pub const XML_HEADER: &str = r###"<?xml version="1.0" encoding="utf-8" ?>"###;

pub trait ToXml {
    fn write<W: Write>(&self, wrt: &mut EventWriter<W>) -> XmlWriterResult<()>;
}

// pub fn content_type<P: AsRef<Path>>(file: P) -> Result<mime::Mime> {
//     let file = file.as_ref();
//     if let Some(it) = file.extension() {
//         if let Some(it) = it.to_str() {
//             return Ok(match it {
//                 "png" => mime::IMAGE_PNG,
//                 "svg" => mime::IMAGE_SVG,
//                 "gif" => mime::IMAGE_GIF,
//                 "bmp" => mime::IMAGE_BMP,
//                 "jpg" | "jpeg" => mime::IMAGE_JPEG,
//                 "htm" | "html" => mime::TEXT_HTML_UTF_8,
//                 "css" => mime::TEXT_CSS_UTF_8,
//                 "js" => mime::APPLICATION_JAVASCRIPT_UTF_8,
//                 "pdf" => mime::APPLICATION_PDF,
//                 "csv" => mime::TEXT_CSV_UTF_8,
//                 "md" | "txt" => mime::TEXT_PLAIN_UTF_8,
//                 "xml" => mime::TEXT_XML,
//                 "json" => mime::APPLICATION_JSON,
//                 v => {
//                     warn!("unknown file extension {}", v);
//                     mime::APPLICATION_OCTET_STREAM
//                 }
//             });
//         }
//     }
//     Err(Box::new(Box::new(IoError::new(
//         IoErrorKind::Other,
//         "bad file extension",
//     ))))
// }
// TODO move to attachment
// pub fn title<P: AsRef<Path>>(file: P) -> Result<String> {
//     let file = file.as_ref();
//     if let Some(it) = file.file_name() {
//         if let Some(it) = it.to_str() {
//             return Ok(it.to_string());
//         }
//     }
//     Err(Box::new(IoError::new(IoErrorKind::Other, "bad file name")))
// }
