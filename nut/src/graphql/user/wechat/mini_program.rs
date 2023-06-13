use std::ops::{Deref, DerefMut};

use chrono::Duration;
use diesel::Connection as DieselConnection;
use juniper::GraphQLInputObject;
use orchid::v1::{
    wechat_mini_program_client::WechatMiniProgramClient, WechatMiniProgramLoginRequest,
};
use palm::{jwt::Jwt, thrift::loquat::Config as Loquat, Error, Result};
use validator::Validate;

use super::super::super::super::models::{
    log::{Dao as LogDao, Level as LogLevel},
    user::{Action, Dao as UserDao, Item as User},
    wechat::mini_program_user::Dao as WechatMiniProgramUserDao,
};
use super::super::super::{Context, CurrentUserAdapter};

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(
    name = "WechatMiniProgramUserLoginRequest",
    description = "Login by wechat mini-program"
)]
pub struct LoginRequest {
    #[validate(length(max = 63))]
    pub app_id: String,
    #[validate(length(max = 127))]
    pub code: String,
    #[validate(range(min = 5, max = 604800))]
    pub ttl: i32,
    #[validate(length(max = 31))]
    pub version: String,
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "WechatMiniProgramUserLoginResponse")]
pub struct LoginResponse {
    pub token: String,
    pub nickname: Option<String>,
    pub avatar_url: Option<String>,
}

impl LoginRequest {
    pub async fn handle(&self, context: &Context) -> Result<LoginResponse> {
        self.validate()?;

        debug!(
            "try to sign in wechat mini-program user {:?} from {}",
            self, context.session.client_ip
        );

        let res = {
            let mut cli = WechatMiniProgramClient::connect(context.orchid.url.clone()).await?;
            let mut req = tonic::Request::new(WechatMiniProgramLoginRequest {
                app_id: self.app_id.clone(),
                code: self.code.clone(),
            });
            Loquat::authorization(&mut req, &context.orchid.token)?;
            let it = cli.login(req).await?;
            it.into_inner()
        };
        debug!("fetch wechat mini-program user {:?}", res);
        let mut db = context.db.get()?;
        let db = db.deref_mut();

        let user = db.transaction::<_, Error, _>(move |db| {
            let user = WechatMiniProgramUserDao::sign_in(
                db,
                &self.app_id,
                &res.openid,
                &res.unionid,
                &context.session.client_ip,
            )?;

            Ok(user)
        })?;

        let loquat = context.loquat.deref();
        let token = Jwt::sign(
            loquat,
            &user.open_id,
            &Action::SignIn.to_string(),
            Duration::minutes(self.ttl as i64),
        )?;
        Ok(LoginResponse {
            nickname: user.nickname.clone(),
            avatar_url: user.avatar_url,
            token,
        })
    }
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(
    name = "WechatMiniProgramUserBindRequest",
    description = "Bind WeChat mini-program user to system account"
)]
pub struct BindRequest {
    #[validate(length(min = 1, max = 63))]
    pub app_id: String,
    #[validate(length(min = 1, max = 63))]
    pub open_id: String,
    #[validate(length(min = 1, max = 63))]
    pub nickname: String,
    #[validate(length(min = 1, max = 32))]
    pub password: String,
}

impl BindRequest {
    pub fn handle(&self, context: &Context) -> Result<()> {
        self.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let loquat = context.loquat.deref();

        let (user, _) = context.session.current_user(db, ch, loquat)?;
        db.transaction::<_, Error, _>(move |db| {
            let iu = UserDao::by_nickname(db, &self.nickname)?;
            {
                iu.auth(loquat, &self.password)?;
                iu.available()?;
            }

            let wu = WechatMiniProgramUserDao::by_open_id(db, &self.app_id, &self.open_id)?;

            WechatMiniProgramUserDao::bind(db, wu.id, user.id)?;
            LogDao::add::<_, User>(
                db,
                iu.id,
                &LogLevel::Info,
                &context.session.client_ip,
                Some(user.id),
                &format!(
                    "bind to wechat mini-program user({}, {}) ",
                    wu.app_id, wu.open_id
                ),
            )?;

            Ok(())
        })?;
        Ok(())
    }
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(
    name = "WechatMiniProgramUserUpdateProfileRequest",
    description = "Bind WeChat mini-program user to system account"
)]
pub struct UpdateProfileRequest {
    #[validate(length(min = 1, max = 63))]
    pub app_id: String,
    #[validate(length(min = 1, max = 63))]
    pub open_id: String,
    #[validate(length(min = 1, max = 63))]
    pub name: String,
    #[validate(length(min = 1, max = 255))]
    pub avatar: String,
}

impl UpdateProfileRequest {
    pub fn handle(&self, context: &Context) -> Result<()> {
        self.validate()?;
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let loquat = context.loquat.deref();

        let (user, _) = context.session.current_user(db, ch, loquat)?;
        db.transaction::<_, Error, _>(move |db| {
            {
                let it = WechatMiniProgramUserDao::by_open_id(db, &self.app_id, &self.open_id)?;
                WechatMiniProgramUserDao::set_profile(db, it.id, &self.name, &self.avatar)?;
            }

            UserDao::sync_wechat(db, user.id, &self.name, &self.avatar)?;
            Ok(())
        })?;
        Ok(())
    }
}
