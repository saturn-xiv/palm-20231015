use std::ops::DerefMut;

use actix_web::{post, web, HttpResponse, Responder, Result as WebResult};
use palm::{handlers::peer::ClientIp, orchid::v1::WeChatLoginRequest, try_web};
use serde::{Deserialize, Serialize};
use tonic::Request;

use super::super::super::{
    models::user::{Dao as UserDao, Item as User},
    orm::postgresql::Pool as DbPool,
    Oauth,
};

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Eq)]
pub struct SignInRequest {
    pub app_id: String,
    pub code: String,
}

#[post("/sign-in")]
pub async fn sign_in(
    db: web::Data<DbPool>,
    client_ip: ClientIp,
    oauth: web::Data<Oauth>,
    form: web::Json<SignInRequest>,
) -> WebResult<impl Responder> {
    let mut cli = try_web!(oauth.open().await)?;
    let res = try_web!(
        cli.login(Request::new(WeChatLoginRequest {
            app_id: form.app_id.clone(),
            code: form.code.clone(),
        }))
        .await
    )?;
    let client_ip = client_ip.to_string();
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let res = res.into_inner();
    try_web!(UserDao::wechat(db, &client_ip, &form.app_id, &res))?;
    Ok(HttpResponse::Ok())
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Eq)]
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
