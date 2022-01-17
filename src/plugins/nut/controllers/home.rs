use askama::Template;
use warp::Reply;

use super::super::super::super::{orm::Pool as DbPool, InfallibleResult};

#[derive(Template)]
#[template(path = "bootstrap/home.html")]
pub struct BoostrapTemplate {
    pub lang: String,
}

pub async fn index(db: DbPool) -> InfallibleResult<Box<dyn Reply>> {
    let _db = db.get().unwrap();
    let tpl = BoostrapTemplate {
        lang: "en-US".to_string(),
    };
    Ok(Box::new(tpl))
}

pub async fn by_lang(lang: String, db: DbPool) -> InfallibleResult<Box<dyn Reply>> {
    let _db = db.get().unwrap();
    let tpl = BoostrapTemplate { lang };
    Ok(Box::new(tpl))
}
