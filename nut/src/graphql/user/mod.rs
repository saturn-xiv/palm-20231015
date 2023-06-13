pub mod wechat;

use std::ops::{Deref, DerefMut};

use casbin::{Enforcer, RbacApi};
use chrono::{Duration, NaiveDateTime};
use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use palm::{
    jwt::Jwt,
    queue::amqp::{Flatbuffer as FlatbufferQueue, RabbitMq},
    rbac::{Permission as RbacPermission, Role, ToSubject},
    tasks::email::Task as EmailTask,
    to_code, Error, HttpError, Pager, Pagination, Result,
};
use tokio::sync::Mutex;
use validator::Validate;

use super::super::{
    i18n::I18n,
    models::{
        google::user::Dao as GoogleUserDao,
        log::{Dao as LogDao, Item as Log, Level as LogLevel},
        user::{
            session::{Dao as UserSessionDao, ProviderType},
            Action, Dao as UserDao, Item as User,
        },
        wechat::{
            mini_program_user::Dao as WechatMiniProgramUserDao,
            oauth2_user::Dao as WechatOauth2UserDao,
        },
    },
    orm::postgresql::Connection as Db,
};
use super::{Context, CurrentUserAdapter};

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "UserSignInRequest", description = "User SignIn form")]
pub struct SignInRequest {
    #[validate(length(min = 1, max = 127))]
    pub user: String,
    #[validate(length(min = 1, max = 32))]
    pub password: String,
    #[validate(range(min = 5, max = 604800))]
    pub ttl: i32,
}

impl SignInRequest {
    pub async fn handle(&self, context: &Context) -> Result<SignInResponse> {
        self.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let user = QueryRequest::get(db, &self.user)?;
        let enforcer = context.enforcer.deref();
        let loquat = context.loquat.deref();
        user.auth(loquat, &self.password)?;
        user.available()?;

        db.transaction::<_, Error, _>(move |db| {
            UserDao::sign_in(db, user.id, &context.session.client_ip)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                &LogLevel::Info,
                &context.session.client_ip,
                Some(user.id),
                "sign in success",
            )?;
            Ok(())
        })?;

        SignInResponse::new(
            db,
            enforcer,
            &user,
            loquat,
            Duration::seconds(self.ttl as i64),
            ProviderType::Email,
            &context.session.client_ip,
        )
        .await
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "UserDetail", description = "User details")]
pub struct Detail {
    pub real_name: String,
    pub avatar: String,
    pub r#type: String,
}

#[derive(GraphQLObject)]
pub struct Permission {
    pub resource_type: String,
    pub resource_id: Option<i32>,
    pub operation: String,
}

#[derive(GraphQLObject)]
#[graphql(name = "UserSignInResponse", description = "User sign-in response")]
pub struct SignInResponse {
    pub token: String,
    pub user: Detail,
    pub roles: Vec<String>,
    pub permissions: Vec<Permission>,
    pub has_google: bool,
    pub has_wechat_mini_program: bool,
    pub has_wechat_oauth2: bool,
}

impl SignInResponse {
    pub async fn new<P: Jwt>(
        db: &mut Db,
        enforcer: &Mutex<Enforcer>,
        user: &User,
        jwt: &P,
        ttl: Duration,
        provider_type: ProviderType,
        ip: &str,
    ) -> Result<Self> {
        let token = {
            let uid = UserSessionDao::create(db, user.id, &provider_type, ip, ttl)?;
            jwt.sign(&uid, &Action::SignIn.to_string(), ttl)?
        };
        let name = user.to_subject();
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
                if let Some(ref resource) = it.resource {
                    items.push(Permission {
                        operation: it.operation.clone(),
                        resource_type: resource.r#type.clone(),
                        resource_id: resource.id,
                    });
                }
            }

            items
        };

        Ok(Self {
            token,
            roles,
            permissions,
            user: Detail {
                real_name: user.real_name.clone(),
                avatar: user.avatar.clone(),
                r#type: provider_type.to_string(),
            },
            has_google: GoogleUserDao::count_by_user(db, user.id)? > 0,
            has_wechat_mini_program: WechatMiniProgramUserDao::count_by_user(db, user.id)? > 0,
            has_wechat_oauth2: WechatOauth2UserDao::count_by_user(db, user.id)? > 0,
        })
    }
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "UserSignUpRequest", description = "User SignUp form")]
pub struct SignUpRequest {
    #[validate(length(min = 1, max = 31))]
    pub nickname: String,
    #[validate(length(min = 1, max = 63))]
    pub real_name: String,
    #[validate(length(min = 1, max = 127))]
    pub email: String,
    #[validate(length(min = 1, max = 32))]
    pub password: String,
    #[validate(length(min = 1, max = 31))]
    pub time_zone: String,
    #[validate(url, length(min = 1, max = 255))]
    pub home: String,
}

impl SignUpRequest {
    pub async fn handle(&self, context: &Context) -> Result<()> {
        self.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let hmac = context.loquat.deref();

        let nickname = to_code!(self.nickname);
        let email = to_code!(self.email);
        let real_name = self.real_name.trim();

        let user = db.transaction::<_, Error, _>(move |db| {
            UserDao::sign_up(
                db,
                hmac,
                real_name,
                &nickname,
                &email,
                &self.password,
                &context.session.lang.parse()?,
                &self.time_zone.parse()?,
            )?;
            let user = UserDao::by_email(db, &email)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                &LogLevel::Info,
                &context.session.client_ip,
                Some(user.id),
                "sign up.",
            )?;
            Ok(user)
        })?;

        let jwt = context.loquat.deref();
        let queue = context.queue.deref();
        QueryRequest::send_email(db, jwt, queue, &self.home, &user, &Action::Confirm).await?;
        Ok(())
    }
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(
    name = "UserQueryRequest",
    description = "Query user by nickname/email"
)]
pub struct QueryRequest {
    #[validate(length(min = 1, max = 127))]
    pub user: String,
    #[validate(url, length(min = 1, max = 255))]
    pub home: String,
}

impl QueryRequest {
    pub async fn forgot_password(&self, context: &Context) -> Result<()> {
        self.validate()?;
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let user = Self::get(db, &self.user)?;
        let jwt = context.loquat.deref();
        let queue = context.queue.deref();
        Self::send_email(db, jwt, queue, &self.home, &user, &Action::ResetPassword).await?;
        Ok(())
    }
    pub async fn unlock_by_email(&self, context: &Context) -> Result<()> {
        self.validate()?;
        let mut db = context.db.get()?;
        let db = db.deref_mut();

        let user = Self::get(db, &self.user)?;
        if user.locked_at.is_none() {
            return Err(Box::new(HttpError(
                StatusCode::INTERNAL_SERVER_ERROR,
                Some(format!("user {} isn't locked!", user.email)),
            )));
        }
        let jwt = context.loquat.deref();
        let queue = context.queue.deref();
        Self::send_email(db, jwt, queue, &self.home, &user, &Action::Unlock).await?;
        Ok(())
    }
    pub async fn confirm_by_email(&self, context: &Context) -> Result<()> {
        self.validate()?;
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let user = Self::get(db, &self.user)?;
        if user.confirmed_at.is_some() {
            return Err(Box::new(HttpError(
                StatusCode::INTERNAL_SERVER_ERROR,
                Some(format!("user {} already confirmed!", user.email)),
            )));
        }
        let jwt = context.loquat.deref();
        let queue = context.queue.deref();
        Self::send_email(db, jwt, queue, &self.home, &user, &Action::Confirm).await?;

        Ok(())
    }
    fn get(db: &mut Db, user: &str) -> Result<User> {
        if let Ok(it) = UserDao::by_email(db, user) {
            return Ok(it);
        }
        let it = UserDao::by_nickname(db, user)?;
        Ok(it)
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
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "UserTokenRequest", description = "Query user by token")]
pub struct TokenRequest {
    #[validate(length(min = 1, max = 255))]
    pub token: String,
    #[validate(url, length(min = 1, max = 255))]
    pub home: String,
}

impl TokenRequest {
    pub fn unlock_by_token(&self, context: &Context) -> Result<()> {
        self.validate()?;
        let mut db = context.db.get()?;
        let db = db.deref_mut();

        let nickname = context
            .loquat
            .verify(&self.token, &Action::Unlock.to_string())?;
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
                &LogLevel::Info,
                &context.session.client_ip,
                Some(user.id),
                "Unlock account.".to_string(),
            )?;
            Ok(())
        })?;

        Ok(())
    }
    pub fn confirm_by_token(&self, context: &Context) -> Result<()> {
        self.validate()?;
        let mut db = context.db.get()?;
        let db = db.deref_mut();

        let nickname = context
            .loquat
            .verify(&self.token, &Action::Confirm.to_string())?;
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
                &LogLevel::Info,
                &context.session.client_ip,
                Some(user.id),
                "Confirm account.".to_string(),
            )?;
            Ok(())
        })?;

        Ok(())
    }
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "UserResetPasswordRequest")]
pub struct ResetPasswordRequest {
    #[validate(length(min = 6, max = 32))]
    pub password: String,
    #[validate(length(max = 255))]
    pub token: String,
}

impl ResetPasswordRequest {
    pub fn handle(&self, context: &Context) -> Result<()> {
        self.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();

        let nickname = context
            .loquat
            .verify(&self.token, &Action::ResetPassword.to_string())?;
        let user = UserDao::by_nickname(db, &nickname)?;

        let hmac = context.loquat.deref();
        db.transaction::<_, Error, _>(move |db| {
            UserDao::password(db, hmac, user.id, &self.password)?;
            LogDao::add::<String, User>(
                db,
                user.id,
                &LogLevel::Info,
                &context.session.client_ip,
                Some(user.id),
                "Reset password.".to_string(),
            )?;
            Ok(())
        })?;

        Ok(())
    }
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "UserRefreshTokenRequest")]
pub struct RefreshTokenRequest {
    #[validate(range(min = 5, max = 604800))]
    pub ttl: i32,
}

impl RefreshTokenRequest {
    pub async fn handle(&self, context: &Context) -> Result<SignInResponse> {
        self.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let jwt = context.loquat.deref();
        let enf = context.enforcer.deref();
        let (user, provider_type) = context.session.current_user(db, ch, jwt)?;

        let it = SignInResponse::new(
            db,
            enf,
            &user,
            jwt,
            Duration::seconds(self.ttl as i64),
            provider_type,
            &context.session.client_ip,
        )
        .await?;
        Ok(it)
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "UserLogsResponse")]
pub struct LogsResponse {
    items: Vec<LogItem>,
    pagination: Pagination,
}

#[derive(GraphQLObject)]
#[graphql(name = "LogItem")]
pub struct LogItem {
    pub id: i32,
    pub level: String,
    pub ip: String,
    pub resource_type: String,
    pub resource_id: Option<i32>,
    pub message: String,
    pub created_at: NaiveDateTime,
}

impl From<Log> for LogItem {
    fn from(x: Log) -> Self {
        Self {
            id: x.id,
            level: x.level,
            ip: x.ip,
            resource_type: x.resource_type,
            resource_id: x.resource_id,
            message: x.message,
            created_at: x.created_at,
        }
    }
}

impl LogItem {
    pub fn new(x: &Log) -> Self {
        Self {
            id: x.id,
            level: x.level.clone(),
            ip: x.ip.clone(),
            resource_type: x.resource_type.clone(),
            resource_id: x.resource_id,
            message: x.message.clone(),
            created_at: x.created_at,
        }
    }
}

impl LogsResponse {
    pub fn new(context: &Context, pager: &Pager) -> Result<Self> {
        pager.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let jwt = context.loquat.deref();
        let (user, _) = context.session.current_user(db, ch, jwt)?;

        let total = LogDao::count(db, user.id)?;
        let items = LogDao::all(db, user.id, pager.offset(total), pager.size() as i64)?;

        Ok(Self {
            items: items.iter().map(LogItem::new).collect::<_>(),
            pagination: Pagination::new(pager, total),
        })
    }
}

pub fn sign_out(context: &Context) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let jwt = context.loquat.deref();
    let (user, _) = context.session.current_user(db, ch, jwt)?;
    LogDao::add::<_, User>(
        db,
        user.id,
        &LogLevel::Info,
        &context.session.client_ip,
        Some(user.id),
        "Sign out.",
    )?;
    Ok(())
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "UserUpdateProfileRequest")]
pub struct UpdateProfileRequest {
    #[validate(length(min = 2, max = 31))]
    pub real_name: String,
    #[validate(url, length(max = 127))]
    pub avatar: String,
    #[validate(length(min = 2, max = 15))]
    pub lang: String,
    #[validate(length(min = 2, max = 32))]
    pub time_zone: String,
}

impl UpdateProfileRequest {
    pub fn handle(&self, context: &Context) -> Result<()> {
        self.validate()?;
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let jwt = context.loquat.deref();
        let (user, _) = context.session.current_user(db, ch, jwt)?;

        db.transaction::<_, Error, _>(move |db| {
            UserDao::set_profile(
                db,
                user.id,
                &self.real_name,
                &self.avatar,
                &self.lang.parse()?,
                &self.time_zone.parse()?,
            )?;
            LogDao::add::<String, User>(
                db,
                user.id,
                &LogLevel::Info,
                &context.session.client_ip,
                Some(user.id),
                "Update profile.".to_string(),
            )?;
            Ok(())
        })?;
        Ok(())
    }
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "UserChangePasswordRequest")]
pub struct ChangePasswordRequest {
    #[validate(length(min = 1))]
    pub current_password: String,
    #[validate(length(min = 6, max = 32))]
    pub new_password: String,
}

impl ChangePasswordRequest {
    pub fn handle(&self, context: &Context) -> Result<()> {
        self.validate()?;
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };

        let hmac = context.loquat.deref();
        user.auth(hmac, &self.current_password)?;
        db.transaction::<_, Error, _>(move |db| {
            UserDao::password(db, hmac, user.id, &self.new_password)?;
            LogDao::add::<String, User>(
                db,
                user.id,
                &LogLevel::Info,
                &context.session.client_ip,
                Some(user.id),
                "Change password.".to_string(),
            )?;
            Ok(())
        })?;

        Ok(())
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "IndexUserResponse")]
pub struct IndexUserResponse {
    pub items: Vec<UserItem>,
    pub pagination: Pagination,
}

impl IndexUserResponse {
    pub async fn new(context: &Context, pager: &Pager) -> Result<Self> {
        pager.validate()?;

        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();
        if !user.is_administrator(enf).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }

        let total = UserDao::count(db)?;
        let items = UserDao::all(db, pager.offset(total), pager.size() as i64)?;
        Ok(Self {
            items: items.iter().map(UserItem::new).collect(),
            pagination: Pagination::new(pager, total),
        })
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "UserItem")]
pub struct UserItem {
    pub id: i32,
    pub real_name: String,
    pub nickname: String,
    pub email: String,
    pub avatar: String,
    pub lang: String,
    pub time_zone: String,
    pub status: String,
    pub sign_in_count: i32,
    pub current_sign_in_at: Option<NaiveDateTime>,
    pub current_sign_in_ip: Option<String>,
    pub last_sign_in_at: Option<NaiveDateTime>,
    pub last_sign_in_ip: Option<String>,
    pub confirmed_at: Option<NaiveDateTime>,
    pub locked_at: Option<NaiveDateTime>,
    pub deleted_at: Option<NaiveDateTime>,
    pub updated_at: NaiveDateTime,
}

impl UserItem {
    pub async fn show(context: &Context, id: i32) -> Result<Self> {
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();
        if !user.is_administrator(enf).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }

        let user = UserDao::by_id(db, id)?;
        Ok(Self::new(&user))
    }

    fn new(x: &User) -> Self {
        Self {
            id: x.id,
            real_name: x.real_name.clone(),
            nickname: x.nickname.clone(),
            email: x.email.clone(),
            avatar: x.avatar.clone(),
            lang: x.lang.clone(),
            time_zone: x.time_zone.clone(),
            status: x.status.clone(),
            sign_in_count: x.sign_in_count,
            current_sign_in_at: x.current_sign_in_at,
            current_sign_in_ip: x.current_sign_in_ip.clone(),
            last_sign_in_at: x.last_sign_in_at,
            last_sign_in_ip: x.last_sign_in_ip.clone(),
            confirmed_at: x.confirmed_at,
            locked_at: x.locked_at,
            deleted_at: x.deleted_at,
            updated_at: x.updated_at,
        }
    }
}

pub async fn enable(context: &Context, id: i32) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !user.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let it = UserDao::by_id(db, id)?;
    if it.is_root(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    db.transaction::<_, Error, _>(move |db| {
        UserDao::enable(db, id, true)?;
        LogDao::add::<_, User>(
            db,
            it.id,
            &LogLevel::Info,
            &context.session.client_ip,
            Some(it.id),
            &format!("enable by {}", user),
        )?;
        Ok(())
    })?;
    Ok(())
}

pub async fn disable(context: &Context, id: i32) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !user.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let it = UserDao::by_id(db, id)?;
    if it.is_root(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    db.transaction::<_, Error, _>(move |db| {
        UserDao::enable(db, id, false)?;
        LogDao::add::<_, User>(
            db,
            it.id,
            &LogLevel::Info,
            &context.session.client_ip,
            Some(it.id),
            &format!("disable by {}", user),
        )?;
        Ok(())
    })?;
    Ok(())
}

pub async fn lock(context: &Context, id: i32) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !user.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let it = UserDao::by_id(db, id)?;
    if it.is_root(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    db.transaction::<_, Error, _>(move |db| {
        UserDao::lock(db, id, true)?;
        LogDao::add::<_, User>(
            db,
            it.id,
            &LogLevel::Info,
            &context.session.client_ip,
            Some(it.id),
            &format!("lock by {}", user),
        )?;
        Ok(())
    })?;
    Ok(())
}

pub async fn unlock(context: &Context, id: i32) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !user.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let it = UserDao::by_id(db, id)?;
    if it.is_root(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    db.transaction::<_, Error, _>(move |db| {
        UserDao::lock(db, id, false)?;
        LogDao::add::<_, User>(
            db,
            it.id,
            &LogLevel::Info,
            &context.session.client_ip,
            Some(it.id),
            &format!("unlock by {}", user),
        )?;
        Ok(())
    })?;
    Ok(())
}

pub async fn confirm(context: &Context, id: i32) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !user.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let it = UserDao::by_id(db, id)?;
    if it.is_root(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    db.transaction::<_, Error, _>(move |db| {
        UserDao::confirm(db, id)?;
        LogDao::add::<_, User>(
            db,
            it.id,
            &LogLevel::Info,
            &context.session.client_ip,
            Some(it.id),
            &format!("confirmed by {}", user),
        )?;
        Ok(())
    })?;
    Ok(())
}

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "UserSetPasswordRequest")]
pub struct SetPasswordRequest {
    #[validate(range(min = 1))]
    pub id: i32,
    #[validate(length(min = 6, max = 32))]
    pub password: String,
}
impl SetPasswordRequest {
    pub async fn handle(&self, context: &Context) -> Result<()> {
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();
        if !user.is_administrator(enf).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }

        let it = UserDao::by_id(db, self.id)?;
        if it.is_root(enf).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }
        let hmac = context.loquat.deref();
        db.transaction::<_, Error, _>(move |db| {
            UserDao::password(db, hmac, self.id, &self.password)?;
            LogDao::add::<_, User>(
                db,
                it.id,
                &LogLevel::Info,
                &context.session.client_ip,
                Some(it.id),
                &format!("reset password by {}", user),
            )?;
            Ok(())
        })?;
        Ok(())
    }
}

pub async fn delete(context: &Context, id: i32) -> Result<()> {
    let mut db = context.db.get()?;
    let db = db.deref_mut();
    let mut ch = context.cache.get()?;
    let ch = ch.deref_mut();
    let (user, _) = {
        let jwt = context.loquat.deref();
        context.session.current_user(db, ch, jwt)?
    };
    let enf = context.enforcer.deref();
    if !user.is_administrator(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }

    let it = UserDao::by_id(db, id)?;
    if it.is_root(enf).await {
        return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
    }
    db.transaction::<_, Error, _>(move |db| {
        UserDao::delete(db, id)?;
        LogDao::add::<_, User>(
            db,
            it.id,
            &LogLevel::Info,
            &context.session.client_ip,
            Some(it.id),
            &format!("delete by {}", user),
        )?;
        Ok(())
    })?;
    Ok(())
}
