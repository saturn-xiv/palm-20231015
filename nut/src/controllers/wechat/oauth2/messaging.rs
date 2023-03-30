use std::ops::Deref;
use std::ops::DerefMut;

use actix_web::{
    get, http::header::ContentType, post, web, HttpResponse, Responder, Result as WebResult,
};
use diesel::Connection as DieselConnection;
use palm::{
    handlers::peer::ClientIp,
    jwt::Jwt,
    nut::v1,
    tink::Loquat,
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
    client_ip: ClientIp,
    form: web::Json<MessageRequest>,
    params: web::Path<String>,
    db: web::Data<DbPool>,
    loquat: web::Data<Loquat>,
) -> WebResult<impl Responder> {
    {
        let token = params.into_inner();
        let loquat = loquat.deref();
        let loquat = loquat.deref();
        try_web!(Jwt::verify(loquat, &token, AUDIENCE))?;
    }
    let form = form.into_inner();

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
            warn!("receive wechat oauth message \n {:?}", form);
        }
    };

    Ok(HttpResponse::Ok()
        .content_type(ContentType::plaintext())
        .body(SUCCESS))
}

pub const AUDIENCE: &str = "wechat.oauth2.callback";
