use juniper::{graphql_object, FieldResult};
use uuid::Uuid;

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
    fn install(
        ctx: &Context,
        form: nut::graphql::user::UserSignUpRequest,
        captcha: String,
    ) -> FieldResult<Success> {
        ctx.verify_captcha(&captcha)?;

        form.install_administrator(ctx)?;
        Ok(Success::default())
    }
    fn userSignIn(
        ctx: &Context,
        id: String,
        password: String,
        captcha: String,
    ) -> FieldResult<nut::graphql::user::UserSignInResponse> {
        ctx.verify_captcha(&captcha)?;
        let form = nut::graphql::user::UserSignInRequest { id, password };
        let it = form.handle(ctx)?;
        Ok(it)
    }
    fn userSignUp(
        ctx: &Context,
        form: nut::graphql::user::UserSignUpRequest,
        captcha: String,
    ) -> FieldResult<Success> {
        ctx.verify_captcha(&captcha)?;
        form.handle(ctx)?;
        Ok(Success::default())
    }
    fn userConfirmByEmail(
        ctx: &Context,
        email: String,
        home: String,
        captcha: String,
    ) -> FieldResult<Success> {
        ctx.verify_captcha(&captcha)?;
        let form = nut::graphql::user::UserConfirmByEmailRequest { email, home };
        form.handle(ctx)?;
        Ok(Success::default())
    }
    fn userConfirmByToken(ctx: &Context, token: String, captcha: String) -> FieldResult<Success> {
        ctx.verify_captcha(&captcha)?;
        nut::graphql::user::confirm_by_token(ctx, &token)?;
        Ok(Success::default())
    }
    fn userUnlockByEmail(
        ctx: &Context,
        email: String,
        home: String,
        captcha: String,
    ) -> FieldResult<Success> {
        ctx.verify_captcha(&captcha)?;
        let form = nut::graphql::user::UserUnlockByEmailRequest { email, home };
        form.handle(ctx)?;
        Ok(Success::default())
    }
    fn userUnlockByToken(ctx: &Context, token: String) -> FieldResult<Success> {
        nut::graphql::user::unlock_by_token(ctx, &token)?;
        Ok(Success::default())
    }
    fn userForgotPassword(
        ctx: &Context,
        email: String,
        home: String,
        captcha: String,
    ) -> FieldResult<Success> {
        ctx.verify_captcha(&captcha)?;
        let form = nut::graphql::user::UserForgotPasswordRequest { email, home };
        form.handle(ctx)?;
        Ok(Success::default())
    }
    fn userResetPassword(ctx: &Context, token: String, password: String) -> FieldResult<Success> {
        let form = nut::graphql::user::UserResetPasswordRequest { token, password };
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
        current_password: String,
        new_password: String,
    ) -> FieldResult<Success> {
        let form = nut::graphql::user::UserChangePasswordRequest {
            current_password,
            new_password,
        };
        form.handle(ctx)?;
        Ok(Success::default())
    }
    fn userSignOut(ctx: &Context) -> FieldResult<Success> {
        nut::graphql::user::sign_out(ctx)?;
        Ok(Success::default())
    }

    fn setLocale(
        ctx: &Context,
        lang: String,
        code: String,
        message: String,
    ) -> FieldResult<Success> {
        let form = nut::graphql::locale::SetLocaleRequest {
            lang,
            code,
            message,
        };
        form.handle(ctx)?;
        Ok(Success::default())
    }
    fn destroyLocale(ctx: &Context, id: Uuid) -> FieldResult<Success> {
        nut::graphql::locale::destroy(ctx, id)?;
        Ok(Success::default())
    }

    fn createLeaveWord(
        ctx: &Context,
        body: String,
        editor: String,
        captcha: String,
    ) -> FieldResult<Success> {
        ctx.verify_captcha(&captcha)?;
        let form = nut::graphql::leave_word::CreateLeaveWordRequest { body, editor };
        form.handle(ctx)?;
        Ok(Success::default())
    }
    fn readLeaveWord(ctx: &Context, id: Uuid) -> FieldResult<Success> {
        nut::graphql::leave_word::read(ctx, id)?;
        Ok(Success::default())
    }
    fn destroyLeaveWord(ctx: &Context, id: Uuid) -> FieldResult<Success> {
        nut::graphql::leave_word::destroy(ctx, id)?;
        Ok(Success::default())
    }

    fn createTag(ctx: &Context, code: String) -> FieldResult<Success> {
        let form = nut::graphql::tag::TagRequest { code };
        form.create(ctx)?;
        Ok(Success::default())
    }
    fn updateTag(ctx: &Context, id: Uuid, code: String) -> FieldResult<Success> {
        let form = nut::graphql::tag::TagRequest { code };
        form.update(ctx, id)?;
        Ok(Success::default())
    }
    fn destroyTag(ctx: &Context, id: Uuid) -> FieldResult<Success> {
        nut::graphql::tag::destroy(ctx, id)?;
        Ok(Success::default())
    }

    fn createCategory(
        ctx: &Context,
        parent: Option<Uuid>,
        code: String,
        order: i32,
    ) -> FieldResult<Success> {
        let form = nut::graphql::category::CategoryRequest {
            parent,
            code,
            order,
        };
        form.create(ctx)?;
        Ok(Success::default())
    }
    fn updateCategory(
        ctx: &Context,
        id: Uuid,
        parent: Option<Uuid>,
        code: String,
        order: i32,
    ) -> FieldResult<Success> {
        let form = nut::graphql::category::CategoryRequest {
            parent,
            code,
            order,
        };
        form.update(ctx, id)?;
        Ok(Success::default())
    }
    fn destroyCategory(ctx: &Context, id: Uuid) -> FieldResult<Success> {
        nut::graphql::category::destroy(ctx, id)?;
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
        id: Uuid,
        form: forum::graphql::topic::ForumTopicRequest,
    ) -> FieldResult<Success> {
        form.update(ctx, id)?;
        Ok(Success::default())
    }
    fn destroyForumTopic(ctx: &Context, id: Uuid) -> FieldResult<Success> {
        forum::graphql::topic::destroy(ctx, id)?;
        Ok(Success::default())
    }
    fn createForumPost(
        ctx: &Context,
        topic: Uuid,
        parent: Option<Uuid>,
        form: forum::graphql::post::ForumPostRequest,
    ) -> FieldResult<Success> {
        form.create(ctx, topic, parent)?;
        Ok(Success::default())
    }
    fn updateForumPost(
        ctx: &Context,
        id: Uuid,
        form: forum::graphql::post::ForumPostRequest,
    ) -> FieldResult<Success> {
        form.update(ctx, id)?;
        Ok(Success::default())
    }
    fn destroyForumPost(ctx: &Context, id: Uuid) -> FieldResult<Success> {
        forum::graphql::post::destroy(ctx, id)?;
        Ok(Success::default())
    }
}
