use std::any::type_name;
use std::env::temp_dir;
use std::net::Ipv4Addr;
use std::ops::{Deref, DerefMut};
use std::path::{Component, Path};
use std::sync::{Arc, Mutex};

use diesel::{connection::Connection as DieselConnection, sqlite::SqliteConnection as Db};
use ipnet::Ipv4Net;
use palm::{jwt::Jwt, ops::router::v1, session::Session, try_grpc, Error, GrpcResult, Result};
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
    pub jwt: Arc<Jwt>,
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

            let lan: v1::Lan = SettingDao::get(db, None).unwrap_or_default();
            let dmz: v1::Dmz = SettingDao::get(db, None).unwrap_or_default();

            let mut wan = Vec::new();
            for (device, mac) in try_grpc!(palm::network::ethernet::detect())?.iter() {
                if device == &lan.device {
                    continue;
                }
                let it: v1::Wan = SettingDao::get(db, Some(device)).unwrap_or_else(|_| v1::Wan {
                    device: device.clone(),
                    mac: mac.to_hex_string(),
                    ..Default::default()
                });
                wan.push(it);
            }

            let script = try_grpc!(iptables::script(db))?;

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

            let bound: v1::RouterBoundRequest = SettingDao::get(db, None).unwrap_or_default();
            let dns: v1::Dns = SettingDao::get(db, None).unwrap_or_default();

            return Ok(Response::new(v1::RouterStatusResponse {
                wan,
                bound: bound.items,
                lan: Some(lan),
                dmz: Some(dmz),
                dns: Some(dns),
                script,
                hosts,
                rules,
                uptime: Some(prost_types::Duration {
                    seconds: uptime.as_secs() as i64,
                    ..Default::default()
                }),
            }));
        }
        Err(Status::permission_denied(type_name::<v1::UserProfile>()))
    }
    async fn bound(&self, req: Request<v1::RouterBoundRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let req = req.into_inner();

        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;

            let lan = try_grpc!(SettingDao::get::<v1::Lan>(db, None)).unwrap_or_default();
            for it in req.items.iter() {
                try_grpc!(palm::network::ethernet::mac_address(it))?;
                if &lan.device == it {
                    return Err(Status::invalid_argument(type_name::<v1::Wan>()));
                }
            }

            try_grpc!(SettingDao::set(db, None, &req))?;
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
    async fn set_wan(&self, req: Request<v1::Wan>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let req = req.into_inner();

        try_grpc!(req.validate())?;

        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;
            try_grpc!(SettingDao::set(db, Some(req.device.as_str()), &req))?;
            Ok(())
        } else {
            Err(Status::permission_denied(type_name::<v1::UserProfile>()))
        }?;

        Ok(Response::new(()))
    }
    async fn set_lan(&self, req: Request<v1::Lan>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let req = req.into_inner();

        try_grpc!(req.validate())?;

        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;

            let net = try_grpc!(req.address.parse::<Ipv4Net>())?;
            try_grpc!(db.transaction::<_, Error, _>(move |db| {
                SettingDao::set(db, None, &req)?;
                for it in try_grpc!(HostDao::by_net(db, &net))?.iter() {
                    try_grpc!(HostDao::destroy(db, it.id))?;
                }
                Ok(())
            }))?;

            Ok(())
        } else {
            Err(Status::permission_denied(type_name::<v1::UserProfile>()))
        }?;

        Ok(Response::new(()))
    }
    async fn set_dmz(&self, req: Request<v1::Dmz>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let jwt = self.jwt.deref();
        let req = req.into_inner();

        try_grpc!(req.validate())?;

        if let Ok(ref mut db) = self.db.lock() {
            let db = db.deref_mut();
            try_grpc!(ss.current_user(db, jwt))?;

            let net = try_grpc!(req.address.parse::<Ipv4Net>())?;
            try_grpc!(db.transaction::<_, Error, _>(move |db| {
                SettingDao::set(db, None, &req)?;
                for it in try_grpc!(HostDao::by_net(db, &net))?.iter() {
                    try_grpc!(HostDao::destroy(db, it.id))?;
                }
                Ok(())
            }))?;

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
pub fn apply(db: Arc<Mutex<Db>>, immediately: bool) -> Result<()> {
    let cfg = if let Ok(ref mut db) = db.lock() {
        let db = db.deref_mut();

        let lan: v1::Lan = SettingDao::get(db, None)?;
        let dmz: v1::Dmz = SettingDao::get(db, None)?;
        let dns: v1::Dns = SettingDao::get(db, None)?;
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

        Some((lan, dmz, wan, dns, hosts, firewall))
    } else {
        None
    };

    if let Some((ref lan, ref dmz, ref wan, ref dns, hosts, ref firewall)) = cfg {
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

        {
            // FIXME should save all wan
            // palm::network::save(&palm::network::iproute2::Config::new(wan))?;
            for it in wan.iter() {
                it.save()?;
            }
        }

        if immediately {
            palm::network::netplan::apply()?;
            palm::network::dnsmasq::apply()?;
            iptables::apply(firewall)?;
        } else {
            let file = temp_dir().join(palm::timestamp_file("firewall", Some("sh")));
            info!("write firewall rules to {}", file.display());
            std::fs::write(file, firewall)?;
        }
    }

    Ok(())
}
