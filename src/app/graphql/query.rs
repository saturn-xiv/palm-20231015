use juniper::{graphql_object, FieldResult};
use uuid::Uuid;

use super::super::super::{
    currency::Iso4217,
    i18n::locale::Item as Locale,
    plugins::{
        forum,
        layout::Layout,
        nut::{
            self,
            graphql::{Context, Pager},
        },
    },
    GIT_VERSION,
};

pub struct Query;

#[graphql_object(
    context = Context,
)]
impl Query {
    fn apiVersion() -> &'static str {
        GIT_VERSION
    }
    fn currencies() -> FieldResult<Iso4217> {
        let it = Iso4217::new()?;
        Ok(it)
    }
    fn userLogs(
        ctx: &Context,
        page_size: i32,
        current: i32,
    ) -> FieldResult<nut::graphql::user::UserLogList> {
        let it = nut::graphql::user::UserLogList::new(ctx, page_size, current)?;
        Ok(it)
    }
    fn userRefreshToken(ctx: &Context) -> FieldResult<String> {
        let it = nut::graphql::user::refresh_token(ctx)?;
        Ok(it)
    }
    fn fetchLocaleByLang(ctx: &Context, lang: String) -> FieldResult<Vec<Locale>> {
        let items = nut::graphql::locale::by_lang(ctx, &lang)?;
        Ok(items)
    }

    fn layout(ctx: &Context, lang: Option<String>) -> FieldResult<Layout> {
        let it = Layout::build(ctx, &lang)?;
        Ok(it)
    }

    fn leastLeaveWord(
        ctx: &Context,
        page_size: i32,
        current: i32,
    ) -> FieldResult<nut::graphql::leave_word::LeaveWordList> {
        let it = nut::graphql::leave_word::LeaveWordList::new(ctx, page_size, current)?;
        Ok(it)
    }

    fn indexTag(ctx: &Context) -> FieldResult<Vec<nut::graphql::tag::Tag>> {
        let items = nut::graphql::tag::index(ctx)?;
        Ok(items)
    }
    fn showTag(ctx: &Context, id: Uuid) -> FieldResult<nut::graphql::tag::Tag> {
        let it = nut::graphql::tag::show(ctx, id)?;
        Ok(it)
    }

    fn indexCategory(ctx: &Context) -> FieldResult<Vec<nut::graphql::category::Category>> {
        let items = nut::graphql::category::index(ctx)?;
        Ok(items)
    }
    fn showCategory(ctx: &Context, id: Uuid) -> FieldResult<nut::graphql::category::Category> {
        let it = nut::graphql::category::show(ctx, id)?;
        Ok(it)
    }

    fn latestForumTopic(
        ctx: &Context,
        pager: Pager,
    ) -> FieldResult<forum::graphql::topic::ForumTopicList> {
        let it = forum::graphql::topic::ForumTopicList::latest(ctx, &pager)?;
        Ok(it)
    }
    fn showForumTopic(ctx: &Context, id: Uuid) -> FieldResult<forum::graphql::topic::ForumTopic> {
        let it = forum::graphql::topic::show(ctx, id)?;
        Ok(it)
    }
    fn latestForumPost(
        ctx: &Context,
        pager: Pager,
    ) -> FieldResult<forum::graphql::post::ForumPostList> {
        let it = forum::graphql::post::ForumPostList::latest(ctx, &pager)?;
        Ok(it)
    }
    fn showForumPost(ctx: &Context, id: Uuid) -> FieldResult<forum::graphql::post::ForumPost> {
        let it = forum::graphql::post::show(ctx, id)?;
        Ok(it)
    }
}
