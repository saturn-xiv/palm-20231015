use std::sync::Arc;

use palm::{
    cache::redis::Pool as RedisPool,
    orchid::v1,
    thrift::cactus::protocols::{Action, RpcSyncHandler},
    try_thrift,
    wechat::{
        oauth2::{Client as Oauth2Client, Oauth2 as Oauth2Config},
        Client as WechatClient, Config as WechatConfig,
    },
};
use prost::Message;
use thrift::{ApplicationError, ApplicationErrorKind, Error};
use tokio::runtime::Handle;

use super::super::super::env::Config;

pub struct Service {
    pub redis: RedisPool,
    pub config: Arc<Config>,
}

impl RpcSyncHandler for Service {
    fn handle_call(&self, action: Action, request: Vec<u8>) -> thrift::Result<Vec<u8>> {
        if action == Action::WECHAT_OAUTH2_LOGIN {
            let req = try_thrift!(v1::WechatOauth2LoginRequest::decode(request.as_ref()))?;

            debug!("wechat oauth2 login {:?}", req);
            let cli = WechatClient {
                redis: self.redis.clone(),
                config: try_thrift!(self.config.wechat(&req.app_id))?,
            };
            let handle = Handle::current();
            let it = handle.block_on(async {
                let (access_token, openid) =
                    try_thrift!(cli.access_token_by_code(&req.code).await)?;
                let it = try_thrift!(
                    WechatConfig::userinfo(&access_token, &openid, req.language()).await
                )?;
                Ok::<_, Error>(it)
            })?;

            return Ok(v1::WechatOauth2LoginResponse {
                openid: it.openid.clone(),
                unionid: it.unionid.clone(),
                nickname: it.nickname.clone(),
                province: it.province.clone(),
                city: it.city.clone(),
                country: it.country.clone(),
                headimgurl: it.headimgurl.clone(),
                privilege: it.privilege.clone(),
                sex: it.sex,
            }
            .encode_to_vec());
        }
        if action == Action::WECHAT_OAUTH2_QR_CONNECT {
            let req = try_thrift!(v1::WechatOauth2QrConnectRequest::decode(request.as_ref()))?;
            let cfg = try_thrift!(self.config.wechat(&req.app_id))?;
            let url = try_thrift!(cfg.qr_connect(&req.redirect_uri, &req.state, req.language()))?;
            return Ok(v1::WechatOauth2QrConnectResponse { url }.encode_to_vec());
        }
        Err(Error::Application(ApplicationError::new(
            ApplicationErrorKind::UnknownMethod,
            format!("{:?}", action),
        )))
    }
}
