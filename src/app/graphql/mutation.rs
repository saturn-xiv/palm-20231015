use juniper::{graphql_object, FieldResult};

use super::super::super::plugins::nut::graphql::{
    mutation::{UserSignInRequest, UserSignInResponse, UserSignUpRequest},
    Context, Success,
};

pub struct Mutation;

#[graphql_object(
    context = Context,
)]
impl Mutation {
    fn userSignIn(ctx: &Context, form: UserSignInRequest) -> FieldResult<UserSignInResponse> {
        let it = form.handle(ctx)?;
        Ok(it)
    }
    fn userSignUp(ctx: &Context, form: UserSignUpRequest) -> FieldResult<Success> {
        let it = form.handle(ctx)?;
        Ok(it)
    }
}
