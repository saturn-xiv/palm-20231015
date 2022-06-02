use std::fmt;

use chrono::NaiveDateTime;
use diesel::{delete, insert_into, prelude::*};
use hyper::StatusCode;
use serde::Serialize;

use super::super::super::super::{orm::postgresql::Connection, HttpError, Result};
use super::super::schema::policies;
use super::role::{ADMINISTRATOR, ROOT};

#[derive(Queryable, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    pub id: i32,
    pub role: String,
    pub operation: String,
    pub resource: String,
    pub created_at: NaiveDateTime,
}

impl Item {
    const SEP: &'static str = "://";
    pub fn resource(ty: &str, id: Option<i32>) -> String {
        match id {
            Some(id) => format!("{}{}{}", ty, Self::SEP, id),
            None => ty.to_string(),
        }
    }
    pub fn get_resource(&self) -> Result<(String, Option<i32>)> {
        match self.resource.find(Self::SEP) {
            Some(x) => {
                let ty = &self.resource[0..x];
                let id: i32 = (&self.resource[(x + Self::SEP.len())..]).parse()?;
                Ok((ty.to_string(), Some(id)))
            }
            None => Ok((self.resource.clone(), None)),
        }
    }
}

impl fmt::Display for Item {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}@{}://{}", self.role, self.resource, self.operation)
    }
}

pub trait Dao {
    fn by_role(&mut self, role: &str) -> Result<Vec<Item>>;
    fn by_operation(&mut self, operation: &str) -> Result<Vec<Item>>;
    fn by_resource(&mut self, resource: &str) -> Result<Vec<Item>>;
    fn index(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn count(&mut self) -> Result<i64>;
    fn create(&mut self, role: &str, operation: &str, resource: &str) -> Result<()>;
    fn get(&mut self, role: &str, operation: &str, resource: &str) -> Result<Item>;
    fn destroy(&mut self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn by_role(&mut self, role: &str) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::role.eq(role))
            .order((
                policies::dsl::resource.asc(),
                policies::dsl::operation.asc(),
            ))
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_operation(&mut self, operation: &str) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::operation.eq(operation))
            .order(policies::dsl::resource.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_resource(&mut self, resource: &str) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::resource.eq(resource))
            .order(policies::dsl::operation.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn index(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .order((
                policies::dsl::resource.asc(),
                policies::dsl::operation.asc(),
            ))
            .offset(offset)
            .limit(limit)
            .load::<Item>(self)?;
        Ok(items)
    }
    fn count(&mut self) -> Result<i64> {
        let cnt: i64 = policies::dsl::policies.count().get_result(self)?;
        Ok(cnt)
    }
    fn create(&mut self, role: &str, operation: &str, resource: &str) -> Result<()> {
        for it in [ADMINISTRATOR, ROOT] {
            if role == it {
                return Err(Box::new(HttpError(
                    StatusCode::BAD_REQUEST,
                    Some(format!("bad role code {:?}", role)),
                )));
            }
        }
        insert_into(policies::dsl::policies)
            .values((
                policies::dsl::role.eq(role),
                policies::dsl::operation.eq(operation),
                policies::dsl::resource.eq(resource),
            ))
            .execute(self)?;
        Ok(())
    }
    fn get(&mut self, role: &str, operation: &str, resource: &str) -> Result<Item> {
        let it = policies::dsl::policies
            .filter(policies::dsl::role.eq(role))
            .filter(policies::dsl::operation.eq(operation))
            .filter(policies::dsl::resource.eq(resource))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(policies::dsl::policies.filter(policies::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
