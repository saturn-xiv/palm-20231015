pub mod mutation;
pub mod query;

use std::ops::Deref;

use actix_web::{get, route, web, HttpResponse, Responder, Result};
use actix_web_lab::respond::Html;
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
    handlers::{locale::Locale, peer::ClientIp, token::Token},
    session::Session,
};

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
    (client_ip, locale, token): (ClientIp, Locale, Token),
    db: web::Data<DbPool>,
    cache: web::Data<CachePool>,
    loquat: web::Data<Loquat>,
    orchid: web::Data<Orchid>,
    schema: web::Data<Schema>,
    data: web::Json<GraphQLRequest>,
) -> Result<HttpResponse> {
    let db = db.deref();
    let db = db.deref();
    let cache = cache.deref();
    let cache = cache.deref();
    // let loquat = loquat.into_inner().0;
    // let orchid = orchid.into_inner().0;
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
    };
    let res = data.execute(&schema, &ctx).await;
    Ok(HttpResponse::Ok().json(res))
}

#[get("/graphiql")]
async fn playground() -> impl Responder {
    Html(graphiql_source("/graphql", None))
}
