use std::net::Ipv4Addr;

use chrono::{NaiveDateTime, Utc};
use diesel::{delete, insert_into, prelude::*, sqlite::SqliteConnection as Connection, update};
use ipnet::Ipv4Net;
use palm::{ops::router::v1, Result};

use super::super::schema::hosts;
use super::{rule::Item as Rule, user::Dao as UserDao};

#[derive(Queryable)]
pub struct Item {
    pub id: i32,
    pub name: String,
    pub group: String,
    pub mac: String,
    pub ip: String,
    pub user_id: Option<i32>,
    pub location: Option<String>,
    pub fixed: bool,
    pub confirmed_at: Option<NaiveDateTime>,
    pub updated_at: NaiveDateTime,
}

impl Item {
    pub fn to_host(&self, db: &mut Connection) -> Result<v1::Host> {
        let it = v1::Host {
            id: self.id,
            name: self.name.clone(),
            mac: self.mac.clone(),
            ip: self.ip.clone(),
            fixed: self.fixed,
            group: self.group.clone(),
            location: self.location.clone(),
            owner: match self.user_id {
                Some(id) => {
                    let it = UserDao::by_id(db, id)?;
                    Some(v1::host::Owner {
                        name: it.name.clone(),
                        contact: Some(it.contact()?.into()),
                    })
                }
                None => None,
            },
        };
        Ok(it)
    }
}

pub trait Dao {
    fn create(&mut self, mac: &str, ip: &str) -> Result<()>;
    fn set_ip(&mut self, id: i32, ip: &str) -> Result<()>;
    fn update(
        &mut self,
        id: i32,
        user: i32,
        group: &str,
        ip: Option<&str>,
        location: Option<&str>,
    ) -> Result<()>;
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn by_mac(&mut self, mac: &str) -> Result<Item>;
    fn by_net(&mut self, net: &Ipv4Net) -> Result<Vec<Item>>;
    fn all(&mut self) -> Result<Vec<Item>>;
    fn destroy(&mut self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn create(&mut self, mac: &str, ip: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(hosts::dsl::hosts)
            .values((
                hosts::dsl::name.eq(mac.replace("::", "-")),
                hosts::dsl::group.eq(Rule::DEFAULT_GROUP),
                hosts::dsl::mac.eq(mac),
                hosts::dsl::ip.eq(ip),
                hosts::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn set_ip(&mut self, id: i32, ip: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = hosts::dsl::hosts.filter(hosts::dsl::id.eq(&id));
        update(it)
            .set((hosts::dsl::ip.eq(ip), hosts::dsl::updated_at.eq(&now)))
            .execute(self)?;
        Ok(())
    }
    fn update(
        &mut self,
        id: i32,
        user: i32,
        group: &str,
        ip: Option<&str>,
        location: Option<&str>,
    ) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = hosts::dsl::hosts.filter(hosts::dsl::id.eq(&id));

        match ip {
            Some(ip) => {
                update(it)
                    .set((
                        hosts::dsl::user_id.eq(user),
                        hosts::dsl::group.eq(group),
                        hosts::dsl::ip.eq(ip),
                        hosts::dsl::fixed.eq(true),
                        hosts::dsl::location.eq(location),
                        hosts::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
            None => {
                update(it)
                    .set((
                        hosts::dsl::user_id.eq(user),
                        hosts::dsl::group.eq(group),
                        hosts::dsl::fixed.eq(false),
                        hosts::dsl::location.eq(location),
                        hosts::dsl::updated_at.eq(&now),
                    ))
                    .execute(self)?;
            }
        };

        Ok(())
    }

    fn by_id(&mut self, id: i32) -> Result<Item> {
        let it = hosts::dsl::hosts
            .filter(hosts::dsl::id.eq(id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn by_mac(&mut self, mac: &str) -> Result<Item> {
        let it = hosts::dsl::hosts
            .filter(hosts::dsl::mac.eq(mac))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn all(&mut self) -> Result<Vec<Item>> {
        let items = hosts::dsl::hosts
            .order(hosts::dsl::ip.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_net(&mut self, net: &Ipv4Net) -> Result<Vec<Item>> {
        let items = Dao::all(self)?
            .into_iter()
            .filter(|x| {
                x.ip.parse::<Ipv4Addr>()
                    .map(|x| net.contains(&x))
                    .unwrap_or(false)
            })
            .collect::<_>();
        Ok(items)
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(hosts::dsl::hosts.filter(hosts::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
