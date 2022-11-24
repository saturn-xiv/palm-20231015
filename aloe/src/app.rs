use std::any::type_name;
use std::env::temp_dir;
use std::fs::File;
use std::io::{prelude::*, Error as IoError, ErrorKind as IoErrorKind};
use std::ops::{Deref, DerefMut};
use std::path::PathBuf;
use std::sync::{Arc, Mutex};
use std::thread;
use std::time::Duration;

use clap::Parser;
use diesel::sqlite::SqliteConnection as Db;
use palm::{
    crypto::Hmac,
    jwt::Jwt,
    network::iptables::Iptables,
    network::{dnsmasq::Dnsmasq, ethernet::ArpScanner},
    ops::router::v1 as ops_router_v1,
    parser::from_toml,
    timestamp_file, Result, BANNER, HOMEPAGE, VERSION,
};
use tonic::transport::Server;

use super::{env::Config, orm::open as open_db};

#[derive(Parser, Debug)]
#[clap(about, version=&VERSION.deref()[..], before_help=BANNER, after_help=HOMEPAGE, author)]
pub struct Args {
    #[clap(short, long, default_value = "config.toml")]
    pub config: PathBuf,
    #[clap(short, long)]
    pub debug: bool,
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

        if self.debug {
            return Self::run_debug_mode(db);
        }
        Self::generate_firewall_clean()?;
        info!("apply system settings");
        {
            let db = db.clone();
            if let Err(e) = ops_router::services::router::apply(db) {
                error!("{:?}", e);
            }
        }

        info!("start arp scan thread");
        {
            let db = db.clone();
            thread::spawn(move || loop {
                if let Err(e) = Self::run_arp_scan(db.clone()) {
                    error!("arp scan thread {:?}", e);
                }
                thread::sleep(Duration::from_secs(5));
            });
        }

        info!("start arp bind thread");
        {
            let db = db.clone();
            thread::spawn(move || loop {
                if let Err(e) = Self::run_arp_bind(db.clone()) {
                    error!("arp bind {:?}", e);
                }
                thread::sleep(Duration::from_secs(60 * 60));
            });
        }

        let addr = cfg.rpc.addr();
        info!("start gRPC at {}", addr);
        Server::builder()
            .add_service(ops_router_v1::router_server::RouterServer::new(
                ops_router::services::router::Service {
                    db: db.clone(),
                    jwt: jwt.clone(),
                },
            ))
            .add_service(ops_router_v1::user_server::UserServer::new(
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

    fn generate_firewall_clean() -> Result<()> {
        let file = temp_dir().join("firewall-clean.sh");
        info!("generate {}", file.display());
        {
            let mut file = File::open(&file)?;
            writeln!(&mut file, "{}", palm::network::BASH_HEADER)?;
            {
                let mut buf = String::new();
                palm::network::iptables::Flush {
                    input: true,
                    output: true,
                    forward: true,
                }
                .write(&mut buf)?;
                writeln!(&mut file, "{}", buf)?;
            }
            writeln!(&mut file, "{}", palm::network::BASH_FOOTER)?;
        }

        Ok(())
    }

    fn run_arp_bind(db: Arc<Mutex<Db>>) -> Result<()> {
        let hosts = Self::get_arp_hosts(db)?;
        debug!("total known {} hosts in local networks", hosts.len());
        let arp = palm::network::dnsmasq::Arp { hosts };
        arp.bind()?;
        Ok(())
    }
    fn get_arp_hosts(db: Arc<Mutex<Db>>) -> Result<Vec<palm::network::dnsmasq::Host>> {
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

    fn run_arp_scan(db: Arc<Mutex<Db>>) -> Result<()> {
        let (lan, dmz) = if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            let lan: ops_router_v1::Lan = ops_router::models::setting::Dao::get(db, None)?;
            let dmz: ops_router_v1::Dmz = ops_router::models::setting::Dao::get(db, None)?;
            Ok((lan, dmz))
        } else {
            Err(IoError::new(IoErrorKind::Other, "can't find lan setting"))
        }?;

        let mut hosts = Vec::new();
        if let Ok(ref it) = ArpScanner(lan.address).scan() {
            debug!(
                "found {} hosts in {}",
                it.len(),
                type_name::<ops_router_v1::Lan>()
            );
            hosts.extend(it.clone());
        }
        if let Ok(ref it) = ArpScanner(dmz.address).scan() {
            debug!(
                "found {} hosts in {}",
                it.len(),
                type_name::<ops_router_v1::Dmz>()
            );
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
    fn run_debug_mode(db: Arc<Mutex<Db>>) -> Result<()> {
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            {
                let bound: ops_router_v1::RouterBoundRequest =
                    ops_router::models::setting::Dao::get(db, None)?;
                for it in bound.items.iter() {
                    let it: ops_router_v1::Wan =
                        ops_router::models::setting::Dao::get(db, Some(it))?;
                    it.save()?;
                }
            }
            {
                let it: ops_router_v1::Lan = ops_router::models::setting::Dao::get(db, None)?;
                let hosts = ops_router::models::host::Dao::by_net(db, &it.address.parse()?)?
                    .iter()
                    .map(|x| palm::network::dnsmasq::Host {
                        mac: x.mac.clone(),
                        ip: x.ip.clone(),
                    })
                    .collect::<_>();
                it.save(hosts)?;
            }
            {
                let it: ops_router_v1::Dmz = ops_router::models::setting::Dao::get(db, None)?;
                let hosts = ops_router::models::host::Dao::by_net(db, &it.address.parse()?)?
                    .iter()
                    .map(|x| palm::network::dnsmasq::Host {
                        mac: x.mac.clone(),
                        ip: x.ip.clone(),
                    })
                    .collect::<_>();
                it.save(hosts)?;
            }
            {
                let file = temp_dir().join(timestamp_file("iptable", Some("sh")));
                debug!("write to {}", file.display());
                let script = ops_router::env::iptables::script(db)?;
                std::fs::write(&file, script)?;
            }
        }
        Ok(())
    }
}
