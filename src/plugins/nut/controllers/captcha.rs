use std::any::type_name;

use actix_session::Session;
use actix_web::{
    error::ErrorInternalServerError, get, http::header::ContentType, HttpResponse, Responder,
    Result as WebResult,
};
use rand::{distributions::Alphanumeric, thread_rng, Rng};

use super::super::super::super::captcha::Captcha;

#[get("/captcha.png")]
pub async fn get(ss: Session) -> WebResult<impl Responder> {
    let code: String = {
        let mut rng = thread_rng();
        let it: String = (0..4).map(|_| rng.sample(Alphanumeric) as char).collect();
        it.to_uppercase()
    };

    let key = type_name::<Captcha>();

    ss.insert(key, code.clone())?;

    let captcha = Captcha {
        text: code,
        height: 32,
        gap: 5,
    };
    let buf = try_web!(captcha.png())?;

    let it = HttpResponse::Ok()
        .insert_header(ContentType::png())
        .body(buf);
    Ok(it)
}
