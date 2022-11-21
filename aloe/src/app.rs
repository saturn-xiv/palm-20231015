use std::ops::Deref;
use std::path::PathBuf;
use std::sync::{Arc, Mutex};

use clap::Parser;
use palm::{
    crypto::Hmac, jwt::Jwt, ops::router::v1, parser::from_toml, Result, BANNER, HOMEPAGE, VERSION,
};
use tonic::transport::Server;

use super::env::Config;

#[derive(Parser, Debug)]
#[clap(about, version=&VERSION.deref()[..], before_help=BANNER, after_help=HOMEPAGE, author)]
pub struct Args {
    #[clap(short, long, default_value = "config.toml")]
    pub config: PathBuf,
}

pub async fn launch() -> Result<()> {
    let args = Args::parse();
    {
        info!("load config from {}", args.config.display());
        palm::check_config_permission(&args.config)?;
    }
    let cfg: Config = from_toml(&args.config)?;
    let hmac = Arc::new(Hmac::new(&cfg.secrets.0)?);
    let jwt = Arc::new(Jwt::new(cfg.secrets.0.clone()));
    let db = Arc::new(Mutex::new(ops_router::orm::open("tmp/db")?));
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
