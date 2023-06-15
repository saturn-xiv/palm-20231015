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

    #[graphql(description = "Sign in by wechat oauth2")]
    async fn sign_in_by_wechat_oauth2(
        context: &Context,
        form: nut::graphql::user::wechat::oauth2::LoginRequest,
    ) -> FieldResult<nut::graphql::user::SignInResponse> {
        let it = form.handle(context).await?;
        Ok(it)
    }
    #[graphql(description = "Delete wechat oauth2 user")]
    async fn delete_wechat_oauth2_user(context: &Context, id: i32) -> FieldResult<Succeeded> {
        nut::graphql::user::wechat::oauth2::delete(context, id).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Bind wechat oauth2 user")]
    async fn bind_wechat_oauth2_user_by_id(
        context: &Context,
        oauth2_user_id: i32,
        user_id: i32,
    ) -> FieldResult<Succeeded> {
        nut::graphql::user::wechat::oauth2::bind_by_id(context, oauth2_user_id, user_id).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Bind wechat oauth2 user")]
    fn bind_wechat_oauth2_user_by_account(
        context: &Context,
        form: nut::graphql::user::wechat::oauth2::BindByAccountRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Sign in by wechat mini-program")]
    async fn sign_in_by_wechat_mini_program(
        context: &Context,
        form: nut::graphql::user::wechat::mini_program::LoginRequest,
    ) -> FieldResult<nut::graphql::user::SignInResponse> {
        let it = form.handle(context).await?;
        Ok(it)
    }
    #[graphql(description = "Bind wechat mini-program user")]
    fn bind_wechat_mini_program_user_by_account(
        context: &Context,
        form: nut::graphql::user::wechat::mini_program::BindByAccountRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Bind wechat mini-program user")]
    async fn bind_wechat_mini_program_user_by_id(
        context: &Context,
        mini_program_user_id: i32,
        user_id: i32,
    ) -> FieldResult<Succeeded> {
        nut::graphql::user::wechat::mini_program::bind_by_id(
            context,
            mini_program_user_id,
            user_id,
        )
        .await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Update wechat mini-program profile")]
    fn update_wechat_mini_program_user_profile(
        context: &Context,
        form: nut::graphql::user::wechat::mini_program::UpdateProfileRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Delete wechat mini-program user")]
    async fn delete_wechat_mini_program_user(context: &Context, id: i32) -> FieldResult<Succeeded> {
        nut::graphql::user::wechat::mini_program::delete(context, id).await?;
        Ok(Succeeded::default())
    }

    #[graphql(description = "Delete attachment")]
    async fn delete_attachment(context: &Context, id: i32) -> FieldResult<Succeeded> {
        nut::graphql::attachment::delete(context, id).await?;
        Ok(Succeeded::default())
    }

    #[graphql(description = "Init web-site system")]
    async fn install(
        context: &Context,
        form: nut::graphql::site::InstallRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Clear cache")]
    async fn clear_cache(context: &Context) -> FieldResult<Succeeded> {
        nut::graphql::site::clear_cache(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Set site into maintenance mode")]
    async fn set_site_maintenance_mode(
        context: &Context,
        form: nut::graphql::site::SetMaintenanceModeRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Set site author")]
    async fn set_site_author(
        context: &Context,
        form: nut::graphql::site::info::SetAuthorRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Set site copyright")]
    async fn set_site_copyright(
        context: &Context,
        form: nut::graphql::site::info::SetCopyrightRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Set site logo")]
    async fn set_site_logo(
        context: &Context,
        form: nut::graphql::site::info::SetLogoRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Set site keywords")]
    async fn set_site_keywords(
        context: &Context,
        form: nut::graphql::site::info::SetKeywordsRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Set site info")]
    async fn set_site_info(
        context: &Context,
        form: nut::graphql::site::info::SetRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Set site twilio profile")]
    async fn site_set_twilio_profile(
        context: &Context,
        form: nut::graphql::site::twilio::SetRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Ping site twilio profile")]
    async fn site_ping_twilio(
        context: &Context,
        form: nut::graphql::site::twilio::PingRequest,
        profile: nut::graphql::site::twilio::SetRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context, &profile).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Set site smtp profile")]
    async fn site_set_smtp_profile(
        context: &Context,
        form: nut::graphql::site::smtp::SetRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Ping site smtp profile")]
    async fn site_ping_smtp(
        context: &Context,
        form: nut::graphql::site::smtp::PingRequest,
        profile: nut::graphql::site::smtp::SetRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context, &profile).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Set site google profile")]
    async fn site_set_google_profile(
        context: &Context,
        form: nut::graphql::site::google::SetRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Ping site google profile")]
    async fn site_ping_google(
        context: &Context,
        form: nut::graphql::site::google::PingRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }

    #[graphql(description = "Set site baidu profile")]
    async fn site_set_baidu_profile(
        context: &Context,
        form: nut::graphql::site::baidu::SetRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Ping site baidu profile")]
    async fn site_ping_baidu(
        context: &Context,
        form: nut::graphql::site::baidu::PingRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }

    #[graphql(description = "Set site index-now profile")]
    async fn site_set_index_now_profile(
        context: &Context,
        form: nut::graphql::site::index_now::SetRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Ping site index-now profile")]
    async fn site_ping_index_now(
        context: &Context,
        form: nut::graphql::site::index_now::PingRequest,
        profile: nut::graphql::site::index_now::SetRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(context, &profile).await?;
        Ok(Succeeded::default())
    }

    #[graphql(description = "Create a new locale")]
    async fn create_locale(
        context: &Context,
        form: nut::graphql::locale::Create,
    ) -> FieldResult<Succeeded> {
        form.handle(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Update a locale")]
    async fn update_locale(
        context: &Context,
        id: i32,
        form: nut::graphql::locale::Update,
    ) -> FieldResult<Succeeded> {
        form.handle(context, id).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Delete a locale")]
    async fn delete_locale(context: &Context, id: i32) -> FieldResult<Succeeded> {
        nut::graphql::locale::delete(context, id).await?;
        Ok(Succeeded::default())
    }

    #[graphql(description = "Create a leave-word")]
    fn create_leave_word(
        context: &Context,
        form: nut::graphql::leave_word::Create,
    ) -> FieldResult<Succeeded> {
        form.handle(context)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Delete a leave-word")]
    async fn delete_leave_word(context: &Context, id: i32) -> FieldResult<Succeeded> {
        nut::graphql::leave_word::delete(context, id).await?;
        Ok(Succeeded::default())
    }

    #[graphql(description = "Delete roles for user")]
    async fn rbac_delete_roles_for_user(
        context: &Context,
        user: i32,
        roles: Vec<String>,
    ) -> FieldResult<Succeeded> {
        nut::graphql::policy::delete_roles_for_user(context, user, &roles).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Add roles for user")]
    async fn rbac_add_roles_for_user(
        context: &Context,
        user: i32,
        roles: Vec<String>,
    ) -> FieldResult<Succeeded> {
        nut::graphql::policy::add_roles_for_user(context, user, &roles).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Add permissions for role")]
    async fn rbac_add_permissions_for_role(
        context: &Context,
        role: String,
        permissions: Vec<nut::graphql::policy::PermissionRequest>,
    ) -> FieldResult<Succeeded> {
        nut::graphql::policy::add_permissions_for_role(context, &role, &permissions).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Delete permissions for role")]
    async fn rbac_delete_permissions_for_role(
        context: &Context,
        role: String,
        permissions: Vec<nut::graphql::policy::PermissionRequest>,
    ) -> FieldResult<Succeeded> {
        nut::graphql::policy::delete_permissions_for_role(context, &role, &permissions).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Add permissions for user")]
    async fn rbac_add_permissions_for_user(
        context: &Context,
        user: i32,
        permissions: Vec<nut::graphql::policy::PermissionRequest>,
    ) -> FieldResult<Succeeded> {
        nut::graphql::policy::add_permissions_for_user(context, user, &permissions).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Delete permissions for user")]
    async fn rbac_delete_permissions_for_user(
        context: &Context,
        user: i32,
        permissions: Vec<nut::graphql::policy::PermissionRequest>,
    ) -> FieldResult<Succeeded> {
        nut::graphql::policy::delete_permissions_for_user(context, user, &permissions).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Update permissions for role")]
    async fn rbac_update_permissions_for_role(
        context: &Context,
        role: String,
        removed: Vec<nut::graphql::policy::PermissionRequest>,
        saved: Vec<nut::graphql::policy::PermissionRequest>,
    ) -> FieldResult<Succeeded> {
        nut::graphql::policy::update_permissions_for_role(context, &role, &removed, &saved).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Update permissions for user")]
    async fn rbac_update_permissions_for_user(
        context: &Context,
        user: i32,
        removed: Vec<nut::graphql::policy::PermissionRequest>,
        saved: Vec<nut::graphql::policy::PermissionRequest>,
    ) -> FieldResult<Succeeded> {
        nut::graphql::policy::update_permissions_for_user(context, user, &removed, &saved).await?;
        Ok(Succeeded::default())
    }
}
