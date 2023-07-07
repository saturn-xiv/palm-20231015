use std::any::type_name;
use std::env::temp_dir;
use std::fs::File;
use std::io::{prelude::*, Error as IoError, ErrorKind as IoErrorKind};
use std::ops::{Deref, DerefMut};
use std::path::PathBuf;
use std::sync::{Arc, Mutex};
use std::thread;
use std::time::Duration as StdDuration;

use clap::Parser;
use diesel::sqlite::SqliteConnection as Db;
use palm::{
    crypto::Hmac,
    jwt::openssl::OpenSsl as SslJwt,
    network::ethernet::ArpScanner,
    network::{iptables::Iptables, Dmz, Lan},
    ops::router::v1 as ops_router_v1,
    parser::from_toml,
    Result, HOMEPAGE, VERSION,
};
use tonic::transport::Server;

use super::{env::Config, orm::open as open_db};

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
        let hmac = Arc::new(Hmac::new(&cfg.secrets.0)?);
        let jwt = Arc::new(SslJwt::new(cfg.secrets.0.clone()));
        let db = Arc::new(Mutex::new({
            let hmac = hmac.deref();
            let hmac = hmac.deref();
            open_db("tmp/db", hmac)?
        }));

        Self::generate_firewall_clean()?;
        if self.debug {
            if let Ok(mut db) = db.lock() {
                let db = db.deref_mut();
                ops_router::services::router::ApplyRequest::apply(db, false)?;
            }
            return Ok(());
        }
        info!("apply system settings");
        {
            if let Ok(mut db) = db.lock() {
                let db = db.deref_mut();
                ops_router::services::router::ApplyRequest::apply(db, true)?;
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

        let addr = cfg.rpc.addr();
        info!("start gRPC at {}", addr);
        Server::builder()
            .add_service(ops_router_v1::router_server::RouterServer::new(
                ops_router::services::router::Service {
                    db: db.clone(),
                    jwt: jwt.clone(),
                    hmac: hmac.clone(),
                },
            ))
            .serve(addr)
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
