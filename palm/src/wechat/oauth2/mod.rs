pub mod access_token;
pub mod get_api_domain_ip;
pub mod qr_connect;
pub mod refresh_token;
pub mod userinfo;

use async_trait::async_trait;
use reqwest::Client as HttpClient;

use super::super::Result;
use super::{Config, Query};

#[async_trait]
pub trait Oauth2 {
    // https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_the_WeChat_server_IP_address.html
    async fn get_api_domain_ip(access_token: &str) -> Result<get_api_domain_ip::Response>;
    // https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html
    async fn access_token(&self, code: &str) -> Result<access_token::Response>;
    async fn refresh_token(&self, code: &str) -> Result<refresh_token::Response>;
    async fn userinfo(
        access_token: &str,
        openid: &str,
        lang: &userinfo::Language,
    ) -> Result<userinfo::Response>;
}

#[async_trait]
impl Oauth2 for Config {
    async fn get_api_domain_ip(access_token: &str) -> Result<get_api_domain_ip::Response> {
        let client = HttpClient::new();
        let response = client
            .get(Self::url("/cgi-bin/get_api_domain_ip"))
            .query(&Query {
                access_token: access_token.to_string(),
            })
            .send()
            .await?;
        let response = Self::body(response).await?;
        Ok(response)
    }
    async fn access_token(&self, code: &str) -> Result<access_token::Response> {
        let client = HttpClient::new();
        let response = client
            .get(Self::url("/sns/oauth2/access_token"))
            .query(&access_token::Query {
                appid: self.app_id.clone(),
                secret: self.app_secret.clone(),
                code: code.to_string(),
                grant_type: access_token::Query::GRANT_TYPE.to_string(),
            })
            .send()
            .await?;
        let response = Self::body(response).await?;
        Ok(response)
    }
    async fn refresh_token(&self, refresh_token: &str) -> Result<refresh_token::Response> {
        let client = HttpClient::new();
        let response = client
            .get(Self::url("/sns/oauth2/refresh_token"))
            .query(&refresh_token::Query {
                appid: self.app_id.clone(),
                refresh_token: refresh_token.to_string(),
                grant_type: access_token::Query::GRANT_TYPE.to_string(),
            })
            .send()
            .await?;
        let response = Self::body(response).await?;
        Ok(response)
    }

    async fn userinfo(
        access_token: &str,
        openid: &str,
        lang: &userinfo::Language,
    ) -> Result<userinfo::Response> {
        let client = HttpClient::new();
        let response = client
            .get(Self::url("/sns/userinfo"))
            .query(&userinfo::Query {
                access_token: access_token.to_string(),
                openid: openid.to_string(),
                lang: lang.to_string(),
            })
            .send()
            .await?;
        let response = Self::body(response).await?;
        Ok(response)
    }
}
