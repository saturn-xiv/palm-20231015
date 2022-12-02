use std::any::type_name;
use std::fmt::Debug;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::ops::DerefMut;

use chrono::Duration;
use redis::Commands;
use reqwest::{Client as HttpClient, Response};
use serde::{de::DeserializeOwned, Deserialize, Serialize};

use super::{cache::redis::Pool as RedisPool, nut::v1::WechatProfile, Result};

#[derive(Serialize, Deserialize, Debug)]
pub struct Error {
    #[serde(rename = "errcode")]
    pub code: u32,
    #[serde(rename = "errmsg")]
    pub message: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ApiDomainIp {
    #[serde(rename = "ip_list")]
    pub items: Vec<String>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Token {
    pub access_token: String,
    pub expires_in: usize,
}

impl WechatProfile {
    pub async fn open(&self, redis: RedisPool) -> Result<String> {
        let mut ch = redis.get()?;
        let ch = ch.deref_mut();
        let key = type_name::<Client>();
        if let Ok(it) = Commands::get(ch, key) {
            return Ok(it);
        }

        let cli = HttpClient::builder().build()?;
        let it: Token = Client::body(
            cli.get(&Client::url("token"))
                .query(&[("grant_type", "client_credential")])
                .query(&[("appid", &self.app_id)])
                .query(&[("secret", &self.app_secret)])
                .send()
                .await?,
        )
        .await?;

        Commands::set_ex(
            ch,
            key,
            &it.access_token,
            it.expires_in - (Duration::minutes(3).num_seconds() as usize),
        )?;
        Ok(it.access_token)
    }
}

pub struct Client {
    pub token: String,
}

impl Client {
    const ACCESS_TOKEN: &str = "access_token";

    pub async fn get_api_domain_ip(&self) -> Result<ApiDomainIp> {
        let cli = HttpClient::builder().build()?;

        let res = cli
            .get(&Self::url("get_api_domain_ip"))
            .query(&[(Self::ACCESS_TOKEN, &self.token)])
            .send()
            .await?;

        Self::body(res).await
    }

    async fn body<T: DeserializeOwned + Debug>(res: Response) -> Result<T> {
        let status = res.status();
        let body = res.text().await?;
        if !status.is_success() {
            error!("{}\n{}", status, body);
            return Err(Box::new(IoError::new(IoErrorKind::Other, body)));
        }
        if let Ok(it) = serde_json::from_str(&body) {
            return Ok(it);
        }

        let err: Error = serde_json::from_str(&body)?;
        error!("{:?}", err);
        Err(Box::new(IoError::new(IoErrorKind::Other, err.message)))
    }

    fn url(path: &str) -> String {
        format!("https://api.weixin.qq.com/cgi-bin/{}", path)
    }
}
