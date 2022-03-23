pub mod mutation;
pub mod query;

use std::any::type_name;

use actix_identity::Identity;
use actix_session::Session;
use actix_web::{web, HttpRequest, HttpResponse, Result};
use juniper::{EmptySubscription, RootNode};
use juniper_actix::{graphiql_handler, graphql_handler, playground_handler};

use super::super::{
    aws::{s3::Config as S3, Credentials as Aws},
    cache::redis::Pool as CachePool,
    captcha::Captcha,
    crypto::{Aes, Hmac},
    jwt::Jwt,
    orm::Pool as DbPool,
    plugins::nut::{
        graphql::Context,
        handlers::{locale::Locale, peer::ClientIp, token::Token},
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
    (db, cache, queue, aes, hmac, jwt, aws, s3, schema): (
        web::Data<DbPool>,
        web::Data<CachePool>,
        web::Data<RabbitMq>,
        web::Data<Aes>,
        web::Data<Hmac>,
        web::Data<Jwt>,
        web::Data<Aws>,
        web::Data<S3>,
        web::Data<Schema>,
    ),
    (locale, token, peer): (Locale, Token, ClientIp),
    (request, payload, session, id): (HttpRequest, web::Payload, Session, Identity),
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
            lang: locale.to_string(),
            peer: peer.to_string(),
            token,
            captcha: session.get::<String>(type_name::<Captcha>())?,
            id: id.identity(),
        },
        request,
        payload,
    )
    .await
}
