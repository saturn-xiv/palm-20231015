use std::ops::{Deref, DerefMut};

use actix_web::{get, post, web, Responder, Result as WebResult};
use nut::{models::user::Item as User, orm::postgresql::Pool as DbPool};
use palm::{nut::v1::media_content::Editor, try_web};
use serde::Deserialize;

use super::super::models::book::Dao as BookDao;

#[get("/")]
pub async fn index(user: User, db: web::Data<DbPool>) -> WebResult<impl Responder> {
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let items = try_web!(BookDao::by_user(db, user.id))?;
    Ok(web::Json(items))
}

#[derive(Deserialize)]
pub struct NewForm {
    pub subject: String,
    pub description: String,
    pub tag: i32,
}

#[post("/")]
pub async fn create(
    user: User,
    form: web::Json<NewForm>,
    db: web::Data<DbPool>,
) -> WebResult<impl Responder> {
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let form = form.deref();

    try_web!(BookDao::create(
        db,
        user.id,
        form.tag,
        &form.subject,
        &form.description,
        Editor::Textarea
    ))?;

    Ok(web::Json(()))
}

#[get("/{id}")]
pub async fn show(book: web::Path<i32>, db: web::Data<DbPool>) -> WebResult<impl Responder> {
    let book = book.into_inner();
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let it = try_web!(BookDao::get(db, book))?;
    Ok(web::Json(it))
}
