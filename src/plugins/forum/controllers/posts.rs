use askama::Template;
use warp::Reply;

use super::super::super::super::{orm::Pool as DbPool, InfallibleResult};

#[derive(Template)]
#[template(path = "bootstrap/forum/posts/index.html")]
pub struct BoostrapIndex {
    pub lang: String,
}

pub async fn index(lang: String, db: DbPool) -> InfallibleResult<Box<dyn Reply>> {
    let _db = db.get().unwrap();
    // TODO
    let tpl = BoostrapIndex { lang };
    Ok(Box::new(tpl))
}

#[derive(Template)]
#[template(path = "bootstrap/forum/posts/show.html")]
pub struct BoostrapShow {
    pub lang: String,
    pub id: i32,
}
pub async fn show(lang: String, id: i32, db: DbPool) -> InfallibleResult<Box<dyn Reply>> {
    let _db = db.get().unwrap();
    // TODO
    let tpl = BoostrapShow { lang, id };
    Ok(Box::new(tpl))
}
