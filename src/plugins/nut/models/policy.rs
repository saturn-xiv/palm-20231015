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
    pub resource_type: String,
    pub resource_id: Option<i32>,
    pub created_at: NaiveDateTime,
}

impl fmt::Display for Item {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "{}@{}://{}/{}",
            self.role,
            self.resource_type,
            match self.resource_id {
                Some(i) => i.to_string(),
                None => "".to_string(),
            },
            self.operation
        )
    }
}

pub trait Dao {
    fn operations(&mut self) -> Result<Vec<String>>;
    fn roles(&mut self) -> Result<Vec<String>>;
    fn resources(&mut self) -> Result<Vec<String>>;
    fn by_role(&mut self, role: &str) -> Result<Vec<Item>>;
    fn by_operation(&mut self, operation: &str) -> Result<Vec<Item>>;
    fn by_resource_type(&mut self, resource_type: &str) -> Result<Vec<Item>>;
    fn by_resource(&mut self, resource_type: &str, resource_id: Option<i32>) -> Result<Vec<Item>>;
    fn index(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>>;
    fn count(&mut self) -> Result<i64>;
    fn create(
        &mut self,
        role: &str,
        operation: &str,
        resource_type: &str,
        resource_id: Option<i32>,
    ) -> Result<()>;
    fn get(
        &mut self,
        role: &str,
        operation: &str,
        resource_type: &str,
        resource_id: Option<i32>,
    ) -> Result<Item>;
    fn destroy(&mut self, id: i32) -> Result<()>;
}

impl Dao for Connection {
    fn resources(&mut self) -> Result<Vec<String>> {
        Ok(policies::dsl::policies
            .select(policies::dsl::role)
            .distinct()
            .order(policies::dsl::role.asc())
            .load::<String>(self)?)
    }
    fn roles(&mut self) -> Result<Vec<String>> {
        Ok(policies::dsl::policies
            .select(policies::dsl::role)
            .distinct()
            .order(policies::dsl::role.asc())
            .load::<String>(self)?)
    }
    fn operations(&mut self) -> Result<Vec<String>> {
        Ok(policies::dsl::policies
            .select(policies::dsl::operation)
            .distinct()
            .order(policies::dsl::operation.asc())
            .load::<String>(self)?)
    }
    fn by_role(&mut self, role: &str) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::role.eq(role))
            .order((
                policies::dsl::resource_type.asc(),
                policies::dsl::operation.asc(),
            ))
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_operation(&mut self, operation: &str) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::operation.eq(operation))
            .order(policies::dsl::resource_type.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_resource_type(&mut self, resource_type: &str) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .filter(policies::dsl::resource_type.eq(resource_type))
            .order(policies::dsl::operation.asc())
            .load::<Item>(self)?;
        Ok(items)
    }
    fn by_resource(&mut self, resource_type: &str, resource_id: Option<i32>) -> Result<Vec<Item>> {
        let items = match resource_id {
            Some(it) => policies::dsl::policies
                .filter(policies::dsl::resource_type.eq(resource_type))
                .filter(policies::dsl::resource_id.eq(it))
                .order(policies::dsl::operation.asc())
                .load::<Item>(self)?,
            None => policies::dsl::policies
                .filter(policies::dsl::resource_type.eq(resource_type))
                .filter(policies::dsl::resource_id.is_null())
                .order(policies::dsl::operation.asc())
                .load::<Item>(self)?,
        };
        Ok(items)
    }
    fn index(&mut self, offset: i64, limit: i64) -> Result<Vec<Item>> {
        let items = policies::dsl::policies
            .order((
                policies::dsl::role.asc(),
                policies::dsl::operation.asc(),
                policies::dsl::resource_type.asc(),
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
    fn create(
        &mut self,
        role: &str,
        operation: &str,
        resource_type: &str,
        resource_id: Option<i32>,
    ) -> Result<()> {
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
                policies::dsl::resource_type.eq(resource_type),
                policies::dsl::resource_id.eq(resource_id),
            ))
            .execute(self)?;
        Ok(())
    }
    fn get(
        &mut self,
        role: &str,
        operation: &str,
        resource_type: &str,
        resource_id: Option<i32>,
    ) -> Result<Item> {
        let it = policies::dsl::policies
            .filter(policies::dsl::role.eq(role))
            .filter(policies::dsl::operation.eq(operation))
            .filter(policies::dsl::resource_type.eq(resource_type))
            .filter(policies::dsl::resource_id.eq(resource_id))
            .first::<Item>(self)?;
        Ok(it)
    }
    fn destroy(&mut self, id: i32) -> Result<()> {
        delete(policies::dsl::policies.filter(policies::dsl::id.eq(id))).execute(self)?;
        Ok(())
    }
}
