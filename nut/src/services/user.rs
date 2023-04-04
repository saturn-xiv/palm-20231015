use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::{Enforcer, RbacApi};
use chrono::Duration;
use diesel::Connection as DieselConntection;
use hyper::StatusCode;

use palm::{
    cache::{redis::Pool as RedisPool, Provider as CacheProvider},
    google::oauth::{
        openid::IdToken as GoogleIdToken, ClientSecret as GoogleClientSecret, Scope as GoogleScope,
    },
    jwt::Jwt,
    nut::v1,
    orchid::v1 as orchid,
    queue::amqp::RabbitMq,
    rbac::v1::{
        permissions_response::Item as Permission, resources_response::Item as Resource,
        RoleRequest, UserRequest,
    },
    session::Session,
    tink::Loquat,
    to_chrono_duration, to_code, to_timestamp, try_grpc,
    wechat::oauth2::qr_connect::url as wechat_oauth2_qr_connect_url,
    Error, GrpcResult, HttpError, Result,
};
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};

use super::super::{
    i18n::I18n,
    models::{
        google::user::Dao as GoogleUserDao,
        log::Dao as LogDao,
        setting::Dao as SettingDao,
        user::{Action, Dao as UserDao, Item as User},
        wechat::mini_program_user::{
            Dao as WechatMiniProgramUserDao, Item as WechatMiniProgramUser,
        },
        wechat::oauth2_user::Dao as WechatOauth2UserDao,
    },
    orm::postgresql::{Connection as Db, Pool as PostgreSqlPool},
    Orchid,
};
use super::{CurrentUserAdapter, Oauth2State};

pub struct Service {
    pub redis: RedisPool,
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Loquat>,
    pub aes: Arc<Loquat>,
    pub hmac: Arc<Loquat>,
    pub rabbitmq: Arc<RabbitMq>,
    pub enforcer: Arc<Mutex<Enforcer>>,
    pub orchid: Arc<Orchid>,
}

#[tonic::async_trait]
impl v1::user_server::User for Service {
    async fn sign_in(
        &self,
        req: Request<v1::UserSignInRequest>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let hmac = self.hmac.deref();
        let req = req.into_inner();

        if let Some(ref it) = req.query {
            let user = try_grpc!(User::from_user_request(it, db))?;
            try_grpc!(user.auth(hmac, &req.password))?;
            try_grpc!(user.available())?;

            try_grpc!(db.transaction::<_, Error, _>(move |db| {
                UserDao::sign_in(db, user.id, &ss.client_ip)?;
                LogDao::add::<_, User>(
                    db,
                    user.id,
                    v1::user_logs_response::item::Level::Info,
                    &ss.client_ip,
                    Some(user.id),
                    "sign in success",
                )?;
                Ok(())
            }))?;

            let it = try_grpc!(
                new_sign_in_response(
                    db,
                    enf,
                    &user,
                    jwt,
                    Some(
                        req.ttl
                            .map_or(Duration::weeks(1), |x| Duration::seconds(x.seconds))
                    ),
                )
                .await
            )?;
            return Ok(Response::new(it));
        }

        Err(Status::permission_denied("can't sign in"))
    }
    async fn sign_up(&self, req: Request<v1::UserSignUpRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);

        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let hmac = self.hmac.deref();
        let req = req.into_inner();

        let nickname = to_code!(req.nickname);
        let email = to_code!(req.email);
        let real_name = req.real_name.trim();

        let user = try_grpc!(db.transaction::<_, Error, _>(move |db| {
            UserDao::sign_up(
                db,
                hmac,
                real_name,
                &nickname,
                &email,
                &req.password,
                &req.lang.parse()?,
                &req.time_zone.parse()?,
            )?;
            let user = UserDao::by_email(db, &email)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(user.id),
                "sign up.",
            )?;
            Ok(user)
        }))?;

        try_grpc!(
            self.send_email(db, &req.home, &user, &Action::Confirm)
                .await
        )?;

        Ok(Response::new(()))
    }
    async fn confirm_by_email(&self, req: Request<v1::UserQueryRequest>) -> GrpcResult<()> {
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();

        let user = try_grpc!(User::from_user_request(&req, db))?;
        if user.confirmed_at.is_some() {
            return Err(Status::invalid_argument(format!(
                "user {} already confirmed!",
                user.email
            )));
        }
        try_grpc!(
            self.send_email(db, &req.home, &user, &Action::Confirm)
                .await
        )?;
        return Ok(Response::new(()));
    }
    async fn confirm_by_token(&self, req: Request<v1::UserTokenRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();

        let nickname = try_grpc!(self.jwt.verify(&req.payload, &Action::Confirm.to_string()))?;
        let user = try_grpc!(UserDao::by_nickname(db, &nickname))?;
        if user.confirmed_at.is_some() {
            return Err(Status::invalid_argument(format!(
                "user {} already confirmed!",
                user.email
            )));
        }
        {
            let ip = ss.client_ip;
            let user_id = user.id;
            try_grpc!(db.transaction::<_, Error, _>(move |db| {
                UserDao::confirm(db, user_id)?;
                LogDao::add::<String, User>(
                    db,
                    user_id,
                    v1::user_logs_response::item::Level::Info,
                    &ip,
                    Some(user.id),
                    "Confirm account.".to_string(),
                )?;
                Ok(())
            }))?;
        }

        Ok(Response::new(()))
    }
    async fn unlock_by_email(&self, req: Request<v1::UserQueryRequest>) -> GrpcResult<()> {
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();

        let user = try_grpc!(User::from_user_request(&req, db))?;
        if user.locked_at.is_none() {
            return Err(Status::invalid_argument(format!(
                "user {} isn't locked!",
                user.email
            )));
        }
        try_grpc!(self.send_email(db, &req.home, &user, &Action::Unlock).await)?;
        Ok(Response::new(()))
    }
    async fn unlock_by_token(&self, req: Request<v1::UserTokenRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();

        let nickname = try_grpc!(self.jwt.verify(&req.payload, &Action::Unlock.to_string()))?;
        let user = try_grpc!(UserDao::by_nickname(db, &nickname))?;
        if user.locked_at.is_none() {
            return Err(Status::invalid_argument(format!(
                "user {} isn't locked!",
                user.email
            )));
        }
        {
            let ip = ss.client_ip;
            let user_id = user.id;
            try_grpc!(db.transaction::<_, Error, _>(move |db| {
                UserDao::lock(db, user_id, false)?;
                LogDao::add::<String, User>(
                    db,
                    user_id,
                    v1::user_logs_response::item::Level::Info,
                    &ip,
                    Some(user.id),
                    "Unlock account.".to_string(),
                )?;
                Ok(())
            }))?;
        }

        Ok(Response::new(()))
    }
    async fn forgot_password(&self, req: Request<v1::UserQueryRequest>) -> GrpcResult<()> {
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();

        let user = try_grpc!(User::from_user_request(&req, db))?;
        try_grpc!(
            self.send_email(db, &req.home, &user, &Action::ResetPassword)
                .await
        )?;
        Ok(Response::new(()))
    }
    async fn reset_password(&self, req: Request<v1::UserResetPasswordRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();
        let hmac = self.hmac.deref();

        let nickname = try_grpc!(self
            .jwt
            .verify(&req.token, &Action::ResetPassword.to_string()))?;

        let user = try_grpc!(UserDao::by_nickname(db, &nickname))?;

        {
            let ip = ss.client_ip;
            let user_id = user.id;
            try_grpc!(db.transaction::<_, Error, _>(move |db| {
                UserDao::password(db, hmac, user_id, &req.password)?;
                LogDao::add::<String, User>(
                    db,
                    user_id,
                    v1::user_logs_response::item::Level::Info,
                    &ip,
                    Some(user.id),
                    "Reset password.".to_string(),
                )?;
                Ok(())
            }))?;
        }

        Ok(Response::new(()))
    }
    async fn refresh(
        &self,
        req: Request<prost_types::Duration>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        let req = req.into_inner();

        let it = try_grpc!(
            new_sign_in_response(db, enf, &user, jwt, Some(to_chrono_duration!(req))).await
        )?;

        Ok(Response::new(it))
    }
    async fn logs(&self, req: Request<v1::Pager>) -> GrpcResult<v1::UserLogsResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        let req = req.into_inner();
        let total = try_grpc!(LogDao::count(db, user.id))?;

        // debug!(
        //     "pager={:?}, total={}, page={}, offset={}, size={}, pagination={:?}",
        //     req,
        //     total,
        //     pager.page(total),
        //     pager.offset(total),
        //     pager.size(),
        //     v1::Pagination::new(&pager, total)
        // );
        // let items = try_grpc!(LogDao::index_by_queries(
        //     db,
        //     user.payload.id,
        //     pager.offset(total),
        //     pager.size(),
        //     req.level,
        //     &req.ip
        // ))?;

        let items = try_grpc!(LogDao::all(db, user.id, req.offset(total), req.size()))?;

        Ok(Response::new(v1::UserLogsResponse {
            items: items
                .iter()
                .map(|x| v1::user_logs_response::Item {
                    id: x.id,
                    user_id: x.user_id,
                    message: x.message.clone(),
                    level: x.level,
                    ip: x.ip.clone(),
                    resource: Some(Resource {
                        r#type: x.resource_type.clone(),
                        id: x.resource_id,
                    }),
                    created_at: Some(to_timestamp!(x.created_at)),
                })
                .collect(),
            pagination: Some(v1::Pagination::new(&req, total)),
        }))
    }
    async fn sign_out(&self, req: Request<()>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        try_grpc!(LogDao::add::<_, User>(
            db,
            user.id,
            v1::user_logs_response::item::Level::Info,
            &ss.client_ip,
            Some(user.id),
            "sign out."
        ))?;
        Ok(Response::new(()))
    }
    async fn set_profile(&self, req: Request<v1::UserSetProfileRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        let req = req.into_inner();

        {
            let ip = ss.client_ip;

            try_grpc!(db.transaction::<_, Error, _>(move |db| {
                UserDao::set_profile(
                    db,
                    user.id,
                    &req.real_name,
                    &req.avatar,
                    &req.lang.parse()?,
                    &req.time_zone.parse()?,
                )?;
                LogDao::add::<String, User>(
                    db,
                    user.id,
                    v1::user_logs_response::item::Level::Info,
                    &ip,
                    Some(user.id),
                    "Update profile.".to_string(),
                )?;
                Ok(())
            }))?;
        }
        Ok(Response::new(()))
    }

    async fn change_password(&self, req: Request<v1::UserChangePasswordRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        let req = req.into_inner();
        let hmac = self.hmac.deref();
        try_grpc!(user.auth(hmac, &req.current_password))?;

        {
            let ip = ss.client_ip;

            try_grpc!(db.transaction::<_, Error, _>(move |db| {
                UserDao::password(db, hmac, user.id, &req.new_password)?;
                LogDao::add::<String, User>(
                    db,
                    user.id,
                    v1::user_logs_response::item::Level::Info,
                    &ip,
                    Some(user.id),
                    "Change password.".to_string(),
                )?;
                Ok(())
            }))?;
        }

        Ok(Response::new(()))
    }

    async fn show(&self, req: Request<v1::IdRequest>) -> GrpcResult<v1::user_index_response::Item> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        let req = req.into_inner();

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }

        let user = try_grpc!(UserDao::by_id(db, req.id))?;
        let it = v1::user_index_response::Item::from(user);
        Ok(Response::new(it))
    }
    async fn index(&self, req: Request<v1::Pager>) -> GrpcResult<v1::UserIndexResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let total = try_grpc!(UserDao::count(db))?;
        let items = try_grpc!(UserDao::all(db, req.offset(total), req.size()))?;

        Ok(Response::new(v1::UserIndexResponse {
            items: items
                .iter()
                .map(|x| v1::user_index_response::Item::from(x.clone()))
                .collect(),
            pagination: Some(v1::Pagination::new(&req, total)),
        }))
    }

    async fn disable(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();
        let it = try_grpc!(UserDao::by_id(db, req.id))?;

        if it.has(enf, RoleRequest::ROOT).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }

        try_grpc!(UserDao::enable(db, it.id, false))?;
        Ok(Response::new(()))
    }

    async fn enable(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let it = try_grpc!(UserDao::by_id(db, req.id))?;
        if it.has(enf, RoleRequest::ROOT).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }

        try_grpc!(UserDao::enable(db, it.id, true))?;
        Ok(Response::new(()))
    }

    async fn lock(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let it = try_grpc!(UserDao::by_id(db, req.id))?;
        if it.has(enf, RoleRequest::ROOT).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }

        try_grpc!(UserDao::lock(db, it.id, true))?;
        Ok(Response::new(()))
    }

    async fn unlock(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let it = try_grpc!(UserDao::by_id(db, req.id))?;
        if it.has(enf, RoleRequest::ROOT).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }

        try_grpc!(UserDao::lock(db, it.id, false))?;
        Ok(Response::new(()))
    }
    async fn confirm(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let it = try_grpc!(UserDao::by_id(db, req.id))?;
        if it.has(enf, RoleRequest::ROOT).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }

        try_grpc!(UserDao::confirm(db, it.id))?;
        Ok(Response::new(()))
    }

    async fn set_password(&self, req: Request<v1::UserSetPasswordRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let hmac = self.hmac.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let it = try_grpc!(UserDao::by_id(db, req.id))?;
        if it.has(enf, RoleRequest::ROOT).await {
            return Err(Status::permission_denied(type_name::<User>()));
        }

        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            UserDao::password(db, hmac, it.id, &req.password)?;
            LogDao::add::<_, User>(
                db,
                it.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(it.id),
                &format!("reset password by {}", user),
            )?;
            Ok(())
        }))?;
        Ok(Response::new(()))
    }

    async fn google_sign_in_url(
        &self,
        req: Request<v1::GoogleSignInUrlRequest>,
    ) -> GrpcResult<v1::GoogleSignInUrlResponse> {
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let req = req.into_inner();
        let aes = self.aes.deref();
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();

        if let Some(ref state) = req.state {
            let key = GoogleClientSecret::key(&req.project);
            let cfg: GoogleClientSecret = try_grpc!(SettingDao::get(
                db,
                aes,
                &GoogleClientSecret::key(&req.project),
                None
            ))?;
            let state = Oauth2State::new(state);

            let it = cfg.web.openid_connect(
                vec![
                    GoogleScope::Openid,
                    GoogleScope::Email,
                    GoogleScope::Profile,
                ],
                &state,
                &req.redirect_uri,
            );
            try_grpc!(ch.set(&key, &it.nonce, Duration::minutes(1)))?;
            return Ok(Response::new(it));
        }
        Err(Status::permission_denied(type_name::<
            v1::GoogleSignInUrlRequest,
        >()))
    }
    async fn sign_in_by_google(
        &self,
        req: Request<v1::SignInByGoogleRequest>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();

        let enf = self.enforcer.deref();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();

        let req = req.into_inner();

        let state = try_grpc!(req.state.parse::<Oauth2State>())?;
        debug!("google oauth2 sign {:?}, {:?}", req, state);

        let cfg: GoogleClientSecret = try_grpc!(SettingDao::get(
            db,
            aes,
            &GoogleClientSecret::key(&req.project),
            None
        ))?;
        if let Some(ref nonce) = req.nonce {
            let mut ch = try_grpc!(self.redis.get())?;
            let ch = ch.deref_mut();
            let tmp: String = try_grpc!(ch.fetch(&state.id))?;
            if nonce != &tmp {
                return Err(Status::permission_denied(type_name::<
                    v1::SignInByGoogleRequest,
                >()));
            }
        }

        let code = try_grpc!(
            cfg.web
                .exchange_authorization_code(&req.redirect_uri, &req.code)
                .await
        )?;
        let token: GoogleIdToken = try_grpc!(serde_json::from_str(&code.id_token))?;

        let user = try_grpc!(db.transaction::<_, Error, _>(move |db| {
            let user = match state.user {
                Some(ref it) => {
                    let it = UserDao::by_uid(db, it)?;
                    it.available()?;
                    Some(it.id)
                }
                None => None,
            };
            let user = GoogleUserDao::sign_in(db, user, &code, &token, &ss.client_ip)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(user.id),
                "sign in by google",
            )?;
            Ok(user)
        }))?;

        let it = try_grpc!(
            new_sign_in_response(
                db,
                enf,
                &user,
                jwt,
                Some(
                    req.ttl
                        .map_or(Duration::weeks(1), |x| Duration::seconds(x.seconds))
                ),
            )
            .await
        )?;
        Ok(Response::new(it))
    }

    async fn sign_in_by_wechat_oauth2(
        &self,
        req: Request<v1::SignInByWechatOauth2Request>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        let ss = Session::new(&req);

        let enf = self.enforcer.deref();
        let jwt = self.jwt.deref();
        let req = req.into_inner();

        {
            let it = try_grpc!(req.state.parse::<Oauth2State>())?;
            debug!("wechat oauth2 sign {:?}, {:?}", req, it);
        }

        let lang = req.language();
        let ttl = req
            .ttl
            .map_or(Duration::weeks(1), |x| Duration::seconds(x.seconds));

        let info = {
            let mut cli = try_grpc!(self.orchid.wechat_oauth2().await)?;
            let mut req = Request::new(orchid::WechatOauth2LoginRequest {
                app_id: req.app_id.clone(),
                code: req.code.clone(),
                state: req.state.clone(),
                language: req.language,
            });
            try_grpc!(Loquat::authorization(&mut req, &self.orchid.token))?;
            let res = try_grpc!(cli.login(req).await)?;
            debug!("fetch wechat user {:?}", res);
            res.into_inner()
        };
        let state = try_grpc!(req.state.parse::<Oauth2State>())?;

        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let user = try_grpc!(db.transaction::<_, Error, _>(move |db| {
            let user = match state.user {
                Some(ref it) => {
                    let it = UserDao::by_uid(db, it)?;
                    it.available()?;
                    Some(it.id)
                }
                None => None,
            };
            let user =
                WechatOauth2UserDao::sign_in(db, user, &req.app_id, &info, lang, &ss.client_ip)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(user.id),
                "sign in by wechat oauth",
            )?;
            Ok(user)
        }))?;

        let it = try_grpc!(new_sign_in_response(db, enf, &user, jwt, Some(ttl)).await)?;
        Ok(Response::new(it))
    }

    async fn wechat_oauth2_sign_in_state(
        &self,
        req: Request<v1::WechatOauth2SignInStateRequest>,
    ) -> GrpcResult<v1::WechatOauth2SignInStateResponse> {
        let ss = Session::new(&req);
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let req = req.into_inner();

        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();

        let user = try_grpc!(ss.current_user(db, ch, jwt)).map(|x| x.uid).ok();

        let state = Oauth2State {
            user,
            goto: req.goto.clone(),
            host: req.host.clone(),
            id: req.id,
        };
        Ok(Response::new(v1::WechatOauth2SignInStateResponse {
            state: state.to_string(),
        }))
    }
    async fn wechat_oauth2_sign_in_url(
        &self,
        req: Request<v1::WechatOauth2SignInUrlRequest>,
    ) -> GrpcResult<orchid::WechatOauth2QrConnectResponse> {
        let ss = Session::new(&req);
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let req = req.into_inner();

        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();

        let user = try_grpc!(ss.current_user(db, ch, jwt)).map(|x| x.uid).ok();

        let lang = req.language();
        if let Some(ref state) = req.state {
            let state = Oauth2State {
                user,
                goto: state.goto.clone(),
                host: state.host.clone(),
                id: state.id.clone(),
            };
            let url = try_grpc!(wechat_oauth2_qr_connect_url(
                &req.app_id,
                &req.redirect_uri,
                &state.to_string(),
                lang
            ))?;
            return Ok(Response::new(orchid::WechatOauth2QrConnectResponse { url }));
        }

        Err(Status::permission_denied(type_name::<
            v1::WechatOauth2SignInUrlRequest,
        >()))
    }

    async fn current_wechat_mini_program_user(
        &self,
        req: Request<v1::CurrentWechatMiniProgramUserRequest>,
    ) -> GrpcResult<v1::CurrentWechatMiniProgramUserResponse> {
        let ss = Session::new(&req);
        // let mut ch = try_grpc!(self.redis.get())?;
        // let ch = ch.deref_mut();
        let req = req.into_inner();

        if let Some(ref token) = ss.token {
            let jwt = self.jwt.deref();
            let enf = self.enforcer.deref();
            let open_id = try_grpc!(jwt.verify(token, &Action::SignIn.to_string()))?;

            let mut db = try_grpc!(self.pgsql.get())?;
            let db = db.deref_mut();
            let wu = try_grpc!(WechatMiniProgramUserDao::by_openid(
                db,
                &req.app_id,
                &open_id
            ))?;

            let ur = match wu.user_id {
                Some(id) => {
                    let user = try_grpc!(UserDao::by_id(db, id))?;
                    let it = try_grpc!(new_sign_in_response(db, enf, &user, jwt, None).await)?;
                    Some(it)
                }
                None => None,
            };
            return Ok(Response::new(v1::CurrentWechatMiniProgramUserResponse {
                wechat: Some(wu.into()),
                user: ur,
            }));
        }

        // let user = try_grpc!(ss.current_user(db, ch, jwt)).map(|x| x.uid).ok();

        Err(Status::permission_denied(type_name::<
            v1::CurrentWechatMiniProgramUserRequest,
        >()))
    }
}

impl Service {
    async fn send_email(&self, db: &mut Db, home: &str, user: &User, act: &Action) -> Result<()> {
        let token = self
            .jwt
            .sign(&user.nickname, &act.to_string(), Duration::hours(1))?;

        let act = match *act {
            Action::Confirm => Ok("confirm"),
            Action::Unlock => Ok("unlock"),
            Action::ResetPassword => Ok("reset-password"),
            _ => Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None))),
        }?;

        let args = serde_json::json!({
            "real_name": user.real_name,
            "token": token,
            "home": home
        });

        let task = v1::EmailTask {
            subject: I18n::t(
                db,
                &user.lang,
                format!("auth.mailers.user.{}.subject", act),
                &Some(&args),
            ),
            content: I18n::t(
                db,
                &user.lang,
                format!("auth.mailers.user.{}.body", act),
                &Some(&args),
            ),
            to: Some(user.address()),
            ..Default::default()
        };

        self.rabbitmq.produce(&task).await?;

        Ok(())
    }
}

impl From<WechatMiniProgramUser> for v1::WechatMiniProgramUser {
    fn from(x: WechatMiniProgramUser) -> Self {
        Self {
            app_id: x.app_id.clone(),
            open_id: x.open_id.clone(),
            union_id: x.union_id.clone(),
            nickname: x.nickname.clone(),
            avatar_url: x.avatar_url,
        }
    }
}

impl From<User> for v1::user_index_response::Item {
    fn from(x: User) -> Self {
        Self {
            id: x.id,
            uid: x.uid.clone(),
            email: x.email.clone(),
            real_name: x.real_name.clone(),
            nickname: x.nickname.clone(),
            updated_at: Some(to_timestamp!(x.updated_at)),
            sign_in_count: x.sign_in_count,
            lang: x.lang.clone(),
            time_zone: x.time_zone.clone(),
            avatar: x.avatar.clone(),
            last_sign_in_at: x.last_sign_in_at.map(|x| to_timestamp!(x)),
            last_sign_in_ip: x.last_sign_in_ip.clone(),
            current_sign_in_at: x.current_sign_in_at.map(|x| to_timestamp!(x)),
            current_sign_in_ip: x.current_sign_in_ip.clone(),
            confirmed_at: x.confirmed_at.map(|x| to_timestamp!(x)),
            locked_at: x.locked_at.map(|x| to_timestamp!(x)),
            deleted_at: x.deleted_at.map(|x| to_timestamp!(x)),
        }
    }
}

impl User {
    pub fn from_user_request(req: &v1::UserQueryRequest, db: &mut Db) -> Result<Self> {
        if let Some(ref it) = req.user {
            let user = match it {
                v1::user_query_request::User::Nickname(ref it) => UserDao::by_nickname(db, it)?,
                v1::user_query_request::User::Email(ref it) => UserDao::by_email(db, it)?,
            };
            return Ok(user);
        }

        Err(Box::new(HttpError(
            StatusCode::NOT_FOUND,
            Some("user is't exists".to_string()),
        )))
    }
}

pub async fn new_sign_in_response<P: Jwt>(
    db: &mut Db,
    enforcer: &Mutex<Enforcer>,
    user: &User,
    jwt: &P,
    ttl: Option<Duration>,
) -> Result<v1::UserSignInResponse> {
    let token = match ttl {
        Some(ttl) => {
            let it = jwt.sign(&user.nickname, &Action::SignIn.to_string(), ttl)?;
            Some(it)
        }
        None => None,
    };
    let name = UserRequest { id: user.id }.to_string();
    let mut enforcer = enforcer.lock().await;

    let mut roles = Vec::new();
    {
        let items = enforcer.get_implicit_roles_for_user(&name, None);
        for it in items.iter() {
            if let Ok(it) = try_grpc!(it.parse::<RoleRequest>()) {
                roles.push(it.code);
            }
        }
    }
    let permissions = {
        let items = enforcer.get_implicit_permissions_for_user(&name, None);
        new_permission_list_response(&items)?
    };

    Ok(v1::UserSignInResponse {
        token,
        payload: Some(user.clone().into()),
        permissions,
        roles,
        google: GoogleUserDao::count_by_user(db, user.id)? > 0,
        wechat: Some(v1::user_sign_in_response::Wechat {
            mini_program: WechatMiniProgramUserDao::count_by_user(db, user.id)? > 0,
            oauth2: WechatOauth2UserDao::count_by_user(db, user.id)? > 0,
        }),
    })
}

fn new_permission_list_response(rules: &[Vec<String>]) -> Result<Vec<Permission>> {
    let mut items = Vec::new();

    for rule in rules.iter() {
        let it = Permission::new(rule)?;
        items.push(it);
    }

    Ok(items)
}
