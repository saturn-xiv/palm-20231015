pub mod code2session;
pub mod get_access_token;
pub mod get_phone_number;
pub mod message_push;

use std::any::type_name;
use std::ops::DerefMut;

use async_trait::async_trait;
use log::debug;
use redis::Commands;
use reqwest::Client as HttpClient;

use super::super::Result;
use super::{Config, Query};

#[async_trait]
pub trait MiniProgram {
    // https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html
    // https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html
    async fn code2session(&self, code: &str) -> Result<code2session::Response>;
    // https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-access-token/getAccessToken.html
    async fn get_access_token(&self) -> Result<get_access_token::Response>;
    // https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html
    // https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/phone-number/getPhoneNumber.html
    async fn get_phone_number(code: &str, access_token: &str)
        -> Result<get_phone_number::Response>;
}

#[async_trait]
impl MiniProgram for Config {
    async fn code2session(&self, code: &str) -> Result<code2session::Response> {
        debug!("wechat mini-program code to session {code}");
        let client = HttpClient::new();
        let response = client
            .get(Self::url("/sns/jscode2session"))
            .query(&code2session::Query {
                appid: self.app_id.to_string(),
                secret: self.app_secret.to_string(),
                js_code: code.to_string(),
                grant_type: code2session::Query::GRANT_TYPE.to_string(),
            })
            .send()
            .await?;
        let response = Self::body(response).await?;
        Ok(response)
    }
    async fn get_access_token(&self) -> Result<get_access_token::Response> {
        debug!("wechat mini-program get access token");
        let client = HttpClient::new();
        let response = client
            .get(Self::url("/cgi-bin/token"))
            .query(&get_access_token::Query {
                appid: self.app_id.to_string(),
                secret: self.app_secret.to_string(),
                grant_type: get_access_token::Query::GRANT_TYPE.to_string(),
            })
            .send()
            .await?;
        let response = Self::body(response).await?;
        Ok(response)
    }

    async fn get_phone_number(
        code: &str,
        access_token: &str,
    ) -> Result<get_phone_number::Response> {
        let client = HttpClient::new();
        let response = client
            .post(Self::url("/wxa/business/getuserphonenumber"))
            .query(&Query {
                access_token: access_token.to_string(),
            })
            .json(&get_phone_number::Request {
                code: code.to_string(),
            })
            .send()
            .await?;
        let response = Self::body(response).await?;
        Ok(response)
    }
}

#[async_trait]
pub trait Client {
    async fn access_token(&self) -> Result<String>;

    fn access_token_key(&self) -> String;
}

#[async_trait]
impl Client for super::Client {
    async fn access_token(&self) -> Result<String> {
        let key = self.access_token_key();
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
            response.expires_in - 60 * (5 - 1),
        )?;
        Ok(response.access_token)
    }

    fn access_token_key(&self) -> String {
        format!(
            "{}://{}/access-token",
            type_name::<Self>(),
            self.config.app_id
        )
    }
}
