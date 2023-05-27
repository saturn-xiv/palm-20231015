use juniper::{graphql_object, FieldResult};
use nut::graphql::{mutation::UserSignInRequest, Context, Succeeded};

pub struct Mutation;

#[graphql_object(Context = Context)]
impl Mutation {
    #[graphql(description = "List of all users")]
    fn user_sign_in(context: &Context, form: UserSignInRequest) -> FieldResult<Succeeded> {
        form.handle(context)?;
        Ok(Succeeded::default())
    }
}
