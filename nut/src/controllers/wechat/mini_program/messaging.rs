use std::ops::Deref;

use actix_web::{
    get, http::header::ContentType, post, web, HttpResponse, Responder, Result as WebResult,
};
use palm::{
    jwt::Jwt,
    tink::Loquat,
    try_web,
    wechat::{
        mini_program::message_push::{MessageRequest, VerifyRequest},
        SUCCESS,
    },
};

#[get("/{token}")]
pub async fn verify(
    form: web::Query<VerifyRequest>,
    params: web::Path<String>,
    loquat: web::Data<Loquat>,
) -> WebResult<impl Responder> {
    let form = form.into_inner();
    {
        let token = params.into_inner();
        let loquat = loquat.deref();
        let loquat = loquat.deref();
        try_web!(Jwt::verify(loquat, &token, AUDIENCE))?;
    }
    // TODO fix token
    try_web!(form.check(""))?;
    Ok(HttpResponse::Ok()
        .content_type(ContentType::plaintext())
        .body(SUCCESS))
}

#[post("/{token}")]
pub async fn callback(
    form: web::Json<MessageRequest>,
    params: web::Path<String>,
    loquat: web::Data<Loquat>,
) -> WebResult<impl Responder> {
    {
        let token = params.into_inner();
        let loquat = loquat.deref();
        let loquat = loquat.deref();
        try_web!(Jwt::verify(loquat, &token, AUDIENCE))?;
    }
    let form = form.into_inner();

    // TODO
    warn!("receive wechat message \n {:?}", form);
    Ok(HttpResponse::Ok()
        .content_type(ContentType::plaintext())
        .body(SUCCESS))
}

pub const AUDIENCE: &str = "wechat.mini-program.callback";
