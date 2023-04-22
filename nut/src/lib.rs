#![allow(clippy::too_many_arguments)]

#[macro_use]
extern crate log;
#[macro_use]
extern crate diesel;

pub mod controllers;
pub mod handlers;
pub mod i18n;
pub mod models;
pub mod orm;
pub mod rbac;
pub mod schema;
pub mod services;
pub mod theme;
pub mod zero;

use chrono::{DateTime, NaiveDateTime};
use chrono_tz::Tz;
use palm::{
    orchid::v1::{
        wechat_mini_program_client::WechatMiniProgramClient,
        wechat_oauth2_client::WechatOauth2Client,
    },
    Result,
};
use serde::{Deserialize, Serialize};
use tonic::transport::{channel::Channel, Endpoint};

pub fn timestamp2datetime(ts: i64, tz: Tz) -> Option<DateTime<Tz>> {
    if let Some(it) = NaiveDateTime::from_timestamp_opt(ts, 0) {
        return it.and_local_timezone(tz).single();
    }
    None
}

#[derive(Serialize, Deserialize, Default, Debug, Clone, PartialEq, Eq)]
pub struct Orchid {
    pub endpoint: String,
    pub token: String,
}

impl Orchid {
    pub async fn wechat_mini_program(&self) -> Result<WechatMiniProgramClient<Channel>> {
        let endpoint = self.endpoint.parse::<Endpoint>()?;
        let it = WechatMiniProgramClient::connect(endpoint).await?;
        Ok(it)
    }
    pub async fn wechat_oauth2(&self) -> Result<WechatOauth2Client<Channel>> {
        let endpoint = self.endpoint.parse::<Endpoint>()?;
        let it = WechatOauth2Client::connect(endpoint).await?;
        Ok(it)
    }
}
