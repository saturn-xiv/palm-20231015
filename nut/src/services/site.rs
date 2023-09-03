use std::fs::read_to_string;
use std::ops::{Deref, DerefMut};
use std::process::Command;
use std::sync::Arc;

use casbin::{Enforcer, RbacApi};
use chrono::{Datelike, NaiveDateTime, Utc};
use diesel::{
    sql_query,
    sql_types::{Text, Timestamptz},
    Connection as DieselConntection, RunQueryDsl,
};
use hyper::StatusCode;
use mime::TEXT_PLAIN_UTF_8;
use palm::{
    cache::{
        redis::{ClusterConnection as Cache, Pool as CachePool},
        Provider as CacheProvider,
    },
    crypto::{random::string as random_string, Password, Secret},
    jwt::Jwt,
    nut::v1,
    queue::amqp::RabbitMq,
    rbac::{Role, Subject},
    search::OpenSearch,
    seo::{
        baidu::{ping as ping_baidu, Profile as BaiduProfile, SiteVerify as BaiduSiteVerify},
        google::{ping as ping_google, Profile as GoogleProfile, ReCaptcha as GoogleReCaptcha},
        index_now::{ping as ping_index_now, Profile as IndexNowProfile},
        Provider as SeoProvider,
    },
    session::Session,
    tasks::email::{Address as EmailAddress, Profile as SmtpProfile, Task as EmailTask},
    thrift::loquat::Config as Loquat,
    to_code, to_timestamp, try_grpc,
    twilio::Config as TwilioProfile,
    Error, GrpcResult, HttpError, Result,
};
use serde::{de::DeserializeOwned, Deserialize, Serialize};
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};
use validator::Validate;

use super::super::{
    controllers::Layout,
    i18n::I18n,
    models::{
        locale::Dao as LocaleDao,
        log::Dao as LogDao,
        setting::FlatBuffer as FlatbufferSetting,
        user::{Dao as UserDao, Item as User},
    },
    orm::postgresql::{Connection as Db, Pool as DbPool},
};
use super::CurrentUserAdapter;

pub struct Service {
    pub jwt: Arc<Loquat>,
    pub aes: Arc<Loquat>,
    pub hmac: Arc<Loquat>,
    pub db: DbPool,
    pub cache: CachePool,
    pub enforcer: Arc<Mutex<Enforcer>>,
    pub queue: Arc<RabbitMq>,
    pub search: Arc<OpenSearch>,
}

#[tonic::async_trait]
impl v1::site_server::Site for Service {
    async fn set_maintenance_mode(
        &self,
        req: Request<v1::SiteMaintenanceModeRequest>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            let ttl = req.ttl.ok_or(Status::invalid_argument("empty ttl"))?;
            MaintenanceMode {
                reason: req.reason,
                ttl: ttl.seconds,
            }
        };
        try_grpc!(set_profile(&ss, db, ch, enf, jwt, aes, &form, false).await)?;
        Ok(Response::new(()))
    }
    async fn install(&self, req: Request<v1::SiteInstallRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let hmac = self.hmac.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            let user = req.user.ok_or(Status::invalid_argument("empty account"))?;

            InstallRequest {
                nickname: user.nickname.clone(),
                real_name: user.real_name.clone(),
                timezone: user.timezone.clone(),
                email: user.email.clone(),
                password: user.password,
            }
        };
        try_grpc!(form.handle(&ss, db, enf, hmac).await)?;
        Ok(Response::new(()))
    }

    async fn clear_cache(&self, req: Request<()>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();

        try_grpc!(clear_cache(&ss, db, ch, enf, jwt).await)?;
        Ok(Response::new(()))
    }

    async fn layout(&self, req: Request<()>) -> GrpcResult<v1::SiteLayoutResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let aes = self.aes.deref();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();

        let it = try_grpc!(new_layout(&ss, db, ch, aes))?;
        Ok(Response::new(it))
    }
    async fn set_author(&self, req: Request<v1::site_layout_response::Author>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            Author {
                email: req.email.clone(),
                name: req.name,
            }
        };
        try_grpc!(set_profile(&ss, db, ch, enf, jwt, aes, &form, false).await)?;
        Ok(Response::new(()))
    }
    async fn set_copyright(&self, req: Request<v1::SiteSetCopyrightRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            Copyright {
                content: req.payload,
            }
        };
        try_grpc!(set_profile(&ss, db, ch, enf, jwt, aes, &form, false).await)?;
        Ok(Response::new(()))
    }
    async fn set_keywords(&self, req: Request<v1::SiteSetKeywordsRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            Keywords { items: req.items }
        };
        try_grpc!(set_profile(&ss, db, ch, enf, jwt, aes, &form, false).await)?;
        Ok(Response::new(()))
    }
    async fn set_info(&self, req: Request<v1::SiteSetInfoRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();

        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            Info {
                title: req.title.clone(),
                subhead: req.subhead.clone(),
                description: req.description,
            }
        };
        try_grpc!(form.save(&ss, db, ch, enf, jwt).await)?;
        Ok(Response::new(()))
    }
    async fn set_logo(&self, req: Request<v1::SiteSetLogoRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            Logo { url: req.url }
        };
        try_grpc!(set_profile(&ss, db, ch, enf, jwt, aes, &form, false).await)?;
        Ok(Response::new(()))
    }

    async fn set_twilio(&self, req: Request<v1::TwilioProfile>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            TwilioProfile {
                from: req.from.clone(),
                account_sid: req.account_sid.clone(),
                auth_token: req.auth_token.clone(),
                sms_status_callback: req.sms_status_callback,
            }
        };
        try_grpc!(set_profile(&ss, db, ch, enf, jwt, aes, &form, false).await)?;
        Ok(Response::new(()))
    }
    async fn get_twilio(&self, req: Request<()>) -> GrpcResult<v1::TwilioProfile> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let it: TwilioProfile = try_grpc!(get_profile(&ss, db, ch, enf, jwt, aes).await)?;
        Ok(Response::new(v1::TwilioProfile {
            from: it.from.clone(),
            account_sid: it.account_sid.clone(),
            auth_token: it.auth_token.clone(),
            sms_status_callback: it.sms_status_callback,
        }))
    }
    async fn ping_twilio(&self, req: Request<v1::SiteTwilioPingRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            TwilioPing {
                to: req.to.clone(),
                message: req.message,
            }
        };
        try_grpc!(form.handle(&ss, db, ch, enf, jwt, aes).await)?;
        Ok(Response::new(()))
    }

    async fn set_smtp(&self, req: Request<v1::SmtpProfile>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            let from = req
                .from
                .as_ref()
                .ok_or(Status::invalid_argument("empty from user"))?;
            SmtpProfile {
                host: req.host.clone(),
                port: req.port as u16,
                auth_method: req.auth_method as u8,
                password: req.password.clone(),
                from: EmailAddress {
                    email: from.email.clone(),
                    name: from.name.clone(),
                },
                cc: req
                    .cc
                    .iter()
                    .map(|x| EmailAddress {
                        email: x.email.clone(),
                        name: x.name.clone(),
                    })
                    .collect(),
                bcc: req
                    .bcc
                    .iter()
                    .map(|x| EmailAddress {
                        email: x.email.clone(),
                        name: x.name.clone(),
                    })
                    .collect(),
            }
        };
        try_grpc!(set_profile(&ss, db, ch, enf, jwt, aes, &form, false).await)?;
        Ok(Response::new(()))
    }
    async fn get_smtp(&self, req: Request<()>) -> GrpcResult<v1::SmtpProfile> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let it: SmtpProfile = try_grpc!(get_profile(&ss, db, ch, enf, jwt, aes).await)?;
        Ok(Response::new(v1::SmtpProfile {
            host: it.host.clone(),
            port: it.port as u32,
            auth_method: it.auth_method as i32,
            password: it.password.clone(),
            from: Some(v1::email_task::Address {
                email: it.from.email.clone(),
                name: it.from.name.clone(),
            }),
            cc: it
                .cc
                .iter()
                .map(|x| v1::email_task::Address {
                    email: x.email.clone(),
                    name: x.name.clone(),
                })
                .collect(),
            bcc: it
                .bcc
                .iter()
                .map(|x: &EmailAddress| v1::email_task::Address {
                    email: x.email.clone(),
                    name: x.name.clone(),
                })
                .collect(),
        }))
    }
    async fn ping_smtp(&self, req: Request<v1::SiteSmtpPingRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            let to = req
                .to
                .as_ref()
                .ok_or(Status::invalid_argument("empty to user"))?;
            SmtpPing {
                to: EmailAddress {
                    email: to.email.clone(),
                    name: to.name.clone(),
                },
                subject: req.subject,
                body: req.content,
            }
        };
        try_grpc!(form.handle(&ss, db, ch, enf, jwt, aes).await)?;
        Ok(Response::new(()))
    }

    async fn set_index_now(&self, req: Request<v1::IndexNowProfile>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            IndexNowProfile { key: req.key }
        };
        try_grpc!(set_profile(&ss, db, ch, enf, jwt, aes, &form, true).await)?;
        Ok(Response::new(()))
    }
    async fn get_index_now(&self, req: Request<()>) -> GrpcResult<v1::IndexNowProfile> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let it: IndexNowProfile = try_grpc!(get_profile(&ss, db, ch, enf, jwt, aes).await)?;
        Ok(Response::new(v1::IndexNowProfile { key: it.key }))
    }
    async fn ping_index_now(&self, req: Request<v1::IndexNowPingRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            Ping { home: req.home }
        };
        try_grpc!(form.index_now(&ss, db, ch, enf, jwt, aes).await)?;
        Ok(Response::new(()))
    }

    async fn set_google(&self, req: Request<v1::GoogleProfile>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            GoogleProfile {
                site_verify_id: req.site_verify_id.clone(),
                re_captcha: req.re_captcha.map(|x| GoogleReCaptcha {
                    site_key: x.site_key.clone(),
                    secret: x.secret,
                }),
            }
        };
        try_grpc!(set_profile(&ss, db, ch, enf, jwt, aes, &form, true).await)?;
        Ok(Response::new(()))
    }
    async fn get_google(&self, req: Request<()>) -> GrpcResult<v1::GoogleProfile> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let it: GoogleProfile = try_grpc!(get_profile(&ss, db, ch, enf, jwt, aes).await)?;
        Ok(Response::new(v1::GoogleProfile {
            site_verify_id: it.site_verify_id.clone(),
            re_captcha: it.re_captcha.map(|x| v1::google_profile::ReCaptcha {
                site_key: x.site_key.clone(),
                secret: x.secret,
            }),
        }))
    }
    async fn ping_google(&self, req: Request<v1::SitemapPingRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            Ping { home: req.home }
        };
        try_grpc!(form.google(&ss, db, ch, enf, jwt).await)?;
        Ok(Response::new(()))
    }

    async fn set_baidu(&self, req: Request<v1::BaiduProfile>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            BaiduProfile {
                site_verify: req.site_verify.map(|x| BaiduSiteVerify {
                    id: x.id.clone(),
                    content: x.content,
                }),
            }
        };
        try_grpc!(set_profile(&ss, db, ch, enf, jwt, aes, &form, true).await)?;
        Ok(Response::new(()))
    }
    async fn get_baidu(&self, req: Request<()>) -> GrpcResult<v1::BaiduProfile> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();

        let it: BaiduProfile = try_grpc!(get_profile(&ss, db, ch, enf, jwt, aes).await)?;
        Ok(Response::new(v1::BaiduProfile {
            site_verify: it.site_verify.map(|x| v1::baidu_profile::SiteVerify {
                id: x.id.clone(),
                content: x.content,
            }),
        }))
    }
    async fn ping_baidu(&self, req: Request<v1::SitemapPingRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();

        let form = {
            let req = req.into_inner();
            Ping { home: req.home }
        };
        try_grpc!(form.baidu(&ss, db, ch, enf, jwt).await)?;
        Ok(Response::new(()))
    }

    async fn status(&self, req: Request<()>) -> GrpcResult<v1::SiteStatusResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.db.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.cache.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let aes = self.aes.deref();
        let enf = self.enforcer.deref();
        let queue = self.queue.deref();
        let search = self.search.deref();

        let it = try_grpc!(new_status(&ss, db, ch, enf, jwt, aes, queue, search).await)?;
        Ok(Response::new(it))
    }
}

#[derive(Validate, Clone, Debug)]
pub struct BaiduPing {
    #[validate(url, length(min = 1, max = 127))]
    pub home: String,
}

pub async fn get_profile<J: Jwt, S: Secret, P: DeserializeOwned>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    aes: &S,
) -> Result<P> {
    {
        let (user, _, _) = ss.current_user(db, ch, jwt)?;
        user.is_administrator(enf).await?;
    }

    let it: P = FlatbufferSetting::get(db, aes, None)?;
    Ok(it)
}
pub async fn set_profile<J: Jwt, S: Secret, P: Validate + Serialize>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    aes: &S,
    form: &P,
    encode: bool,
) -> Result<()> {
    form.validate()?;

    {
        let (user, _, _) = ss.current_user(db, ch, jwt)?;
        user.is_administrator(enf).await?;
    }

    FlatbufferSetting::set(db, aes, None, form, encode)?;
    Ok(())
}

#[derive(Validate, Clone, Debug)]
pub struct Ping {
    #[validate(url, length(min = 1, max = 127))]
    pub home: String,
}

impl Ping {
    pub async fn google<J: Jwt>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        enf: &Mutex<Enforcer>,
        jwt: &J,
    ) -> Result<()> {
        self.validate()?;

        {
            let (user, _, _) = ss.current_user(db, ch, jwt)?;
            user.is_administrator(enf).await?;
        }

        ping_google(&self.home).await?;

        Ok(())
    }
    pub async fn baidu<J: Jwt>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        enf: &Mutex<Enforcer>,
        jwt: &J,
    ) -> Result<()> {
        self.validate()?;
        let (user, _, _) = ss.current_user(db, ch, jwt)?;
        user.is_administrator(enf).await?;

        for lang in LocaleDao::languages(db)?.iter() {
            let title = I18n::t(db, lang, Layout::SITE_TITLE, &None::<String>);
            ping_baidu(&self.home, &title, &format!("/{}/rss.xml", lang)).await?;
        }

        Ok(())
    }

    pub async fn index_now<J: Jwt, S: Secret>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        enf: &Mutex<Enforcer>,
        jwt: &J,
        aes: &S,
    ) -> Result<()> {
        self.validate()?;

        {
            let (user, _, _) = ss.current_user(db, ch, jwt)?;
            user.is_administrator(enf).await?;
        }

        let profile: IndexNowProfile = FlatbufferSetting::get(db, aes, None)?;

        let mut links = Vec::new();
        for lang in LocaleDao::languages(db)?.iter() {
            let items = SeoProvider::by_lang(ch, lang)?;
            let items: Vec<String> = items.iter().map(|x| x.path.clone()).collect::<_>();
            links.extend(items);
        }

        ping_index_now(&self.home, &profile.key, &links).await?;

        Ok(())
    }
}

#[derive(Serialize, Deserialize, Validate, Default, Debug)]
pub struct Author {
    #[validate(email, length(min = 1, max = 127))]
    pub email: String,
    #[validate(length(min = 1, max = 31))]
    pub name: String,
}

#[derive(Serialize, Deserialize, Validate, Debug)]
pub struct Copyright {
    #[validate(length(min = 1, max = 63))]
    pub content: String,
}

#[derive(Serialize, Deserialize, Validate, Debug)]
pub struct Logo {
    #[validate(url, length(min = 1, max = 127))]
    pub url: String,
}

#[derive(Serialize, Deserialize, Validate, Default, Debug)]
pub struct Keywords {
    pub items: Vec<String>,
}

#[derive(Serialize, Deserialize, Validate, Debug)]
pub struct Info {
    #[validate(length(min = 1, max = 127))]
    pub title: String,
    #[validate(length(min = 1, max = 63))]
    pub subhead: String,
    #[validate(length(min = 1, max = 500))]
    pub description: String,
}
impl Info {
    pub async fn save<J: Jwt>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        enf: &Mutex<Enforcer>,
        jwt: &J,
    ) -> Result<()> {
        self.validate()?;

        {
            let (user, _, _) = ss.current_user(db, ch, jwt)?;
            user.is_administrator(enf).await?;
        }

        db.transaction::<_, Error, _>(move |db| {
            I18n::set(db, &ss.lang, &Layout::SITE_TITLE.to_string(), &self.title)?;
            I18n::set(
                db,
                &ss.lang,
                &Layout::SITE_SUBHEAD.to_string(),
                &self.subhead,
            )?;
            I18n::set(
                db,
                &ss.lang,
                &Layout::SITE_DESCRIPTION.to_string(),
                &self.description,
            )?;
            Ok(())
        })?;

        Ok(())
    }
}

pub fn new_layout<S: Secret>(
    ss: &Session,
    db: &mut Db,
    _ch: &mut Cache,
    aes: &S,
) -> Result<v1::SiteLayoutResponse> {
    let keywords: Keywords = FlatbufferSetting::get(db, aes, None).unwrap_or_default();
    let copyright: Copyright =
        FlatbufferSetting::get(db, aes, None).unwrap_or_else(|_| Copyright {
            content: {
                let (_, year) = Utc::now().year_ce();
                format!("2013~{}", year)
            },
        });
    let languages = LocaleDao::languages(db).unwrap_or_default();
    let author: Author = FlatbufferSetting::get(db, aes, None).unwrap_or_default();
    let logo: Logo = FlatbufferSetting::get(db, aes, None).unwrap_or_else(|_| Logo {
        url: "/my/favicon.ico".to_string(),
    });
    Ok(v1::SiteLayoutResponse {
        author: Some(v1::site_layout_response::Author {
            email: author.email.clone(),
            name: author.name,
        }),
        keywords: keywords.items,
        copyright: copyright.content,
        logo: logo.url,
        languages,
        title: I18n::t(db, &ss.lang, Layout::SITE_TITLE, &None::<String>),
        subhead: I18n::t(db, &ss.lang, Layout::SITE_SUBHEAD, &None::<String>),
        description: I18n::t(db, &ss.lang, Layout::SITE_DESCRIPTION, &None::<String>),
    })
}

pub async fn clear_cache<J: Jwt>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
) -> Result<()> {
    {
        let (user, _, _) = ss.current_user(db, ch, jwt)?;
        user.is_administrator(enf).await?;
    }
    ch.clear()?;
    Ok(())
}

#[derive(Serialize, Deserialize, Validate, Debug)]
pub struct MaintenanceMode {
    #[validate(length(max = 255))]
    pub reason: String,
    #[validate(range(min = 60, max = 604800))]
    pub ttl: i64,
}

#[derive(Validate, Debug)]
pub struct InstallRequest {
    #[validate(length(min = 1, max = 31))]
    pub nickname: String,
    #[validate(length(min = 1, max = 63))]
    pub real_name: String,
    #[validate(email, length(min = 1, max = 127))]
    pub email: String,
    #[validate(length(min = 6, max = 32))]
    pub password: String,
    #[validate(length(min = 1, max = 31))]
    pub timezone: String,
}

impl InstallRequest {
    pub async fn handle<P: Password>(
        &self,
        ss: &Session,
        db: &mut Db,
        enf: &Mutex<Enforcer>,
        hmac: &P,
    ) -> Result<()> {
        self.validate()?;

        if UserDao::count(db)? > 0 {
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some("db isn't empty".to_string()),
            )));
        }

        let user = db.transaction::<_, Error, _>(move |db| {
            {
                UserDao::sign_up(
                    db,
                    hmac,
                    "Null",
                    User::NIL,
                    "nobody@local",
                    &random_string(32),
                    &User::GUEST_LANG.parse()?,
                    &User::GUEST_TIMEZONE.parse()?,
                )?;
                let user = UserDao::by_nickname(db, User::NIL)?;
                UserDao::lock(db, user.id, true)?;
                UserDao::enable(db, user.id, false)?;
            }

            let nickname = to_code!(self.nickname);
            let email = to_code!(self.email);
            let real_name = self.real_name.trim();
            UserDao::sign_up(
                db,
                hmac,
                real_name,
                &nickname,
                &email,
                &self.password,
                &ss.lang.parse()?,
                &self.timezone.parse()?,
            )?;
            let user = UserDao::by_email(db, &email)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(user.id),
                "sign up.",
            )?;
            UserDao::confirm(db, user.id)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                v1::user_logs_response::item::Level::Info,
                &ss.client_ip,
                Some(user.id),
                "confirmed.",
            )?;

            Ok(user)
        })?;

        {
            let mut enf = enf.lock().await;
            let name = Subject::to(&user);
            try_grpc!(
                enf.add_roles_for_user(
                    &name,
                    vec![Role::Root.to_string(), Role::Administrator.to_string()],
                    None,
                )
                .await
            )?;
        }

        Ok(())
    }
}

#[derive(Validate, Clone, Debug)]
pub struct TwilioPing {
    #[validate(phone, length(min = 1, max = 15))]
    pub to: String,
    #[validate(length(min = 1, max = 63))]
    pub message: String,
}

impl TwilioPing {
    pub async fn handle<J: Jwt, S: Secret>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        enf: &Mutex<Enforcer>,
        jwt: &J,
        aes: &S,
    ) -> Result<()> {
        self.validate()?;

        {
            let (user, _, _) = ss.current_user(db, ch, jwt)?;
            user.is_administrator(enf).await?;
        }
        let it: TwilioProfile = FlatbufferSetting::get(db, aes, None)?;
        it.sms(&self.to, &self.message, None).await?;

        Ok(())
    }
}

#[derive(Validate, Clone, Debug)]
pub struct SmtpPing {
    pub to: EmailAddress,
    #[validate(length(min = 1, max = 63))]
    pub subject: String,
    #[validate(length(min = 1, max = 500))]
    pub body: String,
}

impl SmtpPing {
    pub async fn handle<J: Jwt, S: Secret>(
        &self,
        ss: &Session,
        db: &mut Db,
        ch: &mut Cache,
        enf: &Mutex<Enforcer>,
        jwt: &J,
        aes: &S,
    ) -> Result<()> {
        self.validate()?;

        {
            let (user, _, _) = ss.current_user(db, ch, jwt)?;
            user.is_administrator(enf).await?;
        }
        let it: SmtpProfile = FlatbufferSetting::get(db, aes, None)?;

        let task = EmailTask {
            subject: self.subject.clone(),
            body: self.body.clone(),
            to: EmailAddress {
                name: self.to.name.clone(),
                email: self.to.email.clone(),
            },
            content_type: TEXT_PLAIN_UTF_8.to_string(),
            cc: Vec::new(),
            bcc: Vec::new(),
            attachments: Vec::new(),
        };
        it.send(&task)?;

        Ok(())
    }
}

pub async fn new_status<J: Jwt, S: Secret>(
    ss: &Session,
    db: &mut Db,
    ch: &mut Cache,
    enf: &Mutex<Enforcer>,
    jwt: &J,
    _aes: &S,
    queue: &RabbitMq,
    search: &OpenSearch,
) -> Result<v1::SiteStatusResponse> {
    {
        let (user, _, _) = ss.current_user(db, ch, jwt)?;
        user.is_administrator(enf).await?;
    }

    Ok(v1::SiteStatusResponse {
        system: Some(new_system_status()?),
        redis: Some(new_redis_status(ch)?),
        rabbitmq: Some(new_rabbitmq_status(queue).await?),
        opensearch: Some(new_opensearch_status(search).await?),
        mysql: None,
        postgresql: Some(new_postgresql_status(db)?),
        healthes: Vec::new(),
    })
}
pub fn new_postgresql_status(db: &mut Db) -> Result<v1::site_status_response::PostgreSql> {
    let ver: DatabaseVersion = sql_query("SELECT VERSION() AS value").get_result(db)?;
    let now: DatabaseNow = sql_query("SELECT CURRENT_TIMESTAMP AS value").get_result(db)?;
    let databases: Vec<Database> = sql_query(r#"SELECT pg_database.datname as "name", pg_size_pretty(pg_database_size(pg_database.datname)) AS "size" FROM pg_database ORDER by "size" DESC;"#).load(db)?;

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
pub async fn new_opensearch_status(
    search: &OpenSearch,
) -> Result<v1::site_status_response::OpenSearch> {
    let it = search.info().await?;
    Ok(v1::site_status_response::OpenSearch {
        url: it.0,
        info: it.1,
    })
}

pub async fn new_rabbitmq_status(queue: &RabbitMq) -> Result<v1::site_status_response::RabbitMq> {
    let con = lapin::Connection::connect_uri(queue.uri.clone(), queue.conn.clone()).await?;
    Ok(v1::site_status_response::RabbitMq {
        protocol: format!(
            "{} {}.{}.{}",
            lapin::protocol::metadata::NAME,
            lapin::protocol::metadata::MAJOR_VERSION,
            lapin::protocol::metadata::MINOR_VERSION,
            lapin::protocol::metadata::REVISION
        ),
        heartbeat: con.configuration().heartbeat() as u32,
    })
}

pub fn new_redis_status(db: &mut Cache) -> Result<v1::site_status_response::Redis> {
    let version = db.version()?;
    // FIXME
    let items = db
        .keys()?
        .iter()
        .map(|(node, key, ttl)| v1::site_status_response::redis::Item {
            ttl: *ttl,
            key: key.clone(),
            node: node.clone(),
        })
        .collect();

    Ok(v1::site_status_response::Redis {
        info: version,
        items,
    })
}

pub fn new_system_status() -> Result<v1::site_status_response::System> {
    Ok(v1::site_status_response::System {
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
