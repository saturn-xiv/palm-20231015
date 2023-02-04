use std::fmt;

use actix_web::{dev::Payload, Error, FromRequest, HttpRequest};
use futures::future::{ok, Ready};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Home(pub Option<String>);

impl fmt::Display for Home {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self.0 {
            Some(ref it) => write!(f, "{it}"),
            None => write!(f, "n/a"),
        }
    }
}

impl Home {
    fn detect(req: &HttpRequest) -> Option<String> {
        let uri = req.uri();
        if let Some(scheme) = uri.scheme() {
            if let Some(authority) = uri.authority() {
                return Some(format!("{scheme}://{authority}"));
            }
        }
        None
    }
}

impl FromRequest for Home {
    type Error = Error;
    type Future = Ready<Result<Self, Error>>;

    fn from_request(req: &HttpRequest, _pl: &mut Payload) -> Self::Future {
        let it = Self::detect(req);
        ok(Self(it))
    }
}
