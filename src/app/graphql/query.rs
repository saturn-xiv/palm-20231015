use chrono::NaiveDate;
use juniper::{graphql_object, FieldResult};

use super::super::super::{
    plugins::nut::graphql::{query::UserLog, Context},
    VERSION,
};

pub struct Query;

#[graphql_object(
    context = Context,
)]
impl Query {
    fn apiVersion() -> &'static str {
        VERSION
    }
    fn userLogs(ctx: &Context, from: NaiveDate, to: NaiveDate) -> FieldResult<Vec<UserLog>> {
        let items = UserLog::by_date_range(ctx, &from, &to)?;
        Ok(items)
    }
}
