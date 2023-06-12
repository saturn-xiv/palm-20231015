pub mod mutation;
pub mod query;

use std::ops::Deref;

use actix_web::{get, route, web, HttpResponse, Responder, Result};
use actix_web_lab::respond::Html;
use casbin::Enforcer;
use juniper::{
    http::{graphiql::graphiql_source, GraphQLRequest},
    EmptySubscription, RootNode,
};
use nut::{
    controllers::{Loquat, Orchid},
    graphql::Context,
    orm::postgresql::Pool as DbPool,
};
use palm::{
    cache::redis::Pool as CachePool,
    graphql_playground,
    handlers::{locale::Locale, peer::ClientIp, token::Token},
    session::Session,
};
use tokio::sync::Mutex;

pub fn register(config: &mut web::ServiceConfig) {
    let schema = web::Data::new(Schema::new(
        query::Query,
        mutation::Mutation,
        EmptySubscription::new(),
    ));
    config
        .app_data(schema)
        .service(source)
        .service(graphql_playground);
}

type Schema = RootNode<'static, query::Query, mutation::Mutation, EmptySubscription<Context>>;
type Services = (
    web::Data<DbPool>,
    web::Data<CachePool>,
    web::Data<Loquat>,
    web::Data<Orchid>,
    web::Data<Mutex<Enforcer>>,
);

#[route("/graphql", method = "GET", method = "POST")]
async fn source(
    (client_ip, locale, token): (ClientIp, Locale, Token),
    (db, cache, loquat, orchid, enforcer): Services,
    schema: web::Data<Schema>,
    data: web::Json<GraphQLRequest>,
) -> Result<HttpResponse> {
    let db = db.deref();
    let db = db.deref();
    let cache = cache.deref();
    let cache = cache.deref();
    let enforcer = enforcer.into_inner();
    let ctx = Context {
        db: db.clone(),
        cache: cache.clone(),
        loquat: loquat.0.clone(),
        orchid: orchid.0.clone(),
        session: Session {
            lang: locale.to_string(),
            client_ip: client_ip.to_string(),
            token: token.0,
        },
        enforcer,
    };
    let res = data.execute(&schema, &ctx).await;
    Ok(HttpResponse::Ok().json(res))
}
