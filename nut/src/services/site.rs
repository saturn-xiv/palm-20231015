use std::any::type_name;
use std::fs::read_to_string;
use std::ops::Add;
use std::ops::{Deref, DerefMut};
use std::process::Command;
use std::sync::Arc;

use chrono::{Datelike, Duration, NaiveDateTime, Utc};
use diesel::{
    sql_query,
    sql_types::{Text, Timestamptz},
    Connection as DieselConntection, RunQueryDsl,
};
use palm::{
    cache::{
        redis::{ClusterConnection as RedisConnection, Pool as RedisPool},
        Provider as CacheProvider,
    },
    crypto::{Aes, Hmac},
    jwt::Jwt,
    nut::v1,
    orm::postgresql::{Connection as PostgreSqlConnection, Pool as PostgreSqlPool},
    queue::amqp::RabbitMq,
    search::OpenSearch,
    to_code, to_timestamp, try_grpc, Error, GrpcResult, Result,
};
use prost::Message;
use serde::{Deserialize, Serialize};
use tonic::{Request, Response, Status};

use super::super::{
    i18n::{locale::Dao as LocaleDao, I18n},
    models::{
        leave_word::{Dao as LeaveWordDao, Item as LeaveWord},
        log::Dao as LogDao,
        role::{Dao as RoleDao, Item as Role},
        user::{Dao as UserDao, Item as User},
        Operation,
    },
    setting::Dao as SettingDao,
};
use super::Session;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub aes: Arc<Aes>,
    pub hmac: Arc<Hmac>,
    pub redis: RedisPool,
    pub rabbitmq: Arc<RabbitMq>,
    pub search: Arc<OpenSearch>,
}

impl Service {
    pub const AUTHOR_NAME: &'static str = "site.author.name";
    pub const AUTHOR_EMAIL: &'static str = "site.author.email";
    pub const SITE_TITLE: &'static str = "site.title";
    pub const SITE_SUBHEAD: &'static str = "site.subhead";
    pub const SITE_DESCRIPTION: &'static str = "site.description";
}

pub fn get<T: prost::Message + Default>(db: &mut PostgreSqlConnection, aes: &Aes) -> Result<T> {
    let buf: Vec<u8> = SettingDao::get(db, aes, &type_name::<T>().to_string(), None)?;
    let it = T::decode(&buf[..])?;
    Ok(it)
}

#[tonic::async_trait]
impl v1::site_server::Site for Service {
    async fn set_maintenance_mode(
        &self,
        req: Request<v1::SiteMaintenanceModeRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<
                v1::site_layout_response::Author,
            >()));
        }
        let req = req.into_inner();
        let aes = self.aes.deref();
        let buf = req.encode_to_vec();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &type_name::<v1::SiteMaintenanceModeRequest>().to_string(),
            None,
            &buf,
            false,
        ))?;
        Ok(Response::new(()))
    }
    async fn set_author(&self, req: Request<v1::site_layout_response::Author>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<
                v1::site_layout_response::Author,
            >()));
        }
        let req = req.into_inner();
        let aes = self.aes.deref();
        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            SettingDao::set(
                db,
                aes,
                &Self::AUTHOR_NAME.to_string(),
                None,
                &req.name,
                false,
            )?;
            SettingDao::set(
                db,
                aes,
                &Self::AUTHOR_EMAIL.to_string(),
                None,
                &req.email,
                false,
            )?;
            Ok(())
        }))?;
        Ok(Response::new(()))
    }
    async fn set_copyright(&self, req: Request<v1::SiteSetCopyrightRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<
                v1::SiteSetCopyrightRequest,
            >()));
        }
        let req = req.into_inner();
        let aes = self.aes.deref();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &type_name::<v1::SiteSetCopyrightRequest>().to_string(),
            None,
            &req.payload,
            false,
        ))?;
        Ok(Response::new(()))
    }
    async fn set_logo(&self, req: Request<v1::SiteSetLogoRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(
                type_name::<v1::SiteSetLogoRequest>(),
            ));
        }
        let req = req.into_inner();
        let aes = self.aes.deref();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &type_name::<v1::SiteSetLogoRequest>().to_string(),
            None,
            &req.url,
            false,
        ))?;
        Ok(Response::new(()))
    }
    async fn set_keywords(&self, req: Request<v1::SiteSetKeywordsRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<
                v1::SiteSetKeywordsRequest,
            >()));
        }
        let req = req.into_inner();
        let aes = self.aes.deref();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &type_name::<v1::SiteSetKeywordsRequest>().to_string(),
            None,
            &req.items,
            false,
        ))?;
        Ok(Response::new(()))
    }
    async fn set_info(&self, req: Request<v1::SiteSetInfoRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(
                type_name::<v1::SiteSetInfoRequest>(),
            ));
        }
        let req = req.into_inner();
        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            I18n::set(db, &ss.lang, &Self::SITE_TITLE.to_string(), &req.title)?;
            I18n::set(db, &ss.lang, &Self::SITE_SUBHEAD.to_string(), &req.subhead)?;
            I18n::set(
                db,
                &ss.lang,
                &Self::SITE_DESCRIPTION.to_string(),
                &req.description,
            )?;
            Ok(())
        }))?;
        Ok(Response::new(()))
    }
    async fn layout(&self, req: Request<()>) -> GrpcResult<v1::SiteLayoutResponse> {
        let ss = Session::new(&req);

        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let aes = self.aes.deref();

        let it = try_grpc!(new_site_layout_response(db, aes, &ss.lang))?;
        Ok(Response::new(it))
    }

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
                        v1::user_logs_response::item::Level::Info as i32,
                        &ss.client_ip,
                        Some(user.id),
                        "sign up.",
                    )?;
                    UserDao::confirm(db, user.id)?;
                    LogDao::add::<_, User>(
                        db,
                        user.id,
                        v1::user_logs_response::item::Level::Info as i32,
                        &ss.client_ip,
                        Some(user.id),
                        "confirmed.",
                    )?;
                    {
                        let nbf = Utc::now().naive_utc();
                        let exp = nbf.add(Duration::weeks(1 << 12));
                        {
                            use diesel::{insert_into, prelude::*};
                            use palm::schema::roles;

                            let now = Utc::now().naive_utc();
                            insert_into(roles::dsl::roles)
                                .values((
                                    roles::dsl::code.eq(Role::NULL),
                                    roles::dsl::left.eq(1),
                                    roles::dsl::right.eq(2),
                                    roles::dsl::updated_at.eq(&now),
                                ))
                                .execute(db)?;

                            RoleDao::create(db, Role::ROOT, Role::NULL)?;
                            RoleDao::create(db, Role::ADMINISTRATOR, Role::ROOT)?;
                        }
                        for role in [Role::ROOT, Role::ADMINISTRATOR] {
                            let it = RoleDao::by_code(db, role)?;
                            RoleDao::associate(db, it.id, user.id, &nbf, &exp)?;
                            LogDao::add::<String, User>(
                                db,
                                user.id,
                                v1::user_logs_response::item::Level::Info as i32,
                                &ss.client_ip,
                                Some(user.id),
                                format!(
                                    "apply role {} by {} from {} to {}.",
                                    role,
                                    nix::unistd::getuid(),
                                    nbf.date(),
                                    exp.date()
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

    async fn set_minio(&self, req: Request<v1::MinioProfile>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<v1::MinioProfile>()));
        }
        let req = req.into_inner();
        let buf = req.encode_to_vec();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &type_name::<v1::MinioProfile>().to_string(),
            None,
            &buf,
            true
        ))?;
        Ok(Response::new(()))
    }

    async fn get_minio(&self, req: Request<()>) -> GrpcResult<v1::MinioProfile> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<v1::MinioProfile>()));
        }

        let mut it = try_grpc!(get::<v1::MinioProfile>(db, aes))?;
        it.secret_access_key = "change-me".to_string();

        Ok(Response::new(it))
    }

    async fn test_minio(&self, req: Request<()>) -> GrpcResult<v1::SiteMinioTestResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<v1::MinioProfile>()));
        }

        let aws = try_grpc!(get::<v1::MinioProfile>(db, aes))?;

        let buckets = try_grpc!(aws.list_buckets().await)?;
        Ok(Response::new(v1::SiteMinioTestResponse { buckets }))
    }

    async fn set_smtp(&self, req: Request<v1::SmtpProfile>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<v1::SmtpProfile>()));
        }
        let req = req.into_inner();
        let buf = req.encode_to_vec();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &type_name::<v1::SmtpProfile>().to_string(),
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
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<v1::SmtpProfile>()));
        }

        let mut it = try_grpc!(get::<v1::SmtpProfile>(db, aes))?;
        it.password = "change-me".to_string();
        Ok(Response::new(it))
    }

    async fn test_smtp(&self, req: Request<v1::SiteSmtpTestRequst>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<v1::SmtpProfile>()));
        }
        let req = req.into_inner();

        let it = try_grpc!(get::<v1::SmtpProfile>(db, aes))?;
        let task = v1::EmailTask {
            subject: req.subject.clone(),
            body: req.body.clone(),
            to: req.to,
            ..Default::default()
        };
        try_grpc!(task.send(&it.host, &it.user, &it.password))?;
        Ok(Response::new(()))
    }

    async fn set_bing(&self, req: Request<v1::BingProfile>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<v1::BingProfile>()));
        }
        let req = req.into_inner();
        let buf = req.encode_to_vec();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &type_name::<v1::BingProfile>().to_string(),
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
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<v1::BingProfile>()));
        }

        let it = try_grpc!(get::<v1::BingProfile>(db, aes))?;
        Ok(Response::new(it))
    }

    async fn set_google(&self, req: Request<v1::GoogleProfile>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<v1::GoogleProfile>()));
        }
        let req = req.into_inner();
        let buf = req.encode_to_vec();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &type_name::<v1::GoogleProfile>().to_string(),
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
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<v1::GoogleProfile>()));
        }

        let it = try_grpc!(get::<v1::GoogleProfile>(db, aes))?;
        Ok(Response::new(it))
    }

    async fn set_baidu(&self, req: Request<v1::BaiduProfile>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<v1::BaiduProfile>()));
        }
        let req = req.into_inner();
        let buf = req.encode_to_vec();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &type_name::<v1::BaiduProfile>().to_string(),
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
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<v1::BaiduProfile>()));
        }

        let it = try_grpc!(get::<v1::BaiduProfile>(db, aes))?;
        Ok(Response::new(it))
    }
    async fn clear_cache(&self, req: Request<()>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(type_name::<RedisConnection>()));
        }
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        try_grpc!(ch.clear())?;
        Ok(Response::new(()))
    }
    async fn status(&self, req: Request<()>) -> GrpcResult<v1::SiteStatusResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator() {
            return Err(Status::permission_denied(
                type_name::<v1::SiteStatusResponse>(),
            ));
        }
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let se = self.search.deref();

        let postgresql = try_grpc!(new_postgresql_status_response(db))?;
        let rabbitmq = v1::site_status_response::RabbitMq {
            protocol: format!(
                "{} {}.{}.{}",
                lapin::protocol::metadata::NAME,
                lapin::protocol::metadata::MAJOR_VERSION,
                lapin::protocol::metadata::MINOR_VERSION,
                lapin::protocol::metadata::REVISION
            ),
        };
        let system = try_grpc!(new_system_status_response())?;

        let redis = try_grpc!(new_redis_status_response(ch))?;
        let opensearch = try_grpc!(new_opensearch_status_response(se).await)?;
        Ok(Response::new(v1::SiteStatusResponse {
            postgresql: Some(postgresql),
            rabbitmq: Some(rabbitmq),
            redis: Some(redis),
            system: Some(system),
            opensearch: Some(opensearch),
            ..Default::default()
        }))
    }

    async fn new_leave_word(&self, req: Request<v1::SiteNewLeaveWordRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();
        let content = req
            .content
            .ok_or_else(|| Status::invalid_argument("empty content"))?;
        try_grpc!(LeaveWordDao::create(
            db,
            &ss.lang,
            &ss.client_ip,
            &content.body,
            content.editor()
        ))?;
        Ok(Response::new(()))
    }
    async fn index_leave_word(
        &self,
        req: Request<v1::Pager>,
    ) -> GrpcResult<v1::SiteIndexLeaveWordResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.can::<LeaveWord, _>(&Operation::Read, None) {
            return Err(Status::permission_denied(type_name::<LeaveWord>()));
        }
        let req = req.into_inner();
        let total = try_grpc!(LeaveWordDao::count(db))?;

        let items = try_grpc!(LeaveWordDao::all(db, req.offset(total), req.size()))?;
        Ok(Response::new(v1::SiteIndexLeaveWordResponse {
            items: items
                .iter()
                .map(|x| v1::site_index_leave_word_response::Item {
                    id: x.id,
                    lang: x.lang.clone(),
                    ip: x.ip.clone(),
                    body: x.body.clone(),
                    created_at: Some(to_timestamp!(x.created_at)),
                })
                .collect(),
            pagination: Some(v1::Pagination::new(&req, total)),
        }))
    }
    async fn destroy_leave_word(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.can::<LeaveWord, _>(&Operation::Read, None) {
            return Err(Status::permission_denied(type_name::<LeaveWord>()));
        }
        let req = req.into_inner();
        try_grpc!(LeaveWordDao::destroy(db, req.id))?;
        Ok(Response::new(()))
    }

    async fn index_notification(
        &self,
        _req: Request<v1::Pager>,
    ) -> GrpcResult<v1::SiteIndexNotificationResponse> {
        // TODO
        Ok(Response::new(v1::SiteIndexNotificationResponse::default()))
    }
}

// ----------------------------------------------------------------------------

pub fn new_site_layout_response(
    db: &mut PostgreSqlConnection,
    aes: &Aes,
    lang: &str,
) -> Result<v1::SiteLayoutResponse> {
    let keywords: Vec<String> = SettingDao::get(
        db,
        aes,
        &type_name::<v1::SiteSetKeywordsRequest>().to_string(),
        None,
    )
    .unwrap_or_default();
    let copyright: String = SettingDao::get(
        db,
        aes,
        &type_name::<v1::SiteSetCopyrightRequest>().to_string(),
        None,
    )
    .unwrap_or_else(|_| {
        let (_, year) = Utc::now().year_ce();
        format!("2013~{}", year)
    });
    let languages = LocaleDao::languages(db).unwrap_or_default();
    let author_name =
        SettingDao::get(db, aes, &Service::AUTHOR_NAME.to_string(), None).unwrap_or_default();
    let author_email =
        SettingDao::get(db, aes, &Service::AUTHOR_EMAIL.to_string(), None).unwrap_or_default();
    let logo: String = SettingDao::get(
        db,
        aes,
        &type_name::<v1::SiteSetLogoRequest>().to_string(),
        None,
    )
    .unwrap_or_else(|_| "/my/favicon.ico".to_string());

    Ok(v1::SiteLayoutResponse {
        title: I18n::t(db, lang, Service::SITE_TITLE, &None::<String>),
        subhead: I18n::t(db, lang, Service::SITE_SUBHEAD, &None::<String>),
        description: I18n::t(db, lang, Service::SITE_DESCRIPTION, &None::<String>),
        keywords,
        logo,
        copyright,
        languages,
        author: Some(v1::site_layout_response::Author {
            email: author_email,
            name: author_name,
        }),
    })
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

fn new_postgresql_status_response(
    db: &mut PostgreSqlConnection,
) -> Result<v1::site_status_response::PostgreSql> {
    let ver: DatabaseVersion = sql_query("SELECT VERSION() AS value").get_result(db)?;
    let now: DatabaseNow = sql_query("SELECT CURRENT_TIMESTAMP AS value").get_result(db)?;
    let databases: Vec<Database> = sql_query(r###"SELECT pg_database.datname as "name", pg_size_pretty(pg_database_size(pg_database.datname)) AS "size" FROM pg_database ORDER by "size" DESC;"###).load(db)?;

    Ok(v1::site_status_response::PostgreSql {
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

fn new_system_status_response() -> Result<v1::site_status_response::System> {
    let it = v1::site_status_response::System {
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

fn new_redis_status_response(db: &mut RedisConnection) -> Result<v1::site_status_response::Redis> {
    let version = db.version()?;
    let items = db
        .keys()?
        .iter()
        .map(|(key, ttl)| v1::site_status_response::redis::Item {
            ttl: *ttl,
            key: key.clone(),
        })
        .collect();
    Ok(v1::site_status_response::Redis {
        info: version,
        items,
    })
}

async fn new_opensearch_status_response(
    search: &OpenSearch,
) -> Result<v1::site_status_response::OpenSearch> {
    let (url, info) = search.info().await?;
    Ok(v1::site_status_response::OpenSearch { url, info })
}

// /// https://console.aws.amazon.com/iam/home
// impl v1::AwsProfile {
//     pub fn new(db: &mut PostgreSqlConnection, aes: &Aes) -> Result<Self> {
//         let buf: Vec<u8> = SettingDao::get(db, aes, &type_name::<Self>().to_string(), None)?;
//         let it = Self::decode(&buf[..])?;
//         Ok(it)
//     }
//     pub fn s3(&self) -> Result<AwsS3Client> {
//         AwsS3Client::new(
//             self.credentials(),
//             self.credential_static_provider(),
//             self.region()?,
//         )
//     }
//     pub fn credential_static_provider(&self) -> RusotoCredentialStaticProvider {
//         RusotoCredentialStaticProvider::new_minimal(
//             self.access_key_id.clone(),
//             self.secret_access_key.clone(),
//         )
//     }
//     pub fn region(&self) -> Result<RusotoRegion> {
//         let it = match self.endpoint {
//             Some(ref it) => RusotoRegion::Custom {
//                 name: self.region.clone(),
//                 endpoint: it.clone(),
//             },
//             None => self.region.parse()?,
//         };
//         Ok(it)
//     }
//     pub fn credentials(&self) -> AwsCredentials {
//         AwsCredentials::new(
//             self.access_key_id.clone(),
//             self.secret_access_key.clone(),
//             None,
//             None,
//         )
//     }
// }
