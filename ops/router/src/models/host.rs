use chrono::{NaiveDateTime, Utc};
use diesel::{insert_into, prelude::*, sqlite::SqliteConnection as Connection, update};
use palm::Result;

use super::super::schema::hosts;
use super::rule::Item as Rule;

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

pub trait Dao {
    fn create(&mut self, name: &str, mac: &str, ip: &str) -> Result<()>;
    fn set_user(&mut self, id: i32, user: i32) -> Result<()>;
    fn set_fixed_ip(&mut self, id: i32, ip: &str) -> Result<()>;
    fn set_dynamic_ip(&mut self, id: i32) -> Result<()>;
    fn set_location(&mut self, id: i32, location: &str) -> Result<()>;
    fn set_group(&mut self, id: i32, group: &str) -> Result<()>;
    fn by_id(&mut self, id: i32) -> Result<Item>;
    fn by_mac(&mut self, mac: &str) -> Result<Item>;
    fn all(&mut self) -> Result<Vec<Item>>;
}

impl Dao for Connection {
    fn create(&mut self, name: &str, mac: &str, ip: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        insert_into(hosts::dsl::hosts)
            .values((
                hosts::dsl::name.eq(name),
                hosts::dsl::group.eq(Rule::DEFAULT_GROUP),
                hosts::dsl::mac.eq(mac),
                hosts::dsl::ip.eq(ip),
                hosts::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn set_user(&mut self, id: i32, user: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = hosts::dsl::hosts.filter(hosts::dsl::id.eq(&id));

        update(it)
            .set((
                hosts::dsl::user_id.eq(user),
                hosts::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn set_group(&mut self, id: i32, group: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = hosts::dsl::hosts.filter(hosts::dsl::id.eq(&id));

        update(it)
            .set((hosts::dsl::group.eq(group), hosts::dsl::updated_at.eq(&now)))
            .execute(self)?;
        Ok(())
    }
    fn set_fixed_ip(&mut self, id: i32, ip: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = hosts::dsl::hosts.filter(hosts::dsl::id.eq(&id));

        update(it)
            .set((
                hosts::dsl::ip.eq(ip),
                hosts::dsl::fixed.eq(true),
                hosts::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
        Ok(())
    }
    fn set_dynamic_ip(&mut self, id: i32) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = hosts::dsl::hosts.filter(hosts::dsl::id.eq(&id));

        update(it)
            .set((hosts::dsl::fixed.eq(false), hosts::dsl::updated_at.eq(&now)))
            .execute(self)?;
        Ok(())
    }
    fn set_location(&mut self, id: i32, location: &str) -> Result<()> {
        let now = Utc::now().naive_utc();
        let it = hosts::dsl::hosts.filter(hosts::dsl::id.eq(&id));

        update(it)
            .set((
                hosts::dsl::location.eq(location),
                hosts::dsl::updated_at.eq(&now),
            ))
            .execute(self)?;
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
}
