use chrono::NaiveDate;
use juniper::GraphQLObject;

use super::Context;

use super::super::super::super::Result;

#[derive(GraphQLObject)]
#[graphql(name = "UserLog")]
pub struct UserLog {
    pub id: String,
    pub name: String,
}

impl UserLog {
    pub fn by_date_range(
        _ctx: &Context,
        _from: &NaiveDate,
        _to: &NaiveDate,
    ) -> Result<Vec<UserLog>> {
        let items = Vec::new();
        // TODO
        Ok(items)
    }
}
