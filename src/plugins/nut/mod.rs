pub mod controllers;
pub mod handlers;
pub mod models;
pub mod schema;
pub mod services;
pub mod tasks;

#[allow(clippy::match_single_binding)]
pub mod v1;

use casbin::Enforcer;
use diesel_adapter::{casbin::prelude::*, DieselAdapter};

use super::super::{orm::postgresql::Pool as DbPool, Result};

pub async fn enforcer(pool: DbPool) -> Result<Enforcer> {
    let m = DefaultModel::from_file("model.conf").await?;
    let a = DieselAdapter::new(pool)?;
    let e = Enforcer::new(m, a).await?;
    Ok(e)
}
