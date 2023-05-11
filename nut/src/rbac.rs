use casbin::prelude::*;
use palm::rbac::MODEL;
use sqlx_adapter::SqlxAdapter;

use super::{orm::postgresql::Config as PostgreSql, Result};

impl PostgreSql {
    pub async fn casbin(&self) -> Result<Enforcer> {
        let m = DefaultModel::from_str(MODEL).await?;
        let url = self.to_string();
        let a = SqlxAdapter::new(&url, 4).await?;
        let e = Enforcer::new(m, a).await?;
        Ok(e)
    }
}