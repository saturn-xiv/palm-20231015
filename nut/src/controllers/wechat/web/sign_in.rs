use std::ops::{Deref, DerefMut};

use actix_web::{
    get, http::header::ContentType, web, HttpResponse, Responder, Result as WebResult,
};
use chrono::Duration;
use palm::{
    crypto::Aes, handlers::peer::ClientIp, jwt::Jwt, nut::v1::WechatProfile,
    orchid::v1::WeChatLoginRequest, try_web, wechat::api::qr_connect::Request as UrlRequest,
};
use serde::{Deserialize, Serialize};
use tonic::Request;

use super::super::super::super::{
    models::{setting::get as get_setting, user::Dao as UserDao},
    orm::postgresql::Pool as DbPool,
    Oauth,
};
use super::super::SignInResponse;

#[get("/url")]
pub async fn url(
    db: web::Data<DbPool>,
    aes: web::Data<Aes>,
    form: web::Json<UrlRequest>,
) -> WebResult<impl Responder> {
    let form = form.into_inner();
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let aes = aes.as_ref();
    let cfg: WechatProfile = try_web!(get_setting(db, aes, None))?;
    let url = try_web!(form.build(&cfg.app_id))?;
    Ok(HttpResponse::Ok()
        .content_type(ContentType::plaintext())
        .body(url.to_string()))
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct CallbackQuery {
    pub code: String,
    pub state: String,
}

#[get("/callback")]
pub async fn callback(
    db: web::Data<DbPool>,
    client_ip: ClientIp,
    jwt: web::Data<Jwt>,
    aes: web::Data<Aes>,
    form: web::Query<CallbackQuery>,
    oauth: web::Data<Oauth>,
) -> WebResult<impl Responder> {
    let form = form.into_inner();
    let client_ip = client_ip.to_string();
    let jwt = jwt.deref();
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let aes = aes.as_ref();
    let cfg: WechatProfile = try_web!(get_setting(db, aes, None))?;

    debug!("try to sign in wechat user {:?} from {}", form, client_ip);
    let mut cli = try_web!(oauth.open().await)?;
    let mut req = Request::new(WeChatLoginRequest {
        app_id: cfg.app_id.clone(),
        code: form.code.clone(),
    });
    try_web!(Jwt::authorization(&mut req, &oauth.token))?;

    let res = try_web!(cli.login(req).await)?;
    debug!("fetch wechat user {:?}", res);
    let res = res.into_inner();
    let user = try_web!(UserDao::wechat(db, &client_ip, &cfg.app_id, &res))?;
    let token = try_web!(user.token(jwt, Duration::days(1)))?;
    Ok(web::Json(SignInResponse {
        real_name: user.real_name,
        token,
    }))
}
