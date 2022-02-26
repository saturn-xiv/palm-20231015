pub mod mutation;
pub mod query;

use actix_web::{web, HttpResponse, Result};
use juniper::{EmptySubscription, RootNode};
use juniper_actix::{graphiql_handler, graphql_handler, playground_handler};

use super::super::{
    aws::{s3::Config as S3, Credentials as Aws},
    cache::redis::Pool as CachePool,
    crypto::{Aes, Hmac},
    jwt::Jwt,
    orm::Pool as DbPool,
    plugins::nut::{
        graphql::Context,
        handlers::{locale::Locale, token::Token},
    },
    queue::amqp::RabbitMq,
};

pub type Schema = RootNode<'static, query::Query, mutation::Mutation, EmptySubscription<Context>>;

pub const GRAPHQL_ROUTE: &str = "/graphql";
pub const GRAPHIQL_ROUTE: &str = "/graphiql";
pub const PLAYGROUND_ROUTE: &str = "/playground";

pub async fn graphiql() -> Result<HttpResponse> {
    graphiql_handler(GRAPHQL_ROUTE, None).await
}
pub async fn playground() -> Result<HttpResponse> {
    playground_handler(GRAPHQL_ROUTE, None).await
}

#[allow(clippy::type_complexity)]
pub async fn index(
    (db, cache, queue, aes, hmac, jwt, aws, s3): (
        web::Data<DbPool>,
        web::Data<CachePool>,
        web::Data<RabbitMq>,
        web::Data<Aes>,
        web::Data<Hmac>,
        web::Data<Jwt>,
        web::Data<Aws>,
        web::Data<S3>,
    ),
    (locale, token): (Locale, Token),
    request: actix_web::HttpRequest,
    payload: actix_web::web::Payload,
    schema: web::Data<Schema>,
) -> Result<HttpResponse> {
    graphql_handler(
        &schema,
        &Context {
            db: db.get_ref().clone(),
            cache: cache.get_ref().clone(),
            queue: queue.into_inner(),
            aes: aes.into_inner(),
            hmac: hmac.into_inner(),
            jwt: jwt.into_inner(),
            aws: aws.into_inner(),
            s3: s3.into_inner(),
            lang: locale.0,
            peer: None,
            token: token.0.clone(),
        },
        request,
        payload,
    )
    .await
}
