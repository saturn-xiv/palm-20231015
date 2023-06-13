use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::{Enforcer, RbacApi};
use chrono::Duration;
use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use palm::{
    cache::redis::Pool as RedisPool,
    jwt::Jwt,
    nut::v1,
    queue::amqp::RabbitMq,
    rbac::v1::{
        permissions_response::Item as Permission, resources_response::Item as Resource,
        RoleRequest, UserRequest,
    },
    session::Session,
    thrift::Thrift,
    to_chrono_duration, to_code, to_timestamp, try_grpc, Error, GrpcResult, HttpError, Result,
};
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};

use super::super::{
    i18n::I18n,
    models::{
        google::user::Dao as GoogleUserDao,
        log::{Dao as LogDao, Level as LogLevel},
        user::{Action, Dao as UserDao, Item as User},
        wechat::mini_program_user::{
            Dao as WechatMiniProgramUserDao, Item as WechatMiniProgramUser,
        },
        wechat::oauth2_user::Dao as WechatOauth2UserDao,
    },
    orm::postgresql::{Connection as Db, Pool as PostgreSqlPool},
};
use super::CurrentUserAdapter;

pub struct Service {
    pub redis: RedisPool,
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Thrift>,
    pub aes: Arc<Thrift>,
    pub hmac: Arc<Thrift>,
    pub rabbitmq: Arc<RabbitMq>,
    pub enforcer: Arc<Mutex<Enforcer>>,
    pub orchid: Arc<Thrift>,
}

#[tonic::async_trait]
impl v1::user_server::User for Service {
    async fn reset_password(&self, req: Request<v1::UserResetPasswordRequest>) -> GrpcResult<()> {
        Ok(Response::new(()))
    }
    async fn refresh(
        &self,
        req: Request<prost_types::Duration>,
    ) -> GrpcResult<v1::UserSignInResponse> {
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
                    // TODO
                    level: 0,
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
            &LogLevel::Info,
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
                    &LogLevel::Info,
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
                    &LogLevel::Info,
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
                &LogLevel::Info,
                &ss.client_ip,
                Some(it.id),
                &format!("reset password by {}", user),
            )?;
            Ok(())
        }))?;
        Ok(Response::new(()))
    }
}

impl Service {}

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
            // FIXME
            uid: "todo".to_string(),
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
