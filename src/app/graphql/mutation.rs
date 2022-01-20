use juniper::{graphql_object, FieldResult};

use super::super::super::plugins::{
    forum,
    nut::{
        self,
        graphql::{Context, Success},
    },
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
        form.handle(ctx)?;
        Ok(Success::default())
    }
    fn userConfirmByEmail(
        ctx: &Context,
        form: nut::graphql::user::UserConfirmByEmailRequest,
    ) -> FieldResult<Success> {
        form.handle(ctx)?;
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
        form.handle(ctx)?;
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
        form.handle(ctx)?;
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

    fn createTag(ctx: &Context, form: nut::graphql::tag::TagRequest) -> FieldResult<Success> {
        form.create(ctx)?;
        Ok(Success::default())
    }
    fn updateTag(
        ctx: &Context,
        id: i32,
        form: nut::graphql::tag::TagRequest,
    ) -> FieldResult<Success> {
        form.update(ctx, id)?;
        Ok(Success::default())
    }
    fn destroyTag(ctx: &Context, id: i32) -> FieldResult<Success> {
        nut::graphql::tag::destroy(ctx, id)?;
        Ok(Success::default())
    }

    fn createForumTopic(
        ctx: &Context,
        form: forum::graphql::topic::ForumTopicRequest,
    ) -> FieldResult<Success> {
        form.create(ctx)?;
        Ok(Success::default())
    }
    fn updateForumTopic(
        ctx: &Context,
        id: i32,
        form: forum::graphql::topic::ForumTopicRequest,
    ) -> FieldResult<Success> {
        form.update(ctx, id)?;
        Ok(Success::default())
    }
    fn destroyForumTopic(ctx: &Context, id: i32) -> FieldResult<Success> {
        forum::graphql::topic::destroy(ctx, id)?;
        Ok(Success::default())
    }
    fn createForumPost(
        ctx: &Context,
        topic: i32,
        form: forum::graphql::post::ForumPostRequest,
    ) -> FieldResult<Success> {
        form.create(ctx, topic)?;
        Ok(Success::default())
    }
    fn updateForumPost(
        ctx: &Context,
        id: i32,
        form: forum::graphql::post::ForumPostRequest,
    ) -> FieldResult<Success> {
        form.update(ctx, id)?;
        Ok(Success::default())
    }
    fn destroyForumPost(ctx: &Context, id: i32) -> FieldResult<Success> {
        forum::graphql::post::destroy(ctx, id)?;
        Ok(Success::default())
    }
}
