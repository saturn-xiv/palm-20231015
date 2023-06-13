use juniper::{graphql_object, FieldResult};
use nut::graphql::Context;
use palm::{Pager, BUILD_TIME, GIT_VERSION};

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
}
