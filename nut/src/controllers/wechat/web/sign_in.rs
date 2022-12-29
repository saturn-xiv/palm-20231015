use std::ops::{Deref, DerefMut};

use actix_web::{
    get, http::header::ContentType, web, HttpResponse, Responder, Result as WebResult,
};
use chrono::Duration;
use palm::{handlers::peer::ClientIp, jwt::Jwt, orchid::v1::WeChatLoginRequest, try_web, Result};
use serde::{Deserialize, Serialize};
use tonic::Request;
use url::Url;

use super::super::super::super::{
    models::user::Dao as UserDao, orm::postgresql::Pool as DbPool, Oauth,
};
use super::super::{Config, SignInResponse};

// https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct UrlRequest {
    pub home: String,
    pub state: String,
    pub english: bool,
}

impl UrlRequest {
    pub fn build(&self, app_id: &str) -> Result<Url> {
        let mut it = Url::parse("https://open.weixin.qq.com/connect/qrconnect")?;
        it.query_pairs_mut()
            .append_pair("appid", app_id)
            .append_pair(
                "redirect_uri",
                &format!("{}/api/wechat/web/user/sign-in", self.home),
            )
            .append_pair("response_type", "code")
            .append_pair("scope", "snsapi_login")
            .append_pair("state", &self.state)
            .append_pair("lang", if self.english { "en" } else { "cn" });
        it.set_fragment(Some("wechat_redirect"));

        Ok(it)
    }
}

#[get("/redirect")]
pub async fn redirect(
    config: web::Data<Config>,
    form: web::Json<UrlRequest>,
) -> WebResult<impl Responder> {
    let form = form.into_inner();
    let url = try_web!(form.build(&config.app_id))?;
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
    config: web::Data<Config>,
    form: web::Query<CallbackQuery>,
    oauth: web::Data<Oauth>,
) -> WebResult<impl Responder> {
    let form = form.into_inner();
    let client_ip = client_ip.to_string();
    let jwt = jwt.deref();
    debug!("try to sign in wechat user {:?} from {}", form, client_ip);
    let mut cli = try_web!(oauth.open().await)?;
    let mut req = Request::new(WeChatLoginRequest {
        app_id: config.app_id.clone(),
        code: form.code.clone(),
    });
    try_web!(Jwt::authorization(&mut req, &oauth.token))?;

    let res = try_web!(cli.login(req).await)?;
    debug!("fetch wechat user {:?}", res);
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let res = res.into_inner();
    let user = try_web!(UserDao::wechat(db, &client_ip, &config.app_id, &res))?;
    let token = try_web!(user.token(jwt, Duration::days(1)))?;
    Ok(web::Json(SignInResponse {
        real_name: user.real_name,
        token,
    }))
}
