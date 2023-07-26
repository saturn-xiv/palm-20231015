use casbin::prelude::*;
use diesel_adapter::DieselAdapter;
use palm::{rbac::MODEL, Result};
// use sqlx_adapter::SqlxAdapter;

use super::orm::postgresql::Config as PostgreSql;

impl PostgreSql {
    pub async fn casbin(&self) -> Result<Enforcer> {
        let m = DefaultModel::from_str(MODEL).await?;
        let url = self.to_string();
        debug!("init casbin adapter");
        // let a = SqlxAdapter::new(&url, 4).await?;
        let a = DieselAdapter::new(&url, 4)?;
        let e = Enforcer::new(m, a).await?;
        Ok(e)
    }
}
