use std::collections::BTreeMap;
use std::env::temp_dir;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::ops::DerefMut;
use std::path::{Component, Path};
use std::sync::Mutex;
use std::thread;

use diesel::{connection::Connection as DieselConnection, sqlite::SqliteConnection as Db};
use hyper::StatusCode;
use ipnet::Ipv4Net;
use juniper::GraphQLInputObject;
use palm::{
    jwt::openssl::OpenSsl as Jwt,
    network::{iptables::rule::Rule, Dmz, Dns, Host as LocalNetHost, Ip, Lan, Wan, WanPool},
    session::Session,
    Error, HttpError, Result,
};
use validator::Validate;

use super::super::super::{
    env::iptables,
    models::{
        host::Dao as HostDao,
        rule::Dao as RuleDao,
        setting::Dao as SettingDao,
        user::{Contact, Dao as UserDao},
    },
};
use super::super::CurrentUserAdapter;

pub fn reboot(ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
    if let Ok(ref mut db) = db.lock() {
        ss.current_user(db, jwt)?;
        Ok(())
    } else {
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }?;

    thread::spawn(|| {
        warn!("reboot system");
        if let Err(e) = nix::sys::reboot::reboot(nix::sys::reboot::RebootMode::RB_AUTOBOOT) {
            error!("{:?}", e);
        }
    });
    Ok(())
}

pub struct ApplyRequest {}

impl ApplyRequest {
    pub fn handle(ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
        if let Ok(ref mut db) = db.lock() {
            ss.current_user(db, jwt)?;

            Self::apply(db, true)?;
            return Ok(());
        };

        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }

    pub fn apply(db: &mut Db, immediately: bool) -> Result<()> {
        let lan: Lan = SettingDao::get(db, None)?;
        let dmz: Dmz = SettingDao::get(db, None)?;
        let dns: Dns = SettingDao::get(db, None)?;
        let wan_pool: WanPool = SettingDao::get(db, None)?;
        let hosts = HostDao::all(db)?;

        let mut wan = Vec::new();
        for (device, _) in palm::network::ethernet::detect().unwrap_or_default() {
            if let Ok(it) = SettingDao::get::<Wan>(db, Some(&device)) {
                if it.enable {
                    wan.push(it);
                }
            }
        }

        let firewall = iptables::script(db)?;

        {
            let tmp = Path::new(&Component::RootDir).join("etc").join("netplan");
            if tmp.exists() {
                warn!("clean {}", tmp.display());
                std::fs::remove_dir_all(&tmp)?;
            }
            std::fs::create_dir_all(&tmp)?;
        }
        {
            let hosts: Vec<LocalNetHost> = hosts
                .into_iter()
                .map(|x| LocalNetHost {
                    mac: x.mac.clone(),
                    name: x.name.clone(),
                    ip: x.ip,
                })
                .collect::<_>();
            palm::network::dnsmasq::save(&lan, &dmz, &dns, &hosts)?;
        }

        for it in wan.iter() {
            it.save()?;
        }

        if immediately {
            palm::network::netplan::apply()?;
            palm::network::dnsmasq::apply()?;
            wan_pool.apply()?;
            iptables::apply(&firewall)?;
        } else {
            let file = temp_dir().join(palm::timestamp_file("firewall", Some("sh")));
            info!("write firewall rules to {}", file.display());
            std::fs::write(file, &firewall)?;
        }

        Ok(())
    }
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "RouterSetWanPoolRequest")]
pub struct SetWanPoolRequest {
    #[validate(length(min = 3, max = 31))]
    pub device: String,
    #[validate(range(min = 1, max = 255))]
    pub weight: i32,
}

impl SetWanPoolRequest {
    pub fn handle(&self, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
        self.validate()?;
        debug!("set wan pool {:?}", self);
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            let mut it: WanPool = SettingDao::get(db, None)?;
            it.items.insert(self.device.clone(), self.weight as u8);
            validate_wan_pool(db, &it.items)?;
            SettingDao::set(db, None, &it)?;
            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "RouterSetDnsRequest")]
pub struct SetDnsRequest {
    pub items: Vec<String>,
}

impl SetDnsRequest {
    pub fn handle(&self, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
        self.validate()?;
        debug!("set dns {:?}", self);
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            let it = Dns {
                items: self.items.clone(),
            };
            SettingDao::set(db, None, &it)?;
            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "RouterStaticIpRequest")]
pub struct StaticIp {
    #[validate(length(min = 7, max = 17))]
    address: String,
    #[validate(length(min = 7, max = 17))]
    gateway: String,
    #[validate(length(min = 7, max = 17))]
    dns1: String,
    #[validate(length(min = 7, max = 17))]
    dns2: Option<String>,
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "RouterSetWanRequest")]
pub struct SetWanRequest {
    #[validate(length(min = 3, max = 31))]
    pub device: String,
    pub ip: Option<StaticIp>,
    #[validate(length(equal = 17))]
    pub mac: String,
    #[validate(range(min = 1, max = 255))]
    pub metric: i32,
    pub enable: bool,
}

impl SetWanRequest {
    pub fn handle(&self, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
        self.validate()?;
        debug!("set wan {:?}", self);
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            if !self.enable {
                if let Ok(ref pool) = SettingDao::get::<WanPool>(db, None) {
                    for (device, _) in pool.items.iter() {
                        if *device == self.device {
                            return Err(Box::new(HttpError(
                                StatusCode::FORBIDDEN,
                                Some(format!("{device} is in wan pool")),
                            )));
                        }
                    }
                }
            }

            let it = Wan {
                device: self.device.clone(),
                mac: self.mac.clone(),
                ip: match self.ip {
                    Some(ref it) => Ip::Static {
                        address: it.address.clone(),
                        gateway: it.gateway.clone(),
                        dns1: it.dns1.clone(),
                        dns2: it.dns2.clone(),
                    },
                    None => Ip::Dhcp { v6: false },
                },
                metric: self.metric as u8,
                enable: self.enable,
            };
            validate_wan(db, &it)?;
            SettingDao::set(db, Some(self.device.as_str()), &it)?;

            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "RouterSetLanRequest")]
pub struct SetLanRequest {
    pub profile: Option<Intranet>,
}

impl SetLanRequest {
    pub fn handle(&self, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
        debug!("set lan {:?}", self);
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            db.transaction::<_, Error, _>(move |db| {
                match self.profile {
                    Some(ref profile) => {
                        profile.validate()?;
                        let it = Lan {
                            device: profile.device.clone(),
                            address: profile.address.clone(),
                            mac: profile.mac.clone(),
                            metric: profile.metric as u8,
                        };
                        validate_lan(db, &it)?;
                        let net = profile.address.parse::<Ipv4Net>()?;
                        for it in HostDao::by_net(db, &net)?.iter() {
                            HostDao::destroy(db, it.id)?;
                        }
                        SettingDao::set(db, None, &it)?;
                    }
                    None => {
                        SettingDao::destroy::<Lan>(db, None)?;
                    }
                };

                Ok(())
            })?;
            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "RouterSetDmzRequest")]
pub struct SetDmzRequest {
    pub profile: Option<Intranet>,
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "RouterIntranetRequest")]
pub struct Intranet {
    #[validate(length(min = 3, max = 31))]
    pub device: String,
    #[validate(length(min = 7, max = 17))]
    pub address: String,
    #[validate(length(equal = 17))]
    pub mac: String,
    #[validate(range(min = 1, max = 255))]
    pub metric: i32,
}

impl SetDmzRequest {
    pub fn handle(&self, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
        debug!("set dmz {:?}", self);
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            db.transaction::<_, Error, _>(move |db| {
                match self.profile {
                    Some(ref profile) => {
                        self.validate()?;
                        let it = Dmz {
                            device: profile.device.clone(),
                            address: profile.address.clone(),
                            mac: profile.mac.clone(),
                            metric: profile.metric as u8,
                        };

                        validate_dmz(db, &it)?;
                        let net = profile.address.parse::<Ipv4Net>()?;
                        for it in HostDao::by_net(db, &net)?.iter() {
                            HostDao::destroy(db, it.id)?;
                        }
                        SettingDao::set(db, None, &it)?;
                    }
                    None => {
                        SettingDao::destroy::<Dmz>(db, None)?;
                    }
                };

                Ok(())
            })?;

            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "RouterFirewallInBoundRequest")]
pub struct FirewallInBoundRequest {
    #[validate(length(min = 1, max = 31))]
    pub name: String,
    #[validate(length(min = 1, max = 31))]
    pub group: String,
    #[validate(length(min = 3, max = 31))]
    pub device: String,
    #[validate(length(min = 3, max = 255))]
    pub source: Option<String>,
    pub tcp: bool,
    #[validate(range(min = 1, max = 65535))]
    pub port: i32,
}

impl FirewallInBoundRequest {
    pub fn create(&self, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
        self.validate()?;
        debug!("create in-bound rule {:?}", self);
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            let it = Rule::In {
                device: self.device.clone(),
                source: self.source.clone(),
                tcp: self.tcp,
                port: self.port as u16,
            };
            RuleDao::create(db, &self.name, &self.group, &it)?;
            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }

    pub fn update(&self, id: i32, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
        self.validate()?;
        debug!("update in-bound rule {} => {:?}", id, self);
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            let it = Rule::In {
                device: self.device.clone(),
                source: self.source.clone(),
                tcp: self.tcp,
                port: self.port as u16,
            };
            RuleDao::update(db, id, &self.name, &self.group, &it)?;
            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "RouterFirewallNatRequest")]
pub struct FirewallNatRequest {
    #[validate(length(min = 1, max = 31))]
    pub name: String,
    #[validate(length(min = 1, max = 31))]
    pub group: String,
    #[validate(length(min = 3, max = 31))]
    pub source_device: String,
    #[validate(range(min = 1, max = 65536))]
    pub source_port: i32,
    #[validate(length(min = 7, max = 17))]
    pub destination_ip: String,
    #[validate(range(min = 1, max = 65536))]
    pub destination_port: i32,
    pub tcp: bool,
}

impl FirewallNatRequest {
    pub fn create(&self, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
        self.validate()?;
        debug!("create nat rule {:?}", self);
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            let it = Rule::Nat {
                source_device: self.source_device.clone(),
                source_port: self.source_port as u16,
                tcp: self.tcp,
                destination_ip: self.destination_ip.clone(),
                destination_port: self.destination_port as u16,
            };
            RuleDao::create(db, &self.name, &self.group, &it)?;
            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
    pub fn update(&self, id: i32, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
        self.validate()?;
        debug!("update nat rule {} => {:?}", id, self);
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            let it = Rule::Nat {
                source_device: self.source_device.clone(),
                source_port: self.source_port as u16,
                tcp: self.tcp,
                destination_ip: self.destination_ip.clone(),
                destination_port: self.destination_port as u16,
            };
            RuleDao::update(db, id, &self.name, &self.group, &it)?;
            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

pub struct FirewallRuleDestroyRequest;

impl FirewallRuleDestroyRequest {
    pub fn handle(id: i32, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
        debug!("destroy rule {id} ");
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;
            RuleDao::destroy(db, id)?;
            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "RouterHostRequest")]
pub struct HostRequest {
    #[validate(length(min = 1, max = 31))]
    pub group: String,
    pub user: i32,
    #[validate(length(min = 7, max = 17))]
    pub ip: Option<String>,
    #[validate(length(max = 255))]
    pub location: Option<String>,
}

impl HostRequest {
    pub fn update(&self, id: i32, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
        debug!("update host {} => {:?}", id, self);
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            let it = HostDao::by_id(db, id)?;

            HostDao::update(
                db,
                it.id,
                self.user,
                &self.group,
                self.ip.as_deref(),
                self.location.as_deref(),
            )?;
            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(GraphQLInputObject, Validate, Debug)]
#[graphql(name = "RouterUserRequest")]
pub struct UserRequest {
    #[validate(length(min = 1, max = 63))]
    pub name: String,
    #[validate(length(min = 1, max = 63))]
    pub wechat: Option<String>,
    #[validate(phone)]
    pub phone: Option<String>,
    #[validate(email, length(max = 127))]
    pub email: Option<String>,
}

impl UserRequest {
    pub fn create(&self, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
        debug!("create user {:?}", self);
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            UserDao::create(
                db,
                &self.name,
                &Contact {
                    email: self.email.clone(),
                    phone: self.phone.clone(),
                    wechat: self.wechat.clone(),
                },
            )?;

            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
    pub fn update(&self, id: i32, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
        debug!("update user {} => {:?}", id, self);
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            UserDao::update(
                db,
                id,
                &self.name,
                &Contact {
                    email: self.email.clone(),
                    phone: self.phone.clone(),
                    wechat: self.wechat.clone(),
                },
            )?;

            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

macro_rules! check_ethernet_metric {
    ($x:expr, $y:expr) => {{
        if $x.metric == $y.metric {
            Err(Box::new(IoError::new(
                IoErrorKind::Other,
                format!(
                    "{} and {} metric({}) conflict",
                    $x.device, $y.device, $x.metric
                ),
            )))
        } else {
            Ok(())
        }
    }};
}

macro_rules! check_ethernet_metric_from_db {
    ($x:expr, $y:expr) => {{
        for (it, _) in palm::network::ethernet::detect()?.iter() {
            if it != &$y.device {
                if let Ok(ref it) = SettingDao::get::<Lan>($x, None) {
                    check_ethernet_metric!(it, $y)?;
                } else if let Ok(ref it) = SettingDao::get::<Dmz>($x, None) {
                    check_ethernet_metric!(it, $y)?;
                } else if let Ok(ref it) = SettingDao::get::<Wan>($x, Some(it)) {
                    check_ethernet_metric!(it, $y)?;
                }
            }
        }

        Ok::<(), Error>(())
    }};
}

fn validate_wan_pool(db: &mut Db, pool: &BTreeMap<String, u8>) -> Result<()> {
    for device in pool.keys() {
        palm::network::ethernet::mac_address(device)?;
        SettingDao::get::<Wan>(db, Some(device))?;
    }

    Ok(())
}
fn validate_wan(db: &mut Db, wan: &Wan) -> Result<()> {
    wan.validate()?;

    check_ethernet_metric_from_db!(db, wan)?;

    if let Ok(ref it) = SettingDao::get::<Lan>(db, None) {
        if it.device == wan.device {
            return Err(Box::new(IoError::new(
                IoErrorKind::Other,
                format!("{} is lan device", it.device),
            )));
        }
    }

    if let Ok(ref it) = SettingDao::get::<Dmz>(db, None) {
        if it.device == wan.device {
            return Err(Box::new(IoError::new(
                IoErrorKind::Other,
                format!("{} is dmz device", it.device),
            )));
        }
    }

    Ok(())
}

fn validate_lan(db: &mut Db, lan: &Lan) -> Result<()> {
    lan.validate()?;
    check_ethernet_metric_from_db!(db, lan)?;

    if let Ok(ref dmz) = SettingDao::get::<Dmz>(db, None) {
        if dmz.device == lan.device {
            return Err(Box::new(IoError::new(
                IoErrorKind::Other,
                format!("{} is dmz device", dmz.device),
            )));
        }
        {
            let lan = lan.address.parse::<Ipv4Net>()?.network();
            let dmz = dmz.address.parse::<Ipv4Net>()?.network();
            if lan == dmz {
                return Err(Box::new(IoError::new(
                    IoErrorKind::Other,
                    format!("{dmz} is dmz network"),
                )));
            }
        }
    }
    if SettingDao::get::<Wan>(db, Some(&lan.device)).is_ok() {
        return Err(Box::new(IoError::new(
            IoErrorKind::Other,
            format!("{} is wan device", lan.device),
        )));
    }
    Ok(())
}

fn validate_dmz(db: &mut Db, dmz: &Dmz) -> Result<()> {
    dmz.validate()?;
    check_ethernet_metric_from_db!(db, dmz)?;

    if let Ok(ref lan) = SettingDao::get::<Lan>(db, None) {
        if lan.device == dmz.device {
            return Err(Box::new(IoError::new(
                IoErrorKind::Other,
                format!("{} is lan device", lan.device),
            )));
        }
        {
            let lan = lan.address.parse::<Ipv4Net>()?.network();
            let dmz = dmz.address.parse::<Ipv4Net>()?.network();
            if lan == dmz {
                return Err(Box::new(IoError::new(
                    IoErrorKind::Other,
                    format!("{lan} is lan network"),
                )));
            }
        }
    }
    if SettingDao::get::<Wan>(db, Some(&dmz.device)).is_ok() {
        return Err(Box::new(IoError::new(
            IoErrorKind::Other,
            format!("{} is wan device", dmz.device),
        )));
    }
    Ok(())
}
