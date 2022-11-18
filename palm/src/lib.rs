#![recursion_limit = "256"]

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
// pub mod minio;
pub mod models;
pub mod oauth;
pub mod parser;
pub mod queue;
pub mod result;
pub mod search;
pub mod tasks;
pub mod twilio;

use std::io::prelude::*;
use std::path::Path;

use xml::writer::{EventWriter, Result as XmlWriterResult};

pub use self::result::{Error, GrpcResult, HttpError, HttpResult, Result};

pub const NAME: &str = env!("CARGO_PKG_NAME");
pub const DESCRIPTION: &str = env!("CARGO_PKG_DESCRIPTION");
pub const HOMEPAGE: &str = env!("CARGO_PKG_HOMEPAGE");
pub const AUTHORS: &str = env!("CARGO_PKG_AUTHORS");
pub const BANNER: &str = include_str!("banner.txt");

pub const FONT_DEJAVUSANS: &[u8] = include_bytes!("DejaVuSans.ttf");

include!(concat!(env!("OUT_DIR"), "/env.rs"));

pub fn is_stopped() -> bool {
    Path::new(".stop").exists()
}

pub trait ToXml {
    fn write<W: Write>(&self, wrt: &mut EventWriter<W>) -> XmlWriterResult<()>;
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
pub mod orchid {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.orchid.v1");
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
    pub mod router {
        #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
        pub mod v1 {
            tonic::include_proto!("palm.ops.router.v1");
        }
    }
}
