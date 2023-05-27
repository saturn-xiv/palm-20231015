pub mod mutation;
pub mod query;

use actix_web::{get, route, web, HttpResponse, Responder, Result};
use actix_web_lab::respond::Html;
use juniper::{
    http::{graphiql::graphiql_source, GraphQLRequest},
    EmptySubscription, RootNode,
};
use nut::graphql::Context;

pub type Schema = RootNode<'static, query::Query, mutation::Mutation, EmptySubscription<Context>>;

pub fn create_schema() -> Schema {
    Schema::new(query::Query, mutation::Mutation, EmptySubscription::new())
}

#[route("/graphql", method = "GET", method = "POST")]
pub async fn source(
    schema: web::Data<Schema>,
    data: web::Json<GraphQLRequest>,
) -> Result<HttpResponse> {
    let ctx = Context {};
    let res = data.execute(&schema, &ctx).await;
    Ok(HttpResponse::Ok().json(res))
}

#[get("/graphiql")]
pub async fn playground() -> impl Responder {
    Html(graphiql_source("/graphql", None))
}
