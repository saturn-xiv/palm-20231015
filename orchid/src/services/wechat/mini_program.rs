use std::sync::Arc;

use palm::{
    cache::redis::Pool as RedisPool,
    orchid::v1,
    thrift::cactus::protocols::{Action, RpcSyncHandler},
    try_thrift,
    wechat::{
        mini_program::{Client as MiniProgramClient, MiniProgram as MiniProgramConfig},
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
        if action == Action::WECHAT_MINI_PROGRAM_LOGIN {
            let req = try_thrift!(v1::WechatMiniProgramLoginRequest::decode(request.as_ref()))?;
            debug!("wechat mini-program login {:?}", req);
            let cfg = try_thrift!(self.config.wechat(&req.app_id))?;
            let handle = Handle::current();
            let it = handle.block_on(async {
                let it = try_thrift!(cfg.code2session(&req.code).await)?;
                Ok::<_, Error>(it)
            })?;
            return Ok(v1::WechatMiniProgramLoginResponse {
                session_key: it.session_key.clone(),
                openid: it.openid.clone(),
                unionid: it.unionid,
            }
            .encode_to_vec());
        }

        if action == Action::WECHAT_MINI_PROGRAM_PHONE_NUMBER {
            let req = try_thrift!(v1::WechatMiniProgramPhoneNumberRequest::decode(
                request.as_ref()
            ))?;
            let cli = WechatClient {
                redis: self.redis.clone(),
                config: try_thrift!(self.config.wechat(&req.app_id))?,
            };

            let handle = Handle::current();
            let it = handle.block_on(async {
                let token = try_thrift!(cli.access_token().await)?;
                let it = try_thrift!(WechatConfig::get_phone_number(&req.code, &token).await)?;
                Ok::<_, Error>(it)
            })?;
            return Ok(v1::WechatMiniProgramPhoneNumberResponse {
                phone_number: it.phone_info.phone_number.clone(),
                pure_phone_number: it.phone_info.pure_phone_number.clone(),
                country_code: it.phone_info.country_code.clone(),
                water_mark: it.phone_info.water_mark.timestamp,
            }
            .encode_to_vec());
        }

        Err(Error::Application(ApplicationError::new(
            ApplicationErrorKind::UnknownMethod,
            format!("{:?}", action),
        )))
    }
}
