use std::ops::{Deref, DerefMut};

use actix_web::{post, web, HttpResponse, Responder, Result as WebResult};
use auth::orm::postgresql::Pool as DbPool;
use palm::{
    try_web,
    twilio::sms::{DeliveryStatusCallbackForm, IncomingMessagesCallbackForm},
};

use super::super::super::models::twilio::sms_log::Dao as LogDao;

#[post("/incoming-messages")]
pub async fn incoming_messages(
    form: web::Form<IncomingMessagesCallbackForm>,
    db: web::Data<DbPool>,
) -> WebResult<impl Responder> {
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let form = form.deref();
    info!("{:?}", form);
    let msg = try_web!(flexbuffers::to_vec(form))?;
    try_web!(LogDao::add(db, &form.from, &form.to, &msg))?;
    Ok(HttpResponse::Ok().finish())
}

#[post("/delivery-status")]
pub async fn delivery_status(
    form: web::Form<DeliveryStatusCallbackForm>,
) -> WebResult<impl Responder> {
    let form = form.deref();
    info!("{:?}", form);
    Ok(HttpResponse::Ok().finish())
}
