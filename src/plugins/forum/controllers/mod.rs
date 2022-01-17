pub mod posts;
pub mod topics;

use askama::Template;
use warp::Reply;

use super::super::super::{orm::Pool as DbPool, InfallibleResult};

#[derive(Template)]
#[template(path = "bootstrap/forum/index.html")]
pub struct BoostrapIndex {
    pub lang: String,
}

pub async fn index(lang: String, db: DbPool) -> InfallibleResult<Box<dyn Reply>> {
    let _db = db.get().unwrap();
    let tpl = BoostrapIndex { lang };
    // TODO
    Ok(Box::new(tpl))
}
