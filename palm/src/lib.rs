#![recursion_limit = "256"]

#[macro_use]
extern crate log;
#[macro_use]
extern crate serde_json;
#[macro_use]
extern crate lazy_static;

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
        chrono::NaiveDateTime::from_timestamp_opt($x.seconds, $x.nanos as u32).unwrap_or_default()
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
macro_rules! try_thrift {
    ($r:expr, $e:expr) => {{
        $r.map_err($e)
    }};
    ($r:expr) => {{
        try_thrift!($r, |e| Error::Application(ApplicationError::new(
            ApplicationErrorKind::InternalError,
            e.to_string(),
        )))
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

#[macro_export]
macro_rules! has_role {
    ($e:expr, $s:expr, $r:expr) => {{
        let mut e = $e.lock().await;
        e.get_implicit_roles_for_user($s, None).contains($r)
    }};
}

#[macro_export]
macro_rules! has_permission {
    ($e:expr, $s:expr, $o:expr, $a:expr) => {{
        let mut e = $e.lock().await;
        let mut ok = false;

        for r in e.get_implicit_roles_for_user($s, None).iter() {
            if e.has_permission_for_user(r, vec![$o.clone(), $a.clone()]) {
                ok = true;
                break;
            }
        }

        ok
    }};
    ($e:expr, $s:expr, $a:expr) => {{
        let mut e = $e.lock().await;
        let mut ok = false;
        for r in e.get_implicit_roles_for_user($s, None).iter() {
            if e.has_permission_for_user(r, vec![$a.clone()]) {
                ok = true;
                break;
            }
        }
        ok
    }};
}

pub mod aws;
pub mod cache;
pub mod captcha;
pub mod crypto;
pub mod currency;
pub mod env;
pub mod google;
pub mod handlers;
pub mod jwt;
pub mod line;
pub mod minio;
pub mod network;
pub mod orchid;
pub mod parser;
pub mod queue;
pub mod rbac;
pub mod result;
pub mod search;
pub mod seo;
pub mod session;
pub mod tasks;
pub mod thrift;
pub mod twilio;
pub mod wechat;

use std::fs::{copy as copy_file, create_dir_all, read_dir, remove_dir_all, remove_file, File};
use std::io::{prelude::*, Error as IoError, ErrorKind as IoErrorKind, Result as IoResult};
use std::os::unix::fs::PermissionsExt;
use std::path::Path;
use std::process::{Command, Output};

use chrono::{DateTime, NaiveDateTime, Utc};
use chrono_tz::Tz;
use xml::writer::{EventWriter, Result as XmlWriterResult};

pub use self::result::{Error, GrpcResult, HttpError, HttpResult, Result};

pub const NAME: &str = env!("CARGO_PKG_NAME");
pub const DESCRIPTION: &str = env!("CARGO_PKG_DESCRIPTION");
pub const HOMEPAGE: &str = env!("CARGO_PKG_HOMEPAGE");
pub const AUTHORS: &str = env!("CARGO_PKG_AUTHORS");
pub const BANNER: &str = include_str!("banner.txt");

pub const FONT_DEJAVUSANS: &[u8] = include_bytes!("DejaVuSans.ttf");

include!(concat!(env!("OUT_DIR"), "/env.rs"));

lazy_static! {
    pub static ref VERSION: String = format!("{GIT_VERSION}({BUILD_TIME})");
}

// https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-WEB.md
// https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md
// https://developers.cloudflare.com/support/speed/optimization-file-size/what-will-cloudflare-compress/
pub const PROTOBUF: &str = "application/x-protobuf";
pub const FLATBUFFER: &str = "application/x-flatbuffer";

pub fn timestamp2datetime(ts: i64, tz: Tz) -> Option<DateTime<Tz>> {
    if let Some(it) = NaiveDateTime::from_timestamp_opt(ts, 0) {
        return it.and_local_timezone(tz).single();
    }
    None
}

pub fn is_stopped() -> bool {
    Path::new(".stop").exists()
}

pub fn check_config_permission<P: AsRef<Path>>(file: P) -> Result<()> {
    let file = file.as_ref();
    let mode = {
        let file = File::open(file)?;
        file.metadata()?.permissions().mode()
    };
    if ![0o100400, 0o100600].contains(&mode) {
        error!("bad file ({}) mode({:#o})", file.display(), mode);
        return Ok(());
    }
    Ok(())
}

pub fn copy_dir_all(src: impl AsRef<Path>, dst: impl AsRef<Path>) -> IoResult<()> {
    let src = src.as_ref();
    let dst = dst.as_ref();
    create_dir_all(dst)?;

    for it in read_dir(src)? {
        let it = it?;
        let ft = it.file_type()?;

        let from = it.path();
        let to = dst.join(it.file_name());
        if ft.is_dir() {
            copy_dir_all(from, to)?;
        } else {
            debug!("copy file {} => {}", from.display(), to.display());
            copy_file(from, to)?;
        }
    }
    Ok(())
}

pub fn timestamp_file(name: &str, ext: Option<&str>) -> String {
    let ts = Utc::now().format("%Y%m%d%H%M%S%3f");
    match ext {
        Some(ext) => format!("{name}-{ts}.{ext}"),
        None => format!("{name}-{ts}"),
    }
}

pub fn print_command_output(out: &Output) -> Result<()> {
    if out.status.success() {
        info!("({}) {}", out.status, std::str::from_utf8(&out.stdout)?);
        return Ok(());
    }

    error!("({}) {}", out.status, std::str::from_utf8(&out.stderr)?);
    Err(Box::new(IoError::from(IoErrorKind::UnexpectedEof)))
}

pub fn tar<P: AsRef<Path>>(root: P, name: &str, keep: usize) -> Result<()> {
    let root = root.as_ref();

    let tmp = {
        let it = root.join(name);
        if it.is_dir() {
            let it = it.with_extension("tar");
            {
                debug!("generate {}", it.display());
                let out = Command::new("tar")
                    .arg("--remove-files")
                    .arg("-C")
                    .arg(root)
                    .arg("-cf")
                    .arg(&it)
                    .arg(name)
                    .output()?;
                print_command_output(&out)?;
            }
            it
        } else {
            it
        }
    };
    {
        debug!("compress {}", tmp.display());
        let out = Command::new("xz").arg("-9").arg(&tmp).output()?;
        print_command_output(&out)?;
    }
    {
        info!(
            "check file {}, keep recent {} records",
            root.display(),
            keep
        );
        let mut items = Vec::new();
        for it in read_dir(root)? {
            let it = it?;
            let it = it.path();
            if it.is_file() {
                if let Some(ext) = it.extension() {
                    if ext == "xz" {
                        debug!("find file {}", it.display());
                        items.push(it);
                    }
                }
            } else if it.is_dir() {
                debug!("find folder {} and remove it", it.display());
                remove_dir_all(&it)?;
            }
        }
        items.sort();
        items.reverse();
        if items.len() > keep {
            for it in &items[keep..] {
                debug!("delete file {}", it.display());
                remove_file(it)?;
            }
        }
    }
    Ok(())
}

pub trait ToXml {
    fn write<W: Write>(&self, wrt: &mut EventWriter<W>) -> XmlWriterResult<()>;
}

impl nut::v1::Pagination {
    pub fn new(pager: &nut::v1::Pager, total: i64) -> Self {
        let page = pager.page(total);
        let size = pager.size();

        Self {
            page,
            size,
            total,
            has_next: (page * size < total),
            has_previous: (page > 1),
        }
    }
}

impl nut::v1::Pager {
    pub fn offset(&self, total: i64) -> i64 {
        (self.page(total) - 1) * self.size()
    }

    pub fn page(&self, total: i64) -> i64 {
        let size = self.size();
        if total < size || self.page < 1 {
            return 1;
        }
        if self.page * size > total {
            let it = total / size;
            return if total % size == 0 { it } else { it + 1 };
        }
        self.page
    }

    pub fn size(&self) -> i64 {
        if self.size < Self::MIN_SIZE {
            return Self::MIN_SIZE;
        }
        if self.size > Self::MAX_SIZE {
            return Self::MAX_SIZE;
        }
        self.size
    }
    const MAX_SIZE: i64 = 1 << 12;
    const MIN_SIZE: i64 = 1 << 2;
}

pub mod babel {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.babel.v1");
    }
}
pub mod cbeta {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.cbeta.v1");
    }
}
pub mod chats {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.chats.v1");
    }
}
pub mod cms {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.cms.v1");
    }
}
pub mod courses {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.courses.v1");
    }
}
pub mod cscd {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.cscd.v1");
    }
}
pub mod forum {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.forum.v1");
    }
}
pub mod mall {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.mall.v1");
    }
}
pub mod musa {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.musa.v1");
    }
}
pub mod nut {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.nut.v1");
    }
}
pub mod ops {
    pub mod ddns {
        #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
        pub mod v1 {
            tonic::include_proto!("palm.ops.ddns.v1");
        }
    }
    pub mod mail {
        #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
        pub mod v1 {
            tonic::include_proto!("palm.ops.mail.v1");
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
    pub mod vpn {
        #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
        pub mod v1 {
            tonic::include_proto!("palm.ops.vpn.v1");
        }
    }
}
