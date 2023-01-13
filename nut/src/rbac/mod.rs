pub mod watcher;

use casbin::prelude::*;
use sqlx_adapter::SqlxAdapter;

use super::{orm::postgresql::Config as PostgreSql, Result};

impl PostgreSql {
    pub async fn casbin(&self) -> Result<Enforcer> {
        let m = DefaultModel::from_str(include_str!("rbac_model.conf")).await?;
        let url = self.to_string();
        let a = SqlxAdapter::new(&url, 4).await?;
        let e = Enforcer::new(m, a).await?;
        Ok(e)
    }
}
