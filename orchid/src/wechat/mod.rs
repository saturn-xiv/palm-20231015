pub mod api;
pub mod service;

use std::any::type_name;
use std::ops::DerefMut;

use palm::{cache::redis::Pool as RedisPool, orchid::v1, Result};
use redis::Commands;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub app_id: String,
    pub app_secret: String,
}

impl Config {
    pub fn url(path: &str) -> String {
        format!("https://api.weixin.qq.com{path}")
    }
}

pub struct Client {
    pub config: Config,
    pub redis: RedisPool,
}

impl Client {
    pub fn session_key(&self, openid: &str) -> Result<String> {
        let key = self._session_key(openid);

        let mut ch = self.redis.get()?;
        let ch = ch.deref_mut();
        let it: String = Commands::get(ch, &key)?;
        Ok(it)
    }
    fn _session_key(&self, openid: &str) -> String {
        format!(
            "{}://{}/{}/session-key",
            type_name::<Config>(),
            self.config.app_id,
            openid
        )
    }
    pub async fn login(&self, code: &str) -> Result<v1::WeChatLoginResponse> {
        let res = self.config.code2session(code).await?;
        let key = self._session_key(&res.openid);

        let mut ch = self.redis.get()?;
        let ch = ch.deref_mut();
        Commands::set(ch, &key, &res.session_key)?;

        Ok(v1::WeChatLoginResponse {
            openid: res.openid.clone(),
            unionid: res.unionid.clone(),
        })
    }
    pub async fn access_token(&self) -> Result<String> {
        let key = format!(
            "{}://{}/access-token",
            type_name::<Config>(),
            self.config.app_id
        );
        let mut ch = self.redis.get()?;
        let ch = ch.deref_mut();

        if let Ok(it) = Commands::get::<&String, String>(ch, &key) {
            return Ok(it);
        }
        let response = self.config.get_access_token().await?;
        Commands::set_ex(
            ch,
            &key,
            &response.access_token,
            response.expires_in - 60 * 5 - 1,
        )?;
        Ok(response.access_token)
    }
}
