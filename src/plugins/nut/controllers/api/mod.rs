pub mod admin;
pub mod attachments;
pub mod layout;
pub mod users;

use std::any::type_name;
use std::ops::Deref;
use std::sync::RwLock;

use actix_session::Session;
use actix_web::{error::ErrorInternalServerError, post, web, Responder, Result as WebResult};
use casbin::{prelude::*, Enforcer};
use diesel::connection::Connection as DieselConnection;
use hyper::StatusCode;
use validator::Validate;

use super::super::super::super::{
    captcha::Captcha, crypto::Hmac, orm::postgresql::Pool as DbPool, Error, HttpError, Result,
};
use super::super::{
    handlers::peer::ClientIp,
    models::{
        log::{Dao as LogDao, Level},
        user::{Dao as UserDao, Item as UserItem},
        Resource,
    },
    policy,
};

impl users::SignUpForm {
    pub async fn install(
        &self,
        ss: &Session,
        ip: &str,
        db: DbPool,
        hmac: &Hmac,
        enf: &RwLock<Enforcer>,
    ) -> Result<()> {
        self.validate()?;
        if ss.get::<String>(type_name::<Captcha>())? != Some(self.captcha.clone()) {
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some("bad captcha".to_string()),
            )));
        }
        let db = db.get()?;
        let db = db.deref();

        if UserDao::count(db)? > 0 {
            return Err(Box::new(HttpError(
                StatusCode::BAD_REQUEST,
                Some("db isn't empty".to_string()),
            )));
        }

        let user = db.transaction::<_, Error, _>(move || {
            UserDao::sign_up(
                db,
                hmac,
                &self.real_name,
                &self.nick_name,
                &self.email,
                &self.password,
                &self.lang.parse()?,
                &self.time_zone.parse()?,
            )?;
            let user = UserDao::by_email(db, &self.email)?;
            LogDao::add(
                db,
                user.id,
                &Level::Info,
                ip,
                &Resource {
                    type_: type_name::<UserItem>().to_string(),
                    id: user.id,
                },
                "sign up.",
            )?;
            UserDao::confirm(db, user.id)?;
            LogDao::add(
                db,
                user.id,
                &Level::Info,
                ip,
                &Resource {
                    type_: type_name::<UserItem>().to_string(),
                    id: user.id,
                },
                "confirmed.",
            )?;

            Ok(user)
        })?;

        if let Ok(ref mut enf) = enf.write() {
            for act in [policy::Action::Read, policy::Action::Write] {
                enf.add_policy(vec![
                    user.subject(),
                    policy::Object::Site.to_string(),
                    act.to_string(),
                ])
                .await?;
            }
        }

        Ok(())
    }
}

#[post("/install")]
pub async fn install(
    (db, hmac, enf): (
        web::Data<DbPool>,
        web::Data<Hmac>,
        web::Data<RwLock<Enforcer>>,
    ),
    form: web::Form<users::SignUpForm>,
    ss: Session,
    peer: ClientIp,
) -> WebResult<impl Responder> {
    let ip = peer.to_string();
    let db = db.deref();
    let db = db.deref();
    let hmac = hmac.deref();
    let enf = enf.deref();

    try_web!(form.install(&ss, &ip, db.clone(), hmac, enf).await)?;

    Ok(web::Json(()))
}
