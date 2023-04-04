use actix_web::{
    get, http::header::ContentType, post, web, HttpResponse, Responder, Result as WebResult,
};
use palm::{
    try_web,
    wechat::{
        mini_program::message_push::{MessageRequest, VerifyRequest},
        SUCCESS,
    },
};

use super::super::get_config_by_project;

#[get("/{project}")]
pub async fn verify(
    form: web::Query<VerifyRequest>,
    params: web::Path<String>,
) -> WebResult<impl Responder> {
    let form = form.into_inner();

    let cfg = {
        let project = params.into_inner();
        try_web!(get_config_by_project(&project))?
    };

    try_web!(form.check(&cfg.messaging.token))?;
    Ok(HttpResponse::Ok()
        .content_type(ContentType::plaintext())
        .body(form.echostr))
}

#[post("/{project}")]
pub async fn callback(
    form: web::Json<MessageRequest>,
    params: web::Path<String>,
) -> WebResult<impl Responder> {
    let form = form.into_inner();
    debug!("receive wechat oauth message \n {:?}", form);

    let _cfg = {
        let project = params.into_inner();
        try_web!(get_config_by_project(&project))?
    };

    // TODO
    Ok(HttpResponse::Ok()
        .content_type(ContentType::plaintext())
        .body(SUCCESS))
}

pub const AUDIENCE: &str = "wechat.mini-program.callback";
