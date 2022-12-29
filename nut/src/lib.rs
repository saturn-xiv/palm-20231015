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
pub mod schema;
pub mod services;
pub mod theme;
pub mod zero;

use palm::{orchid::v1::we_chat_client::WeChatClient, Result};
use serde::{Deserialize, Serialize};
use tonic::transport::{channel::Channel, Endpoint};

#[derive(Serialize, Deserialize, Default, Debug, Clone, PartialEq, Eq)]
#[serde(rename_all = "camelCase")]
pub struct Oauth {
    pub endpoint: String,
    pub token: String,
}

impl Oauth {
    pub async fn open(&self) -> Result<WeChatClient<Channel>> {
        let endpoint = self.endpoint.parse::<Endpoint>()?;
        let it = WeChatClient::connect(endpoint).await?;
        Ok(it)
    }
}
