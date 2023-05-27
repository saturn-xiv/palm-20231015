pub mod mutation;
pub mod query;

use chrono::{NaiveDateTime, Utc};
use juniper::{Context as GraphQLContext, GraphQLObject};

pub struct Context {}

impl GraphQLContext for Context {}

#[derive(GraphQLObject)]
#[graphql(description = "Success")]
pub struct Succeeded {
    pub created_at: NaiveDateTime,
}

impl Default for Succeeded {
    fn default() -> Self {
        Self {
            created_at: Utc::now().naive_local(),
        }
    }
}
