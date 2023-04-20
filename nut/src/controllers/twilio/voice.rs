use std::ops::DerefMut;

use actix_web::{post, web, Responder, Result as WebResult};
use palm::{
    parser::to_xml_response,
    try_web,
    twilio::{sms::InboundResponse, voice::VoiceForm},
};

use super::super::super::orm::postgresql::Pool as DbPool;

#[post("/")]
async fn call_in(db: web::Data<DbPool>, form: web::Form<VoiceForm>) -> WebResult<impl Responder> {
    let mut db = try_web!(db.get())?;
    let _db = db.deref_mut();
    let form = form.into_inner();
    info!("receive {:?}", form);

    to_xml_response(&InboundResponse { message: None })
}
