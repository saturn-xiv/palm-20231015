use juniper::GraphQLInputObject;
use palm::Result;
use validator::Validate;

use super::{Context, Succeeded};

#[derive(GraphQLInputObject, Validate)]
#[graphql(description = "User SignIn form")]
pub struct UserSignInRequest {
    #[validate(length(min = 1, max = 127))]
    pub user: String,
    #[validate(length(min = 1, max = 32))]
    pub password: String,
}

impl UserSignInRequest {
    pub fn handle(&self, _context: &Context) -> Result<Succeeded> {
        self.validate()?;
        // TODO
        Ok(Succeeded::default())
    }
}
