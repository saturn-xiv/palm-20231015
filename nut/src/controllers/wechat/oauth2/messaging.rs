use std::ops::DerefMut;

use actix_web::{
    get, http::header::ContentType, post, web, HttpResponse, Responder, Result as WebResult,
};
use diesel::Connection as DieselConnection;
use palm::{
    handlers::peer::ClientIp,
    nut::v1,
    try_web,
    wechat::{
        oauth2::message_push::{MessageRequest, VerifyRequest},
        SUCCESS,
    },
    Error,
};

use super::super::super::super::{
    models::{
        log::Dao as LogDao, user::Item as User, wechat::oauth2_user::Dao as WechatOauth2UserDao,
    },
    orm::postgresql::Pool as DbPool,
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
    client_ip: ClientIp,
    form: web::Json<MessageRequest>,
    params: web::Path<String>,
    db: web::Data<DbPool>,
) -> WebResult<impl Responder> {
    let form = form.into_inner();
    debug!("receive wechat oauth message \n {:?}", form);

    let cfg = {
        let project = params.into_inner();
        try_web!(get_config_by_project(&project))?
    };
    if cfg.app_id != form.app_id {
        return Ok(HttpResponse::BadRequest().finish());
    }

    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();

    let client_ip = client_ip.to_string();

    match &form.event[..] {
        MessageRequest::USER_AUTHORIZATION_CANCELLATION => {
            try_web!(db.transaction::<_, Error, _>(move |db| {
                let it = WechatOauth2UserDao::by_open_id(db, &form.app_id, &form.open_id)?;

                LogDao::add::<_, User>(
                    db,
                    it.user_id,
                    v1::user_logs_response::item::Level::Info,
                    &client_ip,
                    Some(it.user_id),
                    "cancel by wechat oauth",
                )?;
                WechatOauth2UserDao::destroy(db, it.id)?;
                Ok(())
            }))?;
        }
        _ => {
            warn!("unhandled message");
        }
    };

    Ok(HttpResponse::Ok()
        .content_type(ContentType::plaintext())
        .body(SUCCESS))
}

pub const AUDIENCE: &str = "wechat.oauth2.callback";
