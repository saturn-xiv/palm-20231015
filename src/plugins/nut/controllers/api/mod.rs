pub mod admin;
pub mod attachments;
pub mod layout;
pub mod users;

use std::ops::Deref;
use std::sync::RwLock;

use actix_identity::Identity;
use actix_web::{error::ErrorInternalServerError, post, web, Responder, Result as WebResult};
use casbin::Enforcer;
use serde::{Deserialize, Serialize};
use validator::Validate;

use super::super::super::super::{
    cache::redis::Pool as CachePool,
    crypto::{Aes, Hmac},
    orm::postgresql::{Connection as DbConnection, Pool as DbPool},
    theme::{render, Page, Theme},
    Result,
};

#[derive(Deserialize, Serialize, Validate)]
#[serde(rename_all = "camelCase")]
pub struct InstallForm {
    #[validate(length(min = 2))]
    pub nick_name: String,
    #[validate(length(min = 2))]
    pub real_name: String,
    #[validate(email, length(min = 1))]
    pub email: String,
    #[validate(length(min = 6, max = 32))]
    pub password: String,
    #[validate(length(min = 1))]
    pub lang: String,
    #[validate(length(min = 1))]
    pub time_zone: String,
    #[validate(url, length(min = 1))]
    pub home: String,
}

#[post("/install")]
pub async fn install(
    (db, aes, hmac, enf): (
        web::Data<DbPool>,
        web::Data<Aes>,
        web::Data<Hmac>,
        web::Data<RwLock<Enforcer>>,
    ),
    form: web::Form<InstallForm>,
) -> WebResult<impl Responder> {
    let db = try_web!(db.get())?;
    let db = db.deref();
    Ok(web::Json(()))
}
