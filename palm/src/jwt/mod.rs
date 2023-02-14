pub mod openssl;

use std::ops::Add;

use chrono::{Datelike, Duration, Utc};
use hyper::{header::AUTHORIZATION, http::StatusCode};
use tonic::{
    metadata::{Ascii, MetadataKey, MetadataValue},
    Request as GrpcRequest,
};

use super::{HttpError, Result};

pub const BEARER: &str = "Bearer ";

// https://www.ibm.com/support/knowledgecenter/zh/SSEQTP_8.5.5/com.ibm.websphere.wlp.doc/ae/cwlp_jwttoken.html
// https://jwt.io/
// https://tools.ietf.org/html/rfc7519
pub trait Jwt {
    fn sign(&self, subject: &str, audience: &str, ttl: Duration) -> Result<String>;
    fn verify(&self, token: &str, audience: &str) -> Result<String>;

    fn bearer(token: &str) -> String {
        format!("{}{}", BEARER, token)
    }
    fn authorization<R>(request: &mut GrpcRequest<R>, token: &str) -> Result<()> {
        let val: MetadataValue<Ascii> = {
            let it = Self::bearer(token);
            it.parse()?
        };

        let key: MetadataKey<Ascii> = {
            let it = AUTHORIZATION.as_str();
            let it = it.to_lowercase();
            it.parse()?
        };
        request.metadata_mut().insert(key, val);

        debug!("request header {:?}", request.metadata());
        Ok(())
    }

    fn timestamps(ttl: Duration) -> (i64, i64) {
        let nbf = Utc::now().naive_utc();
        let exp = nbf.add(ttl);
        (nbf.timestamp(), exp.timestamp())
    }
    fn years(y: i32) -> Result<(i64, i64)> {
        let nbf = Utc::now().naive_utc();
        if let Some(exp) = nbf.with_year(nbf.year() + y) {
            return Ok((nbf.timestamp(), exp.timestamp()));
        }
        Err(Box::new(HttpError(
            StatusCode::BAD_REQUEST,
            Some("bad year gap!".to_string()),
        )))
    }
}
