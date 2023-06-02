pub mod wechat;

use juniper::GraphQLInputObject;
use palm::Result;
use validator::Validate;

use super::super::{Context, Succeeded};

#[derive(GraphQLInputObject, Validate)]
#[graphql(name = "UserSignInRequest", description = "User SignIn form")]
pub struct SignInRequest {
    #[validate(length(min = 1, max = 127))]
    pub user: String,
    #[validate(length(min = 1, max = 32))]
    pub password: String,
}

impl SignInRequest {
    pub fn handle(&self, _context: &Context) -> Result<Succeeded> {
        self.validate()?;
        // TODO
        Ok(Succeeded::default())
    }
}
