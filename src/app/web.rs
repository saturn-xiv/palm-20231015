use std::net::SocketAddr;

use gotham::{prelude::*, router::build_simple_router};

use super::super::{env::Config, plugins, Result};

pub fn launch(cfg: &Config) -> Result<()> {
    let addr = SocketAddr::from(([127, 0, 0, 1], cfg.http.port));
    let router = build_simple_router(|route| {
        route.get("/").to(plugins::nut::controllers::home);
        route
            .get("/robots.txt")
            .to(plugins::nut::controllers::robots);
        route
            .get("/sitemap.xml")
            .to(plugins::nut::controllers::sitemap::index);

        route.scope("/:lang", |route| {
            route
                .get("/sitemap.xml")
                .with_path_extractor::<plugins::nut::controllers::LangExtractor>()
                .to(plugins::nut::controllers::sitemap::by_lang);
            route
                .get("/rss.xml")
                .with_path_extractor::<plugins::nut::controllers::LangExtractor>()
                .to(plugins::nut::controllers::rss);

            route.scope("/forum", |route| {
                route
                    .get("/")
                    .with_path_extractor::<plugins::nut::controllers::LangExtractor>()
                    .to(plugins::forum::controllers::index);

                route
                    .get("/topics")
                    .with_path_extractor::<plugins::nut::controllers::LangExtractor>()
                    .to(plugins::forum::controllers::topics::index);
                route
                    .get("/topics/:id")
                    .with_path_extractor::<plugins::nut::controllers::LangExtractor>()
                    .to(plugins::forum::controllers::topics::show);

                route
                    .get("/posts")
                    .with_path_extractor::<plugins::nut::controllers::LangExtractor>()
                    .to(plugins::forum::controllers::posts::index);
                route
                    .get("/posts/:id")
                    .with_path_extractor::<plugins::nut::controllers::LangIdExtractor>()
                    .to(plugins::forum::controllers::posts::show);
            });
        });
    });
    println!("listening for requests at http://{}", addr);
    gotham::start(addr, router)?;
    Ok(())
}
