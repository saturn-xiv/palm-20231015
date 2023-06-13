use juniper::{graphql_object, FieldResult};
use nut::graphql::Context;
use palm::Succeeded;

pub struct Mutation;

#[graphql_object(Context = Context)]
impl Mutation {
    #[graphql(description = "User reset password by token")]
    fn user_reset_password(
        context: &Context,
        form: nut::graphql::user::ResetPasswordRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "User reset password email")]
    async fn user_forgot_password(
        context: &Context,
        form: nut::graphql::user::QueryRequest,
    ) -> FieldResult<Succeeded> {
        form.forgot_password(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "User unlocked by token")]
    fn user_unlocked_by_token(
        context: &Context,
        form: nut::graphql::user::TokenRequest,
    ) -> FieldResult<Succeeded> {
        form.unlock_by_token(context)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "User unlocked by email")]
    async fn user_unlocked_by_email(
        context: &Context,
        form: nut::graphql::user::QueryRequest,
    ) -> FieldResult<Succeeded> {
        form.unlock_by_email(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "User confirmed by token")]
    fn user_confirmed_by_token(
        context: &Context,
        form: nut::graphql::user::TokenRequest,
    ) -> FieldResult<Succeeded> {
        form.confirm_by_token(context)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "User confirmed by email")]
    async fn user_confirmed_by_email(
        context: &Context,
        form: nut::graphql::user::QueryRequest,
    ) -> FieldResult<Succeeded> {
        form.confirm_by_email(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "User sign-up")]
    async fn user_sign_up(
        context: &Context,
        form: nut::graphql::user::SignUpRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "User sign-in")]
    async fn user_sign_in(
        context: &Context,
        form: nut::graphql::user::SignInRequest,
    ) -> FieldResult<nut::graphql::user::SignInResponse> {
        let it = form.handle(context).await?;
        Ok(it)
    }
}
