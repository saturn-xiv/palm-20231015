use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use chrono::Duration;
use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use tonic::{Request, Response, Status};

use super::super::super::super::{
    crypto::Hmac,
    i18n::I18n,
    jwt::Jwt,
    orm::postgresql::{Connection as Db, Pool as PostgreSqlPool},
    queue::amqp::RabbitMq,
    Error, GrpcResult, HttpError, Result,
};
use super::super::{
    models::{
        log::{Dao as LogDao, Item as Log, Level},
        user::{Action, Dao as UserDao, Item as User, Token},
    },
    tasks::email::Task as EmailTask,
    v1,
};
use super::Session;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub hmac: Arc<Hmac>,
    pub rabbitmq: Arc<RabbitMq>,
}

impl v1::UserSignInResponse {
    pub fn new(user: &User, _db: &mut Db, jwt: &Jwt, ttl: Duration) -> Result<Self> {
        let it = Self {
            time_zone: user.time_zone.clone(),
            lang: user.lang.clone(),
            real_name: user.real_name.clone(),
            avatar: user.avatar.clone(),
            token: user.token(jwt, ttl)?,
        };
        Ok(it)
    }
}

impl v1::UserQueryRequest {
    pub fn user(&self, db: &mut Db) -> Result<User> {
        if let Some(ref id) = self.id {
            let user = match id {
                v1::user_query_request::Id::Email(ref it) => {
                    let it = to_code!(it);
                    UserDao::by_email(db, &it)?
                }
                v1::user_query_request::Id::NickName(ref it) => {
                    let it = to_code!(it);
                    UserDao::by_nick_name(db, &it)?
                }
            };
            return Ok(user);
        }

        Err(Box::new(HttpError(
            StatusCode::NOT_FOUND,
            Some("user is't exists".to_string()),
        )))
    }
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
        let hmac = self.hmac.deref();
        let req = req.into_inner();
        if let Some(ref it) = req.query {
            let user = try_grpc!(it.user(db))?;
            try_grpc!(user.auth(hmac, &req.password))?;
            try_grpc!(user.available())?;

            try_grpc!(db.transaction::<_, Error, _>(move |db| {
                UserDao::sign_in(db, user.id, &ss.client_ip)?;
                LogDao::add::<_, User>(
                    db,
                    user.id,
                    &Level::Info,
                    &ss.client_ip,
                    user.id,
                    "sign in success",
                )?;
                Ok(())
            }))?;

            let it = try_grpc!(v1::UserSignInResponse::new(
                &user,
                db,
                jwt,
                req.ttl
                    .map_or(Duration::weeks(1), |x| Duration::seconds(x.seconds))
            ))?;
            return Ok(Response::new(it));
        }

        Err(Status::permission_denied("must sign in"))
    }
    async fn sign_up(&self, req: Request<v1::UserSignUpRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);

        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let hmac = self.hmac.deref();
        let req = req.into_inner();

        let nick_name = to_code!(req.nick_name);
        let email = to_code!(req.email);
        let real_name = req.real_name.trim();

        let user = try_grpc!(db.transaction::<_, Error, _>(move |db| {
            UserDao::sign_up(
                db,
                hmac,
                &real_name,
                &nick_name,
                &email,
                &req.password,
                &req.lang.parse()?,
                &req.time_zone.parse()?,
            )?;
            let user = UserDao::by_email(db, &email)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                &Level::Info,
                &ss.client_ip,
                user.id,
                "sign up.",
            )?;
            Ok(user)
        }))?;

        // try_grpc!(
        //     self.send_email(db, &req.home, &user, &Action::Confirm)
        //         .await
        // )?;

        Ok(Response::new(()))
    }
    async fn confirm_by_email(&self, req: Request<v1::UserQueryRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let req = req.into_inner();
        let user = try_grpc!(req.user(db))?;
        // TODO
        Ok(Response::new(()))
    }
    async fn confirm_by_token(&self, req: Request<v1::UserTokenRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn unlock_by_email(&self, req: Request<v1::UserQueryRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn unlock_by_token(&self, req: Request<v1::UserTokenRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn forgot_password(&self, req: Request<v1::UserQueryRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn reset_password(&self, req: Request<v1::UserResetPasswordRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn refresh(
        &self,
        req: Request<prost_types::Duration>,
    ) -> GrpcResult<v1::UserSignInResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        let req = req.into_inner();

        let it = try_grpc!(v1::UserSignInResponse::new(
            &user,
            db,
            jwt,
            Duration::seconds(req.seconds)
        ))?;
        Ok(Response::new(it))
    }
    async fn logs(&self, req: Request<v1::Pager>) -> GrpcResult<v1::UserLogsResponse> {
        // TODO
        Ok(Response::new(v1::UserLogsResponse::default()))
    }
    async fn set_profile(&self, req: Request<v1::UserProfile>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
    async fn get_profile(&self, req: Request<()>) -> GrpcResult<v1::UserProfile> {
        // TODO
        Ok(Response::new(v1::UserProfile::default()))
    }
    async fn change_password(&self, req: Request<v1::UserChangePasswordRequest>) -> GrpcResult<()> {
        // TODO
        Ok(Response::new(()))
    }
}

impl Service {
    async fn send_email(&self, db: &mut Db, home: &str, user: &User, act: &Action) -> Result<()> {
        let (nbf, exp) = Jwt::timestamps(Duration::hours(1));
        let token = Token {
            aud: user.uid.clone(),
            act: act.clone(),
            nbf,
            exp,
        };
        let token = self.jwt.sum(None, &token)?;

        let act = match *act {
            Action::Confirm => Ok("confirm"),
            Action::Unlock => Ok("unlock"),
            Action::ResetPassword => Ok("reset-password"),
            _ => Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None))),
        }?;

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

        self.rabbitmq.publish(EmailTask::QUEUE, &task).await?;

        Ok(())
    }
}
