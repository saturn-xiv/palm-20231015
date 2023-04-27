use hyper::header::{ACCEPT_LANGUAGE, AUTHORIZATION, USER_AGENT};
use language_tags::LanguageTag;
use tonic::{metadata::MetadataMap, Request};

use super::jwt::BEARER;

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
                if let Some(ref it) = it.strip_prefix(BEARER) {
                    return Some(it.to_string());
                }
            }
        }
        None
    }

    pub fn new<T>(req: &Request<T>) -> Self {
        let client_ip = req
            .remote_addr()
            .map_or("n/a".to_string(), |x| x.ip().to_string());
        let meta = req.metadata();

        debug!(
            "{} {:?} auth({})",
            client_ip,
            meta.get(USER_AGENT.as_str().to_lowercase()),
            meta.get(AUTHORIZATION.as_str().to_lowercase()).is_some()
        );
        Self {
            lang: Self::detect_locale(meta),
            client_ip,
            token: Self::detect_token(meta),
        }
    }
}
