pub mod mutation;
pub mod query;

use std::ops::Deref;

use actix_web::{route, web, HttpResponse, Result};
use casbin::Enforcer;
use juniper::{http::GraphQLRequest, EmptySubscription, RootNode};
use nut::{
    graphql::{Context, Musa},
    orm::postgresql::Pool as DbPool,
};
use orchid::Client as Orchid;
use palm::{
    cache::redis::Pool as CachePool,
    graphql_playground,
    handlers::{locale::Locale, peer::ClientIp, token::Token},
    session::Session,
    thrift::loquat::Config as Loquat,
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
    web::Data<Musa>,
    web::Data<Mutex<Enforcer>>,
);

#[route("/graphql", method = "GET", method = "POST")]
async fn source(
    (client_ip, locale, token): (ClientIp, Locale, Token),
    (db, cache, loquat, orchid, musa, enforcer): Services,
    schema: web::Data<Schema>,
    data: web::Json<GraphQLRequest>,
) -> Result<HttpResponse> {
    let db = db.deref();
    let db = db.deref();
    let cache = cache.deref();
    let cache = cache.deref();
    let enforcer = enforcer.into_inner();
    let loquat = loquat.into_inner();
    let orchid = orchid.into_inner();
    let musa = musa.into_inner();
    let ctx = Context {
        db: db.clone(),
        cache: cache.clone(),
        loquat,
        orchid,
        musa,
        enforcer,
        session: Session {
            lang: locale.to_string(),
            client_ip: client_ip.to_string(),
            token: token.0,
        },
    };
    let res = data.execute(&schema, &ctx).await;
    Ok(HttpResponse::Ok().json(res))
}
