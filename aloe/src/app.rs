use std::fs::write as write_file;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::ops::{Deref, DerefMut};
use std::path::PathBuf;
use std::sync::{Arc, Mutex};
use std::thread;
use std::time::Duration;

use clap::Parser;
use ops_router::env::LanScanner;
use palm::{
    crypto::Hmac, jwt::Jwt, ops::router::v1, parser::from_toml, Result, BANNER, HOMEPAGE, VERSION,
};
use tonic::transport::Server;

use super::{env::Config, orm::open as open_db};

#[derive(Parser, Debug)]
#[clap(about, version=&VERSION.deref()[..], before_help=BANNER, after_help=HOMEPAGE, author)]
pub struct Args {
    #[clap(short, long, default_value = "config.toml")]
    pub config: PathBuf,
    #[clap(short, long)]
    pub r#try: bool,
}

impl Args {
    pub async fn launch(&self) -> Result<()> {
        {
            info!("load config from {}", self.config.display());
            palm::check_config_permission(&self.config)?;
        }
        let cfg: Config = from_toml(&self.config)?;
        let hmac = Arc::new(Hmac::new(&cfg.secrets.0)?);
        let jwt = Arc::new(Jwt::new(cfg.secrets.0.clone()));
        let db = Arc::new(Mutex::new({
            let hmac = hmac.deref();
            open_db("tmp/db", hmac)?
        }));

        if self.r#try {
            warn!("run on try mode");
            if let Ok(ref mut db) = db.lock() {
                let db = db.deref_mut();
                let script = ops_router::env::launch(db)?;
                let file = palm::timestamp_file("init", Some("sh"));
                write_file(file, script)?;
                return Ok(());
            }
        }

        info!("start scan thread");
        {
            let lan = if let Ok(ref mut db) = db.lock() {
                let db = db.deref_mut();
                let lan: palm::ops::router::v1::Lan =
                    ops_router::models::setting::Dao::get(db, None)?;
                Ok(lan)
            } else {
                Err(IoError::new(IoErrorKind::Other, "can't find lan setting"))
            }?;

            let db = db.clone();
            thread::spawn(move || loop {
                if let Ok(ref hosts) = lan.scan() {
                    if let Ok(ref mut db) = db.lock() {
                        let db = db.deref_mut();

                        for it in hosts {
                            if let Err(e) = match ops_router::models::host::Dao::by_mac(db, &it.mac)
                            {
                                Ok(ref it) => {
                                    ops_router::models::host::Dao::set_ip(db, it.id, &it.ip)
                                }
                                Err(_) => {
                                    ops_router::models::host::Dao::create(db, &it.mac, &it.ip)
                                }
                            } {
                                error!("{:?}", e);
                            }
                        }
                    }
                }

                thread::sleep(Duration::from_secs(5));
            });
        }

        let addr = cfg.rpc.addr();
        info!("start gRPC at {}", addr);
        Server::builder()
            .add_service(v1::router_server::RouterServer::new(
                ops_router::services::router::Service {
                    db: db.clone(),
                    jwt: jwt.clone(),
                },
            ))
            .add_service(v1::user_server::UserServer::new(
                ops_router::services::user::Service {
                    db: db.clone(),
                    jwt: jwt.clone(),
                    hmac,
                },
            ))
            .serve(addr)
            .await?;
        Ok(())
    }
}
