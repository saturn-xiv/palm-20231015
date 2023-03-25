use std::collections::HashMap;

use hyper::StatusCode;
use rand::{distributions::Alphanumeric, thread_rng, Rng};
use serde::{Deserialize, Serialize};
use url::form_urlencoded;

use super::super::super::{nut::v1::GoogleSignInUrlResponse, HttpError, Result};
use super::{AccessType, Scope};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct AuthorizationCode {
    pub access_token: String,
    pub id_token: String,
    pub scope: String,
    pub refresh_token: Option<String>,
    pub expires_in: u64,
    pub token_type: String,
}

impl super::Web {
    // https://developers.google.com/identity/openid-connect/openid-connect
    pub fn openid_connect(
        &self,
        scope: Vec<Scope>,
        state: &str,
        redirect_uri: &str,
    ) -> GoogleSignInUrlResponse {
        let nonce: String = thread_rng()
            .sample_iter(&Alphanumeric)
            .take(8)
            .map(char::from)
            .collect();
        let url = form_urlencoded::Serializer::new(
            "https://accounts.google.com/o/oauth2/v2/auth".to_string(),
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
        .append_pair("state", state)
        .append_pair("include_granted_scopes", &true.to_string())
        .append_pair("response_type", "code")
        .finish();

        GoogleSignInUrlResponse { url, nonce }
    }

    pub async fn exchange_authorization_code(
        &self,
        redirect_uri: &str,
        code: &str,
    ) -> Result<AuthorizationCode> {
        let mut body = HashMap::new();
        body.insert("code", code);
        body.insert("client_id", &self.client_id);
        body.insert("client_secret", &self.client_secret);
        body.insert("redirect_uri", redirect_uri);
        body.insert("grant_type", "authorization_code");

        let cli = reqwest::Client::new();
        let res = cli
            .post("https://oauth2.googleapis.com/token")
            .form(&body)
            .send()
            .await?;
        debug!("{:#?}", res);
        if res.status().is_success() {
            return Ok(res.json().await?);
        }
        Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)))
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct IdToken {
    pub iss: String,
    pub at_hash: Option<String>,
    pub email_verified: bool,
    pub sub: String,
    pub azp: Option<String>,
    pub email: Option<String>,
    pub profile: Option<String>,
    pub picture: Option<String>,
    pub name: Option<String>,
    pub aud: String,
    pub iat: u64,
    pub exp: u64,
    pub nonce: Option<String>,
    pub hd: Option<String>,
}
