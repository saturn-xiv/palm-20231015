use std::any::type_name;
use std::env::temp_dir;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::net::Ipv4Addr;
use std::ops::{Deref, DerefMut};
use std::path::{Component, Path};
use std::sync::{Arc, Mutex};

use diesel::{connection::Connection as DieselConnection, sqlite::SqliteConnection as Db};
use ipnet::Ipv4Net;
use palm::{
    jwt::Jwt, ops::router::v1, session::Session, tink::Loquat, try_grpc, Error, GrpcResult, Result,
};
use prost::Message;
use tonic::{Request, Response, Status};
use validator::Validate;

use super::super::{
    env::iptables,
    models::{
        host::{Dao as HostDao, Item as Host},
        rule::{Dao as RuleDao, Item as Rule},
        setting::Dao as SettingDao,
        user::Dao as UserDao,
    },
};
use super::user::CurrentUserAdapter;

pub struct Service {
    pub db: Arc<Mutex<Db>>,
    pub loquat: Arc<Loquat>,
}

#[tonic::async_trait]
impl v1::router_server::Router for Service {
    async fn reboot(&self, req: Request<()>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();

        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;
            Ok(())
        } else {
            Err(Status::permission_denied(type_name::<v1::UserProfile>()))
        }?;

        tokio::spawn(async move {
            warn!("reboot system");
            if let Err(e) = nix::sys::reboot::reboot(nix::sys::reboot::RebootMode::RB_AUTOBOOT) {
                error!("{:?}", e);
            }
        });

        Ok(Response::new(()))
    }
    async fn apply(&self, req: Request<()>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();

        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;
            Ok(())
        } else {
            Err(Status::permission_denied(type_name::<v1::UserProfile>()))
        }?;

        try_grpc!(apply(self.db.clone(), true))?;
        Ok(Response::new(()))
    }
    async fn status(&self, req: Request<()>) -> GrpcResult<v1::RouterStatusResponse> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;

            let lan: Option<v1::Lan> = SettingDao::get(db, None).ok();
            let dmz: Option<v1::Dmz> = SettingDao::get(db, None).ok();

            let mut wan = Vec::new();
            for (device, _) in try_grpc!(palm::network::ethernet::detect())?.iter() {
                if let Ok(it) = SettingDao::get(db, Some(device)) {
                    wan.push(it);
                }
            }

            let firewall = iptables::script(db).unwrap_or_default();

            let mut hosts = Vec::new();
            for it in try_grpc!(HostDao::all(db))?.iter() {
                hosts.push(v1::Host {
                    id: it.id,
                    name: it.name.clone(),
                    mac: it.mac.clone(),
                    location: it.location.clone(),
                    group: it.group.clone(),
                    ip: it.ip.clone(),
                    fixed: it.fixed,
                    owner: match it.user_id {
                        Some(id) => {
                            let user = try_grpc!(UserDao::by_id(db, id))?;
                            Some(v1::host::Owner {
                                name: user.name.clone(),
                                contact: Some(try_grpc!(v1::Contact::decode(&user.contact[..]))?),
                            })
                        }
                        None => None,
                    },
                });
            }

            let mut rules = Vec::new();
            for it in try_grpc!(RuleDao::all(db))? {
                rules.push(it.into());
            }

            let uptime = {
                let si = try_grpc!(nix::sys::sysinfo::sysinfo())?;
                si.uptime()
            };

            let wan_pool: v1::WanPool = SettingDao::get(db, None).unwrap_or_default();
            let dns: v1::Dns = SettingDao::get(db, None).unwrap_or_default();
            let ip = try_grpc!(v1::router_status_response::Ip::new())?;
            let interfaces = {
                let items = try_grpc!(palm::network::ethernet::detect())?;
                items
                    .iter()
                    .map(|(k, v)| (k.clone(), v.to_hex_string()))
                    .collect::<_>()
            };

            return Ok(Response::new(v1::RouterStatusResponse {
                interfaces,
                wan,
                lan,
                dmz,
                firewall,
                hosts,
                rules,
                wan_pool: Some(wan_pool),
                dns: Some(dns),
                ip: Some(ip),
                uptime: Some(prost_types::Duration {
                    seconds: uptime.as_secs() as i64,
                    ..Default::default()
                }),
            }));
        }
        Err(Status::permission_denied(type_name::<v1::UserProfile>()))
    }
    async fn set_wan_pool(&self, req: Request<v1::WanPool>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let req = req.into_inner();

        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;

            let mut items = req.items;
            items.dedup_by(|x, y| x.device == y.device);
            try_grpc!(validate_wan_pool(db, &items))?;
            try_grpc!(SettingDao::set(db, None, &v1::WanPool { items }))?;
            Ok(())
        } else {
            Err(Status::permission_denied(type_name::<v1::UserProfile>()))
        }?;

        Ok(Response::new(()))
    }

    async fn set_dns(&self, req: Request<v1::Dns>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let req = req.into_inner();

        try_grpc!(req.validate())?;

        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;
            try_grpc!(SettingDao::set(db, None, &req))?;
            Ok(())
        } else {
            Err(Status::permission_denied(type_name::<v1::UserProfile>()))
        }?;

        Ok(Response::new(()))
    }
    async fn set_wan(&self, req: Request<v1::RouterSetWanRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let req = req.into_inner();

        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();

            try_grpc!(ss.current_user(db, jwt))?;
            if let Some(ref wan) = req.payload {
                if req.enable {
                    try_grpc!(validate_wan(db, wan))?;
                    try_grpc!(SettingDao::set(db, Some(wan.device.as_str()), wan))?;
                } else {
                    if let Ok(ref pool) = SettingDao::get::<v1::WanPool>(db, None) {
                        for it in pool.items.iter() {
                            if it.device == wan.device {
                                return Err(Status::permission_denied(format!(
                                    "{} is in wan pool",
                                    it.device
                                )));
                            }
                        }
                    }
                    try_grpc!(SettingDao::destroy::<v1::Wan>(
                        db,
                        Some(wan.device.as_str())
                    ))?;
                }
            }

            Ok(())
        } else {
            Err(Status::permission_denied(type_name::<v1::UserProfile>()))
        }?;

        Ok(Response::new(()))
    }
    async fn set_lan(&self, req: Request<v1::RouterSetLanRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let req = req.into_inner();

        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;

            if let Some(ref lan) = req.payload {
                if req.enable {
                    try_grpc!(validate_lan(db, lan))?;

                    let net = try_grpc!(lan.address.parse::<Ipv4Net>())?;
                    try_grpc!(db.transaction::<_, Error, _>(move |db| {
                        SettingDao::set(db, None, lan)?;
                        for it in try_grpc!(HostDao::by_net(db, &net))?.iter() {
                            try_grpc!(HostDao::destroy(db, it.id))?;
                        }
                        Ok(())
                    }))?;
                } else {
                    try_grpc!(SettingDao::destroy::<v1::Lan>(db, None))?;
                }
            }

            Ok(())
        } else {
            Err(Status::permission_denied(type_name::<v1::UserProfile>()))
        }?;

        Ok(Response::new(()))
    }
    async fn set_dmz(&self, req: Request<v1::RouterSetDmzRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let req = req.into_inner();

        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;

            if let Some(ref dmz) = req.payload {
                if req.enable {
                    try_grpc!(validate_dmz(db, dmz))?;
                    let net = try_grpc!(dmz.address.parse::<Ipv4Net>())?;
                    try_grpc!(db.transaction::<_, Error, _>(move |db| {
                        SettingDao::set(db, None, dmz)?;
                        for it in try_grpc!(HostDao::by_net(db, &net))?.iter() {
                            try_grpc!(HostDao::destroy(db, it.id))?;
                        }
                        Ok(())
                    }))?;
                } else {
                    try_grpc!(SettingDao::destroy::<v1::Dmz>(db, None))?;
                }
            }

            Ok(())
        } else {
            Err(Status::permission_denied(type_name::<v1::UserProfile>()))
        }?;

        Ok(Response::new(()))
    }
    async fn create_rule(&self, req: Request<v1::Rule>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let req = req.into_inner();
        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;
            if let Some(ref payload) = req.payload {
                try_grpc!(RuleDao::create(db, &req.name, &req.group, payload))?;
                return Ok(Response::new(()));
            }
        }
        Err(Status::permission_denied(type_name::<v1::UserProfile>()))
    }
    async fn update_rule(
        &self,
        req: Request<v1::router_index_rule_response::Item>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let req = req.into_inner();
        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;

            if let Some(ref payload) = req.payload {
                try_grpc!(RuleDao::update(
                    db,
                    req.id,
                    &req.name,
                    &req.group,
                    &match payload {
                        v1::router_index_rule_response::item::Payload::In(ref it) =>
                            v1::rule::Payload::In(it.clone()),
                        v1::router_index_rule_response::item::Payload::Out(ref it) =>
                            v1::rule::Payload::Out(it.clone()),
                        v1::router_index_rule_response::item::Payload::Nat(ref it) =>
                            v1::rule::Payload::Nat(it.clone()),
                    }
                ))?;
                return Ok(Response::new(()));
            }
        }
        Err(Status::permission_denied(type_name::<v1::UserProfile>()))
    }
    async fn index_rule(&self, req: Request<()>) -> GrpcResult<v1::RouterIndexRuleResponse> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();

        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;
            let mut items = Vec::new();
            for it in try_grpc!(RuleDao::all(db))? {
                items.push(it.into());
            }

            return Ok(Response::new(v1::RouterIndexRuleResponse { items }));
        }
        Err(Status::permission_denied(type_name::<v1::UserProfile>()))
    }
    async fn update_host(&self, req: Request<v1::RouterUpdateHostRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let req = req.into_inner();
        {
            let net = try_grpc!(req.zone.parse::<Ipv4Net>())?;
            let addr = try_grpc!(req.ip.parse::<Ipv4Addr>())?;
            if !net.contains(&addr) {
                return Err(Status::invalid_argument(type_name::<Ipv4Addr>()));
            }
        }
        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;
            let it = try_grpc!(HostDao::by_id(db, req.id))?;
            for it in try_grpc!(RuleDao::by_group(db, &req.group))?.iter() {
                if v1::rule::OutBound::decode(&it.content[..]).is_err() {
                    return Err(Status::invalid_argument(type_name::<v1::rule::OutBound>()));
                }
            }
            try_grpc!(HostDao::update(
                db,
                it.id,
                req.user,
                &req.group,
                &req.ip,
                req.fixed,
                req.location.as_deref(),
            ))?;
            return Ok(Response::new(()));
        }
        Err(Status::permission_denied(type_name::<v1::UserProfile>()))
    }

    async fn create_user(&self, req: Request<v1::RouterCreateUserRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let req = req.into_inner();
        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;
            if let Some(ref contact) = req.contact {
                try_grpc!(UserDao::create(db, &req.name, contact))?;
                return Ok(Response::new(()));
            }
        }
        Err(Status::permission_denied(type_name::<v1::UserProfile>()))
    }
    async fn update_user(
        &self,
        req: Request<v1::router_index_user_response::Item>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let req = req.into_inner();
        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;
            if let Some(ref contact) = req.contact {
                try_grpc!(UserDao::update(db, req.id, &req.name, contact))?;
                return Ok(Response::new(()));
            }
        }
        Err(Status::permission_denied(type_name::<v1::UserProfile>()))
    }
    async fn index_user(&self, req: Request<()>) -> GrpcResult<v1::RouterIndexUserResponse> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();

        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;
            let mut items = Vec::new();
            for it in try_grpc!(UserDao::all(db))? {
                items.push(v1::router_index_user_response::Item {
                    id: it.id,
                    name: it.name.clone(),
                    contact: Some(try_grpc!(v1::Contact::decode(&it.contact[..]))?),
                });
            }

            return Ok(Response::new(v1::RouterIndexUserResponse { items }));
        }
        Err(Status::permission_denied(type_name::<v1::UserProfile>()))
    }
}

impl From<Rule> for v1::router_index_rule_response::Item {
    fn from(it: Rule) -> Self {
        let mut rule = Self {
            id: it.id,
            name: it.name.clone(),
            group: it.group.clone(),
            payload: None,
        };
        if let Ok(it) = v1::rule::Nat::decode(&it.content[..]) {
            rule.payload = Some(v1::router_index_rule_response::item::Payload::Nat(it));
        } else if let Ok(it) = v1::rule::OutBound::decode(&it.content[..]) {
            rule.payload = Some(v1::router_index_rule_response::item::Payload::Out(it));
        } else if let Ok(it) = v1::rule::InBound::decode(&it.content[..]) {
            rule.payload = Some(v1::router_index_rule_response::item::Payload::In(it));
        } else {
            error!("unknown rule({})'s payload", it.id);
        }
        rule
    }
}
impl From<Rule> for v1::Rule {
    fn from(it: Rule) -> Self {
        let mut rule = Self {
            name: it.name.clone(),
            group: it.group.clone(),
            payload: None,
        };
        if let Ok(it) = v1::rule::Nat::decode(&it.content[..]) {
            rule.payload = Some(v1::rule::Payload::Nat(it));
        } else if let Ok(it) = v1::rule::OutBound::decode(&it.content[..]) {
            rule.payload = Some(v1::rule::Payload::Out(it));
        } else if let Ok(it) = v1::rule::InBound::decode(&it.content[..]) {
            rule.payload = Some(v1::rule::Payload::In(it));
        } else {
            error!("unknown rule({})'s payload", it.id);
        }
        rule
    }
}

impl From<Host> for v1::Host {
    fn from(it: Host) -> Self {
        Self {
            id: it.id,
            group: it.group.clone(),
            name: it.name.clone(),
            location: it.location.clone(),
            owner: None,
            mac: it.mac.clone(),
            ip: it.ip.clone(),
            fixed: it.fixed,
        }
    }
}

pub fn validate_wan_pool(db: &mut Db, pool: &[v1::wan_pool::Item]) -> Result<()> {
    for it in pool {
        palm::network::ethernet::mac_address(&it.device)?;
        SettingDao::get::<v1::Wan>(db, Some(&it.device))?;
    }

    Ok(())
}

pub fn apply(db: Arc<Mutex<Db>>, immediately: bool) -> Result<()> {
    let cfg = if let Ok(ref mut db) = db.lock() {
        let db = db.deref_mut();

        let lan: v1::Lan = SettingDao::get(db, None)?;
        let dmz: v1::Dmz = SettingDao::get(db, None)?;
        let dns: v1::Dns = SettingDao::get(db, None)?;
        let wan_pool: v1::WanPool = SettingDao::get(db, None)?;
        let hosts = HostDao::all(db)?;

        let mut wan = Vec::new();
        for (device, _) in palm::network::ethernet::detect().unwrap_or_default() {
            if let Ok(it) = SettingDao::get::<v1::Wan>(db, Some(&device)) {
                if it.ip.is_some() {
                    wan.push(it);
                }
            }
        }

        let firewall = iptables::script(db)?;

        Some((lan, dmz, wan, wan_pool, dns, hosts, firewall))
    } else {
        None
    };

    if let Some((ref lan, ref dmz, ref wan, ref wan_pool, ref dns, hosts, ref firewall)) = cfg {
        {
            let tmp = Path::new(&Component::RootDir).join("etc").join("netplan");
            if tmp.exists() {
                warn!("clean {}", tmp.display());
                std::fs::remove_dir_all(&tmp)?;
            }
            std::fs::create_dir_all(&tmp)?;
        }
        {
            let hosts: Vec<v1::Host> = hosts.into_iter().map(|x| x.into()).collect::<_>();
            palm::network::dnsmasq::save(lan, dmz, dns, &hosts)?;
        }

        for it in wan.iter() {
            it.save()?;
        }

        if immediately {
            palm::network::netplan::apply()?;
            palm::network::dnsmasq::apply()?;
            wan_pool.apply()?;
            iptables::apply(firewall)?;
        } else {
            let file = temp_dir().join(palm::timestamp_file("firewall", Some("sh")));
            info!("write firewall rules to {}", file.display());
            std::fs::write(file, firewall)?;
        }
    }

    Ok(())
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
                if let Ok(ref it) = SettingDao::get::<v1::Lan>($x, None) {
                    check_ethernet_metric!(it, $y)?;
                } else if let Ok(ref it) = SettingDao::get::<v1::Dmz>($x, None) {
                    check_ethernet_metric!(it, $y)?;
                } else if let Ok(ref it) = SettingDao::get::<v1::Wan>($x, Some(it)) {
                    check_ethernet_metric!(it, $y)?;
                }
            }
        }

        Ok::<(), Error>(())
    }};
}

pub fn validate_wan(db: &mut Db, wan: &v1::Wan) -> Result<()> {
    wan.validate()?;

    check_ethernet_metric_from_db!(db, wan)?;

    if let Ok(ref it) = SettingDao::get::<v1::Lan>(db, None) {
        if it.device == wan.device {
            return Err(Box::new(IoError::new(
                IoErrorKind::Other,
                format!("{} is lan device", it.device),
            )));
        }
    }

    if let Ok(ref it) = SettingDao::get::<v1::Dmz>(db, None) {
        if it.device == wan.device {
            return Err(Box::new(IoError::new(
                IoErrorKind::Other,
                format!("{} is dmz device", it.device),
            )));
        }
    }

    Ok(())
}

pub fn validate_lan(db: &mut Db, lan: &v1::Lan) -> Result<()> {
    lan.validate()?;
    check_ethernet_metric_from_db!(db, lan)?;

    if let Ok(ref dmz) = SettingDao::get::<v1::Dmz>(db, None) {
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
    if SettingDao::get::<v1::Wan>(db, Some(&lan.device)).is_ok() {
        return Err(Box::new(IoError::new(
            IoErrorKind::Other,
            format!("{} is wan device", lan.device),
        )));
    }
    Ok(())
}

pub fn validate_dmz(db: &mut Db, dmz: &v1::Dmz) -> Result<()> {
    dmz.validate()?;
    check_ethernet_metric_from_db!(db, dmz)?;

    if let Ok(ref lan) = SettingDao::get::<v1::Lan>(db, None) {
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
    if SettingDao::get::<v1::Wan>(db, Some(&dmz.device)).is_ok() {
        return Err(Box::new(IoError::new(
            IoErrorKind::Other,
            format!("{} is wan device", dmz.device),
        )));
    }
    Ok(())
}
