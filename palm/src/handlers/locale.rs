use std::fmt;

use actix_web::{dev::Payload, web, Error, FromRequest, HttpRequest};
use futures::future::{ok, Ready};
use hyper::header::ACCEPT_LANGUAGE;
use language_tags::LanguageTag;
use serde::Deserialize;

#[derive(Debug)]
pub struct Locale(pub Option<LanguageTag>);

impl fmt::Display for Locale {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self.0 {
            Some(ref it) => {
                // TODO
                write!(f, "{it}")
            }
            None => write!(f, "en-US"),
        }
    }
}

#[derive(Debug, Deserialize)]
pub struct Query {
    pub locale: String,
}

impl Locale {
    pub fn detect(req: &HttpRequest) -> Option<LanguageTag> {
        let key = "locale";

        // 1. Check URL arguments.
        if let Ok(ref it) = web::Query::<Query>::from_query(req.query_string()) {
            if let Ok(it) = LanguageTag::parse(&it.locale) {
                return Some(it);
            }
        }

        // 2. Get language information from cookies.
        if let Some(it) = req.cookie(key) {
            if let Ok(it) = LanguageTag::parse(it.value()) {
                return Some(it);
            }
        }

        // 3. Get language information from 'Accept-Language'.
        // https://www.w3.org/International/questions/qa-accept-lang-locales
        // https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.4
        if let Some(it) = req.headers().get(ACCEPT_LANGUAGE) {
            if let Ok(it) = it.to_str() {
                if let Ok(it) = it.parse::<LanguageTag>() {
                    return Some(it);
                }
            }
        }

        None
    }
}

impl FromRequest for Locale {
    type Error = Error;
    type Future = Ready<Result<Self, Error>>;

    fn from_request(req: &HttpRequest, _pl: &mut Payload) -> Self::Future {
        let it = Self::detect(req);
        ok(Self(it))
    }
}
