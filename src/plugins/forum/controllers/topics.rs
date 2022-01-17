use askama::Template;
use warp::Reply;

use super::super::super::super::{orm::Pool as DbPool, InfallibleResult};

#[derive(Template)]
#[template(path = "bootstrap/forum/topics/index.html")]
pub struct BoostrapIndex {
    pub lang: String,
}

pub async fn index(lang: String, db: DbPool) -> InfallibleResult<Box<dyn Reply>> {
    let _db = db.get().unwrap();
    let tpl = BoostrapIndex { lang };
    // TODO
    Ok(Box::new(tpl))
}

#[derive(Template)]
#[template(path = "bootstrap/forum/topics/show.html")]
pub struct BoostrapShow {
    pub lang: String,
    pub id: i32,
}
pub async fn show(lang: String, id: i32, db: DbPool) -> InfallibleResult<Box<dyn Reply>> {
    let _db = db.get().unwrap();
    let tpl = BoostrapShow { lang, id };
    // TODO
    Ok(Box::new(tpl))
}
