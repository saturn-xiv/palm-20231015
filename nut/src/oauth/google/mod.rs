pub mod openid;
pub mod photo;
pub mod youtube;

use std::collections::HashMap;
use std::fmt;
use std::result::Result as StdResult;
use std::str::FromStr;

use hyper::StatusCode;
use rand::Rng;
use serde::{de::DeserializeOwned, Deserialize, Serialize};
use url::{form_urlencoded, Url};

use super::super::{Error, HttpError, Result};

/// https://developers.google.com/identity/protocols/OAuth2WebServer
/// https://developers.google.com/identity/protocols/OpenIDConnect
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct ClientSecret {
    pub web: Web,
}

impl ClientSecret {
    pub const KEY: &'static str = "google.client-secret";
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Web {
    pub client_id: String,
    pub project_id: String,
    pub auth_uri: String,
    pub token_uri: String,
    pub auth_provider_x509_cert_url: String,
    pub client_secret: String,
    pub redirect_uris: Vec<String>,
    pub javascript_origins: Vec<String>,
}

/// https://developers.google.com/photos/library/guides/authentication-authorization
/// https://developers.google.com/identity/protocols/googlescopes
pub enum Scope {
    YoutubeReadonly,
    PhotosLibraryReadonly,
    Profile,
    Openid,
    Email,
}

impl fmt::Display for Scope {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "{}",
            match *self {
                Scope::YoutubeReadonly => "https://www.googleapis.com/auth/youtube.readonly",
                Scope::PhotosLibraryReadonly => {
                    "https://www.googleapis.com/auth/photoslibrary.readonly"
                }
                Scope::Profile => "profile",
                Scope::Openid => "openid",
                Scope::Email => "email",
            }
        )
    }
}

pub enum AccessType {
    Online,
    Offline,
}

impl Default for AccessType {
    fn default() -> Self {
        AccessType::Online
    }
}

impl fmt::Display for AccessType {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "{}",
            match *self {
                AccessType::Online => "online",
                AccessType::Offline => "offline",
            }
        )
    }
}

impl Web {
    pub fn oauth2(&self, scope: Vec<Scope>, redirect_uri: &str) -> (String, String, String) {
        let mut rng = rand::thread_rng();
        let nonce = rng.gen::<u32>().to_string();
        let state = rng.gen::<u32>().to_string();

        let url = form_urlencoded::Serializer::new(
            "https://accounts.google.com/o/oauth2/v2/auth?".to_string(),
        )
        .append_pair("client_id", &self.client_id)
        .append_pair("redirect_uri", redirect_uri)
        .append_pair(
            "scope",
            &scope
                .iter()
                .map(|x| x.to_string())
                .collect::<Vec<_>>()
                .join(" "),
        )
        .append_pair("access_type", &AccessType::default().to_string())
        .append_pair("state", &state)
        .append_pair("include_granted_scopes", &true.to_string())
        .append_pair("response_type", Code::CODE)
        .append_pair("nonce", &nonce)
        .finish();

        (url, state, nonce)
    }

    pub async fn get<Q: DeserializeOwned>(&self, action: &str, token: &str) -> Result<Q> {
        let cli = reqwest::Client::new();
        let res = cli.get(action).bearer_auth(token).send().await?;
        if res.status().is_success() {
            return Ok(res.json().await?);
        }
        debug!("{:#?}", res);
        Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)))
    }
}

pub struct Code(pub String);

impl Code {
    const CODE: &'static str = "code";
    const ERROR: &'static str = "error";
}

impl fmt::Display for Code {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl FromStr for Code {
    type Err = Error;

    fn from_str(s: &str) -> StdResult<Self, Self::Err> {
        let it = Url::parse(s)?;
        let query: HashMap<_, _> = it.query_pairs().into_owned().collect();
        if let Some(v) = query.get(Self::CODE) {
            return Ok(Self(v.to_string()));
        }
        if let Some(v) = query.get(Self::ERROR) {
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some(v.clone()),
            )));
        }
        Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)))
    }
}
