use std::ops::{Deref, DerefMut};

use chrono::{Duration, NaiveDateTime};
use diesel::Connection as DieselConnection;
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use orchid::v1::{
    wechat_mini_program_client::WechatMiniProgramClient, WechatMiniProgramLoginRequest,
};
use palm::{jwt::Jwt, thrift::loquat::Config as Loquat, Error, HttpError, Result};
use validator::Validate;

use super::super::super::super::models::{
    log::{Dao as LogDao, Level as LogLevel},
    user::{session::ProviderType, Dao as UserDao, Item as User},
    wechat::mini_program_user::{Dao as WechatMiniProgramUserDao, Item as WechatMiniProgramUser},
};
use super::super::super::{Context, CurrentUserAdapter};
use super::super::SignInResponse;

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

impl LoginRequest {
    pub async fn handle(&self, context: &Context) -> Result<SignInResponse> {
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

        let user = {
            let res = res.clone();
            db.transaction::<_, Error, _>(move |db| {
                let user = WechatMiniProgramUserDao::sign_in(
                    db,
                    &self.app_id,
                    &res.openid,
                    &res.unionid,
                    &context.session.client_ip,
                )?;

                Ok(user)
            })?
        };

        let jwt = context.loquat.deref();
        let mini_program_user_id =
            WechatMiniProgramUserDao::by_open_id(db, &self.app_id, &res.openid)?.id;

        let mut it = {
            let user = UserDao::by_id(db, user.user_id)?;
            let enf = context.enforcer.deref();
            SignInResponse::new(
                db,
                enf,
                &user,
                jwt,
                Duration::seconds(self.ttl as i64),
                ProviderType::WechatMiniProgram,
                mini_program_user_id,
                &context.session.client_ip,
            )
            .await?
        };
        if let Some(ref nickname) = user.nickname {
            it.user.real_name = nickname.clone();
        }
        if let Some(ref avatar) = user.avatar_url {
            it.user.avatar = avatar.clone();
        }

        Ok(it)
    }
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(
    name = "WechatMiniProgramUserBindByAccountRequest",
    description = "Bind WeChat mini-program user to system account"
)]
pub struct BindByAccountRequest {
    #[validate(length(min = 1, max = 63))]
    pub app_id: String,
    #[validate(length(min = 1, max = 63))]
    pub open_id: String,
    #[validate(length(min = 1, max = 63))]
    pub nickname: String,
    #[validate(length(min = 1, max = 32))]
    pub password: String,
}

impl BindByAccountRequest {
    pub fn handle(&self, context: &Context) -> Result<()> {
        self.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let loquat = context.loquat.deref();

        let (user, _, _) = context.session.current_user(db, ch, loquat)?;
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
                    "bind to wechat mini-program user({}, {})",
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

        let (user, _, _) = context.session.current_user(db, ch, loquat)?;
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

#[derive(GraphQLObject)]
#[graphql(name = "WechatOauth2UserItem")]
pub struct UserItem {
    pub id: i32,
    pub user_id: i32,
    pub union_id: String,
    pub app_id: String,
    pub open_id: String,
    pub nickname: Option<String>,
    pub avatar_url: Option<String>,
    pub updated_at: NaiveDateTime,
}

impl UserItem {
    pub async fn index(context: &Context) -> Result<Vec<Self>> {
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (cur, _, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();
        if !cur.is_administrator(enf).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }

        let mut items = Vec::new();

        for it in WechatMiniProgramUserDao::all(db)?.iter() {
            items.push(Self::new(it)?);
        }

        Ok(items)
    }
    fn new(x: &WechatMiniProgramUser) -> Result<Self> {
        let it = Self {
            id: x.id,
            union_id: x.union_id.clone(),
            app_id: x.app_id.clone(),
            open_id: x.open_id.clone(),
            nickname: x.nickname.clone(),
            user_id: x.user_id,
            avatar_url: x.avatar_url.clone(),
            updated_at: x.updated_at,
        };
        Ok(it)
    }
}
pub async fn delete(context: &Context, id: i32) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (cur, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !cur.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    let wu = WechatMiniProgramUserDao::by_id(db, id)?;
    warn!("destroy wechat mini-program user {}", wu);
    WechatMiniProgramUserDao::destroy(db, id)?;
    Ok(())
}

pub async fn bind_by_id(
    context: &Context,
    wechat_mini_program_user_id: i32,
    user_id: i32,
) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (cur, _, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !cur.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let iu = UserDao::by_id(db, user_id)?;
    iu.available()?;
    let wu = WechatMiniProgramUserDao::by_id(db, wechat_mini_program_user_id)?;
    warn!("bind wechat mini-program user {} to {}", wu, iu);
    WechatMiniProgramUserDao::bind(db, wu.id, iu.id)?;
    Ok(())
}
