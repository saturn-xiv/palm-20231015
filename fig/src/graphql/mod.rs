pub mod mutation;
pub mod query;

use actix_web::{get, route, web, HttpResponse, Responder, Result};
use actix_web_lab::respond::Html;
use juniper::{
    http::{graphiql::graphiql_source, GraphQLRequest},
    EmptySubscription, RootNode,
};
use nut::graphql::Context;

pub fn register(config: &mut web::ServiceConfig) {
    let schema = web::Data::new(Schema::new(
        query::Query,
        mutation::Mutation,
        EmptySubscription::new(),
    ));
    config.app_data(schema).service(source).service(playground);
}

type Schema = RootNode<'static, query::Query, mutation::Mutation, EmptySubscription<Context>>;

#[route("/graphql", method = "GET", method = "POST")]
async fn source(
    schema: web::Data<Schema>,
    data: web::Json<GraphQLRequest>,
) -> Result<HttpResponse> {
    let ctx = Context {};
    let res = data.execute(&schema, &ctx).await;
    Ok(HttpResponse::Ok().json(res))
}

#[get("/graphiql")]
async fn playground() -> impl Responder {
    Html(graphiql_source("/graphql", None))
}
