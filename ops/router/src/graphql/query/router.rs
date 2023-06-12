use std::ops::DerefMut;
use std::sync::Mutex;

use diesel::sqlite::SqliteConnection as Db;
use hyper::StatusCode;
use juniper::GraphQLObject;
use palm::{
    jwt::openssl::OpenSsl as Jwt,
    network::{iptables::rule::Rule, Dmz, Dns, Ip, Lan, Wan, WanPool},
    session::Session,
    HttpError, Result,
};
use serde::Deserialize;

use super::super::super::{
    env::iptables,
    models::{
        host::Dao as HostDao, rule::Dao as RuleDao, setting::Dao as SettingDao,
        user::Dao as UserDao,
    },
};
use super::super::CurrentUserAdapter;

#[derive(GraphQLObject)]
#[graphql(name = "RouterStatusResponse")]
pub struct StatusResponse {
    pub firewall: String,
    pub interfaces: Vec<Interface>,
    pub wan: Vec<Internet>,
    pub dmz: Option<Intranet>,
    pub lan: Option<Intranet>,
    pub wan_pool: Vec<WanPoolItem>,
    pub nat: Vec<FirewallNatBound>,
    pub r#in: Vec<FirewallInBound>,
    pub dns: Vec<String>,
    pub hosts: Vec<Host>,
    pub uptime: i32,
}

#[derive(GraphQLObject)]
#[graphql(name = "RouterIntranet")]
pub struct Intranet {
    pub device: String,
    pub address: String,
    pub mac: String,
    pub metric: i32,
}

#[derive(GraphQLObject)]
#[graphql(name = "RouterStaticIp")]
pub struct StaticIp {
    pub address: String,
    pub gateway: String,
    pub dns1: String,
    pub dns2: Option<String>,
}

#[derive(GraphQLObject)]
#[graphql(name = "RouterInternet")]
pub struct Internet {
    pub device: String,
    pub ip: Option<StaticIp>,
    pub mac: String,
    pub metric: i32,
    pub enable: bool,
}

#[derive(GraphQLObject)]
#[graphql(name = "RouterFirewallInBound")]
pub struct FirewallInBound {
    device: String,
    tcp: bool,
    port: i32,
    source: Option<String>,
}
#[derive(GraphQLObject)]
#[graphql(name = "RouterFirewallNatBound")]
pub struct FirewallNatBound {
    source_device: String,
    source_port: i32,
    tcp: bool,
    destination_port: i32,
    destination_ip: String,
}

#[derive(GraphQLObject)]
#[graphql(name = "RouterWanPoolItem")]
pub struct WanPoolItem {
    pub device: String,
    pub weight: i32,
}
#[derive(GraphQLObject)]
#[graphql(name = "RouterInterface")]
pub struct Interface {
    pub ip: String,
    pub mac: String,
}
#[derive(GraphQLObject)]
#[graphql(name = "RouterHost")]
pub struct Host {
    pub id: i32,
    pub name: String,
    pub mac: String,
    pub ip: String,
    pub fixed: bool,
    pub group: String,
    pub owner: Option<Owner>,
    pub location: Option<String>,
}
#[derive(GraphQLObject)]
#[graphql(name = "RouterOwner")]
pub struct Owner {
    pub name: String,
    pub contact: Contact,
}
#[derive(GraphQLObject, Deserialize)]
#[graphql(name = "RouterContact")]
pub struct Contact {
    pub name: String,
    pub phone: Option<String>,
    pub wechat: Option<String>,
    pub email: Option<String>,
}

impl StatusResponse {
    pub fn new(ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<Self> {
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            let lan: Option<Lan> = SettingDao::get(db, None).ok();
            let dmz: Option<Dmz> = SettingDao::get(db, None).ok();

            let mut wan = Vec::new();
            for (device, _) in palm::network::ethernet::detect()?.iter() {
                if let Ok(it) = SettingDao::get::<Wan>(db, Some(device)) {
                    wan.push(it);
                }
            }

            let firewall = iptables::script(db).unwrap_or_default();

            let mut in_ = Vec::new();
            let mut nat = Vec::new();
            {
                for it in RuleDao::all(db)? {
                    let it: Rule = flexbuffers::from_slice(&it.content)?;
                    match it {
                        Rule::In {
                            device,
                            tcp,
                            port,
                            source,
                        } => in_.push(FirewallInBound {
                            device,
                            tcp,
                            port: port as i32,
                            source,
                        }),
                        Rule::Nat {
                            source_device,
                            source_port,
                            tcp,
                            destination_port,
                            destination_ip,
                        } => nat.push(FirewallNatBound {
                            source_device,
                            source_port: source_port as i32,
                            tcp,
                            destination_ip,
                            destination_port: destination_port as i32,
                        }),
                    };
                }
            }

            let uptime = {
                let si = nix::sys::sysinfo::sysinfo()?;
                si.uptime()
            };

            let wan_pool: WanPool = SettingDao::get(db, None).unwrap_or_default();
            let dns: Dns = SettingDao::get(db, None).unwrap_or_default();

            let interfaces = {
                let mut items = Vec::new();
                for (ip, mac) in palm::network::ethernet::detect()?.iter() {
                    items.push(Interface {
                        ip: ip.clone(),
                        mac: mac.to_hex_string(),
                    })
                }
                items
            };

            return Ok(Self {
                interfaces,
                wan: wan
                    .iter()
                    .map(|x| Internet {
                        device: x.device.clone(),
                        ip: match x.ip {
                            Ip::Dhcp { .. } => None,
                            Ip::Static {
                                ref address,
                                ref gateway,
                                ref dns1,
                                ref dns2,
                            } => Some(StaticIp {
                                address: address.clone(),
                                gateway: gateway.clone(),
                                dns1: dns1.clone(),
                                dns2: dns2.clone(),
                            }),
                        },
                        enable: x.enable,
                        mac: x.mac.clone(),
                        metric: x.metric as i32,
                    })
                    .collect::<_>(),
                lan: lan.map(|x| Intranet {
                    device: x.device.clone(),
                    address: x.address.clone(),
                    mac: x.mac.clone(),
                    metric: x.metric as i32,
                }),
                dmz: dmz.map(|x| Intranet {
                    device: x.device.clone(),
                    address: x.address.clone(),
                    mac: x.mac.clone(),
                    metric: x.metric as i32,
                }),
                firewall,
                r#in: in_,
                nat,
                hosts: Host::all(db)?,
                wan_pool: wan_pool
                    .items
                    .iter()
                    .map(|(d, w)| WanPoolItem {
                        device: d.clone(),
                        weight: *w as i32,
                    })
                    .collect::<_>(),
                dns: dns.items,
                uptime: uptime.as_secs() as i32,
            });
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(GraphQLObject, Deserialize)]
#[graphql(name = "RouterIndexFirewallRuleResponse")]
pub struct IndexFirewallRuleResponse {
    pub nat: Vec<FirewallNatRule>,
    pub r#in: Vec<FirewallInBoundRule>,
}

#[derive(GraphQLObject, Deserialize)]
#[graphql(name = "RouterFirewallInBoundRule")]
pub struct FirewallInBoundRule {
    pub name: String,
    pub group: String,
    pub device: String,
    pub source: Option<String>,
    pub tcp: bool,
    pub port: i32,
}

#[derive(GraphQLObject, Deserialize)]
#[graphql(name = "RouterFirewallNatRule")]
pub struct FirewallNatRule {
    pub name: String,
    pub group: String,
    pub source_device: String,
    pub source_port: i32,
    pub destination_ip: String,
    pub destination_port: i32,
    pub tcp: bool,
}

impl IndexFirewallRuleResponse {
    pub fn new(ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<Self> {
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            let mut in_ = Vec::new();
            let mut nat = Vec::new();
            for it in RuleDao::all(db)?.iter() {
                let rule: Rule = flexbuffers::from_slice(&it.content)?;
                match rule {
                    Rule::In {
                        ref device,
                        tcp,
                        port,
                        ref source,
                    } => in_.push(FirewallInBoundRule {
                        name: it.name.clone(),
                        group: it.group.clone(),
                        device: device.clone(),
                        source: source.clone(),
                        tcp,
                        port: port as i32,
                    }),
                    Rule::Nat {
                        ref source_device,
                        source_port,
                        tcp,
                        destination_port,
                        ref destination_ip,
                    } => nat.push(FirewallNatRule {
                        name: it.name.clone(),
                        group: it.group.clone(),
                        source_device: source_device.clone(),
                        source_port: source_port as i32,
                        destination_port: destination_port as i32,
                        destination_ip: destination_ip.clone(),
                        tcp,
                    }),
                };
            }
            return Ok(Self { r#in: in_, nat });
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(GraphQLObject, Deserialize)]
#[graphql(name = "RouterUser")]
pub struct User {
    pub id: i32,
    pub name: String,
    pub wechat: Option<String>,
    pub phone: Option<String>,
    pub email: Option<String>,
}

impl User {
    pub fn all(ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<Vec<Self>> {
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            let mut items = Vec::new();
            for it in UserDao::all(db)?.iter() {
                let ic: Contact = flexbuffers::from_slice(&it.contact)?;
                items.push(User {
                    id: it.id,
                    name: it.name.clone(),
                    wechat: ic.wechat.clone(),
                    email: ic.email.clone(),
                    phone: ic.phone.clone(),
                });
            }
            return Ok(items);
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

impl Host {
    pub fn index(ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<Vec<Self>> {
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;

            let items = Self::all(db)?;
            return Ok(items);
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }

    fn all(db: &mut Db) -> Result<Vec<Self>> {
        let mut items = Vec::new();
        for it in HostDao::all(db)?.iter() {
            items.push(Host {
                id: it.id,
                name: it.name.clone(),
                mac: it.mac.clone(),
                location: it.location.clone(),
                group: it.group.clone(),
                ip: it.ip.clone(),
                fixed: it.fixed,
                owner: match it.user_id {
                    Some(id) => {
                        let user = UserDao::by_id(db, id)?;
                        Some(Owner {
                            name: user.name.clone(),
                            contact: flexbuffers::from_slice(&user.contact)?,
                        })
                    }
                    None => None,
                },
            });
        }
        Ok(items)
    }
}
