use std::ops::{Deref, DerefMut};

use actix_web::{post, web, HttpResponse, Responder, Result as WebResult};
use chrono::Duration;
use palm::{handlers::peer::ClientIp, jwt::Jwt, orchid::v1::WeChatLoginRequest, try_web};
use serde::{Deserialize, Serialize};
use tonic::Request;

use super::super::super::{
    models::user::{Dao as UserDao, Item as User},
    orm::postgresql::Pool as DbPool,
    Oauth,
};
use super::SignInResponse;

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct SignInRequest {
    pub app_id: String,
    pub code: String,
    pub version: String,
}

#[post("/sign-in")]
pub async fn sign_in(
    db: web::Data<DbPool>,
    client_ip: ClientIp,
    jwt: web::Data<Jwt>,
    oauth: web::Data<Oauth>,
    form: web::Json<SignInRequest>,
) -> WebResult<impl Responder> {
    let form = form.into_inner();
    let client_ip = client_ip.to_string();
    let jwt = jwt.deref();
    debug!("try to sign in wechat user {:?} from {}", form, client_ip);
    let mut cli = try_web!(oauth.open().await)?;
    let mut req = Request::new(WeChatLoginRequest {
        app_id: form.app_id.clone(),
        code: form.code.clone(),
    });
    try_web!(Jwt::authorization(&mut req, &oauth.token))?;

    let res = try_web!(cli.login(req).await)?;
    debug!("fetch wechat user {:?}", res);
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let res = res.into_inner();
    let user = try_web!(UserDao::wechat(db, &client_ip, &form.app_id, &res))?;
    let token = try_web!(user.token(jwt, Duration::days(1)))?;
    Ok(web::Json(SignInResponse {
        real_name: user.real_name,
        token,
    }))
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct ProfileRequest {
    pub name: String,
    pub avatar: String,
}

#[post("/profile")]
pub async fn profile(
    user: User,
    db: web::Data<DbPool>,
    form: web::Json<ProfileRequest>,
) -> WebResult<impl Responder> {
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let form = form.into_inner();
    try_web!(UserDao::sync_wechat(db, user.id, &form.name, &form.avatar))?;
    Ok(HttpResponse::Ok())
}
