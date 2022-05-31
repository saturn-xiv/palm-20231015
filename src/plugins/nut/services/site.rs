use std::fs::read_to_string;
use std::ops::{Deref, DerefMut};
use std::process::Command;
use std::sync::Arc;

use chrono::{Duration, NaiveDateTime, Utc};
use diesel::{
    sql_query,
    sql_types::{Text, Timestamptz},
    Connection as DieselConntection, RunQueryDsl,
};
use prost::Message;
use redis::Connection as RedisConnection;
use serde::{Deserialize, Serialize};
use tonic::{Request, Response, Status};

use super::super::super::super::{
    cache::{redis::Pool as RedisPool, Provider as CacheProvider},
    crypto::{Aes, Hmac},
    jwt::Jwt,
    orm::postgresql::{Connection as PostgreSqlConnect, Pool as PostgreSqlPool},
    queue::amqp::RabbitMq,
    setting::Dao as SettingDao,
    Error, GrpcResult, Result,
};
use super::super::{
    models::{
        log::{Dao as LogDao, Level},
        role::{Dao as RoleDao, ADMINISTRATOR, ROOT},
        user::{Dao as UserDao, Item as User},
    },
    v1,
};
use super::Session;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub aes: Arc<Aes>,
    pub hmac: Arc<Hmac>,
    pub redis: RedisPool,
    pub rabbitmq: Arc<RabbitMq>,
}

#[tonic::async_trait]
impl v1::site_server::Site for Service {
    async fn install(&self, req: Request<v1::SiteInstallRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);

        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let hmac = self.hmac.deref();
        let req = req.into_inner();

        if try_grpc!(UserDao::count(db))? > 0 {
            return Err(Status::invalid_argument("db isn't empty"));
        }
        match req.user {
            Some(ref req) => {
                let nick_name = to_code!(req.nick_name);
                let email = to_code!(req.email);
                let real_name = req.real_name.trim();

                try_grpc!(db.transaction::<_, Error, _>(move |db| {
                    UserDao::sign_up(
                        db,
                        hmac,
                        real_name,
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
                        Some(user.id),
                        "sign up.",
                    )?;
                    UserDao::confirm(db, user.id)?;
                    LogDao::add::<_, User>(
                        db,
                        user.id,
                        &Level::Info,
                        &ss.client_ip,
                        Some(user.id),
                        "confirmed.",
                    )?;
                    {
                        let now = Utc::now().naive_utc();
                        let nbf = now.date();
                        let exp = (now + Duration::weeks(1 << 10)).date();
                        for role in [ROOT, ADMINISTRATOR] {
                            RoleDao::associate(db, user.id, role, &nbf, &exp)?;
                            LogDao::add::<String, User>(
                                db,
                                user.id,
                                &Level::Info,
                                &ss.client_ip,
                                Some(user.id),
                                format!(
                                    "apply role {} {} from {} to {}.",
                                    role,
                                    nix::unistd::getuid(),
                                    nbf,
                                    exp
                                ),
                            )?;
                        }
                    }
                    Ok(())
                }))?;

                Ok(Response::new(()))
            }
            None => Err(Status::invalid_argument("user cann't be empty")),
        }
    }
    async fn index_user(&self, req: Request<v1::Pager>) -> GrpcResult<v1::SiteUserIndexResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();

        let total = try_grpc!(UserDao::count(db))?;
        let items = try_grpc!(UserDao::all(db, req.offset(total), req.size()))?;

        Ok(Response::new(v1::SiteUserIndexResponse {
            items: items
                .iter()
                .map(|x| v1::site_user_index_response::Item {
                    id: x.id,
                    uid: x.uid.clone(),
                    email: x.email.clone(),
                    real_name: x.real_name.clone(),
                    nick_name: x.nick_name.clone(),
                    provider_type: x.provider_type.clone(),
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
                })
                .collect(),
            pagination: Some(v1::Pagination::new(&req, total)),
        }))
    }

    async fn disable_user(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        try_grpc!(UserDao::enable(db, req.id, false))?;
        Ok(Response::new(()))
    }

    async fn enable_user(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        try_grpc!(UserDao::enable(db, req.id, true))?;
        Ok(Response::new(()))
    }

    async fn lock_user(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        try_grpc!(UserDao::lock(db, req.id, true))?;
        Ok(Response::new(()))
    }

    async fn unlock_user(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        try_grpc!(UserDao::lock(db, req.id, false))?;
        Ok(Response::new(()))
    }
    async fn confirm_user(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        try_grpc!(UserDao::confirm(db, req.id))?;
        Ok(Response::new(()))
    }

    async fn set_user_password(
        &self,
        req: Request<v1::SiteSetUserPasswordRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let hmac = self.hmac.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();

        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            let it = UserDao::by_id(db, req.user)?;
            UserDao::password(db, hmac, it.id, &req.password)?;
            LogDao::add::<_, User>(
                db,
                it.id,
                &Level::Info,
                &ss.client_ip,
                Some(it.id),
                &format!("reset password by {}", user),
            )?;
            Ok(user)
        }))?;

        Ok(Response::new(()))
    }

    async fn set_smtp(&self, req: Request<v1::SmtpProfile>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        let buf = req.encode_to_vec();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &v1::SmtpProfile::KEY.to_string(),
            None,
            &buf,
            true
        ))?;
        Ok(Response::new(()))
    }

    async fn get_smtp(&self, req: Request<()>) -> GrpcResult<v1::SmtpProfile> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let buf: Vec<u8> = try_grpc!(SettingDao::get(
            db,
            aes,
            &v1::SmtpProfile::KEY.to_string(),
            None
        ))?;
        let it = try_grpc!(v1::SmtpProfile::decode(&buf[..]))?;
        Ok(Response::new(it))
    }

    async fn set_bing(&self, req: Request<v1::BingProfile>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        let buf = req.encode_to_vec();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &v1::BingProfile::KEY.to_string(),
            None,
            &buf,
            true
        ))?;
        Ok(Response::new(()))
    }

    async fn get_bing(&self, req: Request<()>) -> GrpcResult<v1::BingProfile> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let buf: Vec<u8> = try_grpc!(SettingDao::get(
            db,
            aes,
            &v1::BingProfile::KEY.to_string(),
            None
        ))?;
        let it = try_grpc!(v1::BingProfile::decode(&buf[..]))?;
        Ok(Response::new(it))
    }

    async fn set_google(&self, req: Request<v1::GoogleProfile>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        let buf = req.encode_to_vec();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &v1::GoogleProfile::KEY.to_string(),
            None,
            &buf,
            true
        ))?;
        Ok(Response::new(()))
    }

    async fn get_google(&self, req: Request<()>) -> GrpcResult<v1::GoogleProfile> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let buf: Vec<u8> = try_grpc!(SettingDao::get(
            db,
            aes,
            &v1::GoogleProfile::KEY.to_string(),
            None
        ))?;
        let it = try_grpc!(v1::GoogleProfile::decode(&buf[..]))?;
        Ok(Response::new(it))
    }

    async fn set_baidu(&self, req: Request<v1::BaiduProfile>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        let buf = req.encode_to_vec();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &v1::BaiduProfile::KEY.to_string(),
            None,
            &buf,
            true
        ))?;
        Ok(Response::new(()))
    }

    async fn get_baidu(&self, req: Request<()>) -> GrpcResult<v1::BaiduProfile> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let buf: Vec<u8> = try_grpc!(SettingDao::get(
            db,
            aes,
            &v1::BaiduProfile::KEY.to_string(),
            None
        ))?;
        let it = try_grpc!(v1::BaiduProfile::decode(&buf[..]))?;
        Ok(Response::new(it))
    }

    async fn status(&self, req: Request<()>) -> GrpcResult<v1::SiteStatusResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();

        let postgresql = try_grpc!(v1::site_status_response::PostgreSql::new(db))?;
        let rabbitmq = v1::site_status_response::RabbitMq {
            protocol: format!(
                "{} {}.{}.{}",
                lapin::protocol::metadata::NAME,
                lapin::protocol::metadata::MAJOR_VERSION,
                lapin::protocol::metadata::MINOR_VERSION,
                lapin::protocol::metadata::REVISION
            ),
        };
        let redis = try_grpc!(v1::site_status_response::Redis::new(ch))?;
        Ok(Response::new(v1::SiteStatusResponse {
            postgresql: Some(postgresql),
            rabbitmq: Some(rabbitmq),
            redis: Some(redis),
            ..Default::default()
        }))
    }
}

impl v1::SmtpProfile {
    pub const KEY: &'static str = "site.smtp";
}

impl v1::GoogleProfile {
    pub const KEY: &'static str = "site.google";
}

impl v1::BaiduProfile {
    pub const KEY: &'static str = "site.baidu";
}

impl v1::BingProfile {
    pub const KEY: &'static str = "site.bing";
}

#[derive(QueryableByName, PartialEq, Debug)]
struct DatabaseVersion {
    #[diesel(sql_type = Text)]
    value: String,
}

#[derive(QueryableByName, PartialEq, Debug)]
struct DatabaseNow {
    #[diesel(sql_type = Timestamptz)]
    value: NaiveDateTime,
}

#[derive(QueryableByName, PartialEq, Debug, Serialize, Deserialize)]
struct Database {
    #[diesel(sql_type = Text)]
    name: String,
    #[diesel(sql_type = Text)]
    size: String,
}

impl v1::site_status_response::PostgreSql {
    pub fn new(db: &mut PostgreSqlConnect) -> Result<Self> {
        let ver: DatabaseVersion = sql_query("SELECT VERSION() AS value").get_result(db)?;
        let now: DatabaseNow = sql_query("SELECT CURRENT_TIMESTAMP AS value").get_result(db)?;
        let databases: Vec<Database> = sql_query(r###"SELECT pg_database.datname as "name", pg_size_pretty(pg_database_size(pg_database.datname)) AS "size" FROM pg_database ORDER by "size" DESC;"###).load(db)?;

        Ok(Self {
            version: ver.value,
            now: Some(to_timestamp!(now.value)),
            databases: databases
                .iter()
                .map(|x| v1::site_status_response::Database {
                    name: x.name.clone(),
                    size: x.size.clone(),
                })
                .collect(),
        })
    }
}

impl v1::site_status_response::System {
    pub fn new() -> Result<Self> {
        let it = Self {
            version: read_to_string("/proc/version")?,
            cpu: read_to_string("/proc/cpuinfo")?,
            memory: read_to_string("/proc/meminfo")?,
            boot: read_to_string("/proc/cmdline")?,
            disk: {
                // read_to_string("/proc/diskstats")?
                let it = Command::new("df").arg("-h").output()?;
                String::from_utf8(it.stdout)?
            },
            load: {
                let it = Command::new("top").arg("-b").arg("-n").arg("1").output()?;
                String::from_utf8(it.stdout)?
            },
            fs: read_to_string("/proc/mounts")?,
            swap: read_to_string("/proc/swaps")?,
            uptime: read_to_string("/proc/uptime")?,
            network: {
                let it = Command::new("ip").arg("address").output()?;
                String::from_utf8(it.stdout)?
            },
        };
        Ok(it)
    }
}

impl v1::site_status_response::Redis {
    pub fn new(db: &mut RedisConnection) -> Result<Self> {
        let version = db.version()?;
        let items = db
            .keys()?
            .iter()
            .map(|(key, ttl)| v1::site_status_response::redis::Item {
                ttl: *ttl,
                key: key.clone(),
            })
            .collect();
        Ok(Self {
            info: version,
            items,
        })
    }
}
