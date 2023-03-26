use std::sync::Arc;

use hyper::StatusCode;
use palm::{
    cache::redis::Pool as RedisPool,
    orchid::v1,
    session::Session,
    try_grpc,
    wechat::{
        mini_program::{Client as MiniProgramClient, MiniProgram as MiniProgramConfig},
        Client as WechatClient, Config as WechatConfig,
    },
    GrpcResult, HttpError, Result,
};
use tonic::{Request, Response};

use super::super::env::Config;

pub struct Service {
    pub config: Arc<Config>,
    pub redis: RedisPool,
}

#[tonic::async_trait]
impl v1::we_chat_server::WeChat for Service {
    async fn login(
        &self,
        req: Request<v1::WeChatLoginRequest>,
    ) -> GrpcResult<v1::WeChatLoginResponse> {
        let ss = Session::new(&req);
        try_grpc!(self.config.auth(&ss))?;

        let req = req.into_inner();
        let cli = try_grpc!(self.client(&req.app_id))?;
        let it = try_grpc!(cli.login(&req.code).await)?;

        Ok(Response::new(it))
    }
    async fn phone_number(
        &self,
        req: Request<v1::WeChatPhoneNumberRequest>,
    ) -> GrpcResult<v1::WeChatPhoneNumberResponse> {
        let ss = Session::new(&req);
        try_grpc!(self.config.auth(&ss))?;

        let req = req.into_inner();
        let cli = try_grpc!(self.client(&req.app_id))?;
        let token = try_grpc!(cli.access_token().await)?;
        let it = try_grpc!(WechatConfig::get_phone_number(&req.code, &token).await)?;

        Ok(Response::new(v1::WeChatPhoneNumberResponse {
            phone_number: it.phone_info.phone_number.clone(),
            pure_phone_number: it.phone_info.pure_phone_number.clone(),
            country_code: it.phone_info.country_code.clone(),
            water_mark: it.phone_info.water_mark.timestamp,
        }))
    }
}

impl Service {
    fn client(&self, app_id: &str) -> Result<WechatClient> {
        for it in self.config.wechat.iter() {
            if it.app_id == app_id {
                return Ok(WechatClient {
                    config: it.clone(),
                    redis: self.redis.clone(),
                });
            }
        }
        Err(Box::new(HttpError(
            StatusCode::NOT_FOUND,
            Some(format!("can't find app id {app_id}")),
        )))
    }
}
