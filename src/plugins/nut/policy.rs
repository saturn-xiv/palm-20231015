use std::any::type_name;
use std::fmt;

use casbin::Enforcer;
use diesel_adapter::{casbin::prelude::*, DieselAdapter};
use uuid::Uuid;

use super::super::super::{orm::postgresql::Pool as DbPool, Result};
use super::models::user::Item as User;

pub async fn enforcer(pool: DbPool) -> Result<Enforcer> {
    let m = DefaultModel::from_file("model.conf").await?;
    let a = DieselAdapter::new(pool)?;
    let e = Enforcer::new(m, a).await?;
    Ok(e)
}
pub enum Action {
    Read,
    Write,
}

impl Action {
    const READ: &'static str = "read";
    const WRITE: &'static str = "write";
}
impl fmt::Display for Action {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "{}",
            match *self {
                Self::Read => Self::READ,
                Self::Write => Self::WRITE,
            }
        )
    }
}

pub enum Object {
    Site,
}

impl Object {
    const SITE: &'static str = "site";
}

impl fmt::Display for Object {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "{}",
            match *self {
                Self::Site => Self::SITE,
            }
        )
    }
}

pub fn by_user(id: Uuid) -> String {
    format!("{}.{}", type_name::<User>(), id)
}
