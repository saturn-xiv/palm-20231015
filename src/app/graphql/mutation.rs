use juniper::{graphql_object, FieldResult};
use tokio::runtime::Handle;
use tokio::task::block_in_place;

use super::super::super::{
    plugins::nut::{
        self,
        graphql::{Context, Success},
    },
    Result,
};

pub struct Mutation;

#[graphql_object(
    context = Context,
)]
impl Mutation {
    fn userSignIn(
        ctx: &Context,
        form: nut::graphql::user::UserSignInRequest,
    ) -> FieldResult<nut::graphql::user::UserSignInResponse> {
        let it = form.handle(ctx)?;
        Ok(it)
    }
    fn userSignUp(
        ctx: &Context,
        form: nut::graphql::user::UserSignUpRequest,
    ) -> FieldResult<Success> {
        block_in_place(move || -> Result<()> {
            Handle::current().block_on(async move { form.handle(ctx).await })
        })?;
        Ok(Success::default())
    }
    fn userConfirmByEmail(
        ctx: &Context,
        form: nut::graphql::user::UserConfirmByEmailRequest,
    ) -> FieldResult<Success> {
        block_in_place(move || -> Result<()> {
            Handle::current().block_on(async move { form.handle(ctx).await })
        })?;
        Ok(Success::default())
    }
    fn userConfirmByToken(ctx: &Context, token: String) -> FieldResult<Success> {
        nut::graphql::user::confirm_by_token(ctx, &token)?;
        Ok(Success::default())
    }
    fn userUnlockByEmail(
        ctx: &Context,
        form: nut::graphql::user::UserUnlockByEmailRequest,
    ) -> FieldResult<Success> {
        block_in_place(move || -> Result<()> {
            Handle::current().block_on(async move { form.handle(ctx).await })
        })?;
        Ok(Success::default())
    }
    fn userUnlockByToken(ctx: &Context, token: String) -> FieldResult<Success> {
        nut::graphql::user::unlock_by_token(ctx, &token)?;
        Ok(Success::default())
    }
    fn userForgotPassword(
        ctx: &Context,
        form: nut::graphql::user::UserForgotPasswordRequest,
    ) -> FieldResult<Success> {
        block_in_place(move || -> Result<()> {
            Handle::current().block_on(async move { form.handle(ctx).await })
        })?;
        Ok(Success::default())
    }
    fn userResetPassword(
        ctx: &Context,
        form: nut::graphql::user::UserResetPasswordRequest,
    ) -> FieldResult<Success> {
        form.handle(ctx)?;
        Ok(Success::default())
    }
    fn userUpdateProfile(
        ctx: &Context,
        form: nut::graphql::user::UserUpdateProfileRequest,
    ) -> FieldResult<Success> {
        form.handle(ctx)?;
        Ok(Success::default())
    }
    fn userChangePassword(
        ctx: &Context,
        form: nut::graphql::user::UserChangePasswordRequest,
    ) -> FieldResult<Success> {
        form.handle(ctx)?;
        Ok(Success::default())
    }
    fn userSignOut(ctx: &Context) -> FieldResult<Success> {
        nut::graphql::user::sign_out(ctx)?;
        Ok(Success::default())
    }

    fn setLocale(
        ctx: &Context,
        form: nut::graphql::locale::SetLocaleRequest,
    ) -> FieldResult<Success> {
        form.handle(ctx)?;
        Ok(Success::default())
    }
    fn destroyLocale(ctx: &Context, id: i32) -> FieldResult<Success> {
        nut::graphql::locale::destroy(ctx, id)?;
        Ok(Success::default())
    }

    fn createLeaveWord(
        ctx: &Context,
        form: nut::graphql::leave_word::CreateLeaveWordRequest,
    ) -> FieldResult<Success> {
        form.handle(ctx)?;
        Ok(Success::default())
    }
    fn destroyLeaveWord(ctx: &Context, id: i32) -> FieldResult<Success> {
        nut::graphql::leave_word::destroy(ctx, id)?;
        Ok(Success::default())
    }
}
