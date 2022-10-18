#![recursion_limit = "256"]

#[macro_use]
extern crate diesel;
#[macro_use]
extern crate log;
#[macro_use]
extern crate serde_json;

#[macro_export]
macro_rules! to_timestamp {
    ($x:expr) => {{
        let it: std::time::SystemTime =
            chrono::DateTime::<chrono::Utc>::from_utc($x, chrono::Utc).into();
        it.into()
    }};
}

#[macro_export]
macro_rules! to_datetime {
    ($x:expr) => {{
        chrono::NaiveDateTime::from_timestamp($x.seconds, $x.nanos as u32)
    }};
}

#[macro_export]
macro_rules! to_chrono_duration {
    ($x:expr) => {{
        chrono::Duration::seconds($x.seconds)
    }};
}

#[macro_export]
macro_rules! to_std_duration {
    ($x:expr) => {{
        std::time::Duration::new($x.seconds as u64, $x.nanos as u32)
    }};
}

#[macro_export]
macro_rules! to_code {
    ($x:expr) => {{
        let it = $x.trim();
        it.to_lowercase()
    }};
}

#[macro_export]
macro_rules! to_role {
    ($r:expr) => {{
        format!("role://{}", to_code!($r))
    }};
}
#[macro_export]
macro_rules! resource_to_object {
    ($t:expr, $i:expr) => {{
        format!("{}://{}", $t, $i)
    }};
    ($t:expr) => {{
        $t.to_string()
    }};
}

#[macro_export]
macro_rules! object_to_resource {
    ($o:expr) => {{
        let items: Vec<&str> = $o.split("://").collect();
        if items.len() == 2 {
            match items[1].parse() {
                Ok(id) => (items[0].to_string(), Some(id)),
                Err(_) => ($o.to_string(), None),
            }
        } else {
            ($o.to_string(), None)
        }
    }};
}

#[macro_export]
macro_rules! try_grpc {
    ($r:expr, $e:expr) => {{
        $r.map_err($e)
    }};
    ($r:expr) => {{
        try_grpc!($r, |e| tonic::Status::internal(e.to_string()))
    }};
}

#[macro_export]
macro_rules! try_web {
    ($r:expr, $e:expr) => {{
        $r.map_err($e)
    }};
    ($r:expr) => {{
        try_web!($r, actix_web::error::ErrorInternalServerError)
    }};
}

pub mod aws;
pub mod cache;
pub mod captcha;
pub mod crypto;
pub mod currency;
pub mod env;
pub mod handlers;
pub mod jwt;
pub mod minio;
pub mod models;
pub mod oauth;
pub mod orm;
pub mod parser;
pub mod queue;
pub mod result;
pub mod schema;
pub mod search;
pub mod tasks;

use std::io::{prelude::*, Error as IoError, ErrorKind as IoErrorKind};
use std::path::Path;

use xml::writer::{EventWriter, Result as XmlWriterResult};

pub use self::result::{Error, GrpcResult, HttpError, HttpResult, Result};

pub const NAME: &str = env!("CARGO_PKG_NAME");
pub const DESCRIPTION: &str = env!("CARGO_PKG_DESCRIPTION");
pub const HOMEPAGE: &str = env!("CARGO_PKG_HOMEPAGE");
pub const AUTHORS: &str = env!("CARGO_PKG_AUTHORS");
pub const BANNER: &str = include_str!("banner.txt");

include!(concat!(env!("OUT_DIR"), "/env.rs"));

pub const FONT_DEJAVUSANS: &[u8] = include_bytes!("DejaVuSans.ttf");

pub const XML_HEADER: &str = r###"<?xml version="1.0" encoding="utf-8" ?>"###;

pub fn is_stopped() -> bool {
    Path::new(".stop").exists()
}

pub trait ToXml {
    fn write<W: Write>(&self, wrt: &mut EventWriter<W>) -> XmlWriterResult<()>;
}

pub fn content_type<P: AsRef<Path>>(file: P) -> Result<mime::Mime> {
    let file = file.as_ref();
    if let Some(it) = file.extension() {
        if let Some(it) = it.to_str() {
            return Ok(match it {
                "png" => mime::IMAGE_PNG,
                "svg" => mime::IMAGE_SVG,
                "gif" => mime::IMAGE_GIF,
                "bmp" => mime::IMAGE_BMP,
                "jpg" | "jpeg" => mime::IMAGE_JPEG,
                "htm" | "html" => mime::TEXT_HTML_UTF_8,
                "css" => mime::TEXT_CSS_UTF_8,
                "js" => mime::APPLICATION_JAVASCRIPT_UTF_8,
                "pdf" => mime::APPLICATION_PDF,
                "csv" => mime::TEXT_CSV_UTF_8,
                "md" | "txt" => mime::TEXT_PLAIN_UTF_8,
                "xml" => mime::TEXT_XML,
                "json" => mime::APPLICATION_JSON,
                v => {
                    warn!("unknown file extension {}", v);
                    mime::APPLICATION_OCTET_STREAM
                }
            });
        }
    }
    Err(Box::new(Box::new(IoError::new(
        IoErrorKind::Other,
        "bad file extension",
    ))))
}

pub mod nut {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.nut.v1");
    }
}
pub mod cms {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.cms.v1");
    }
}
pub mod forum {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.forum.v1");
    }
}
pub mod courses {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.courses.v1");
    }
}
pub mod mall {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.mall.v1");
    }
}
pub mod chats {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.chats.v1");
    }
}
pub mod babel {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.babel.v1");
    }
}
pub mod cscd {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.cscd.v1");
    }
}
pub mod cbeta {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.cbeta.v1");
    }
}
pub mod ops {
    pub mod mail {
        #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
        pub mod v1 {
            tonic::include_proto!("palm.ops.mail.v1");
        }
    }
    pub mod vpn {
        #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
        pub mod v1 {
            tonic::include_proto!("palm.ops.vpn.v1");
        }
    }
    pub mod ddns {
        #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
        pub mod v1 {
            tonic::include_proto!("palm.ops.ddns.v1");
        }
    }
    pub mod metrics {
        #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
        pub mod v1 {
            tonic::include_proto!("palm.ops.metrics.v1");
        }
    }
}
