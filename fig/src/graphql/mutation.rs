use juniper::{graphql_object, FieldResult};
use nut::graphql::Context;

pub struct Mutation;

#[graphql_object(Context = Context)]
impl Mutation {
    // #[graphql(description = "User sign Up")]
    // async fn user_sign_up(
    //     context: &Context,
    //     form: nut::graphql::mutation::user::SignUpRequest,
    // ) -> FieldResult<Succeeded> {
    //     form.handle(context)?;
    //     Ok(Succeeded::default())
    // }
    #[graphql(description = "User sign in")]
    async fn user_sign_in(
        context: &Context,
        form: nut::graphql::mutation::user::SignInRequest,
    ) -> FieldResult<nut::graphql::mutation::user::SignInResponse> {
        let it = form.handle(context).await?;
        Ok(it)
    }
}
