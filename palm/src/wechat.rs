use std::fmt::Debug;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};

use async_mutex::Mutex;
use chrono::{Duration, NaiveDateTime, Utc};
use reqwest::{Client as HttpClient, Response};
use serde::{de::DeserializeOwned, Deserialize, Serialize};

use super::{nut::v1::WechatProfile, Result};

#[derive(Serialize, Deserialize, Debug)]
pub struct Error {
    #[serde(rename(serialize = "errcode"))]
    code: u32,
    #[serde(rename(serialize = "errmsg"))]
    message: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ApiDomainIp {
    #[serde(rename(serialize = "ip_list"))]
    pub items: Vec<String>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Token {
    pub access_token: String,
    pub expires_in: i64,
}

impl WechatProfile {
    pub async fn open(&self) -> Result<(String, NaiveDateTime)> {
        let cli = HttpClient::builder().build()?;
        let it: Token = Client::body(
            cli.get(&Client::url("token"))
                .query(&["grant_type", "client_credential"])
                .query(&["appid", &self.app_id])
                .query(&["secret", &self.app_secret])
                .send()
                .await?,
        )
        .await?;
        Ok((
            it.access_token,
            Utc::now().naive_utc() + Duration::seconds(it.expires_in),
        ))
    }
}

pub struct Client {
    status: Mutex<(String, NaiveDateTime)>,
    profile: WechatProfile,
}

impl Client {
    const ACCESS_TOKEN: &str = "access_token";

    pub async fn open(profile: WechatProfile) -> Result<Self> {
        let it = profile.open().await?;
        Ok(Self {
            status: Mutex::new(it),
            profile,
        })
    }

    pub async fn get_api_domain_ip(&self) -> Result<ApiDomainIp> {
        let cli = HttpClient::builder().build()?;
        let res = cli
            .get(&Self::url("get_api_domain_ip"))
            .query(&[Self::ACCESS_TOKEN, &self.access_token().await?])
            .send()
            .await?;

        Self::body(res).await
    }

    async fn body<T: DeserializeOwned + Debug>(res: Response) -> Result<T> {
        if res.status().is_success() {
            let body: T = res.json().await?;
            debug!("{:?}", body);
            return Ok(body);
        }

        let err: Error = res.json().await?;
        error!("{:?}", err);
        Err(Box::new(IoError::new(IoErrorKind::Other, err.message)))
    }

    async fn access_token(&self) -> Result<String> {
        let now = Utc::now().naive_utc();
        let mut it = self.status.lock().await;
        if now < it.1 + Duration::minutes(3) {
            let cur = self.profile.open().await?;
            *it = cur;
        }
        Ok(it.0.clone())
    }

    fn url(path: &str) -> String {
        format!("https://api.weixin.qq.com/cgi-bin/{}", path)
    }
}
