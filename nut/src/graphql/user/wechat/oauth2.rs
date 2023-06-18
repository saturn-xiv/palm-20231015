use std::ops::{Deref, DerefMut};

use chrono::{Duration, NaiveDateTime};
use diesel::Connection as DieselConnection;
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use orchid::v1::{
    wechat_oauth2_client::WechatOauth2Client, wechat_oauth2_qr_connect_request::Language,
    WechatOauth2LoginRequest,
};
use palm::{
    jwt::Jwt, thrift::loquat::Config as Loquat,
    wechat::oauth2::qr_connect::url as wechat_oauth2_qr_connect_url, Error, HttpError, Result,
};
use validator::Validate;

use super::super::super::super::models::{
    log::{Dao as LogDao, Level as LogLevel},
    user::{
        session::{Dao as UserSessionDao, ProviderType},
        Dao as UserDao, Item as User,
    },
    wechat::oauth2_user::{Dao as WechatOauth2UserDao, Item as WechatOauth2User},
};
use super::super::super::{Context, CurrentUserAdapter, Oauth2State};
use super::super::SignInResponse;

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(
    name = "WechatOauth2UserLoginRequest",
    description = "SignIn by wechat oauth2"
)]
pub struct LoginRequest {
    #[validate(length(max = 63))]
    pub app_id: String,
    #[validate(length(max = 127))]
    pub code: String,
    #[validate(length(max = 15))]
    pub language: String,
    #[validate(length(max = 127))]
    pub state: String,
    #[validate(range(min = 5, max = 604800))]
    pub ttl: i32,
}

impl LoginRequest {
    pub async fn handle(&self, context: &Context) -> Result<SignInResponse> {
        self.validate()?;

        let language = Language::from_str_name(&self.language).unwrap_or_default();

        let info = {
            let mut cli = WechatOauth2Client::connect(context.orchid.endpoint.clone()).await?;
            let mut req = tonic::Request::new(WechatOauth2LoginRequest {
                app_id: self.app_id.clone(),
                code: self.code.clone(),
                language: language as i32,
                state: self.state.clone(),
            });
            Loquat::authorization(&mut req, &context.orchid.token)?;
            let it = cli.login(req).await?;
            it.into_inner()
        };

        debug!("fetch wechat user {:?}", info);
        let state = self.state.parse::<Oauth2State>()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let user = {
            let info = info.clone();
            db.transaction::<_, Error, _>(move |db| {
                let user = match state.user {
                    Some(ref it) => {
                        let it = UserDao::by_nickname(db, it)?;
                        it.available()?;
                        Some(it.id)
                    }
                    None => None,
                };
                let user = WechatOauth2UserDao::sign_in(
                    db,
                    user,
                    &self.app_id,
                    &info,
                    language,
                    &context.session.client_ip,
                )?;
                LogDao::add::<_, User>(
                    db,
                    user.id,
                    &LogLevel::Info,
                    &context.session.client_ip,
                    Some(user.id),
                    "sign in by wechat oauth2",
                )?;
                Ok(user)
            })?
        };

        let oauth2_user_id = WechatOauth2UserDao::by_open_id(db, &self.app_id, &info.openid)?.id;
        let enf = context.enforcer.deref();
        let jwt = context.loquat.deref();
        let it = SignInResponse::new(
            db,
            enf,
            &user,
            jwt,
            Duration::seconds(self.ttl as i64),
            ProviderType::WechatOauth2,
            oauth2_user_id,
            &context.session.client_ip,
        )
        .await?;

        Ok(it)
    }
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(
    name = "WechatOauth2LoginStateRequest",
    description = "get oauth2 login state"
)]
pub struct LoginStateRequest {
    #[validate(length(min = 1, max = 63))]
    pub id: String,
}
impl LoginStateRequest {
    pub async fn handle(&self, context: &Context) -> Result<String> {
        self.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let jwt = context.loquat.deref();

        let user = context
            .session
            .current_user(db, ch, jwt)
            .map(|(x, _, _)| x.nickname)
            .ok();

        let state = Oauth2State {
            user,
            id: self.id.clone(),
        };
        Ok(state.to_string())
    }
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(
    name = "WechatOauth2LoginUrlRequest",
    description = "get oauth2 login url"
)]
pub struct LoginUrlRequest {
    #[validate(length(min = 1, max = 63))]
    pub id: String,
    #[validate(length(min = 1, max = 63))]
    pub app_id: String,
    #[validate(length(min = 1, max = 15))]
    pub lang: String,
    #[validate(url, length(min = 1, max = 127))]
    pub redirect_uri: String,
}
impl LoginUrlRequest {
    pub async fn handle(&self, context: &Context) -> Result<String> {
        self.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let jwt = context.loquat.deref();
        let user = context
            .session
            .current_user(db, ch, jwt)
            .map(|(x, _, _)| x.nickname)
            .ok();

        let state = Oauth2State {
            user,
            id: self.id.clone(),
        };
        let url = wechat_oauth2_qr_connect_url(
            &self.app_id,
            &self.redirect_uri,
            &state.to_string(),
            &self.lang,
        )?;

        Ok(url)
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
    pub nickname: String,
    pub sex: String,
    pub city: String,
    pub provence: String,
    pub country: String,
    pub privilege: Vec<String>,
    pub head_img_url: Option<String>,
    pub lang: String,
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

        for it in WechatOauth2UserDao::all(db)?.iter() {
            items.push(Self::new(it)?);
        }

        Ok(items)
    }
    fn new(x: &WechatOauth2User) -> Result<Self> {
        let it = Self {
            id: x.id,
            user_id: x.user_id,
            union_id: x.union_id.clone(),
            app_id: x.app_id.clone(),
            open_id: x.open_id.clone(),
            nickname: x.nickname.clone(),
            sex: x.sex()?,
            city: x.city.clone(),
            provence: x.provence.clone(),
            country: x.country.clone(),
            privilege: x.privilege()?,
            head_img_url: x.head_img_url.clone(),
            lang: x.lang.clone(),
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
    let wu = WechatOauth2UserDao::by_id(db, id)?;
    warn!("destroy wechat oauth user {}", wu);
    WechatOauth2UserDao::destroy(db, id)?;
    Ok(())
}

pub async fn bind_by_id(context: &Context, wechat_oauth2_user_id: i32, user_id: i32) -> Result<()> {
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
    let wu = WechatOauth2UserDao::by_id(db, wechat_oauth2_user_id)?;
    warn!("bind wechat oauth2 user {} to {}", wu, iu);
    WechatOauth2UserDao::bind(db, wu.id, iu.id)?;
    Ok(())
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(
    name = "WechatOauth2UserBindByAccountRequest",
    description = "Bind WeChat oauth2 user to system account"
)]
pub struct BindByAccountRequest {
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

        let (cur, uid, provider_type) = context.session.current_user(db, ch, loquat)?;
        if provider_type != ProviderType::WechatOauth2 {
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some(format!(
                    "current user {} isn't sign in by wechat oauth2",
                    cur
                )),
            )));
        }

        let iu = UserDao::by_nickname(db, &self.nickname)?;
        iu.available()?;
        iu.auth(loquat, &self.password)?;
        if iu.id == cur.id {
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some("can't bind to same user twice".to_string()),
            )));
        }

        db.transaction::<_, Error, _>(move |db| {
            let wu = {
                let su = UserSessionDao::by_uid(db, &uid)?;
                WechatOauth2UserDao::by_id(db, su.provider_id)?
            };

            WechatOauth2UserDao::bind(db, wu.id, iu.id)?;
            LogDao::add::<_, User>(
                db,
                cur.id,
                &LogLevel::Info,
                &context.session.client_ip,
                Some(cur.id),
                &format!(
                    "release bind to wechat oauth user({}, {}) to {}",
                    wu.app_id, wu.open_id, cur
                ),
            )?;
            LogDao::add::<_, User>(
                db,
                iu.id,
                &LogLevel::Info,
                &context.session.client_ip,
                Some(iu.id),
                &format!(
                    "bind to wechat oauth user({}, {}) to {}",
                    wu.app_id, wu.open_id, iu
                ),
            )?;

            Ok(())
        })?;
        Ok(())
    }
}
