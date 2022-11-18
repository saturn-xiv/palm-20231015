use std::error::Error as StdError;
use std::fmt;
use std::result::Result as StdResult;

use hyper::StatusCode;

pub type Error = Box<dyn StdError + Send + Sync>;
pub type Result<T> = StdResult<T, Error>;

#[derive(Debug)]
pub struct HttpError(pub StatusCode, pub Option<String>);
pub type HttpResult<T> = StdResult<T, HttpError>;
pub type GrpcResult<T> = StdResult<tonic::Response<T>, tonic::Status>;
// TODO: https://github.com/rust-lang/rust/issues/63063
// pub type HttpResponder = HttpResult<impl actix_web::Responder>;

impl StdError for HttpError {}

impl fmt::Display for HttpError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self.1 {
            Some(ref v) => v.fmt(f),
            None => self.0.fmt(f),
        }
    }
}

// impl From<Error> for String {
//     fn from(err: Error) -> Self {
//         err.to_string()
//         // Self::internal(err)
//     }
// }

impl From<Error> for HttpError {
    fn from(err: Error) -> Self {
        Self(StatusCode::INTERNAL_SERVER_ERROR, Some(err.to_string()))
    }
}
