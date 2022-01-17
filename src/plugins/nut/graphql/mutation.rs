use std::default::Default;

use juniper::{GraphQLInputObject, GraphQLObject};
use validator::Validate;

use super::super::super::super::Result;
use super::{Context, Success};

#[derive(Validate, GraphQLInputObject)]
pub struct UserSignInRequest {
    #[validate(length(min = 1))]
    pub id: String,
    #[validate(length(min = 1))]
    pub password: String,
}

impl UserSignInRequest {
    pub fn handle(&self, _ctx: &Context) -> Result<UserSignInResponse> {
        self.validate()?;
        // TODO
        Ok(UserSignInResponse {
            token: "kkk".to_string(),
            name: "nnn".to_string(),
            lang: "lll".to_string(),
        })
    }
}

#[derive(GraphQLObject)]
pub struct UserSignInResponse {
    pub token: String,
    pub name: String,
    pub lang: String,
}

#[derive(Validate, GraphQLInputObject)]
pub struct UserSignUpRequest {
    #[validate(email, length(min = 1))]
    pub email: String,
    #[validate(length(min = 6, max = 32))]
    pub password: String,
}

impl UserSignUpRequest {
    pub fn handle(&self, _ctx: &Context) -> Result<Success> {
        self.validate()?;
        // TODO
        Ok(Success::default())
    }
}
