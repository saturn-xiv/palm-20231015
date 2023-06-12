use std::any::type_name;
use std::env::temp_dir;
use std::fs::File;
use std::io::{prelude::*, Error as IoError, ErrorKind as IoErrorKind};
use std::ops::{Deref, DerefMut};
use std::path::PathBuf;
use std::sync::Mutex;
use std::thread;
use std::time::Duration as StdDuration;

use actix_cors::Cors;
use actix_identity::IdentityMiddleware;
use actix_session::{
    config::{BrowserSession, CookieContentSecurity, SessionLifecycle},
    storage::CookieSessionStore,
    SessionMiddleware,
};
use actix_web::{
    cookie::{time::Duration as CookieDuration, Key as CookieKey, SameSite},
    middleware, web, App, HttpServer,
};
use chrono::Duration;
use clap::Parser;
use data_encoding::BASE64;
use diesel::sqlite::SqliteConnection as Db;
use hyper::{
    header::{ACCEPT_LANGUAGE, AUTHORIZATION, CONTENT_TYPE, COOKIE},
    Method,
};
use palm::{
    crypto::Hmac,
    env::Environment,
    jwt::openssl::OpenSsl as SslJwt,
    network::ethernet::ArpScanner,
    network::{iptables::Iptables, Dmz, Lan},
    parser::from_toml,
    Result, HOMEPAGE, VERSION,
};

use super::{env::Config, graphql, orm::open as open_db};

#[derive(Parser, Debug)]
#[clap(about, author,
    version=&VERSION.deref()[..],
    after_help=HOMEPAGE)]
pub struct Args {
    #[clap(short, long, default_value = "config.toml")]
    pub config: PathBuf,
    #[clap(short, long)]
    pub debug: bool,
}

impl Args {
    pub async fn launch(&self) -> Result<()> {
        if cfg!(not(debug_assertions)) && !palm::network::is_root() {
            error!("please run as root");
            return Ok(());
        }
        {
            info!("load config from {}", self.config.display());
            palm::check_config_permission(&self.config)?;
        }
        let cfg: Config = from_toml(&self.config)?;
        let hmac = web::Data::new(Hmac::new(&cfg.secrets.0)?);
        let jwt = web::Data::new(SslJwt::new(cfg.secrets.0.clone()));
        let db = web::Data::new(Mutex::new({
            let hmac = hmac.deref();
            let hmac = hmac.deref();
            open_db("tmp/db", hmac)?
        }));

        Self::generate_firewall_clean()?;
        if self.debug {
            if let Ok(mut db) = db.lock() {
                let db = db.deref_mut();
                ops_router::graphql::mutation::router::ApplyRequest::apply(db, false)?;
            }
            return Ok(());
        }
        info!("apply system settings");
        {
            if let Ok(mut db) = db.lock() {
                let db = db.deref_mut();
                ops_router::graphql::mutation::router::ApplyRequest::apply(db, true)?;
                return Ok(());
            }
        }

        info!("start arp scan thread");
        {
            let db = db.clone();
            thread::spawn(move || loop {
                let db = db.deref();
                let db = db.deref();
                if let Err(e) = Self::run_arp_scan(db) {
                    error!("arp scan thread {:?}", e);
                }
                thread::sleep(StdDuration::from_secs(5));
            });
        }

        info!("start arp bind thread");
        {
            let db = db.clone();
            thread::spawn(move || loop {
                let db = db.deref();
                let db = db.deref();
                if let Err(e) = Self::run_arp_bind(db) {
                    error!("arp bind {:?}", e);
                }
                thread::sleep(StdDuration::from_secs(60 * 60));
            });
        }

        let addr = cfg.http.addr();
        info!("run on http://{}", addr);
        let cookie_key = BASE64.decode(cfg.cookie_key.0.as_bytes())?;
        let is_prod = cfg.env == Environment::Production;

        let allow_origins = cfg.http.allow_origins.clone();
        HttpServer::new(move || {
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
            let cors = {
                let mut cs = Cors::default();
                for it in allow_origins.iter() {
                    cs = cs.allowed_origin(it);
                }
                cs.allowed_methods(vec![
                    Method::OPTIONS,
                    Method::DELETE,
                    Method::PATCH,
                    Method::PUT,
                    Method::POST,
                    Method::GET,
                    Method::HEAD,
                ])
                .allowed_header(CONTENT_TYPE)
                .allowed_header(AUTHORIZATION)
                .allowed_header(ACCEPT_LANGUAGE)
                .allowed_header(COOKIE)
                .allowed_header("X-Requested-With")
                // .send_wildcard()
                .supports_credentials()
                .max_age(Duration::hours(1).num_seconds() as usize)
            };
            App::new()
                .app_data(db.clone())
                .app_data(jwt.clone())
                .app_data(hmac.clone())
                .wrap(if is_prod { cors } else { Cors::permissive() })
                .wrap(middleware::Logger::default())
                .wrap(IdentityMiddleware::default())
                .wrap(
                    SessionMiddleware::builder(
                        CookieSessionStore::default(),
                        CookieKey::from(&cookie_key),
                    )
                    .cookie_name(format!("{}.ss", env!("CARGO_PKG_NAME")))
                    .cookie_same_site(SameSite::Strict)
                    .cookie_http_only(true)
                    .cookie_content_security(CookieContentSecurity::Private)
                    .cookie_path("/".to_string())
                    .session_lifecycle(SessionLifecycle::BrowserSession(
                        BrowserSession::default().state_ttl(CookieDuration::hours(1)),
                    ))
                    .cookie_secure(is_prod)
                    .build(),
                )
                .configure(graphql::register)
        })
        .bind(addr)?
        .run()
        .await?;
        Ok(())
    }

    fn generate_firewall_clean() -> Result<()> {
        let file = temp_dir().join("firewall-clean.sh");
        info!("generate {}", file.display());
        {
            let mut file = File::create(&file)?;
            writeln!(&mut file, "{}", palm::network::BASH_HEADER)?;
            {
                let mut buf = String::new();
                palm::network::iptables::Flush {
                    input: true,
                    output: true,
                    forward: true,
                }
                .write(&mut buf)?;
                writeln!(&mut file, "{buf}")?;
            }
            writeln!(&mut file, "{}", palm::network::BASH_FOOTER)?;
        }

        Ok(())
    }

    fn run_arp_bind(db: &Mutex<Db>) -> Result<()> {
        let hosts = Self::get_arp_hosts(db)?;
        if !hosts.is_empty() {
            debug!("total known {} hosts in local networks", hosts.len());
            let arp = palm::network::dnsmasq::Arp { hosts };
            arp.bind()?;
        }
        Ok(())
    }
    fn get_arp_hosts(db: &Mutex<Db>) -> Result<Vec<palm::network::dnsmasq::Host>> {
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            let hosts: Vec<palm::network::dnsmasq::Host> = ops_router::models::host::Dao::all(db)?
                .iter()
                .filter(|x| x.fixed)
                .map(|x| palm::network::dnsmasq::Host {
                    mac: x.mac.clone(),
                    ip: x.ip.clone(),
                })
                .collect::<_>();
            return Ok(hosts);
        };
        Ok(Vec::new())
    }

    fn run_arp_scan(db: &Mutex<Db>) -> Result<()> {
        let (lan, dmz) = if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            let lan: Lan = ops_router::models::setting::Dao::get(db, None)?;
            let dmz: Dmz = ops_router::models::setting::Dao::get(db, None)?;
            Ok((lan, dmz))
        } else {
            Err(IoError::new(IoErrorKind::Other, "can't find lan setting"))
        }?;

        let mut hosts = Vec::new();
        if let Ok(ref it) = ArpScanner(lan.address).scan() {
            debug!("found {} hosts in {}", it.len(), type_name::<Lan>());
            hosts.extend(it.clone());
        }
        if let Ok(ref it) = ArpScanner(dmz.address).scan() {
            debug!("found {} hosts in {}", it.len(), type_name::<Dmz>());
            hosts.extend(it.clone());
        }

        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();

            for it in hosts {
                match ops_router::models::host::Dao::by_mac(db, &it.mac) {
                    Ok(ref it) => {
                        ops_router::models::host::Dao::set_ip(db, it.id, &it.ip)?;
                    }
                    Err(_) => {
                        ops_router::models::host::Dao::create(db, &it.mac, &it.ip)?;
                    }
                }
            }
        }
        Ok(())
    }
}
