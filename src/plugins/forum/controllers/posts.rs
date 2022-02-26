use actix_web::{get, web, Responder};
use askama::Template;

#[derive(Template)]
#[template(path = "bootstrap/forum/posts/index.html")]
pub struct BoostrapIndex {
    pub lang: String,
}

#[get("/{lang}/forum/posts")]
pub async fn index(_params: web::Path<String>) -> impl Responder {
    // TODO
    "forum posts index"
}

#[derive(Template)]
#[template(path = "bootstrap/forum/posts/show.html")]
pub struct BoostrapShow {
    pub lang: String,
    pub id: i32,
}

#[get("/{lang}/forum/posts/{id}")]
pub async fn show(_params: web::Path<(String, i32)>) -> impl Responder {
    // TODO
    "forum posts show"
}
