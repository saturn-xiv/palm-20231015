#![allow(clippy::too_many_arguments)]
#![recursion_limit = "256"]

#[macro_use]
extern crate diesel;
#[macro_use]
extern crate log;
#[macro_use]
extern crate lazy_static;
#[macro_use]
extern crate serde_json;

#[macro_use]
pub mod macros;

pub mod aws;
pub mod cache;
pub mod captcha;
pub mod crypto;
pub mod currency;
pub mod env;
pub mod i18n;
pub mod jwt;
pub mod minio;
pub mod oauth;
pub mod orm;
pub mod parser;
pub mod queue;
pub mod result;
pub mod schema;
pub mod search;
pub mod setting;
pub mod theme;

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

pub mod auth {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.auth.v1");
    }
}
pub mod rbac {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.rbac.v1");
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
