use std::ops::Add;

use chrono::{Datelike, Duration, Utc};
use hyper::{header::AUTHORIZATION, http::StatusCode};
use jsonwebtoken::{
    decode, encode, Algorithm, DecodingKey, EncodingKey, Header, TokenData, Validation,
};
use serde::{de::DeserializeOwned, ser::Serialize};
use tonic::{
    metadata::{MetadataKey, MetadataValue},
    Request as GrpcRequest,
};

use super::{HttpError, Result};

// https://www.ibm.com/support/knowledgecenter/zh/SSEQTP_8.5.5/com.ibm.websphere.wlp.doc/ae/cwlp_jwttoken.html
// https://jwt.io/
// https://tools.ietf.org/html/rfc7519
#[derive(Clone)]
pub struct Jwt {
    key: String,
}

impl Jwt {
    pub const BEARER: &'static str = "Bearer ";
    pub fn authorization<R>(&self, request: &mut GrpcRequest<R>, token: &str) -> Result<()> {
        let token: MetadataValue<_> = {
            let it = format!("{} {}", Self::BEARER, token);
            it.parse()?
        };

        let key: MetadataKey<_> = {
            let it = AUTHORIZATION.as_str();
            let it = it.to_lowercase();
            it.parse()?
        };
        request.metadata_mut().insert(key, token);
        Ok(())
    }
    pub fn new(key: String) -> Self {
        Self { key }
    }
    pub fn timestamps(ttl: Duration) -> (i64, i64) {
        let nbf = Utc::now().naive_utc();
        let exp = nbf.add(ttl);
        (nbf.timestamp(), exp.timestamp())
    }
    pub fn years(y: i32) -> Result<(i64, i64)> {
        let nbf = Utc::now().naive_utc();
        if let Some(exp) = nbf.with_year(nbf.year() + y) {
            return Ok((nbf.timestamp(), exp.timestamp()));
        }
        Err(Box::new(HttpError(
            StatusCode::BAD_REQUEST,
            Some("bad year gap!".to_string()),
        )))
    }
    pub fn sum<T: Serialize>(&self, kid: Option<String>, claims: &T) -> Result<String> {
        let token = encode(
            &Header {
                kid,
                alg: Algorithm::HS512,
                ..Default::default()
            },
            claims,
            &EncodingKey::from_base64_secret(&self.key)?,
        )?;
        Ok(token)
    }
    pub fn parse<T: DeserializeOwned>(&self, token: &str) -> Result<TokenData<T>> {
        let mut vat = Validation::new(Algorithm::HS512);
        vat.leeway = 60;
        let val = decode(token, &DecodingKey::from_base64_secret(&self.key)?, &vat)?;
        Ok(val)
    }
}
