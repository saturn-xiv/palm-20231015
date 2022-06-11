use std::collections::HashMap;
use std::fs::read_to_string;
use std::ops::{Deref, DerefMut};
use std::process::Command;
use std::sync::Arc;

use chrono::{Datelike, Duration, NaiveDateTime, Utc};
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
    i18n::{locale::Dao as LocaleDao, I18n},
    jwt::Jwt,
    orm::postgresql::{Connection as PostgreSqlConnection, Pool as PostgreSqlPool},
    queue::amqp::RabbitMq,
    setting::Dao as SettingDao,
    Error, GrpcResult, Result,
};
use super::super::{
    models::{
        leave_word::Dao as LeaveWordDao,
        log::{Dao as LogDao, Level},
        role::{Dao as RoleDao, ADMINISTRATOR, ROOT},
        user::{Dao as UserDao, Item as User},
        Operation,
    },
    tasks::email::Task as EmailTask,
    v1,
};
use super::Session;

impl v1::site_layout_response::Author {
    pub const NAME: &'static str = "site.author.name";
    pub const EMAIL: &'static str = "site.author.email";
}

impl v1::SiteSetInfoRequest {
    pub const TITLE: &'static str = "site.title";
    pub const SUBHEAD: &'static str = "site.subhead";
    pub const DESCRIPTION: &'static str = "site.description";
}
impl v1::SiteSetLogoRequest {
    pub const KEY: &'static str = "site.logo";
}
impl v1::SiteSetKeywordsRequest {
    pub const KEY: &'static str = "site.keywords";
}
impl v1::SiteSetCopyrightRequest {
    pub const KEY: &'static str = "site.copyright";
}
impl v1::SiteLayoutResponse {
    pub fn new(
        db: &mut PostgreSqlConnection,
        user: &Option<User>,
        aes: &Aes,
        lang: &str,
    ) -> Result<Self> {
        let keywords: Vec<String> =
            SettingDao::get(db, aes, &v1::SiteSetKeywordsRequest::KEY.to_string(), None)
                .unwrap_or_default();
        let copyright: String =
            SettingDao::get(db, aes, &v1::SiteSetCopyrightRequest::KEY.to_string(), None)
                .unwrap_or_else(|_| {
                    let (_, year) = Utc::now().year_ce();
                    format!("2013~{}", year)
                });
        let languages = LocaleDao::languages(db).unwrap_or_default();
        let author_name = SettingDao::get(
            db,
            aes,
            &v1::site_layout_response::Author::NAME.to_string(),
            None,
        )
        .unwrap_or_default();
        let author_email = SettingDao::get(
            db,
            aes,
            &v1::site_layout_response::Author::EMAIL.to_string(),
            None,
        )
        .unwrap_or_default();
        let logo: String = SettingDao::get(db, aes, &v1::SiteSetLogoRequest::KEY.to_string(), None)
            .unwrap_or_else(|_| "/favicon.png".to_string());

        let user = match user {
            Some(ref x) => {
                let it = v1::site_layout_response::CurrentUser {
                    payload: Some(v1::site_user_index_response::Item::new(x)),
                    is_administrator: x.is_administrator(db).is_ok(),
                    policies: x
                        .policies(db)?
                        .iter()
                        .map(|x| v1::PolicyPermission {
                            role: x.role.clone(),
                            operation: x.operation.clone(),
                            resource_type: x.resource_type.clone(),
                            resource_id: x.resource_id,
                        })
                        .collect(),
                };
                Some(it)
            }
            None => None,
        };

        Ok(Self {
            title: I18n::t(db, lang, v1::SiteSetInfoRequest::TITLE, &None::<String>),
            subhead: I18n::t(db, lang, v1::SiteSetInfoRequest::SUBHEAD, &None::<String>),
            description: I18n::t(
                db,
                lang,
                v1::SiteSetInfoRequest::DESCRIPTION,
                &None::<String>,
            ),
            keywords,
            logo,
            copyright,
            languages,
            author: Some(v1::site_layout_response::Author {
                email: author_email,
                name: author_name,
            }),
            current_user: user,
        })
    }
}

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
    async fn set_author(&self, req: Request<v1::site_layout_response::Author>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        let aes = self.aes.deref();
        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            SettingDao::set(
                db,
                aes,
                &v1::site_layout_response::Author::NAME.to_string(),
                None,
                &req.name,
                false,
            )?;
            SettingDao::set(
                db,
                aes,
                &v1::site_layout_response::Author::EMAIL.to_string(),
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
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        let aes = self.aes.deref();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &v1::SiteSetCopyrightRequest::KEY.to_string(),
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
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        let aes = self.aes.deref();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &v1::SiteSetLogoRequest::KEY.to_string(),
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
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        let aes = self.aes.deref();
        try_grpc!(SettingDao::set(
            db,
            aes,
            &v1::SiteSetKeywordsRequest::KEY.to_string(),
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
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        try_grpc!(db.transaction::<_, Error, _>(move |db| {
            I18n::set(
                db,
                &ss.lang,
                &v1::SiteSetInfoRequest::TITLE.to_string(),
                &req.title,
            )?;
            I18n::set(
                db,
                &ss.lang,
                &v1::SiteSetInfoRequest::SUBHEAD.to_string(),
                &req.subhead,
            )?;
            I18n::set(
                db,
                &ss.lang,
                &v1::SiteSetInfoRequest::DESCRIPTION.to_string(),
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
        let jwt = self.jwt.deref();
        let user = ss.current_user(db, jwt).ok();

        let it = try_grpc!(v1::SiteLayoutResponse::new(db, &user, aes, &ss.lang))?;
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
    async fn show_user(
        &self,
        req: Request<v1::IdRequest>,
    ) -> GrpcResult<v1::site_user_index_response::Item> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        let req = req.into_inner();
        if user.id != req.id {
            try_grpc!(user.can::<User>(db, &Operation::Read, None))?;
        }

        let user = try_grpc!(UserDao::by_id(db, req.id))?;
        let it = v1::site_user_index_response::Item::new(&user);
        Ok(Response::new(it))
    }
    async fn index_user(&self, req: Request<v1::Pager>) -> GrpcResult<v1::SiteUserIndexResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.can::<User>(db, &Operation::Read, None))?;
        let req = req.into_inner();

        let total = try_grpc!(UserDao::count(db))?;
        let items = try_grpc!(UserDao::all(db, req.offset(total), req.size()))?;

        Ok(Response::new(v1::SiteUserIndexResponse {
            items: items
                .iter()
                .map(v1::site_user_index_response::Item::new)
                .collect(),
            pagination: Some(v1::Pagination::new(&req, total)),
        }))
    }
    async fn list_user(&self, req: Request<()>) -> GrpcResult<v1::SiteListUserResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.can::<User>(db, &Operation::Read, None))?;

        let mut items = Vec::new();
        for (id, nick_name, real_name) in try_grpc!(UserDao::options(db))? {
            items.push(v1::site_list_user_response::Item {
                id,
                nick_name,
                real_name,
            });
        }

        Ok(Response::new(v1::SiteListUserResponse { items }))
    }
    async fn disable_user(&self, req: Request<v1::IdRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        if RoleDao::is(db, req.id, ROOT).unwrap_or(false) {
            return Err(Status::permission_denied(ROOT));
        }
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
        if RoleDao::is(db, req.id, ROOT).unwrap_or(false) {
            return Err(Status::permission_denied(ROOT));
        }
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
        if RoleDao::is(db, req.id, ROOT).unwrap_or(false) {
            return Err(Status::permission_denied(ROOT));
        }
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
        if RoleDao::is(db, req.id, ROOT).unwrap_or(false) {
            return Err(Status::permission_denied(ROOT));
        }
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
        if RoleDao::is(db, req.id, ROOT).unwrap_or(false) {
            return Err(Status::permission_denied(ROOT));
        }
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
        let mut it = try_grpc!(v1::SmtpProfile::decode(&buf[..]))?;
        it.password = "change-me".to_string();
        Ok(Response::new(it))
    }

    async fn test_smtp(&self, req: Request<v1::SiteSmtpTestRequst>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        let buf: Vec<u8> = try_grpc!(SettingDao::get(
            db,
            aes,
            &v1::SmtpProfile::KEY.to_string(),
            None
        ))?;
        let it = try_grpc!(v1::SmtpProfile::decode(&buf[..]))?;
        let task = EmailTask {
            subject: req.subject.clone(),
            body: req.body.clone(),
            to: req.to,
            cc: Vec::new(),
            bcc: Vec::new(),
            files: HashMap::new(),
        };
        try_grpc!(task.send(&it.host, &it.user, &it.password))?;
        Ok(Response::new(()))
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
    async fn clear_cache(&self, req: Request<()>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        try_grpc!(ch.clear())?;
        Ok(Response::new(()))
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
        let system = try_grpc!(v1::site_status_response::System::new())?;

        let redis = try_grpc!(v1::site_status_response::Redis::new(ch))?;
        Ok(Response::new(v1::SiteStatusResponse {
            postgresql: Some(postgresql),
            rabbitmq: Some(rabbitmq),
            redis: Some(redis),
            system: Some(system),
            ..Default::default()
        }))
    }

    async fn new_leave_word(&self, req: Request<v1::SiteNewLeaveWordRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let req = req.into_inner();
        try_grpc!(LeaveWordDao::create(db, &ss.lang, &ss.client_ip, &req.body))?;
        Ok(Response::new(()))
    }
    async fn index_leave_word(
        &self,
        req: Request<v1::Pager>,
    ) -> GrpcResult<v1::SiteIndexLeaveWordResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
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
        let jwt = self.jwt.deref();
        let user = try_grpc!(ss.current_user(db, jwt))?;
        try_grpc!(user.is_administrator(db))?;
        let req = req.into_inner();
        try_grpc!(LeaveWordDao::destroy(db, req.id))?;
        Ok(Response::new(()))
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
    pub fn new(db: &mut PostgreSqlConnection) -> Result<Self> {
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
impl v1::site_user_index_response::Item {
    pub fn new(x: &User) -> Self {
        Self {
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
        }
    }
}
