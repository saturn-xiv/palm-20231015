use std::ops::Deref;

use chrono::Duration;
use diesel::connection::Connection as DieselConnection;
use hyper::StatusCode;
use juniper::{GraphQLInputObject, GraphQLObject};
use validator::Validate;

use super::super::super::super::{i18n::I18n, jwt::Jwt, Error, HttpError, Result};
use super::super::{
    models::{
        log::{Dao as LogDao, Item as Log},
        user::{Dao as UserDao, Item as User},
    },
    EmailTask,
};
use super::{Action, Context, Pager, Pagination, Token};

pub fn refresh_token(ctx: &Context) -> Result<UserSignInResponse> {
    let user = ctx.current_user()?;
    let (nbf, exp) = Jwt::timestamps(Duration::weeks(1));
    let token = Token {
        aud: user.uid.clone(),
        act: Action::SignIn,
        exp,
        nbf,
    };
    let token = ctx.jwt.sum(None, &token)?;
    Ok(UserSignInResponse {
        token,
        name: user.real_name.clone(),
        lang: user.lang.clone(),
        logo: user.logo.clone(),
        tz: user.time_zone,
    })
}

#[derive(Validate, GraphQLInputObject)]
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

        let ip = ctx.peer();
        db.transaction::<_, Error, _>(move || {
            UserDao::sign_in(db, user.id, &ip)?;
            LogDao::add(db, user.id, &ip, "sign in success")?;
            Ok(())
        })?;

        let (nbf, exp) = Jwt::timestamps(Duration::weeks(1));
        let token = Token {
            aud: user.uid.clone(),
            act: Action::SignIn,
            exp,
            nbf,
        };
        let token = ctx.jwt.sum(None, &token)?;
        Ok(UserSignInResponse {
            token,
            name: user.real_name.clone(),
            lang: user.lang.clone(),
            logo: user.logo.clone(),
            tz: user.time_zone,
        })
    }
}

#[derive(GraphQLObject)]
pub struct UserSignInResponse {
    pub token: String,
    pub name: String,
    pub lang: String,
    pub tz: String,
    pub logo: String,
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
    #[validate(url, length(min = 1))]
    pub home: String,
}

impl UserSignUpRequest {
    pub async fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let enc = ctx.hmac.deref();

        let ip = ctx.peer();
        db.transaction::<_, Error, _>(move || {
            UserDao::sign_up(
                db,
                enc,
                &self.real_name,
                &self.nick_name,
                &self.email,
                &self.password,
            )?;
            let user = UserDao::by_email(db, &self.email)?;
            LogDao::add(db, user.id, &ip, "sign up.")?;
            Ok(())
        })?;

        let user = UserDao::by_email(db, &self.email)?;
        send_email(ctx, &self.home, &user, &Action::Confirm).await?;
        Ok(())
    }
}

#[derive(Validate, GraphQLInputObject)]
pub struct UserConfirmByEmailRequest {
    #[validate(email, length(min = 1))]
    pub email: String,
    #[validate(url, length(min = 1))]
    pub home: String,
}

impl UserConfirmByEmailRequest {
    pub async fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let user = UserDao::by_email(db, &self.email)?;
        if user.confirmed_at.is_some() {
            return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
        }
        send_email(ctx, &self.home, &user, &Action::Confirm).await?;
        Ok(())
    }
}

#[derive(Validate, GraphQLInputObject)]
pub struct UserUnlockByEmailRequest {
    #[validate(email, length(min = 1))]
    pub email: String,
    #[validate(url, length(min = 1))]
    pub home: String,
}

impl UserUnlockByEmailRequest {
    pub async fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let user = UserDao::by_email(db, &self.email)?;
        if user.locked_at.is_none() {
            return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
        }
        send_email(ctx, &self.home, &user, &Action::Unlock).await?;
        Ok(())
    }
}

#[derive(Validate, GraphQLInputObject)]
pub struct UserForgotPasswordByEmailRequest {
    #[validate(email, length(min = 1))]
    pub email: String,
    #[validate(url, length(min = 1))]
    pub home: String,
}

impl UserForgotPasswordByEmailRequest {
    pub async fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let user = UserDao::by_email(db, &self.email)?;
        user.available()?;
        send_email(ctx, &self.home, &user, &Action::ResetPassword).await?;
        Ok(())
    }
}

#[derive(Validate, GraphQLInputObject)]
pub struct UserConfirmByTokenRequest {
    #[validate(email, length(min = 1))]
    pub token: String,
}

impl UserConfirmByTokenRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let token = ctx.jwt.parse::<Token>(&self.token)?;
        let token = token.claims;
        if token.act != Action::Unlock {
            return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
        }
        let db = ctx.db.get()?;
        let db = db.deref();
        let user = UserDao::by_uid(db, &token.aud)?;
        if user.locked_at.is_none() {
            return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
        }
        {
            let ip = ctx.peer();
            let user_id = user.id;
            db.transaction::<_, Error, _>(move || {
                UserDao::confirm(db, user_id)?;
                LogDao::add(db, user_id, &ip, "Confirm account.")?;
                Ok(())
            })?;
        }
        Ok(())
    }
}

#[derive(Validate, GraphQLInputObject)]
pub struct UserUnlockByTokenRequest {
    #[validate(email, length(min = 1))]
    pub token: String,
}

impl UserUnlockByTokenRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let token = ctx.jwt.parse::<Token>(&self.token)?;
        let token = token.claims;
        if token.act != Action::Unlock {
            return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
        }
        let db = ctx.db.get()?;
        let db = db.deref();
        let user = UserDao::by_uid(db, &token.aud)?;
        if user.locked_at.is_none() {
            return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
        }
        {
            let ip = ctx.peer();
            let user_id = user.id;
            db.transaction::<_, Error, _>(move || {
                UserDao::lock(db, user_id, false)?;
                LogDao::add(db, user_id, &ip, "Unlock account.")?;
                Ok(())
            })?;
        }
        Ok(())
    }
}

#[derive(Validate, GraphQLInputObject)]
pub struct UserResetPasswordByTokenRequest {
    #[validate(email, length(min = 1))]
    pub token: String,
    #[validate(length(min = 6, max = 32))]
    pub password: String,
}

impl UserResetPasswordByTokenRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let token = ctx.jwt.parse::<Token>(&self.token)?;
        let token = token.claims;
        if token.act != Action::ResetPassword {
            return Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)));
        }
        let db = ctx.db.get()?;
        let db = db.deref();
        let user = UserDao::by_uid(db, &token.aud)?;
        user.available()?;
        {
            let enc = ctx.hmac.deref();
            let ip = ctx.peer();
            let user_id = user.id;
            db.transaction::<_, Error, _>(move || {
                UserDao::password(db, enc, user_id, &self.password)?;
                LogDao::add(db, user_id, &ip, "Reset password")?;
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
        let user = ctx.current_user()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let ip = ctx.peer();
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
                LogDao::add(db, user_id, &ip, "Update profile.")?;
                Ok(())
            })?;
        }
        Ok(())
    }
}

#[derive(Validate, GraphQLInputObject)]
pub struct UserChangePasswordRequest {
    #[validate(length(min = 1))]
    pub current_password: String,
    #[validate(length(min = 6, max = 32))]
    pub new_password: String,
}

impl UserChangePasswordRequest {
    pub fn handle(&self, ctx: &Context) -> Result<()> {
        self.validate()?;
        let user = ctx.current_user()?;
        let enc = ctx.hmac.deref();
        user.auth(enc, &self.current_password)?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let ip = ctx.peer();
        {
            let user_id = user.id;

            db.transaction::<_, Error, _>(move || {
                UserDao::password(db, enc, user_id, &self.new_password)?;
                LogDao::add(db, user_id, &ip, "Change password.")?;
                Ok(())
            })?;
        }
        Ok(())
    }
}

#[derive(GraphQLObject)]
pub struct UserLogList {
    pub items: Vec<Log>,
    pub pagination: Pagination,
}

impl UserLogList {
    pub fn new(ctx: &Context, pager: &Pager) -> Result<Self> {
        let user = ctx.current_user()?;
        let db = ctx.db.get()?;
        let db = db.deref();
        let total = LogDao::count(db, user.id)?;
        let pagination = pager.build(total);
        let (offset, limit) = pagination.build();
        let items = LogDao::all(db, user.id, offset, limit)?;
        Ok(Self { items, pagination })
    }
}

pub fn sign_out(ctx: &Context) -> Result<()> {
    let user = ctx.current_user()?;
    let db = ctx.db.get()?;
    let db = db.deref();
    let ip = ctx.peer();
    LogDao::add(db, user.id, &ip, "Sign out.")?;
    Ok(())
}

async fn send_email(ctx: &Context, home: &str, user: &User, act: &Action) -> Result<()> {
    let (nbf, exp) = Jwt::timestamps(Duration::hours(1));
    let token = Token {
        aud: user.uid.clone(),
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
    ctx.queue.publish(EmailTask::QUEUE, &task).await?;
    Ok(())
}
