use juniper::EmptySubscription;
use warp::Filter;

use super::super::{
    env::Config,
    plugins::{self, nut::controllers::with_db},
    Result,
};
use super::graphql::{mutation::Mutation, query::Query, Schema};

pub async fn launch(cfg: &Config) -> Result<()> {
    let db = cfg.postgresql.open()?;

    let forum_index = warp::path!(String / "forum")
        .and(with_db(db.clone()))
        .and_then(plugins::forum::controllers::index);
    let forum_topics_index = warp::path!(String / "forum" / "topics")
        .and(with_db(db.clone()))
        .and_then(plugins::forum::controllers::topics::index);
    let forum_topics_show = warp::path!(String / "forum" / "topics" / i32)
        .and(with_db(db.clone()))
        .and_then(plugins::forum::controllers::topics::show);
    let forum_posts_index = warp::path!(String / "forum" / "posts")
        .and(with_db(db.clone()))
        .and_then(plugins::forum::controllers::posts::index);
    let forum_posts_show = warp::path!(String / "forum" / "posts" / i32)
        .and(with_db(db.clone()))
        .and_then(plugins::forum::controllers::posts::show);

    let robots_txt = warp::path("robots.txt")
        .and(warp::filters::host::optional())
        .and_then(plugins::nut::controllers::robots_txt);
    let sitemap = warp::path("sitemap.xml")
        .and(with_db(db.clone()))
        .and_then(plugins::nut::controllers::sitemap::index);
    let sitemap_by_lang = warp::path!(String / "sitemap.xml")
        .and(with_db(db.clone()))
        .and_then(plugins::nut::controllers::sitemap::by_lang);

    let rss = warp::path!(String / "rss.xml")
        .and(with_db(db.clone()))
        .and_then(plugins::nut::controllers::rss);

    let home = warp::path::end()
        .and(with_db(db.clone()))
        .and_then(plugins::nut::controllers::home::index);
    let home_by_lang = warp::path!(String)
        .and(with_db(db.clone()))
        .and_then(plugins::nut::controllers::home::by_lang);
    let third = warp::path("3rd").and(warp::fs::dir("./node_modules/"));

    let ch = cfg.redis.open()?;
    let state = warp::any().map(move || plugins::nut::graphql::Context {
        db: db.clone(),
        cache: ch.clone(),
    });
    let schema = Schema::new(Query, Mutation, EmptySubscription::new());
    let graphql =
        warp::path("graphql").and(juniper_warp::make_graphql_filter(schema, state.boxed()));
    let graphiql = warp::path("graphiql").and(juniper_warp::graphiql_filter("/graphql", None));

    let html = warp::get()
        .and(
            home.or(graphiql)
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
        .or(warp::post().and(graphql));

    warp::serve(html).run(([127, 0, 0, 1], cfg.http.port)).await;
    Ok(())
}
