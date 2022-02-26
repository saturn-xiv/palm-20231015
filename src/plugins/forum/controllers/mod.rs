pub mod posts;
pub mod topics;

use actix_web::{get, web, Responder};
use askama::Template;

#[derive(Template)]
#[template(path = "bootstrap/forum/index.html")]
pub struct BoostrapIndex {
    pub lang: String,
}

#[get("/{lang}/forum/")]
pub async fn index(_params: web::Path<String>) -> impl Responder {
    // TODO
    "forum home"
}
