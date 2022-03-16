use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::thread;

use chrono::{Duration, NaiveDateTime};
use diesel::connection::Connection as DieselConnection;
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use uuid::Uuid;
use validator::Validate;

use super::super::super::super::{
    i18n::I18n, jwt::Jwt, orm::Connection as Db, Error, HttpError, Result,
};
use super::super::super::layout::Layout;
use super::super::{
    models::{
        log::{Dao as LogDao, Level},
        role::{Dao as RoleDao, Item as RoleItem},
        user::{Action, Dao as UserDao, Item as UserItem, Token},
        Resource,
    },
    tasks::email::Task as EmailTask,
};
use super::{Context, Pager, Pagination};

#[derive(GraphQLObject)]
pub struct Author {
    pub real_name: String,
    pub nick_name: String,
    pub logo: String,
}

impl Author {
    pub fn new(db: &Db, user: Uuid) -> Result<Self> {
        let it = UserDao::by_id(db, user)?;
        Ok(Self {
            real_name: it.real_name.clone(),
            nick_name: it.nick_name.clone(),
            logo: it.logo,
        })
    }
}

pub fn refresh_token(ctx: &Context) -> Result<String> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let jwt = ctx.jwt.deref();
    let user = ctx.token.current_user(db, jwt)?;

    let token = UserSignInRequest::token(jwt, &user)?;
    Ok(token)
}

#[derive(Validate)]
pub struct UserSignInRequest {
    #[validate(length(min = 1))]
    pub id: String,
    #[validate(length(min = 1))]
    pub password: String,
}

impl UserSignInRequest {
    pub fn handle(&self, ctx: &Context) -> Result<UserSignInResponse> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let user = if let Ok(it) = UserDao::by_email(db, &self.id) {
            it
        } else {
            UserDao::by_nick_name(db, &self.id)?
        };
        user.available()?;

        let ip = ctx.peer.clone();
        db.transaction::<_, Error, _>(move || {
            UserDao::sign_in(db, user.id, &ip)?;
            LogDao::add(
                db,
                user.id,
                &Level::Info,
                &ip,
                &Resource {
                    type_: type_name::<UserItem>().to_string(),
                    id: user.id,
                },
                "sign in success",
            )?;
            Ok(())
        })?;

        let jwt = ctx.jwt.deref();
        let token = Self::token(jwt, &user)?;
        let aes = ctx.aes.deref();
        let mut ch = ctx.cache.get()?;
        let ch = ch.deref_mut();
        let lang = user.lang.clone();
        let layout = Layout::new(&Some(user), db, ch, aes, &lang)?;

        Ok(UserSignInResponse { token, layout })
    }
    fn token(jwt: &Jwt, user: &UserItem) -> Result<String> {
        let (nbf, exp) = Jwt::timestamps(Duration::weeks(1));
        let token = Token {
            aud: user.id,
            act: Action::SignIn,
            exp,
            nbf,
        };
        let token = jwt.sum(None, &token)?;
        Ok(token)
    }
}

#[derive(GraphQLObject)]
pub struct UserSignInResponse {
    pub token: String,
    pub layout: Layout,
}

#[derive(Validate, GraphQLInputObject)]
pub struct UserSignUpRequest {
    #[validate(length(min = 2))]
    pub nick_name: String,
    #[validate(length(min = 2))]
    pub real_name: String,
    #[validate(email, length(min = 1))]
    pub email: String,
    #[validate(length(min = 6, max = 32))]
    pub password: String,
    #[validate(length(min = 1))]
    pub lang: String,
    #[validate(length(min = 1))]
    pub time_zone: String,
    #[validate(url, length(min = 1))]
    pub home: String,
}

impl UserSignUpRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let enc = ctx.hmac.deref();

        let ip = ctx.peer.clone();
        db.transaction::<_, Error, _>(move || {
            UserDao::sign_up(
                db,
                enc,
                &self.real_name,
                &self.nick_name,
                &self.email,
                &self.password,
                &self.lang.parse()?,
                &self.time_zone.parse()?,
            )?;
            let user = UserDao::by_email(db, &self.email)?;
            LogDao::add(
                db,
                user.id,
                &Level::Info,
                &ip,
                &Resource {
                    type_: type_name::<UserItem>().to_string(),
                    id: user.id,
                },
                "sign up.",
            )?;
            Ok(())
        })?;

        let user = UserDao::by_email(db, &self.email)?;
        send_email(ctx, &self.home, &user, &Action::Confirm)?;
        Ok(())
    }

    pub fn install_administrator(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let c = UserDao::count(db)?;
        if c > 0 {
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some("db isn't empty".to_string()),
            )));
        }
        let enc = ctx.hmac.deref();

        let ip = ctx.peer.clone();
        db.transaction::<_, Error, _>(move || {
            UserDao::sign_up(
                db,
                enc,
                &self.real_name,
                &self.nick_name,
                &self.email,
                &self.password,
                &self.lang.parse()?,
                &self.time_zone.parse()?,
            )?;
            let user = UserDao::by_email(db, &self.email)?;
            LogDao::add(
                db,
                user.id,
                &Level::Info,
                &ip,
                &Resource {
                    type_: type_name::<UserItem>().to_string(),
                    id: user.id,
                },
                "sign up.",
            )?;
            UserDao::confirm(db, user.id)?;
            LogDao::add(
                db,
                user.id,
                &Level::Info,
                &ip,
                &Resource {
                    type_: type_name::<UserItem>().to_string(),
                    id: user.id,
                },
                "confirmed.",
            )?;
            for role in [RoleItem::ADMINISTRATOR, RoleItem::ROOT] {
                RoleDao::create(db, None, role)?;
                let role = RoleDao::by_code(db, role)?;
                let (nbf, exp) = RoleItem::timestamps(Duration::weeks(1 << 10));
                RoleDao::associate(db, role.id, type_name::<UserItem>(), user.id, &nbf, &exp)?;
                LogDao::add(
                    db,
                    user.id,
                    &Level::Info,
                    &ip,
                    &Resource {
                        type_: type_name::<UserItem>().to_string(),
                        id: user.id,
                    },
                    &format!("apply {} role.", role.code),
                )?;
            }

            Ok(())
        })?;

        Ok(())
    }
}

#[derive(Validate)]
pub struct UserConfirmByEmailRequest {
    #[validate(email, length(min = 1))]
    pub email: String,
    #[validate(url, length(min = 1))]
    pub home: String,
}

impl UserConfirmByEmailRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let user = UserDao::by_email(db, &self.email)?;
        if user.confirmed_at.is_some() {
            return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
        }
        send_email(ctx, &self.home, &user, &Action::Confirm)?;
        Ok(())
    }
}

#[derive(Validate)]
pub struct UserUnlockByEmailRequest {
    #[validate(email, length(min = 1))]
    pub email: String,
    #[validate(url, length(min = 1))]
    pub home: String,
}

impl UserUnlockByEmailRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let user = UserDao::by_email(db, &self.email)?;
        if user.locked_at.is_none() {
            return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
        }
        send_email(ctx, &self.home, &user, &Action::Unlock)?;
        Ok(())
    }
}

#[derive(Validate)]
pub struct UserForgotPasswordRequest {
    #[validate(email, length(min = 1))]
    pub email: String,
    #[validate(url, length(min = 1))]
    pub home: String,
}

impl UserForgotPasswordRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let user = UserDao::by_email(db, &self.email)?;
        user.available()?;
        send_email(ctx, &self.home, &user, &Action::ResetPassword)?;
        Ok(())
    }
}

pub fn confirm_by_token(ctx: &Context, token: &str) -> Result<()> {
    let token = ctx.jwt.parse::<Token>(token)?;
    let token = token.claims;
    if token.act != Action::Unlock {
        return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
    }
    let db = ctx.db.get()?;
    let db = db.deref();
    let user = UserDao::by_id(db, token.aud)?;
    if user.locked_at.is_none() {
        return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
    }
    {
        let ip = ctx.peer.clone();
        let user_id = user.id;
        db.transaction::<_, Error, _>(move || {
            UserDao::confirm(db, user_id)?;
            LogDao::add(
                db,
                user_id,
                &Level::Info,
                &ip,
                &Resource {
                    type_: type_name::<UserItem>().to_string(),
                    id: user.id,
                },
                "Confirm account.",
            )?;
            Ok(())
        })?;
    }
    Ok(())
}

pub fn unlock_by_token(ctx: &Context, token: &str) -> Result<()> {
    let token = ctx.jwt.parse::<Token>(token)?;
    let token = token.claims;
    if token.act != Action::Unlock {
        return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
    }
    let db = ctx.db.get()?;
    let db = db.deref();
    let user = UserDao::by_id(db, token.aud)?;
    if user.locked_at.is_none() {
        return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
    }
    {
        let ip = ctx.peer.clone();
        let user_id = user.id;
        db.transaction::<_, Error, _>(move || {
            UserDao::lock(db, user_id, false)?;
            LogDao::add(
                db,
                user_id,
                &Level::Info,
                &ip,
                &Resource {
                    type_: type_name::<UserItem>().to_string(),
                    id: user.id,
                },
                "Unlock account.",
            )?;
            Ok(())
        })?;
    }
    Ok(())
}

#[derive(Validate)]
pub struct UserResetPasswordRequest {
    #[validate(email, length(min = 1))]
    pub token: String,
    #[validate(length(min = 6, max = 32))]
    pub password: String,
}

impl UserResetPasswordRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let token = ctx.jwt.parse::<Token>(&self.token)?;
        let token = token.claims;
        if token.act != Action::ResetPassword {
            return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
        }
        let db = ctx.db.get()?;
        let db = db.deref();
        let user = UserDao::by_id(db, token.aud)?;
        user.available()?;
        {
            let enc = ctx.hmac.deref();
            let ip = ctx.peer.clone();
            let user_id = user.id;
            db.transaction::<_, Error, _>(move || {
                UserDao::password(db, enc, user_id, &self.password)?;
                LogDao::add(
                    db,
                    user_id,
                    &Level::Info,
                    &ip,
                    &Resource {
                        type_: type_name::<UserItem>().to_string(),
                        id: user.id,
                    },
                    "Reset password",
                )?;
                Ok(())
            })?;
        }
        Ok(())
    }
}

#[derive(Validate, GraphQLInputObject)]
pub struct UserUpdateProfileRequest {
    #[validate(length(min = 2, max = 32))]
    pub real_name: String,
    #[validate(url, length(min = 1))]
    pub logo: String,
    #[validate(length(min = 2))]
    pub lang: String,
    #[validate(length(min = 2))]
    pub time_zone: String,
}

impl UserUpdateProfileRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let user = ctx.token.current_user(db, jwt)?;
        let ip = ctx.peer.clone();
        {
            let user_id = user.id;
            db.transaction::<_, Error, _>(move || {
                UserDao::set_profile(
                    db,
                    user_id,
                    &self.real_name,
                    &self.logo,
                    &self.lang.parse()?,
                    &self.time_zone.parse()?,
                )?;
                LogDao::add(
                    db,
                    user_id,
                    &Level::Info,
                    &ip,
                    &Resource {
                        type_: type_name::<UserItem>().to_string(),
                        id: user.id,
                    },
                    "Update profile.",
                )?;
                Ok(())
            })?;
        }
        Ok(())
    }
}

#[derive(Validate)]
pub struct UserChangePasswordRequest {
    #[validate(length(min = 1))]
    pub current_password: String,
    #[validate(length(min = 6, max = 32))]
    pub new_password: String,
}

impl UserChangePasswordRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let user = ctx.token.current_user(db, jwt)?;
        let enc = ctx.hmac.deref();
        user.auth(enc, &self.current_password)?;
        let ip = ctx.peer.clone();
        {
            let user_id = user.id;

            db.transaction::<_, Error, _>(move || {
                UserDao::password(db, enc, user_id, &self.new_password)?;
                LogDao::add(
                    db,
                    user_id,
                    &Level::Info,
                    &ip,
                    &Resource {
                        type_: type_name::<UserItem>().to_string(),
                        id: user.id,
                    },
                    "Change password.",
                )?;
                Ok(())
            })?;
        }
        Ok(())
    }
}

#[derive(GraphQLObject)]
pub struct UserLogList {
    pub items: Vec<UserLogItem>,
    pub pagination: Pagination,
}

#[derive(GraphQLObject)]
pub struct UserLogItem {
    pub level: String,
    pub ip: String,
    pub resource_type: String,
    pub resource_id: Uuid,
    pub message: String,
    pub created_at: NaiveDateTime,
}

impl UserLogList {
    pub fn new(ctx: &Context, pager: &Pager) -> Result<Self> {
        let db = ctx.db.get()?;
        let db = db.deref();
        let jwt = ctx.jwt.deref();
        let user = ctx.token.current_user(db, jwt)?;
        let total = LogDao::count(db, user.id)?;
        let pagination = pager.build(total);
        let (offset, limit) = pagination.build();
        let items = LogDao::all(db, user.id, offset, limit)?
            .iter()
            .map(|it| UserLogItem {
                level: it.level.clone(),
                ip: it.ip.clone(),
                resource_id: it.resource_id,
                resource_type: it.resource_type.clone(),
                message: it.message.clone(),
                created_at: it.created_at,
            })
            .collect();
        Ok(Self { items, pagination })
    }
}

pub fn sign_out(ctx: &Context) -> Result<()> {
    let db = ctx.db.get()?;
    let db = db.deref();
    let jwt = ctx.jwt.deref();
    let user = ctx.token.current_user(db, jwt)?;
    let ip = ctx.peer.clone();
    LogDao::add(
        db,
        user.id,
        &Level::Info,
        &ip,
        &Resource {
            type_: type_name::<UserItem>().to_string(),
            id: user.id,
        },
        "Sign out.",
    )?;
    Ok(())
}

fn send_email(ctx: &Context, home: &str, user: &UserItem, act: &Action) -> Result<()> {
    let (nbf, exp) = Jwt::timestamps(Duration::hours(1));
    let token = Token {
        aud: user.id,
        act: act.clone(),
        nbf,
        exp,
    };
    let token = ctx.jwt.sum(None, &token)?;

    let act = match *act {
        Action::Confirm => Ok("confirm"),
        Action::Unlock => Ok("unlock"),
        Action::ResetPassword => Ok("reset-password"),
        _ => Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None))),
    }?;
    let db = ctx.db.get()?;
    let db = db.deref();
    let args = json!({
        "real_name": user.real_name,
        "token": token,
        "home": home
    });

    let task = EmailTask {
        subject: I18n::t(
            db,
            &user.lang,
            format!("nut.mailers.user.{}.subject", act),
            &Some(&args),
        ),
        body: I18n::t(
            db,
            &user.lang,
            format!("nut.mailers.user.{}.body", act),
            &Some(&args),
        ),
        to: user.email.clone(),
        ..Default::default()
    };

    {
        let rt = tokio::runtime::Runtime::new()?;
        let queue = ctx.queue.clone();
        thread::spawn(move || {
            rt.block_on(async {
                queue.publish(EmailTask::QUEUE, &task).await.unwrap();
            });
        });
    }

    Ok(())
}
