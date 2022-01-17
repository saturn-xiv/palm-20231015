use warp::Filter;

use super::super::{
    env::Config,
    plugins::{self, nut::controllers::with_db},
    Result,
};

pub async fn launch(cfg: &Config) -> Result<()> {
    let db = cfg.postgresql.open()?;

    let home = warp::path::end()
        .and(with_db(db.clone()))
        .and_then(plugins::nut::controllers::home::index);
    let home_by_lang = warp::path!(String)
        .and(with_db(db.clone()))
        .and_then(plugins::nut::controllers::home::by_lang);
    // let host = warp::header::value(HOST);
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
        .and(with_db(db))
        .and_then(plugins::nut::controllers::rss);

    let html = warp::get().and(
        home.or(robots_txt)
            .or(sitemap)
            .or(sitemap_by_lang)
            .or(rss)
            .or(home_by_lang),
    );
    warp::serve(html).run(([127, 0, 0, 1], cfg.http.port)).await;
    Ok(())
}
