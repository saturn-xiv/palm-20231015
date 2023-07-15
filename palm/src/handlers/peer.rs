use std::fmt;

use actix_web::{dev::Payload, Error, FromRequest, HttpRequest};
use futures::future::{ok, Ready};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct ClientIp(pub Option<String>);

impl fmt::Display for ClientIp {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self.0 {
            Some(ref it) => write!(f, "{it}"),
            None => write!(f, "n/a"),
        }
    }
}

impl ClientIp {
    /// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
    /// https://github.com/gin-gonic/gin/blob/893c6cae07ef564cbdd2796589c449dd2ac87d21/context.go#L651
    pub fn detect(req: &HttpRequest) -> Option<String> {
        let headers = req.headers();
        if let Some(it) = headers.get("X-Forwarded-For") {
            if let Ok(it) = it.to_str() {
                let items: Vec<&str> = it.split(',').collect();
                if let Some(it) = items.first() {
                    let it = it.trim();
                    if !it.is_empty() {
                        return Some(it.to_string());
                    }
                }
            }
        }
        if let Some(it) = headers.get("X-Real-Ip") {
            if let Ok(it) = it.to_str() {
                let it = it.trim();
                if !it.is_empty() {
                    return Some(it.to_string());
                }
            }
        }
        if let Some(it) = headers.get("X-Appengine-Remote-Addr") {
            if let Ok(it) = it.to_str() {
                let it = it.trim();
                if !it.is_empty() {
                    return Some(it.to_string());
                }
            }
        }
        None
    }
}

impl FromRequest for ClientIp {
    type Error = Error;
    type Future = Ready<Result<Self, Error>>;

    fn from_request(req: &HttpRequest, _pl: &mut Payload) -> Self::Future {
        let it = Self::detect(req);
        ok(Self(it))
    }
}
