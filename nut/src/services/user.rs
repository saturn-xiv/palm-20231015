use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use chrono::Duration;
use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use palm::{
    cache::redis::Pool as RedisPool, crypto::Hmac, jwt::Jwt, nut::v1, queue::amqp::RabbitMq,
    to_chrono_duration, to_code, to_timestamp, try_grpc, Error, GrpcResult, HttpError, Result,
};
use tonic::{Request, Response, Status};

use super::super::{
    i18n::I18n,
    models::{
        log::Dao as LogDao,
        permission::Adapter as PermissionAdapter,
        role::{Adapter as RoleAdapter, Item as Role},
        user::{Action, Dao as UserDao, Item as User, Token},
    },
    orm::postgresql::{Connection as Db, Pool as PostgreSqlPool},
};
use super::Session;

pub struct Service {
    pub redis: RedisPool,
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub hmac: Arc<Hmac>,
    pub rabbitmq: Arc<RabbitMq>,
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
            let user = try_grpc!(User::from_user_request(it, db))?;
            try_grpc!(user.auth(hmac, &req.password))?;
            try_grpc!(user.available())?;

            try_grpc!(db.transaction::<_, Error, _>(move |db| {
                UserDao::sign_in(db, user.id, &ss.client_ip)?;
                LogDao::add::<_, User>(
                    db,
                    user.id,
                    v1::user_logs_response::item::Level::Info as i32,
                    &ss.client_ip,
                    Some(user.id),
                    "sign in success",
                )?;
                Ok(())
            }))?;

            let it = try_grpc!(
                new_sign_in_response(
                    db,
                    &user,
                    jwt,
                    req.ttl
                        .map_or(Duration::weeks(1), |x| Duration::seconds(x.seconds)),
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
                v1::user_logs_response::item::Level::Info as i32,
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

        let token = try_grpc!(self.jwt.parse::<Token>(&req.payload))?;
        let token = token.claims;
        if token.act != Action::Confirm {
            return Err(Status::invalid_argument(format!(
                "bad request {:?}",
                token.act
            )));
        }

        let user = try_grpc!(UserDao::by_uid(db, &token.aud))?;
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
                    v1::user_logs_response::item::Level::Info as i32,
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

        let token = try_grpc!(self.jwt.parse::<Token>(&req.payload))?;
        let token = token.claims;
        if token.act != Action::Unlock {
            return Err(Status::invalid_argument(format!(
                "bad request {:?}",
                token.act
            )));
        }

        let user = try_grpc!(UserDao::by_uid(db, &token.aud))?;
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
                    v1::user_logs_response::item::Level::Info as i32,
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

        let token = try_grpc!(self.jwt.parse::<Token>(&req.token))?;
        let token = token.claims;
        if token.act != Action::ResetPassword {
            return Err(Status::invalid_argument(format!(
                "bad request {:?}",
                token.act
            )));
        }

        let user = try_grpc!(UserDao::by_uid(db, &token.aud))?;

        {
            let ip = ss.client_ip;
            let user_id = user.id;
            try_grpc!(db.transaction::<_, Error, _>(move |db| {
                UserDao::password(db, hmac, user_id, &req.password)?;
                LogDao::add::<String, User>(
                    db,
                    user_id,
                    v1::user_logs_response::item::Level::Info as i32,
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
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        let req = req.into_inner();

        let it = try_grpc!(
            new_sign_in_response(db, &user.payload, jwt, to_chrono_duration!(req)).await
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
        let total = try_grpc!(LogDao::count(db, user.payload.id))?;

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

        let items = try_grpc!(LogDao::all(
            db,
            user.payload.id,
            req.offset(total),
            req.size()
        ))?;

        Ok(Response::new(v1::UserLogsResponse {
            items: items
                .iter()
                .map(|x| v1::user_logs_response::Item {
                    id: x.id,
                    user_id: x.user_id,
                    message: x.message.clone(),
                    level: x.level,
                    ip: x.ip.clone(),
                    resource: Some(v1::Resource {
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
            user.payload.id,
            v1::user_logs_response::item::Level::Info as i32,
            &ss.client_ip,
            Some(user.payload.id),
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
                    user.payload.id,
                    &req.real_name,
                    &req.avatar,
                    &req.lang.parse()?,
                    &req.time_zone.parse()?,
                )?;
                LogDao::add::<String, User>(
                    db,
                    user.payload.id,
                    v1::user_logs_response::item::Level::Info as i32,
                    &ip,
                    Some(user.payload.id),
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
        try_grpc!(user.payload.auth(hmac, &req.current_password))?;

        {
            let ip = ss.client_ip;

            try_grpc!(db.transaction::<_, Error, _>(move |db| {
                UserDao::password(db, hmac, user.payload.id, &req.new_password)?;
                LogDao::add::<String, User>(
                    db,
                    user.payload.id,
                    v1::user_logs_response::item::Level::Info as i32,
                    &ip,
                    Some(user.payload.id),
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
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;
        let req = req.into_inner();

        if !user.is_administrator() {
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
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
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
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();
        let it = try_grpc!(UserDao::by_id(db, req.id))?;

        if it.has(db, Role::ROOT) {
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
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let it = try_grpc!(UserDao::by_id(db, req.id))?;
        if it.has(db, Role::ROOT) {
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
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let it = try_grpc!(UserDao::by_id(db, req.id))?;
        if it.has(db, Role::ROOT) {
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
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let it = try_grpc!(UserDao::by_id(db, req.id))?;
        if it.has(db, Role::ROOT) {
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
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let it = try_grpc!(UserDao::by_id(db, req.id))?;
        if it.has(db, Role::ROOT) {
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
        let hmac = self.hmac.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<User>()));
        }
        let req = req.into_inner();

        let it = try_grpc!(UserDao::by_id(db, req.id))?;
        if it.has(db, Role::ROOT) {
            return Err(Status::permission_denied(type_name::<User>()));
        }

        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            UserDao::password(db, hmac, it.id, &req.password)?;
            LogDao::add::<_, User>(
                db,
                it.id,
                v1::user_logs_response::item::Level::Info as i32,
                &ss.client_ip,
                Some(it.id),
                &format!("reset password by {}", user.payload),
            )?;
            Ok(())
        }))?;
        return Ok(Response::new(()));
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

        self.rabbitmq.send("", v1::EmailTask::QUEUE, &task).await?;

        Ok(())
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
            provider_type: x.provider_type,
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

pub async fn new_sign_in_response(
    db: &mut Db,
    user: &User,
    jwt: &Jwt,
    ttl: Duration,
) -> Result<v1::UserSignInResponse> {
    let token = user.token(jwt, ttl)?;
    let roles = RoleAdapter::get_implicit_roles_for_user(db, user.id)?;
    let permissions = PermissionAdapter::get_implicit_permissions_for_user(db, user.id)?;

    Ok(v1::UserSignInResponse {
        token,
        payload: Some(v1::user_sign_in_response::Payload {
            real_name: user.real_name.clone(),
            nickname: user.nickname.clone(),
            avatar: user.avatar.clone(),
            email: user.email.clone(),
            lang: user.lang.clone(),
            time_zone: user.time_zone.clone(),
        }),
        permissions: permissions
            .iter()
            .map(|x| v1::Permission {
                operation: x.operation.clone(),
                resource: Some(v1::Resource {
                    r#type: x.resource_type.clone(),
                    id: x.resource_id,
                }),
                subject: None,
            })
            .collect::<_>(),
        roles: roles.iter().map(|x| x.code.clone()).collect::<_>(),
    })
}
