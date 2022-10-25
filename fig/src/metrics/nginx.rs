use std::io::{prelude::*, Error as IoError, ErrorKind as IoErrorKind};
use std::path::Path;
use std::process::{Command, Stdio};

use chrono::NaiveDateTime;
use regex::Regex;
use serde::{Deserialize, Serialize};

use super::super::Result;

// https://nginx.org/en/docs/http/ngx_http_log_module.html#log_format
// log_format custom '$remote_addr - [$time_iso8601] "$request" $status $body_bytes_sent $request_time "$http_referer" "$http_user_agent" "$http_x_forwarded_for"';
// access_log /var/log/nginx/domain.access.log custom;
// error_log /var/log/nginx/domain.error.log custom;
#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Access {
    client_ip: String,
    created_at: NaiveDateTime,
    method: String,
    path: String,
    version: f32,
    status: u8,
    body_bytes_sent: usize,
    request_time: f32,
    http_referer: Option<String>,
}

impl Access {
    pub fn new(buf: &str) -> Option<Self> {
        lazy_static! {
            //
            static ref RE: Regex =
                Regex::new(r###"(?P<client_ip>[.\d]{7,15}) - \[(?P<created_at>[-+T:\d]{25})\] "(?P<method>[[:upper:]]{3,6}) (?P<path>[[:ascii:]]+) HTTP/(?P<version>[.\d]{1,3})" (?P<status>\d{3}) (?P<body_bytes_sent>\d+) (?P<request_time>[.\d]+) "(?P<http_referer>[[:ascii:]]+?)" (?P<message>[[:print:]]+)"###).unwrap();
        }
        if let Some(ref it) = RE.captures(buf) {
            let http_referer = it.name("http_referer").unwrap().as_str();
            return Some(Self {
                client_ip: it.name("client_ip").unwrap().as_str().to_string(),
                created_at: NaiveDateTime::parse_from_str(
                    it.name("created_at").unwrap().as_str(),
                    "%Y-%m-%dT%H:%M:%S%z",
                )
                .unwrap(),
                method: it.name("method").unwrap().as_str().to_string(),
                path: it.name("path").unwrap().as_str().to_string(),
                version: it.name("version").unwrap().as_str().parse().unwrap(),
                status: it.name("status").unwrap().as_str().parse().unwrap(),
                body_bytes_sent: it
                    .name("body_bytes_sent")
                    .unwrap()
                    .as_str()
                    .parse()
                    .unwrap(),
                request_time: it.name("request_time").unwrap().as_str().parse().unwrap(),
                http_referer: if http_referer == "-" {
                    None
                } else {
                    Some(http_referer.to_string())
                },
            });
        }
        None
    }

    pub fn execute<P: AsRef<Path>>(file: P) -> Result<()> {
        let file = file.as_ref();
        let mut jo = Command::new("tail")
            .arg("-f")
            .arg(file)
            .stdout(Stdio::piped())
            .spawn()?;
        let mut out = jo
            .stdout
            .take()
            .ok_or_else(|| Box::new(IoError::from(IoErrorKind::UnexpectedEof)))?;

        let mut line = [0; 1 << 12];

        loop {
            let len = out.read(&mut line)?;

            if len > 0 {
                debug!("receive {} bytes", len);
                if len > (1 << 16) {
                    return Ok(());
                }
                let line = std::str::from_utf8(&line)?;
                if let Some(it) = Access::new(line) {
                    debug!("receive {:?}", it);
                    // TODO
                }
            }
        }
    }
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Error {
    pub message: String,
    pub created_at: NaiveDateTime,
}

impl Error {
    pub fn new(buf: &str) -> Option<Self> {
        lazy_static! {
            static ref RE: Regex =
                Regex::new(r"(?P<created_at>[\d /:]{19}) (?P<message>[[:print:]]+)").unwrap();
        }
        if let Some(ref it) = RE.captures(buf) {
            return Some(Self {
                message: it.name("message").unwrap().as_str().to_string(),
                created_at: NaiveDateTime::parse_from_str(
                    it.name("created_at").unwrap().as_str(),
                    "%Y/%m/%d %H:%M:%S",
                )
                .unwrap(),
            });
        }
        None
    }

    pub fn execute<P: AsRef<Path>>(file: P) -> Result<()> {
        let file = file.as_ref();
        let mut jo = Command::new("tail")
            .arg("-f")
            .arg(file)
            .stdout(Stdio::piped())
            .spawn()?;
        let mut out = jo
            .stdout
            .take()
            .ok_or_else(|| Box::new(IoError::from(IoErrorKind::UnexpectedEof)))?;

        let mut line = [0; 1 << 12];
        let mut cur = Self::default();
        loop {
            let len = out.read(&mut line)?;

            if len > 0 {
                debug!("receive {} bytes", len);
                if len > (1 << 16) {
                    return Ok(());
                }
                let line = std::str::from_utf8(&line)?;
                if let Some(ref it) = Self::new(line) {
                    if cur.created_at != NaiveDateTime::default() {
                        debug!("get {:?}", it);
                        // TODO save message
                    }
                    cur.created_at = it.created_at;
                    cur.message = it.message.clone();
                } else {
                    cur.message = cur.message + "\n" + line;
                }
            }
        }
    }
}
