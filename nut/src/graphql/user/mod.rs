pub mod wechat;

use std::ops::{Deref, DerefMut};

use casbin::{Enforcer, RbacApi};
use chrono::Duration;
use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use palm::{
    jwt::Jwt,
    queue::amqp::{Flatbuffer as FlatbufferQueue, RabbitMq},
    rbac::{Permission as RbacPermission, Role, ToSubject},
    tasks::email::Task as EmailTask,
    to_code, Error, HttpError, Result,
};
use tokio::sync::Mutex;
use validator::Validate;

use super::super::{
    i18n::I18n,
    models::{
        google::user::Dao as GoogleUserDao,
        log::{Dao as LogDao, Level as LogLevel},
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
