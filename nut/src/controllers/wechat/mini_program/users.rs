use std::ops::{Deref, DerefMut};

use actix_web::{
    error::{ErrorForbidden, ErrorNotFound},
    get, post, web, Responder, Result as WebResult,
};
use casbin::Enforcer;
use chrono::Duration;
use orchid::Client as Orchid;
use palm::{
    cache::redis::Pool as CachePool, session::Session, thrift::loquat::Config as Loquat, try_web,
};
use serde::{Deserialize, Serialize};
use tokio::sync::Mutex;
use validator::Validate;

use super::super::super::super::{
    models::{
        user::{session::ProviderType as UserProviderType, Item as User},
        wechat::mini_program_user::Dao as WechatMiniProgramUserDao,
    },
    orm::postgresql::Pool as DbPool,
    services::{
        user::new_sign_in_response,
        wechat::{BindByAccount, MiniProgramLogin, UpdateProfile},
    },
};

#[derive(Serialize, Deserialize)]
pub struct SignInResponse {
    pub token: String,
    pub real_name: String,
    pub avatar: String,
    pub roles: Vec<String>,
}

#[post("/sign-in")]
pub async fn sign_in(
    ss: Session,
    orchid: web::Data<Orchid>,
    form: web::Query<MiniProgramLogin>,
    db: web::Data<DbPool>,
    enforcer: web::Data<Mutex<Enforcer>>,
    loquat: web::Data<Loquat>,
) -> WebResult<impl Responder> {
    let form = form.into_inner();
    try_web!(form.validate())?;
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let loquat = loquat.deref();
    let loquat = loquat.deref();
    let enf = enforcer.deref();
    let enf = enf.deref();
    let orchid = orchid.deref();

    let it = try_web!(form.handle(&ss.client_ip, db, enf, loquat, orchid).await)?;
    let user = it.user.as_ref().ok_or(ErrorNotFound("empty user"))?;

    Ok(web::Json(SignInResponse {
        real_name: user.real_name.clone(),
        avatar: user.avatar.clone(),
        token: it.token.clone(),
        roles: it.roles,
    }))
}

#[post("/bind-by-account")]
pub async fn bind_by_account(
    ss: Session,
    form: web::Query<BindByAccount>,
    db: web::Data<DbPool>,
    ch: web::Data<CachePool>,
    loquat: web::Data<Loquat>,
) -> WebResult<impl Responder> {
    let form = form.into_inner();
    try_web!(form.validate())?;

    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let mut ch = try_web!(ch.get())?;
    let ch = ch.deref_mut();
    let loquat = loquat.deref();
    let loquat = loquat.deref();

    try_web!(form.mini_program(&ss, db, ch, loquat, loquat))?;
    Ok(web::Json(()))
}

#[post("/update-profile")]
pub async fn update_profile(
    user: User,
    ss: Session,
    form: web::Query<UpdateProfile>,
    db: web::Data<DbPool>,
) -> WebResult<impl Responder> {
    let form = form.into_inner();
    try_web!(form.validate())?;

    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();

    try_web!(form.mini_program(&ss.client_ip, db, &user))?;
    Ok(web::Json(()))
}

#[derive(Serialize, Deserialize, Validate)]
pub struct RefreshRequest {
    #[validate(length(min = 1, max = 63))]
    pub app_id: String,
    #[validate(length(min = 1, max = 63))]
    pub open_id: String,
    #[validate(range(min = 5, max = 604800))]
    pub ttl: i64,
}
#[get("/refresh")]
pub async fn refresh(
    user: User,
    ss: Session,
    form: web::Query<RefreshRequest>,
    db: web::Data<DbPool>,
    enforcer: web::Data<Mutex<Enforcer>>,
    loquat: web::Data<Loquat>,
) -> WebResult<impl Responder> {
    let form = form.into_inner();
    try_web!(form.validate())?;
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let jwt = loquat.deref();
    let jwt = jwt.deref();
    let enf = enforcer.deref();
    let enf = enf.deref();

    let wu = try_web!(WechatMiniProgramUserDao::by_open_id(
        db,
        &form.app_id,
        &form.open_id
    ))?;
    if wu.user_id != user.id {
        return Err(ErrorForbidden("open_id not match"));
    }

    let it = try_web!(
        new_sign_in_response(
            db,
            enf,
            &user,
            jwt,
            Duration::seconds(form.ttl),
            UserProviderType::WechatMiniProgram,
            wu.id,
            &ss.client_ip
        )
        .await
    )?;
    let user = it.user.as_ref().ok_or(ErrorNotFound("empty user"))?;

    Ok(web::Json(SignInResponse {
        real_name: user.real_name.clone(),
        avatar: user.avatar.clone(),
        token: it.token.clone(),
        roles: it.roles,
    }))
}
