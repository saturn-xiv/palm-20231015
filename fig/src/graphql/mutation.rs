use juniper::{graphql_object, FieldResult};
use nut::graphql::Context;
use palm::Succeeded;

pub struct Mutation;

#[graphql_object(Context = Context)]
impl Mutation {
    #[graphql(description = "User reset password by token")]
    fn reset_user_password(
        context: &Context,
        form: nut::graphql::user::ResetPasswordRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "User reset password email")]
    async fn forgot_user_password(
        context: &Context,
        form: nut::graphql::user::QueryRequest,
    ) -> FieldResult<Succeeded> {
        form.forgot_password(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "User unlocked by token")]
    fn unlock_user_by_token(
        context: &Context,
        form: nut::graphql::user::TokenRequest,
    ) -> FieldResult<Succeeded> {
        form.unlock_by_token(context)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "User unlocked by email")]
    async fn unlock_user_by_email(
        context: &Context,
        form: nut::graphql::user::QueryRequest,
    ) -> FieldResult<Succeeded> {
        form.unlock_by_email(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "User confirmed by token")]
    fn confirm_user_by_token(
        context: &Context,
        form: nut::graphql::user::TokenRequest,
    ) -> FieldResult<Succeeded> {
        form.confirm_by_token(context)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "User confirmed by email")]
    async fn confirm_user_by_email(
        context: &Context,
        form: nut::graphql::user::QueryRequest,
    ) -> FieldResult<Succeeded> {
        form.confirm_by_email(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "User sign-up")]
    async fn sign_up(
        context: &Context,
        form: nut::graphql::user::SignUpRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "User sign-in")]
    async fn sign_in(
        context: &Context,
        form: nut::graphql::user::SignInRequest,
    ) -> FieldResult<nut::graphql::user::SignInResponse> {
        let it = form.handle(context).await?;
        Ok(it)
    }
    #[graphql(description = "Refresh user token")]
    async fn refresh_token(
        context: &Context,
        form: nut::graphql::user::RefreshTokenRequest,
    ) -> FieldResult<nut::graphql::user::SignInResponse> {
        let it = form.handle(context).await?;
        Ok(it)
    }
    #[graphql(description = "User sign-out")]
    fn sign_out(context: &Context) -> FieldResult<Succeeded> {
        nut::graphql::user::sign_out(context)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Update user profile")]
    fn update_user_profile(
        context: &Context,
        form: nut::graphql::user::UpdateProfileRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Change user's password")]
    fn change_user_password(
        context: &Context,
        form: nut::graphql::user::ChangePasswordRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Confirm user")]
    async fn confirm_user(context: &Context, id: i32) -> FieldResult<Succeeded> {
        nut::graphql::user::confirm(context, id).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Unlock user")]
    async fn unlock_user(context: &Context, id: i32) -> FieldResult<Succeeded> {
        nut::graphql::user::unlock(context, id).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Lock user")]
    async fn lock_user(context: &Context, id: i32) -> FieldResult<Succeeded> {
        nut::graphql::user::lock(context, id).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Enable user")]
    async fn enable_user(context: &Context, id: i32) -> FieldResult<Succeeded> {
        nut::graphql::user::enable(context, id).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Disable user")]
    async fn disable_user(context: &Context, id: i32) -> FieldResult<Succeeded> {
        nut::graphql::user::disable(context, id).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Delete user")]
    async fn delete_user(context: &Context, id: i32) -> FieldResult<Succeeded> {
        nut::graphql::user::delete(context, id).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Set user's password")]
    async fn set_user_password(
        context: &Context,
        form: nut::graphql::user::SetPasswordRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }

    #[graphql(description = "Delete attachment")]
    async fn delete_attachment(context: &Context, id: i32) -> FieldResult<Succeeded> {
        nut::graphql::attachment::delete(context, id).await?;
        Ok(Succeeded::default())
    }
}
