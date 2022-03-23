use std::any::type_name;

use actix_identity::Identity;
use actix_session::Session;
use actix_web::{
    error::ErrorInternalServerError, get, http::header::ContentType, HttpResponse, Responder,
    Result as WebResult,
};
use rand::{distributions::Alphanumeric, thread_rng, Rng};

use super::super::super::super::captcha::Captcha;

#[get("/captcha.png")]
pub async fn get(session: Session, id: Identity) -> WebResult<impl Responder> {
    let code: String = {
        let mut rng = thread_rng();
        (0..4).map(|_| rng.sample(Alphanumeric) as char).collect()
    };
    let code = code.to_uppercase();
    let key = type_name::<Captcha>();
    debug!(
        "{:?}\n{:?}\n {:?}\n {:?} => {}",
        id.identity(),
        session.status(),
        session.entries(),
        session.get::<String>(key)?,
        code
    );
    // FIXME session id change when refresh
    session.insert(key, code.clone())?;
    id.remember(code.clone());

    let captcha = Captcha {
        text: code,
        height: 32,
        gap: 5,
    };
    let buf = captcha.png().map_err(ErrorInternalServerError)?;

    let it = HttpResponse::Ok()
        .insert_header(ContentType::png())
        .body(buf);
    Ok(it)
}
