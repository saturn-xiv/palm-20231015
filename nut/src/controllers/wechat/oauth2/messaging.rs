use actix_web::{
    get, http::header::ContentType, post, web, HttpResponse, Responder, Result as WebResult,
};
use hyper::StatusCode;
use palm::{crypto::sha1::sum as sha1_sum, try_web, HttpError, Result};
use serde::{Deserialize, Serialize};

// https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push.html#option-url
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Verify {
    pub signature: String,
    pub timestamp: usize,
    pub nonce: usize,
    pub echostr: String,
}

impl Verify {
    pub fn check(&self, token: &str) -> Result<()> {
        let buf = {
            let mut items = vec![
                token.to_string(),
                format!("{}", self.nonce),
                format!("{}", self.timestamp),
            ];
            items.sort();
            items.join("")
        };

        if sha1_sum(buf.as_bytes()) == self.signature {
            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)))
    }
}

#[get("/")]
pub async fn verify(form: web::Query<Verify>) -> WebResult<impl Responder> {
    let form = form.into_inner();
    try_web!(form.check(""))?;
    Ok(HttpResponse::Ok()
        .content_type(ContentType::plaintext())
        .body(form.echostr))
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Message {}

#[post("/")]
pub async fn callback(form: web::Json<Message>) -> WebResult<impl Responder> {
    let form = form.into_inner();
    // TODO
    debug!("receive wechat message {:?}", form);
    Ok(HttpResponse::Ok()
        .content_type(ContentType::plaintext())
        .body("success"))
}
