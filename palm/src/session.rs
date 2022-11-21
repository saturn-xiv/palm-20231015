use hyper::header::{ACCEPT_LANGUAGE, AUTHORIZATION};
use language_tags::LanguageTag;
use tonic::{metadata::MetadataMap, Request};

use super::jwt::Jwt;

pub struct Session {
    pub lang: String,
    pub client_ip: String,
    pub token: Option<String>,
}

impl Session {
    fn detect_locale(meta: &MetadataMap) -> String {
        if let Some(it) = meta.get(ACCEPT_LANGUAGE.as_str().to_lowercase()) {
            if let Ok(it) = it.to_str() {
                if let Ok(it) = LanguageTag::parse(it) {
                    return it.to_string();
                }
            }
        }
        "en-US".to_string()
    }

    fn detect_token(meta: &MetadataMap) -> Option<String> {
        if let Some(it) = meta.get(AUTHORIZATION.as_str().to_lowercase()) {
            if let Ok(it) = it.to_str() {
                if let Some(ref it) = it.strip_prefix(Jwt::BEARER) {
                    return Some(it.to_string());
                }
            }
        }
        None
    }

    pub fn new<T>(req: &Request<T>) -> Self {
        let meta = req.metadata();

        Self {
            lang: Self::detect_locale(meta),
            client_ip: req
                .remote_addr()
                .map_or("n/a".to_string(), |x| x.ip().to_string()),
            token: Self::detect_token(meta),
        }
    }
}
