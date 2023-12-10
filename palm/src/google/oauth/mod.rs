pub mod openid;

use std::any::type_name;
use std::fmt;

use hyper::StatusCode;
use log::debug;
use serde::{de::DeserializeOwned, Deserialize, Serialize};

use super::super::{HttpError, Result};

/// https://developers.google.com/identity/protocols/oauth2
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct ClientSecret {
    pub web: Web,
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

impl Web {
    pub fn key(&self, id: &str) -> String {
        format!("{}://{}/{}", type_name::<Self>(), self.project_id, id)
    }
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

#[derive(Default)]
pub enum AccessType {
    #[default]
    Online,
    Offline,
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
