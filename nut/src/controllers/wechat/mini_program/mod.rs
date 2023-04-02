pub mod messaging;

use std::ops::{Deref, DerefMut};

use actix_web::{post, web, HttpResponse, Responder, Result as WebResult};
use chrono::Duration;
use diesel::Connection as DieselConnection;
use hyper::StatusCode;
use palm::{
    handlers::{peer::ClientIp, token::Token},
    jwt::Jwt,
    nut::v1,
    orchid::v1::WechatMiniProgramLoginRequest,
    tink::Loquat,
    try_web, Error, HttpError,
};
use serde::{Deserialize, Serialize};
use tonic::Request;

use super::super::super::{
    models::{
        log::Dao as LogDao,
        user::{Action, Dao as UserDao, Item as User},
        wechat::mini_program_user::Dao as WechatMiniProgramUserDao,
    },
    orm::postgresql::Pool as DbPool,
    Orchid,
};

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct BindRequest {
    pub app_id: String,
    pub nickname: String,
    pub password: String,
}

#[post("/bind")]
pub async fn bind(
    db: web::Data<DbPool>,
    token: Token,
    client_ip: ClientIp,
    loquat: web::Data<Loquat>,
    form: web::Json<BindRequest>,
) -> WebResult<impl Responder> {
    let client_ip = client_ip.to_string();
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let form = form.into_inner();
    let loquat = loquat.deref();
    let loquat = loquat.deref();

    try_web!(db.transaction::<_, Error, _>(move |db| {
        let user = UserDao::by_nickname(db, &form.nickname)?;
        {
            user.auth(loquat, &form.password)?;
            user.available()?;
        }
        let wu = {
            let open_id = Jwt::verify(
                loquat,
                &token.0.unwrap_or_default(),
                &Action::SignIn.to_string(),
            )?;
            WechatMiniProgramUserDao::by_openid(db, &form.app_id, &open_id)?
        };
        if let Some(user_id) = wu.user_id {
            if user_id != user.id {
                return Err(Box::new(HttpError(
                    StatusCode::BAD_REQUEST,
                    Some("Already bound to other user".to_string()),
                )));
            }
        }

        if wu.user_id.is_none() {
            WechatMiniProgramUserDao::bind(db, wu.id, user.id)?;
            LogDao::add::<_, User>(
                db,
                user.id,
                v1::user_logs_response::item::Level::Info,
                &client_ip,
                Some(user.id),
                &format!(
                    "bind to wechat mini-program user({}, {})",
                    wu.app_id, wu.open_id
                ),
            )?;
        }
        Ok(())
    }))?;
    Ok(web::Json(()))
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct SignInRequest {
    pub app_id: String,
    pub code: String,
    pub ttl: i64,
    pub version: String,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct SignInResponse {
    pub token: String,
    pub nickname: Option<String>,
    pub avatar_url: Option<String>,
}

#[post("/sign-in")]
pub async fn sign_in(
    db: web::Data<DbPool>,
    client_ip: ClientIp,
    loquat: web::Data<Loquat>,
    oauth: web::Data<Orchid>,
    form: web::Json<SignInRequest>,
) -> WebResult<impl Responder> {
    let form = form.into_inner();
    let client_ip = client_ip.to_string();
    let loquat = loquat.deref();
    let loquat = loquat.deref();
    debug!(
        "try to sign in wechat mini-program user {:?} from {}",
        form, client_ip
    );
    let mut cli = try_web!(oauth.wechat_mini_program().await)?;
    let mut req = Request::new(WechatMiniProgramLoginRequest {
        app_id: form.app_id.clone(),
        code: form.code.clone(),
    });
    try_web!(Loquat::authorization(&mut req, &oauth.token))?;

    let res = try_web!(cli.login(req).await)?;
    debug!("fetch wechat mini-program user {:?}", res);
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let res = res.into_inner();

    let user = try_web!(db.transaction::<_, Error, _>(move |db| {
        let user = WechatMiniProgramUserDao::sign_in(
            db,
            &form.app_id,
            &res.openid,
            &res.unionid,
            &client_ip,
        )?;
        if let Some(user) = user.user_id {
            LogDao::add::<_, User>(
                db,
                user,
                v1::user_logs_response::item::Level::Info,
                &client_ip,
                Some(user),
                "sign in by wechat mini-program",
            )?;
        }
        Ok(user)
    }))?;

    let token = try_web!(Jwt::sign(
        loquat,
        &user.open_id,
        &Action::SignIn.to_string(),
        Duration::minutes(form.ttl)
    ))?;
    Ok(web::Json(SignInResponse {
        nickname: user.nickname.clone(),
        avatar_url: user.avatar_url,
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
