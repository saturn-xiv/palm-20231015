use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::{Enforcer, RbacApi};
use chrono::Duration;
use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use palm::{
    cache::redis::{ClusterConnection as Cache, Pool as CachePool},
    crypto::Password,
    jwt::Jwt,
    nut::v1,
    queue::amqp::{Flatbuffer as FlatbufferQueue, RabbitMq},
    rbac::{Permission as RbacPermission, Role, Subject},
    session::Session,
    tasks::email::Task as EmailTask,
    thrift::loquat::Config as Loquat,
    to_code, try_grpc, Error, GrpcResult, HttpError, Result,
};
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};
use validator::Validate;

use super::super::{
    i18n::I18n,
    models::{
        google::user::Dao as GoogleUserDao,
        log::Dao as LogDao,
        user::{
            session::{Dao as UserSessionDao, ProviderType},
            Action, Dao as UserDao, Item as User,
        },
        wechat::{
            mini_program_user::Dao as WechatMiniProgramUserDao,
            oauth2_user::Dao as WechatOauth2UserDao,
        },
    },
    orm::postgresql::{Connection as Db, Pool as DbPool},
};
use super::CurrentUserAdapter;

pub struct Service {
    pub jwt: Arc<Loquat>,
    pub aes: Arc<Loquat>,
    pub hmac: Arc<Loquat>,
    pub db: DbPool,
    pub cache: CachePool,
    pub enforcer: Arc<Mutex<Enforcer>>,
    pub queue: Arc<RabbitMq>,
}

#[tonic::async_trait]
impl v1::user_server::User for Service {
    async fn sign_in(
        &self,
        req: Request<v1::UserSignInRequest>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let hmac = self.hmac.deref();

        let enf = self.enforcer.deref();
        let req = req.into_inner();
        let user = req
            .user
            .as_ref()
            .ok_or(Status::invalid_argument("empty user"))?;

        let ttl = req
            .ttl
            .as_ref()
            .ok_or(Status::invalid_argument("empty ttl"))?;
        let form = SignIn {
            password: req.password.clone(),
            ttl: ttl.seconds,
        };

        let it = try_grpc!(form.handle(&ss, db, enf, jwt, hmac, user).await)?;
        Ok(Response::new(it))
    }
    async fn sign_up(&self, req: Request<v1::UserSignUpRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let hmac = self.hmac.deref();
        let queue = self.queue.deref();

        let mut form = {
            let req = req.into_inner();
            SignUp {
                nickname: req.nickname.clone(),
                real_name: req.real_name.clone(),
                email: req.email.clone(),
                password: req.password.clone(),
                timezone: req.timezone.clone(),
                home: req.home,
            }
        };

        try_grpc!(form.handle(&ss, db, jwt, hmac, queue).await)?;
        Ok(Response::new(()))
    }
    async fn confirm_by_email(&self, req: Request<v1::UserQueryRequest>) -> GrpcResult<()> {
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let queue = self.queue.deref();

        let req = req.into_inner();
        let user = req
            .user
            .as_ref()
            .ok_or(Status::invalid_argument("empty user"))?;
        let form = ByEmail { home: req.home };
        try_grpc!(form.confirm_by_email(db, jwt, queue, user).await)?;
        Ok(Response::new(()))
    }
    async fn confirm_by_token(&self, req: Request<v1::UserTokenRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();

        let form = {
            let req = req.into_inner();
            ByToken { token: req.payload }
        };
        try_grpc!(form.confirm_by_token(&ss, db, jwt))?;
        Ok(Response::new(()))
    }
    async fn unlock_by_email(&self, req: Request<v1::UserQueryRequest>) -> GrpcResult<()> {
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let queue = self.queue.deref();

        let req = req.into_inner();
        let user = req
            .user
            .as_ref()
            .ok_or(Status::invalid_argument("empty user"))?;
        let form = ByEmail { home: req.home };
        try_grpc!(form.unlock_by_email(db, jwt, queue, user).await)?;
        Ok(Response::new(()))
    }
    async fn unlock_by_token(&self, req: Request<v1::UserTokenRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();

        let form = {
            let req = req.into_inner();
            ByToken { token: req.payload }
        };
        try_grpc!(form.unlock_by_token(&ss, db, jwt))?;
        Ok(Response::new(()))
    }
    async fn forgot_password(&self, req: Request<v1::UserQueryRequest>) -> GrpcResult<()> {
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let queue = self.queue.deref();

        let req = req.into_inner();
        let user = req
            .user
            .as_ref()
            .ok_or(Status::invalid_argument("empty user"))?;
        let form = ByEmail { home: req.home };
        try_grpc!(form.forgot_password(db, jwt, queue, user).await)?;
        Ok(Response::new(()))
    }
    async fn reset_password(&self, req: Request<v1::UserResetPasswordRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let hmac = self.hmac.deref();

        let form = {
            let req = req.into_inner();
            ResetPassword {
                token: req.token.clone(),
                password: req.password,
            }
        };
        try_grpc!(form.handle(&ss, db, jwt, hmac))?;
        Ok(Response::new(()))
    }
    async fn refresh(
        &self,
        req: Request<prost_types::Duration>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            RefreshToken { ttl: req.seconds }
        };
        let it = try_grpc!(form.handle(&ss, db, ch, enf, jwt).await)?;
        Ok(Response::new(it))
    }
    async fn logs(&self, req: Request<v1::Pager>) -> GrpcResult<v1::UserLogsResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let req = req.into_inner();
        let it = try_grpc!(new_logs_response(&ss, db, ch, jwt, &req))?;
        Ok(Response::new(it))
    }
    async fn set_profile(&self, req: Request<v1::UserSetProfileRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();

        let form = {
            let req = req.into_inner();
            UpdateProfile {
                real_name: req.real_name.clone(),
                timezone: req.timezone.clone(),
                avatar: req.avatar.clone(),
                lang: req.lang,
            }
        };
        let it = try_grpc!(form.handle(&ss, db, ch, jwt))?;
        Ok(Response::new(it))
    }
    async fn change_password(&self, req: Request<v1::UserChangePasswordRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let hmac = self.hmac.deref();

        let form = {
            let req = req.into_inner();
            ChangePassword {
                current_password: req.current_password.clone(),
                new_password: req.new_password,
            }
        };
        let it = try_grpc!(form.handle(&ss, db, ch, jwt, hmac))?;
        Ok(Response::new(it))
    }
    async fn sign_out(&self, req: Request<()>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        try_grpc!(sign_out(&ss, db, ch, jwt))?;
        Ok(Response::new(()))
    }

    async fn index(&self, req: Request<v1::Pager>) -> GrpcResult<v1::UserIndexResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        let it = try_grpc!(new_users_response(&ss, db, ch, enf, jwt, &req).await)?;
        Ok(Response::new(it))
    }
    async fn show(&self, req: Request<v1::IdRequest>) -> GrpcResult<v1::user_index_response::Item> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        let it = try_grpc!(show_user(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(it))
    }
    async fn disable(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        try_grpc!(enable(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(()))
    }
    async fn enable(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        try_grpc!(disable(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(()))
    }
    async fn lock(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        try_grpc!(lock(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(()))
    }
    async fn unlock(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        try_grpc!(unlock(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(()))
    }
    async fn confirm(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        try_grpc!(confirm(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(()))
    }
    async fn set_password(&self, req: Request<v1::UserSetPasswordRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let hmac = self.hmac.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            SetPassword {
                user: req.user,
                password: req.password,
            }
        };
        try_grpc!(form.handle(&ss, db, ch, enf, jwt, hmac).await)?;
        Ok(Response::new(()))
    }
    async fn delete(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let req = req.into_inner();
        try_grpc!(delete(&ss, db, ch, enf, jwt, req.id).await)?;
        Ok(Response::new(()))
    }
}

#[derive(Validate)]
pub struct SignIn {
    #[validate(length(min = 1, max = 32))]
    pub password: String,
    #[validate(range(min = 5, max = 604800))]
    pub ttl: i64,
}

impl SignIn {
    pub async fn handle<J: Jwt, P: Password>(
        &self,
        ss: &Session,
        db: &mut Db,
        enf: &Mutex<Enforcer>,
        jwt: &J,
        hmac: &P,
        user: &v1::user_sign_in_request::User,
    ) -> Result<v1::UserSignInResponse> {
        self.validate()?;

        let user = Self::get(db, user)?;

        user.auth(hmac, &self.password)?;
        user.available()?;

        db.transaction::<_, Error, _>(move |db| {
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
        })?;

        new_sign_in_response(
            db,
            enf,
            &user,
            jwt,
            Duration::seconds(self.ttl),
            ProviderType::Email,
            user.id,
            &ss.client_ip,
        )
        .await
    }

    pub fn get(db: &mut Db, user: &v1::user_sign_in_request::User) -> Result<User> {
        let it = match user {
            v1::user_sign_in_request::User::Email(ref it) => UserDao::by_email(db, it)?,
            v1::user_sign_in_request::User::Nickname(ref it) => UserDao::by_nickname(db, it)?,
        };
        Ok(it)
    }
}

#[derive(Validate)]
pub struct ByEmail {
    #[validate(url, length(min = 1, max = 255))]
    pub home: String,
}

impl ByEmail {
    pub async fn forgot_password<J: Jwt>(
        &self,
        db: &mut Db,
        jwt: &J,
        queue: &RabbitMq,
        user: &v1::user_query_request::User,
    ) -> Result<()> {
        self.validate()?;
        let user = Self::get(db, user)?;
        Self::send_email(db, jwt, queue, &self.home, &user, &Action::ResetPassword).await?;
        Ok(())
    }
    pub async fn unlock_by_email<J: Jwt>(
        &self,
        db: &mut Db,
        jwt: &J,
        queue: &RabbitMq,
        user: &v1::user_query_request::User,
    ) -> Result<()> {
        self.validate()?;

        let user = Self::get(db, user)?;
        if user.locked_at.is_none() {
            return Err(Box::new(HttpError(
                StatusCode::INTERNAL_SERVER_ERROR,
                Some(format!("user {} isn't locked!", user.email)),
            )));
        }
        Self::send_email(db, jwt, queue, &self.home, &user, &Action::Unlock).await?;
        Ok(())
    }
    pub async fn confirm_by_email<J: Jwt>(
        &self,
        db: &mut Db,
        jwt: &J,
        queue: &RabbitMq,
        user: &v1::user_query_request::User,
    ) -> Result<()> {
        self.validate()?;

        let user = Self::get(db, user)?;
        if user.confirmed_at.is_some() {
            return Err(Box::new(HttpError(
                StatusCode::INTERNAL_SERVER_ERROR,
                Some(format!("user {} already confirmed!", user.email)),
            )));
        }

        Self::send_email(db, jwt, queue, &self.home, &user, &Action::Confirm).await?;

        Ok(())
    }

    async fn send_email<J: Jwt>(
        db: &mut Db,
        jwt: &J,
        queue: &RabbitMq,
        home: &str,
        user: &User,
        act: &Action,
    ) -> Result<()> {
        let token = jwt.sign(&user.nickname, &act.to_string(), Duration::hours(1))?;

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

        let task = EmailTask {
            subject: I18n::t(
                db,
                &user.lang,
                format!("auth.mailers.user.{}.subject", act),
                &Some(&args),
            ),
            body: I18n::t(
                db,
                &user.lang,
                format!("auth.mailers.user.{}.body", act),
                &Some(&args),
            ),
            content_type: mime::TEXT_HTML_UTF_8.to_string(),
            to: user.address(),
            cc: Vec::new(),
            bcc: Vec::new(),
            attachments: Vec::new(),
        };

        FlatbufferQueue::produce(queue, &task).await?;
        Ok(())
    }

    pub fn get(db: &mut Db, user: &v1::user_query_request::User) -> Result<User> {
        let it = match user {
            v1::user_query_request::User::Email(ref it) => UserDao::by_email(db, it)?,
            v1::user_query_request::User::Nickname(ref it) => UserDao::by_nickname(db, it)?,
        };
        Ok(it)
    }
}

pub async fn new_sign_in_response<P: Jwt>(
    db: &mut Db,
    enforcer: &Mutex<Enforcer>,
    user: &User,
    jwt: &P,
    ttl: Duration,
    provider_type: ProviderType,
    provider_id: i32,
    ip: &str,
) -> Result<v1::UserSignInResponse> {
    let token = {
        let uid = UserSessionDao::create(db, user.id, &provider_type, provider_id, ip, ttl)?;
        jwt.sign(&uid, &Action::SignIn.to_string(), ttl)?
    };

    let name = Subject::to(user);
    let mut enforcer = enforcer.lock().await;

    let mut roles = Vec::new();
    {
        let items = enforcer.get_implicit_roles_for_user(&name, None);
        for it in items.iter() {
            if let Ok(ref it) = it.parse::<Role>() {
                roles.push(it.to_string());
            }
        }
    }
    let permissions = {
        let mut items = Vec::new();
        for it in enforcer
            .get_implicit_permissions_for_user(&name, None)
            .iter()
        {
            let it = RbacPermission::new(it)?;
            items.push(it.into());
        }

        items
    };

    Ok(v1::UserSignInResponse {
        token,
        roles,
        permissions,
        has_google: GoogleUserDao::count_by_user(db, user.id)? > 0,
        has_wechat_mini_program: WechatMiniProgramUserDao::count_by_user(db, user.id)? > 0,
        has_wechat_oauth2: WechatOauth2UserDao::count_by_user(db, user.id)? > 0,
        provider_type: provider_type.to_string(),
        user: Some(user.clone().into()),
    })
}

#[derive(Validate)]
pub struct SignUp {
    #[validate(length(min = 1, max = 31))]
    pub nickname: String,
    #[validate(length(min = 1, max = 63))]
    pub real_name: String,
    #[validate(length(min = 1, max = 127))]
    pub email: String,
    #[validate(length(min = 1, max = 32))]
    pub password: String,
    #[validate(length(min = 1, max = 31))]
    pub timezone: String,
    #[validate(url, length(min = 1, max = 255))]
    pub home: String,
}

impl SignUp {
    pub async fn handle<J: Jwt, P: Password>(
        &mut self,
        ss: &Session,
        db: &mut Db,
        jwt: &J,
        hmac: &P,
        queue: &RabbitMq,
    ) -> Result<()> {
        self.nickname = to_code!(self.nickname);
        self.email = to_code!(self.email);
        self.real_name = self.real_name.trim().to_string();
        self.validate()?;
        let home = self.home.clone();

        let user = db.transaction::<_, Error, _>(move |db| {
            UserDao::sign_up(
                db,
                hmac,
                &self.real_name,
                &self.nickname,
                &self.email,
                &self.password,
                &ss.lang.parse()?,
                &self.timezone.parse()?,
            )?;
            let user = UserDao::by_email(db, &self.email)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(user.id),
                "sign up.",
            )?;
            Ok(user)
        })?;

        ByEmail::send_email(db, jwt, queue, &home, &user, &Action::Confirm).await?;

        Ok(())
    }
}

#[derive(Validate)]
pub struct ByToken {
    #[validate(length(min = 1, max = 255))]
    pub token: String,
}

impl ByToken {
    pub fn unlock_by_token<J: Jwt>(&self, ss: &Session, db: &mut Db, jwt: &J) -> Result<()> {
        self.validate()?;

        let nickname = jwt.verify(&self.token, &Action::Unlock.to_string())?;
        let user = UserDao::by_nickname(db, &nickname)?;
        if user.locked_at.is_none() {
            return Err(Box::new(HttpError(
                StatusCode::INTERNAL_SERVER_ERROR,
                Some(format!("user {} isn't locked!", user.email)),
            )));
        }

        db.transaction::<_, Error, _>(move |db| {
            UserDao::lock(db, user.id, false)?;
            LogDao::add::<String, User>(
                db,
                user.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(user.id),
                "Unlock account.".to_string(),
            )?;
            Ok(())
        })?;

        Ok(())
    }
    pub fn confirm_by_token<J: Jwt>(&self, ss: &Session, db: &mut Db, jwt: &J) -> Result<()> {
        self.validate()?;

        let nickname = jwt.verify(&self.token, &Action::Confirm.to_string())?;
        let user = UserDao::by_nickname(db, &nickname)?;
        if user.confirmed_at.is_some() {
            return Err(Box::new(HttpError(
                StatusCode::INTERNAL_SERVER_ERROR,
                Some(format!("user {} already confirmed!", user.email)),
            )));
        }

        db.transaction::<_, Error, _>(move |db| {
            UserDao::confirm(db, user.id)?;
            LogDao::add::<String, User>(
                db,
                user.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(user.id),
                "Confirm account.".to_string(),
            )?;
            Ok(())
        })?;

        Ok(())
    }
}

#[derive(Validate)]
pub struct ResetPassword {
    #[validate(length(min = 6, max = 32))]
    pub password: String,
    #[validate(length(max = 255))]
    pub token: String,
}

impl ResetPassword {
    pub fn handle<J: Jwt, P: Password>(
        &self,
        ss: &Session,
        db: &mut Db,
        jwt: &J,
        hmac: &P,
    ) -> Result<()> {
        self.validate()?;

        let nickname = jwt.verify(&self.token, &Action::ResetPassword.to_string())?;
        let user = UserDao::by_nickname(db, &nickname)?;

        db.transaction::<_, Error, _>(move |db| {
            UserDao::password(db, hmac, user.id, &self.password)?;
            LogDao::add::<String, User>(
                db,
                user.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(user.id),
                "Reset password.".to_string(),
            )?;
            Ok(())
        })?;

        Ok(())
    }
}

#[derive(Validate)]
pub struct RefreshToken {
    #[validate(range(min = 5, max = 604800))]
    pub ttl: i64,
}

impl RefreshToken {
    pub async fn handle<J: Jwt>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        enf: &Mutex<Enforcer>,
        jwt: &J,
    ) -> Result<v1::UserSignInResponse> {
        self.validate()?;

        let (user, _, (provider_type, provider_id)) = ss.current_user(db, ch, jwt)?;

        let it = new_sign_in_response(
            db,
            enf,
            &user,
            jwt,
            Duration::seconds(self.ttl),
            provider_type,
            provider_id,
            &ss.client_ip,
        )
        .await?;
        Ok(it)
    }
}

pub fn new_logs_response<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    jwt: &J,
    pager: &v1::Pager,
) -> Result<v1::UserLogsResponse> {
    let (user, _, _) = ss.current_user(db, ch, jwt)?;

    let total = LogDao::count(db, user.id)?;
    let mut items = Vec::new();
    for it in LogDao::all(db, user.id, pager.offset(total), pager.size())? {
        items.push(it.into());
    }

    Ok(v1::UserLogsResponse {
        items,
        pagination: Some(v1::Pagination::new(pager, total)),
    })
}

pub fn sign_out<J: Jwt>(ss: &Session, db: &mut Db, ch: &mut Cache, jwt: &J) -> Result<()> {
    let (user, _, _) = ss.current_user(db, ch, jwt)?;
    LogDao::add::<_, User>(
        db,
        user.id,
        v1::user_logs_response::item::Level::Info,
        &ss.client_ip,
        Some(user.id),
        "Sign out.",
    )?;
    Ok(())
}

#[derive(Validate)]
pub struct UpdateProfile {
    #[validate(length(min = 2, max = 31))]
    pub real_name: String,
    #[validate(url, length(max = 127))]
    pub avatar: String,
    #[validate(length(min = 2, max = 15))]
    pub lang: String,
    #[validate(length(min = 2, max = 32))]
    pub timezone: String,
}

impl UpdateProfile {
    pub fn handle<J: Jwt>(&self, ss: &Session, db: &mut Db, ch: &mut Cache, jwt: &J) -> Result<()> {
        self.validate()?;

        let (user, _, _) = ss.current_user(db, ch, jwt)?;

        db.transaction::<_, Error, _>(move |db| {
            UserDao::set_profile(
                db,
                user.id,
                &self.real_name,
                &self.avatar,
                &self.lang.parse()?,
                &self.timezone.parse()?,
            )?;
            LogDao::add::<String, User>(
                db,
                user.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(user.id),
                "Update profile.".to_string(),
            )?;
            Ok(())
        })?;
        Ok(())
    }
}

#[derive(Validate)]
pub struct ChangePassword {
    #[validate(length(min = 1))]
    pub current_password: String,
    #[validate(length(min = 6, max = 32))]
    pub new_password: String,
}

impl ChangePassword {
    pub fn handle<J: Jwt, P: Password>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        jwt: &J,
        hmac: &P,
    ) -> Result<()> {
        self.validate()?;

        let (user, _, _) = ss.current_user(db, ch, jwt)?;

        user.auth(hmac, &self.current_password)?;
        db.transaction::<_, Error, _>(move |db| {
            UserDao::password(db, hmac, user.id, &self.new_password)?;
            LogDao::add::<String, User>(
                db,
                user.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(user.id),
                "Change password.".to_string(),
            )?;
            Ok(())
        })?;

        Ok(())
    }
}

pub async fn new_users_response<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    pager: &v1::Pager,
) -> Result<v1::UserIndexResponse> {
    {
        let (user, _, _) = ss.current_user(db, ch, jwt)?;
        user.is_administrator(enf).await?;
    }

    let total = UserDao::count(db)?;
    let mut items = Vec::new();
    for it in UserDao::all(db, pager.offset(total), pager.size())? {
        items.push(it.into());
    }
    Ok(v1::UserIndexResponse {
        items,
        pagination: Some(v1::Pagination::new(pager, total)),
    })
}

pub async fn show_user<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    user: i32,
) -> Result<v1::user_index_response::Item> {
    {
        let (user, _, _) = ss.current_user(db, ch, jwt)?;
        user.is_administrator(enf).await?;
    }

    let it = UserDao::by_id(db, user)?;
    Ok(it.into())
}

pub async fn enable<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    id: i32,
) -> Result<()> {
    let (user, _, _) = ss.current_user(db, ch, jwt)?;
    user.is_administrator(enf).await?;

    let it = UserDao::by_id(db, id)?;
    if it.is_root(enf).await.is_ok() {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    db.transaction::<_, Error, _>(move |db| {
        UserDao::enable(db, id, true)?;
        LogDao::add::<_, User>(
            db,
            it.id,
            v1::user_logs_response::item::Level::Info,
            &ss.client_ip,
            Some(it.id),
            &format!("enable by {}", user),
        )?;
        Ok(())
    })?;
    Ok(())
}

pub async fn disable<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    id: i32,
) -> Result<()> {
    let (user, _, _) = ss.current_user(db, ch, jwt)?;
    user.is_administrator(enf).await?;

    let it = UserDao::by_id(db, id)?;
    if it.is_root(enf).await.is_ok() {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    db.transaction::<_, Error, _>(move |db| {
        UserDao::enable(db, id, false)?;
        LogDao::add::<_, User>(
            db,
            it.id,
            v1::user_logs_response::item::Level::Info,
            &ss.client_ip,
            Some(it.id),
            &format!("disable by {}", user),
        )?;
        Ok(())
    })?;
    Ok(())
}

pub async fn lock<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    id: i32,
) -> Result<()> {
    let (user, _, _) = ss.current_user(db, ch, jwt)?;
    user.is_administrator(enf).await?;

    let it = UserDao::by_id(db, id)?;
    if it.is_root(enf).await.is_ok() {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    db.transaction::<_, Error, _>(move |db| {
        UserDao::lock(db, id, true)?;
        LogDao::add::<_, User>(
            db,
            it.id,
            v1::user_logs_response::item::Level::Info,
            &ss.client_ip,
            Some(it.id),
            &format!("lock by {}", user),
        )?;
        Ok(())
    })?;
    Ok(())
}

pub async fn unlock<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    id: i32,
) -> Result<()> {
    let (user, _, _) = ss.current_user(db, ch, jwt)?;
    user.is_administrator(enf).await?;

    let it = UserDao::by_id(db, id)?;
    if it.is_root(enf).await.is_ok() {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    db.transaction::<_, Error, _>(move |db| {
        UserDao::lock(db, id, false)?;
        LogDao::add::<_, User>(
            db,
            it.id,
            v1::user_logs_response::item::Level::Info,
            &ss.client_ip,
            Some(it.id),
            &format!("unlock by {}", user),
        )?;
        Ok(())
    })?;
    Ok(())
}

pub async fn confirm<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    id: i32,
) -> Result<()> {
    let (user, _, _) = ss.current_user(db, ch, jwt)?;
    user.is_administrator(enf).await?;

    let it = UserDao::by_id(db, id)?;
    if it.is_root(enf).await.is_ok() {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    db.transaction::<_, Error, _>(move |db| {
        UserDao::confirm(db, id)?;
        LogDao::add::<_, User>(
            db,
            it.id,
            v1::user_logs_response::item::Level::Info,
            &ss.client_ip,
            Some(it.id),
            &format!("confirmed by {}", user),
        )?;
        Ok(())
    })?;
    Ok(())
}

#[derive(Validate)]
pub struct SetPassword {
    #[validate(range(min = 1))]
    pub user: i32,
    #[validate(length(min = 6, max = 32))]
    pub password: String,
}
impl SetPassword {
    pub async fn handle<J: Jwt, P: Password>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        enf: &Mutex<Enforcer>,
        jwt: &J,
        hmac: &P,
    ) -> Result<()> {
        let (user, _, _) = ss.current_user(db, ch, jwt)?;

        user.is_administrator(enf).await?;

        let it = UserDao::by_id(db, self.user)?;
        if it.is_root(enf).await.is_ok() {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }

        db.transaction::<_, Error, _>(move |db| {
            UserDao::password(db, hmac, self.user, &self.password)?;
            LogDao::add::<_, User>(
                db,
                it.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(it.id),
                &format!("reset password by {}", user),
            )?;
            Ok(())
        })?;
        Ok(())
    }
}

pub async fn delete<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    id: i32,
) -> Result<()> {
    let (user, _, _) = ss.current_user(db, ch, jwt)?;

    user.is_administrator(enf).await?;

    let it = UserDao::by_id(db, id)?;
    if it.is_root(enf).await.is_ok() {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    db.transaction::<_, Error, _>(move |db| {
        UserDao::delete(db, id)?;
        LogDao::add::<_, User>(
            db,
            it.id,
            v1::user_logs_response::item::Level::Info,
            &ss.client_ip,
            Some(it.id),
            &format!("delete by {}", user),
        )?;
        Ok(())
    })?;
    Ok(())
}
