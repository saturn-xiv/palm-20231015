use actix_web::{
    http::header::ContentType, post, HttpRequest, HttpResponse, Responder, Result as WebResult,
};

#[post("/callback")]
pub async fn callback(req: HttpRequest) -> WebResult<impl Responder> {
    debug!("{req:?}");

    Ok(HttpResponse::Ok()
        .content_type(ContentType::plaintext())
        .body(""))
}
