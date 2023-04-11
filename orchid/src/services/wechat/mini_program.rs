use std::sync::Arc;

use palm::{
    cache::redis::Pool as RedisPool,
    orchid::v1,
    try_grpc,
    wechat::{
        mini_program::{Client as MiniProgramClient, MiniProgram as MiniProgramConfig},
        Client as WechatClient, Config as WechatConfig,
    },
    GrpcResult,
};
use tonic::{Request, Response};

use super::super::super::env::Config;

pub struct Service {
    pub config: Arc<Config>,
    pub redis: RedisPool,
}

#[tonic::async_trait]
impl v1::wechat_mini_program_server::WechatMiniProgram for Service {
    async fn login(
        &self,
        req: Request<v1::WechatMiniProgramLoginRequest>,
    ) -> GrpcResult<v1::WechatMiniProgramLoginResponse> {
        try_grpc!(self.config.verify(&req))?;
        let req = req.into_inner();
        let cfg = try_grpc!(self.config.wechat(&req.app_id))?;
        let it = try_grpc!(cfg.code2session(&req.code).await)?;

        Ok(Response::new(v1::WechatMiniProgramLoginResponse {
            session_key: it.session_key.clone(),
            openid: it.openid.clone(),
            unionid: it.unionid,
        }))
    }
    async fn phone_number(
        &self,
        req: Request<v1::WechatMiniProgramPhoneNumberRequest>,
    ) -> GrpcResult<v1::WechatMiniProgramPhoneNumberResponse> {
        try_grpc!(self.config.verify(&req))?;
        let req = req.into_inner();
        let cli = WechatClient {
            redis: self.redis.clone(),
            config: try_grpc!(self.config.wechat(&req.app_id))?,
        };
        let token = try_grpc!(cli.access_token().await)?;
        let it = try_grpc!(WechatConfig::get_phone_number(&req.code, &token).await)?;

        Ok(Response::new(v1::WechatMiniProgramPhoneNumberResponse {
            phone_number: it.phone_info.phone_number.clone(),
            pure_phone_number: it.phone_info.pure_phone_number.clone(),
            country_code: it.phone_info.country_code.clone(),
            water_mark: it.phone_info.water_mark.timestamp,
        }))
    }
}
