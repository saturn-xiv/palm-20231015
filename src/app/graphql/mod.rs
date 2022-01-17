pub mod mutation;
pub mod query;

use juniper::{EmptySubscription, RootNode};

use super::super::plugins::nut::graphql::Context;

pub type Schema = RootNode<'static, query::Query, mutation::Mutation, EmptySubscription<Context>>;
