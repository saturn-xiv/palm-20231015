use std::sync::Arc;

use hyper::{
    header::{ACCEPT, ACCEPT_LANGUAGE, AUTHORIZATION, CONTENT_TYPE},
    Method,
};
use juniper::EmptySubscription;
use warp::Filter;

use super::super::{
    crypto::{Aes, Hmac},
    env::Config,
    jwt::Jwt,
    plugins::{
        forum,
        nut::{
            self,
            controllers::{with_db, with_jwt},
        },
    },
    Result,
};
use super::graphql::{mutation::Mutation, query::Query, Schema};

pub async fn launch(cfg: &Config) -> Result<()> {
    let auth = warp::header::optional::<String>("authorization");
    let db = cfg.postgresql.open()?;
    let cache = cfg.redis.open()?;
    let aes = Arc::new(Aes::new(&cfg.secrets.0)?);
    let hmac = Arc::new(Hmac::new(&cfg.secrets.0)?);
    let jwt = Arc::new(Jwt::new(cfg.secrets.0.clone()));
    let queue = Arc::new(cfg.rabbitmq.open());
    let aws = Arc::new(cfg.aws.clone());
    let s3 = Arc::new(cfg.s3.clone());

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    // let origins: Vec<Origin> = cfg.allow_origins.iter().map(|it| &it[..]).collect();
    let cors = warp::cors()
        .allow_credentials(true)
        // .allow_origins(
        //     cfg.http
        //         .allow_origins
        //         .iter()
        //         .map(|it| &it[..])
        //         .collect::<Vec<&str>>(),
        // )
        .allow_any_origin()
        .allow_header(CONTENT_TYPE)
        .allow_header(AUTHORIZATION)
        .allow_header(ACCEPT_LANGUAGE)
        .allow_header(ACCEPT)
        .allow_method(Method::OPTIONS)
        .allow_method(Method::POST)
        .allow_method(Method::GET);

    let forum_index = warp::path!(String / "forum")
        .and(with_db(db.clone()))
        .and_then(forum::controllers::index);
    let forum_topics_index = warp::path!(String / "forum" / "topics")
        .and(with_db(db.clone()))
        .and_then(forum::controllers::topics::index);
    let forum_topics_show = warp::path!(String / "forum" / "topics" / i32)
        .and(with_db(db.clone()))
        .and_then(forum::controllers::topics::show);
    let forum_posts_index = warp::path!(String / "forum" / "posts")
        .and(with_db(db.clone()))
        .and_then(forum::controllers::posts::index);
    let forum_posts_show = warp::path!(String / "forum" / "posts" / i32)
        .and(with_db(db.clone()))
        .and_then(forum::controllers::posts::show);

    let robots_txt = warp::path("robots.txt")
        .and(warp::filters::host::optional())
        .and_then(nut::controllers::robots_txt);
    let sitemap = warp::path("sitemap.xml")
        .and(with_db(db.clone()))
        .and_then(nut::controllers::sitemap::index);
    let sitemap_by_lang = warp::path!(String / "sitemap.xml")
        .and(with_db(db.clone()))
        .and_then(nut::controllers::sitemap::by_lang);

    let rss = warp::path!(String / "rss.xml")
        .and(with_db(db.clone()))
        .and_then(nut::controllers::rss);

    let home = warp::path::end()
        .and(with_db(db.clone()))
        .and_then(nut::controllers::home::index);
    let home_by_lang = warp::path!(String)
        .and(with_db(db.clone()))
        .and_then(nut::controllers::home::by_lang);
    let third = warp::path("3rd").and(warp::fs::dir("./node_modules/"));

    let aws_attachments_create = aws.clone();
    let s3_attachments_create = s3.clone();
    let attachments_create = warp::path("attachments")
        .and(auth)
        .and(warp::addr::remote())
        .and(warp::filters::multipart::form())
        .and(with_db(db.clone()))
        .and(with_jwt(jwt.clone()))
        .and(warp::any().map(move || aws_attachments_create.clone()))
        .and(warp::any().map(move || s3_attachments_create.clone()))
        .and_then(nut::controllers::attachments::create)
        .with(cors.clone());

    let state = warp::any()
        .and(auth)
        .and(warp::addr::remote())
        .and(warp::filters::cookie::optional("locale"))
        .map(
            move |token, peer, locale: Option<String>| nut::graphql::Context {
                db: db.clone(),
                cache: cache.clone(),
                jwt: jwt.clone(),
                aes: aes.clone(),
                hmac: hmac.clone(),
                queue: queue.clone(),
                aws: aws.clone(),
                s3: s3.clone(),
                peer,
                token,
                lang: nut::graphql::Context::lang(locale),
            },
        );
    let schema = Schema::new(Query, Mutation, EmptySubscription::new());
    let graphql = warp::path("graphql")
        .and(juniper_warp::make_graphql_filter(schema, state.boxed()))
        .with(cors);
    let graphiql = warp::path("graphiql").and(juniper_warp::graphiql_filter("/graphql", None));

    let html = warp::get()
        .and(
            home.or(graphql.clone())
                .or(graphiql)
                .or(robots_txt)
                .or(sitemap)
                .or(sitemap_by_lang)
                .or(rss)
                .or(forum_index)
                .or(forum_topics_index)
                .or(forum_topics_show)
                .or(forum_posts_index)
                .or(forum_posts_show)
                .or(third)
                .or(home_by_lang),
        )
        .or(warp::post().and(graphql.clone().or(attachments_create)))
        .or(warp::options().and(graphql));

    warp::serve(html).run(([127, 0, 0, 1], cfg.http.port)).await;
    Ok(())
}
