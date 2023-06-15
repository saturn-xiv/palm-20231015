use juniper::{graphql_object, FieldResult};
use nut::graphql::Context;
use palm::{Pager, Succeeded, BUILD_TIME, GIT_VERSION};

pub struct Query;

#[graphql_object(Context = Context)]
impl Query {
    #[graphql(description = "API version")]
    fn api_version(_context: &Context) -> FieldResult<String> {
        Ok(format!("{}({})", GIT_VERSION, BUILD_TIME))
    }

    #[graphql(description = "User logs")]
    fn logs(context: &Context, pager: Pager) -> FieldResult<nut::graphql::user::LogsResponse> {
        let it = nut::graphql::user::LogsResponse::new(context, &pager)?;
        Ok(it)
    }
    #[graphql(description = "Users list")]
    async fn index_user(
        context: &Context,
        pager: Pager,
    ) -> FieldResult<nut::graphql::user::IndexUserResponse> {
        let it = nut::graphql::user::IndexUserResponse::new(context, &pager).await?;
        Ok(it)
    }
    #[graphql(description = "Show user by id")]
    async fn show_user(context: &Context, id: i32) -> FieldResult<nut::graphql::user::UserItem> {
        let it = nut::graphql::user::UserItem::show(context, id).await?;
        Ok(it)
    }

    #[graphql(description = "Index attachments")]
    fn index_attachment(
        context: &Context,
        pager: Pager,
    ) -> FieldResult<nut::graphql::attachment::IndexResponse> {
        let it = nut::graphql::attachment::IndexResponse::new(context, &pager)?;
        Ok(it)
    }
    #[graphql(description = "Show attachments")]
    async fn show_attachment(
        context: &Context,
        form: nut::graphql::attachment::ShowRequest,
    ) -> FieldResult<nut::graphql::attachment::ShowResponse> {
        let it = form.handle(context).await?;
        Ok(it)
    }

    #[graphql(description = "Page layout")]
    fn layout(context: &Context) -> FieldResult<nut::graphql::site::LayoutResponse> {
        let it = nut::graphql::site::LayoutResponse::new(context)?;
        Ok(it)
    }
    #[graphql(description = "Heartbeat health check")]
    async fn heartbeat(context: &Context) -> FieldResult<Succeeded> {
        nut::graphql::site::heartbeat(context).await?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Site status")]
    async fn status(context: &Context) -> FieldResult<nut::graphql::site::status::StatusResponse> {
        let it = nut::graphql::site::status::StatusResponse::new(context).await?;
        Ok(it)
    }
    #[graphql(description = "Get site author")]
    fn get_site_author(
        context: &Context,
    ) -> FieldResult<nut::graphql::site::info::GetAuthorResponse> {
        let it = nut::graphql::site::info::GetAuthorResponse::new(context)?;
        Ok(it)
    }
    #[graphql(description = "Get site copyright")]
    fn get_site_copyright(context: &Context) -> FieldResult<String> {
        let it = nut::graphql::site::info::get_copyright(context)?;
        Ok(it)
    }
    #[graphql(description = "Get site logo")]
    fn get_site_logo(context: &Context) -> FieldResult<String> {
        let it = nut::graphql::site::info::get_logo(context)?;
        Ok(it)
    }
    #[graphql(description = "Get site keywords")]
    fn get_site_keywords(context: &Context) -> FieldResult<Vec<String>> {
        let it = nut::graphql::site::info::get_keywords(context)?;
        Ok(it)
    }
    #[graphql(description = "Get site info")]
    fn get_site_info(context: &Context) -> FieldResult<nut::graphql::site::info::GetResponse> {
        let it = nut::graphql::site::info::GetResponse::new(context)?;
        Ok(it)
    }
    #[graphql(description = "Get twilio profile")]
    async fn site_get_twilio_profile(
        context: &Context,
    ) -> FieldResult<nut::graphql::site::twilio::GetResponse> {
        let it = nut::graphql::site::twilio::GetResponse::new(context).await?;
        Ok(it)
    }
    #[graphql(description = "Get smtp profile")]
    async fn site_get_smtp_profile(
        context: &Context,
    ) -> FieldResult<nut::graphql::site::smtp::GetResponse> {
        let it = nut::graphql::site::smtp::GetResponse::new(context).await?;
        Ok(it)
    }
    #[graphql(description = "Get google profile")]
    async fn site_get_google_profile(
        context: &Context,
    ) -> FieldResult<nut::graphql::site::google::GetResponse> {
        let it = nut::graphql::site::google::GetResponse::new(context).await?;
        Ok(it)
    }
    #[graphql(description = "Get baidu profile")]
    async fn site_get_baidu_profile(
        context: &Context,
    ) -> FieldResult<nut::graphql::site::baidu::GetResponse> {
        let it = nut::graphql::site::baidu::GetResponse::new(context).await?;
        Ok(it)
    }
    #[graphql(description = "Get index-now profile")]
    async fn site_get_index_now_profile(
        context: &Context,
    ) -> FieldResult<nut::graphql::site::index_now::GetResponse> {
        let it = nut::graphql::site::index_now::GetResponse::new(context).await?;
        Ok(it)
    }

    #[graphql(description = "Load locale by id")]
    fn show_locale(context: &Context, id: i32) -> FieldResult<nut::graphql::locale::Item> {
        let it = nut::graphql::locale::show(context, id)?;
        Ok(it)
    }
    #[graphql(description = "Load locale by lang")]
    fn index_locale_by_lang(
        context: &Context,
        lang: String,
    ) -> FieldResult<Vec<nut::graphql::locale::Item>> {
        let items = nut::graphql::locale::by_lang(context, &lang)?;
        Ok(items)
    }
    #[graphql(description = "Load all locale")]
    fn index_locale(
        context: &Context,
        pager: Pager,
    ) -> FieldResult<nut::graphql::locale::IndexResponse> {
        let it = nut::graphql::locale::IndexResponse::new(context, &pager)?;
        Ok(it)
    }

    #[graphql(description = "Load leave-word by id")]
    async fn show_leave_word(
        context: &Context,
        id: i32,
    ) -> FieldResult<nut::graphql::leave_word::Item> {
        let it = nut::graphql::leave_word::show(context, id).await?;
        Ok(it)
    }
    #[graphql(description = "Load all leave-word")]
    async fn index_leave_word(
        context: &Context,
        pager: Pager,
    ) -> FieldResult<nut::graphql::leave_word::IndexResponse> {
        let it = nut::graphql::leave_word::IndexResponse::new(context, &pager).await?;
        Ok(it)
    }
}