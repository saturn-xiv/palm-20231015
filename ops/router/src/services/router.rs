use std::collections::{BTreeMap, HashMap};
use std::env::temp_dir;
use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::ops::{Deref, DerefMut};
use std::path::{Component, Path};
use std::sync::{Arc, Mutex};
use std::thread;

use diesel::{connection::Connection as DieselConnection, sqlite::SqliteConnection as Db};
use hyper::StatusCode;
use ipnet::Ipv4Net;
use palm::{
    crypto::Hmac,
    jwt::openssl::OpenSsl as Jwt,
    network::{iptables::rule::Rule, Dmz, Dns, Host as LocalNetHost, Ip, Lan, Wan, WanPool},
    ops::router::v1,
    session::Session,
    try_grpc, Error, GrpcResult, HttpError, Result,
};
use tonic::{Request, Response, Status};
use validator::Validate;

use super::super::{
    env::iptables,
    models::{
        host::Dao as HostDao,
        rule::Dao as RuleDao,
        setting::Dao as SettingDao,
        user::{Contact, Dao as UserDao},
    },
};
use super::CurrentUserAdapter;

pub struct Service {
    pub db: Arc<Mutex<Db>>,
    pub jwt: Arc<Jwt>,
    pub hmac: Arc<Hmac>,
}

#[tonic::async_trait]
impl v1::router_server::Router for Service {
    async fn reboot(&self, req: Request<()>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        try_grpc!(reboot(&ss, db, jwt))?;
        Ok(Response::new(()))
    }
    async fn apply(&self, req: Request<()>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        try_grpc!(ApplyRequest::handle(&ss, db, jwt))?;
        Ok(Response::new(()))
    }
    async fn status(&self, req: Request<()>) -> GrpcResult<v1::RouterStatusResponse> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        let it = try_grpc!(new_status_response(&ss, db, jwt))?;
        Ok(Response::new(it))
    }
    async fn set_dns(&self, req: Request<v1::Dns>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        let form = {
            let req = req.into_inner();
            SetDnsRequest { items: req.items }
        };
        try_grpc!(form.handle(&ss, db, jwt))?;
        Ok(Response::new(()))
    }
    async fn set_wan(&self, req: Request<v1::RouterSetWanRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        let form = {
            let req = req.into_inner();
            let payload = req.payload.ok_or(Status::invalid_argument("empty wan"))?;
            let ip = payload.ip.ok_or(Status::invalid_argument("empty ip"))?;
            SetWanRequest {
                name: payload.name.clone(),
                device: payload.device.clone(),
                mac: payload.mac.clone(),
                metric: payload.metric as u8,
                ip: match ip {
                    v1::wan::Ip::Static(v1::Static {
                        ref address,
                        ref gateway,
                        ref dns1,
                        ref dns2,
                    }) => Some(StaticIp {
                        address: address.clone(),
                        gateway: gateway.clone(),
                        dns1: dns1.clone(),
                        dns2: dns2.clone(),
                    }),
                    v1::wan::Ip::Dhcp(_) => None,
                },
                enable: req.enable,
            }
        };
        try_grpc!(form.handle(&ss, db, jwt))?;
        Ok(Response::new(()))
    }
    async fn set_wan_pool(&self, req: Request<v1::WanPool>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        let form = {
            let req = req.into_inner();
            let mut items = Vec::new();
            for it in req.items.iter() {
                items.push(WanPoolItem {
                    device: it.device.clone(),
                    weight: it.weight as u8,
                })
            }
            SetWanPoolRequest { items }
        };
        try_grpc!(form.handle(&ss, db, jwt))?;
        Ok(Response::new(()))
    }
    async fn set_lan(&self, req: Request<v1::RouterSetLanRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        let form = {
            let req = req.into_inner();
            SetLanRequest {
                profile: if req.enable {
                    let it = req.payload.ok_or(Status::invalid_argument("empty lan"))?;
                    Some(Intranet {
                        device: it.device.clone(),
                        address: it.address.clone(),
                        mac: it.mac.clone(),
                        metric: it.metric as u8,
                    })
                } else {
                    None
                },
            }
        };
        try_grpc!(form.handle(&ss, db, jwt))?;
        Ok(Response::new(()))
    }
    async fn set_dmz(&self, req: Request<v1::RouterSetDmzRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        let form = {
            let req = req.into_inner();
            SetDmzRequest {
                profile: if req.enable {
                    let it = req.payload.ok_or(Status::invalid_argument("empty dmz"))?;
                    Some(Intranet {
                        device: it.device.clone(),
                        address: it.address.clone(),
                        mac: it.mac.clone(),
                        metric: it.metric as u8,
                    })
                } else {
                    None
                },
            }
        };
        try_grpc!(form.handle(&ss, db, jwt))?;
        Ok(Response::new(()))
    }
    async fn create_rule(&self, req: Request<v1::Rule>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();

        let req = req.into_inner();
        let payload = req.payload.ok_or(Status::invalid_argument("empty rule"))?;
        match payload {
            v1::rule::Payload::In(ref it) => {
                let form = FirewallInBoundRequest {
                    name: req.name.clone(),
                    group: req.group,
                    tcp: it.tcp,
                    device: it.device.clone(),
                    port: it.port as u16,
                    source: it.source.clone(),
                };
                try_grpc!(form.create(&ss, db, jwt))?;
            }
            v1::rule::Payload::Nat(ref it) => {
                let source = it
                    .source
                    .as_ref()
                    .ok_or(Status::invalid_argument("empty source"))?;
                let destination = it
                    .destination
                    .as_ref()
                    .ok_or(Status::invalid_argument("empty destination"))?;
                let form = FirewallNatRequest {
                    name: req.name.clone(),
                    group: req.group,
                    tcp: it.tcp,
                    source_device: source.device.clone(),
                    source_port: source.port as u16,
                    destination_ip: destination.ip.clone(),
                    destination_port: destination.port as u16,
                };
                try_grpc!(form.create(&ss, db, jwt))?;
            }
            v1::rule::Payload::Out(ref it) => {
                return Err(Status::unimplemented(format!("out rule {:?}", it)));
            }
        };

        Ok(Response::new(()))
    }
    async fn update_rule(
        &self,
        req: Request<v1::router_index_rule_response::Item>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();

        let req = req.into_inner();
        let payload = req.payload.ok_or(Status::invalid_argument("empty rule"))?;
        match payload {
            v1::router_index_rule_response::item::Payload::In(ref it) => {
                let form = FirewallInBoundRequest {
                    name: req.name.clone(),
                    group: req.group,
                    tcp: it.tcp,
                    device: it.device.clone(),
                    port: it.port as u16,
                    source: it.source.clone(),
                };
                try_grpc!(form.update(req.id, &ss, db, jwt))?;
            }
            v1::router_index_rule_response::item::Payload::Nat(ref it) => {
                let source = it
                    .source
                    .as_ref()
                    .ok_or(Status::invalid_argument("empty source"))?;
                let destination = it
                    .destination
                    .as_ref()
                    .ok_or(Status::invalid_argument("empty destination"))?;
                let form = FirewallNatRequest {
                    name: req.name.clone(),
                    group: req.group,
                    tcp: it.tcp,
                    source_device: source.device.clone(),
                    source_port: source.port as u16,
                    destination_ip: destination.ip.clone(),
                    destination_port: destination.port as u16,
                };
                try_grpc!(form.update(req.id, &ss, db, jwt))?;
            }
            v1::router_index_rule_response::item::Payload::Out(ref it) => {
                return Err(Status::unimplemented(format!("out rule {:?}", it)));
            }
        };

        Ok(Response::new(()))
    }
    async fn index_rule(&self, req: Request<()>) -> GrpcResult<v1::RouterIndexRuleResponse> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        let items = try_grpc!(new_rules(&ss, db, jwt))?;
        Ok(Response::new(v1::RouterIndexRuleResponse { items }))
    }
    async fn update_host(&self, req: Request<v1::RouterUpdateHostRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        let req = req.into_inner();
        let form = {
            HostRequest {
                user: req.user,
                group: req.group.clone(),
                ip: if req.fixed {
                    Some(req.ip.clone())
                } else {
                    None
                },
                location: req.location.clone(),
            }
        };
        try_grpc!(form.update(req.id, &ss, db, jwt))?;
        Ok(Response::new(()))
    }
    async fn index_user(&self, req: Request<()>) -> GrpcResult<v1::RouterIndexUserResponse> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        let items = try_grpc!(new_users(&ss, db, jwt))?;
        Ok(Response::new(v1::RouterIndexUserResponse { items }))
    }
    async fn update_user(
        &self,
        req: Request<v1::router_index_user_response::Item>,
    ) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        let req = req.into_inner();
        let contact = req
            .contact
            .as_ref()
            .ok_or(Status::invalid_argument("empty contact"))?;
        let form = {
            UserRequest {
                name: req.name.clone(),
                wechat: contact.wechat.clone(),
                address: contact.address.clone(),
                phone: contact.phone.clone(),
                email: contact.email.clone(),
            }
        };
        try_grpc!(form.update(req.id, &ss, db, jwt))?;
        Ok(Response::new(()))
    }
    async fn create_user(&self, req: Request<v1::RouterCreateUserRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let db = self.db.deref();
        let jwt = self.jwt.deref();
        let req = req.into_inner();
        let contact = req
            .contact
            .as_ref()
            .ok_or(Status::invalid_argument("empty contact"))?;
        let form = {
            UserRequest {
                name: req.name.clone(),
                wechat: contact.wechat.clone(),
                address: contact.address.clone(),
                phone: contact.phone.clone(),
                email: contact.email.clone(),
            }
        };
        try_grpc!(form.create(&ss, db, jwt))?;
        Ok(Response::new(()))
    }
}

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

pub struct ApplyRequest;

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

#[derive(Validate, Debug)]
pub struct SetWanPoolRequest {
    pub items: Vec<WanPoolItem>,
}

#[derive(Validate, Debug)]
pub struct WanPoolItem {
    #[validate(length(min = 3, max = 31))]
    pub device: String,
    #[validate(range(min = 1))]
    pub weight: u8,
}
impl SetWanPoolRequest {
    pub fn handle(&self, ss: &Session, db: &Mutex<Db>, jwt: &Jwt) -> Result<()> {
        self.validate()?;
        debug!("set wan pool {:?}", self);
        if let Ok(ref mut db) = db.lock() {
            let db = db.deref_mut();
            ss.current_user(db, jwt)?;
            let mut items = BTreeMap::new();
            for it in self.items.iter() {
                items.insert(it.device.clone(), it.weight);
            }
            validate_wan_pool(db, &items)?;
            warn!("set wan pool {:?}", items);
            SettingDao::set(db, None, &WanPool { items })?;
            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(Validate, Debug)]
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

#[derive(Validate, Debug)]
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

#[derive(Validate, Debug)]
pub struct SetWanRequest {
    #[validate(length(min = 1, max = 31))]
    pub name: String,
    #[validate(length(min = 1, max = 15))]
    pub device: String,
    pub ip: Option<StaticIp>,
    #[validate(length(equal = 17))]
    pub mac: String,
    #[validate(range(min = 1, max = 255))]
    pub metric: u8,
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
                name: self.name.clone(),
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
                metric: self.metric,
                enable: self.enable,
            };
            validate_wan(db, &it)?;
            SettingDao::set(db, Some(self.device.as_str()), &it)?;

            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(Validate, Debug)]
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
                            metric: profile.metric,
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

#[derive(Validate, Debug)]
pub struct SetDmzRequest {
    pub profile: Option<Intranet>,
}

#[derive(Validate, Debug)]
pub struct Intranet {
    #[validate(length(min = 3, max = 31))]
    pub device: String,
    #[validate(length(min = 7, max = 17))]
    pub address: String,
    #[validate(length(equal = 17))]
    pub mac: String,
    #[validate(range(min = 1))]
    pub metric: u8,
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
                            metric: profile.metric,
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

#[derive(Validate, Debug)]
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
    #[validate(range(min = 1))]
    pub port: u16,
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
                port: self.port,
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
                port: self.port,
            };
            RuleDao::update(db, id, &self.name, &self.group, &it)?;
            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
    }
}

#[derive(Validate, Debug)]
pub struct FirewallNatRequest {
    #[validate(length(min = 1, max = 31))]
    pub name: String,
    #[validate(length(min = 1, max = 31))]
    pub group: String,
    #[validate(length(min = 3, max = 31))]
    pub source_device: String,
    #[validate(range(min = 1))]
    pub source_port: u16,
    #[validate(length(min = 7, max = 17))]
    pub destination_ip: String,
    #[validate(range(min = 1))]
    pub destination_port: u16,
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
                source_port: self.source_port,
                tcp: self.tcp,
                destination_ip: self.destination_ip.clone(),
                destination_port: self.destination_port,
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
                source_port: self.source_port,
                tcp: self.tcp,
                destination_ip: self.destination_ip.clone(),
                destination_port: self.destination_port,
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

#[derive(Validate, Debug)]
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

#[derive(Validate, Debug)]
pub struct UserRequest {
    #[validate(length(min = 1, max = 63))]
    pub name: String,
    #[validate(length(min = 1, max = 63))]
    pub wechat: Option<String>,
    #[validate(phone)]
    pub phone: Option<String>,
    #[validate(email, length(max = 127))]
    pub email: Option<String>,
    #[validate(email, length(max = 127))]
    pub address: Option<String>,
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
                    address: self.address.clone(),
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
                    address: self.address.clone(),
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

pub fn new_status_response(
    ss: &Session,
    db: &Mutex<Db>,
    jwt: &Jwt,
) -> Result<v1::RouterStatusResponse> {
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

        let rules = {
            let mut items = Vec::new();
            {
                for it in RuleDao::all(db)?.iter() {
                    let ru: Rule = flexbuffers::from_slice(&it.content)?;
                    items.push(v1::Rule {
                        name: it.name.clone(),
                        group: it.group.clone(),
                        payload: Some(ru.into()),
                    })
                }
            }
            items
        };

        let uptime = {
            let si = nix::sys::sysinfo::sysinfo()?;
            si.uptime()
        };

        let wan_pool: WanPool = SettingDao::get(db, None).unwrap_or_default();
        let dns: Dns = SettingDao::get(db, None).unwrap_or_default();

        let interfaces = {
            let mut items = HashMap::new();
            for (ip, mac) in palm::network::ethernet::detect()?.iter() {
                items.insert(mac.to_hex_string(), ip.clone());
            }
            items
        };

        return Ok(v1::RouterStatusResponse {
            interfaces,
            wan: {
                let mut items = Vec::new();
                for it in wan {
                    items.push(it.into());
                }
                items
            },
            lan: lan.map(|x| x.into()),
            dmz: dmz.map(|x| x.into()),
            firewall,
            rules,
            ip: Some(v1::router_status_response::Ip::new()?),
            hosts: {
                let mut items = Vec::new();
                for it in HostDao::all(db)?.iter() {
                    items.push(it.to_host(db)?);
                }
                items
            },
            wan_pool: Some(wan_pool.into()),
            dns: Some(v1::Dns { items: dns.items }),
            uptime: Some(prost_types::Duration {
                seconds: uptime.as_secs() as i64,
                nanos: 0,
            }),
        });
    }
    Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
}

pub fn new_rules(
    ss: &Session,
    db: &Mutex<Db>,
    jwt: &Jwt,
) -> Result<Vec<v1::router_index_rule_response::Item>> {
    if let Ok(ref mut db) = db.lock() {
        let db = db.deref_mut();
        ss.current_user(db, jwt)?;

        let mut items = Vec::new();
        for it in RuleDao::all(db)?.iter() {
            let rule = it.rule()?;
            match rule {
                Rule::In {
                    ref device,
                    tcp,
                    port,
                    ref source,
                } => items.push(v1::router_index_rule_response::Item {
                    id: it.id,
                    name: it.name.clone(),
                    group: it.group.clone(),
                    payload: Some(v1::router_index_rule_response::item::Payload::In(
                        v1::rule::InBound {
                            device: device.clone(),
                            source: source.clone(),
                            tcp,
                            port: port as u32,
                        },
                    )),
                }),
                Rule::Nat {
                    ref source_device,
                    source_port,
                    tcp,
                    destination_port,
                    ref destination_ip,
                } => items.push(v1::router_index_rule_response::Item {
                    id: it.id,
                    name: it.name.clone(),
                    group: it.group.clone(),
                    payload: Some(v1::router_index_rule_response::item::Payload::Nat(
                        v1::rule::Nat {
                            source: Some(v1::rule::nat::Source {
                                device: source_device.clone(),
                                port: source_port as u32,
                            }),
                            destination: Some(v1::rule::nat::Destination {
                                port: destination_port as u32,
                                ip: destination_ip.clone(),
                            }),
                            tcp,
                        },
                    )),
                }),
            };
        }
        return Ok(items);
    }
    Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
}

pub fn new_users(
    ss: &Session,
    db: &Mutex<Db>,
    jwt: &Jwt,
) -> Result<Vec<v1::router_index_user_response::Item>> {
    if let Ok(ref mut db) = db.lock() {
        let db = db.deref_mut();
        ss.current_user(db, jwt)?;

        let mut items = Vec::new();
        for it in UserDao::all(db)?.iter() {
            items.push(v1::router_index_user_response::Item {
                id: it.id,
                name: it.name.clone(),
                contact: Some(it.contact()?.into()),
            });
        }
        return Ok(items);
    }
    Err(Box::new(HttpError(StatusCode::INTERNAL_SERVER_ERROR, None)))
}
