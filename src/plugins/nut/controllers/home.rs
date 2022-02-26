use actix_web::{get, web, Responder};
use askama::Template;

#[derive(Template)]
#[template(path = "bootstrap/home.html")]
pub struct BoostrapHome {
    pub lang: String,
}

#[get("/")]
pub async fn index(_params: web::Path<String>) -> impl Responder {
    // TODO
    "home"
}

#[get("/{lang}/")]
pub async fn by_lang(params: web::Path<String>) -> impl Responder {
    let lang = params.into_inner();
    // TODO
    format!("home by lang {}", lang)
}
