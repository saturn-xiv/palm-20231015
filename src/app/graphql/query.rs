use juniper::{graphql_object, FieldResult};

use super::super::super::{
    i18n::locale::Item as Locale,
    plugins::{
        forum,
        nut::{
            self,
            graphql::{Context, Pager},
        },
    },
    VERSION,
};

pub struct Query;

#[graphql_object(
    context = Context,
)]
impl Query {
    fn apiVersion() -> &'static str {
        VERSION
    }
    fn userLogs(ctx: &Context, pager: Pager) -> FieldResult<nut::graphql::user::UserLogList> {
        let it = nut::graphql::user::UserLogList::new(ctx, &pager)?;
        Ok(it)
    }
    fn userRefreshToken(ctx: &Context) -> FieldResult<nut::graphql::user::UserSignInResponse> {
        let it = nut::graphql::user::refresh_token(ctx)?;
        Ok(it)
    }
    fn fetchLocaleByLang(ctx: &Context, lang: String) -> FieldResult<Vec<Locale>> {
        let it = nut::graphql::locale::by_lang(ctx, &lang)?;
        Ok(it)
    }

    fn siteInfo(ctx: &Context) -> FieldResult<nut::graphql::Site> {
        let it = nut::graphql::Site::new(ctx)?;
        Ok(it)
    }

    fn indexLeaveWord(
        ctx: &Context,
        limit: i32,
    ) -> FieldResult<Vec<nut::models::leave_word::Item>> {
        let items = nut::graphql::leave_word::index(ctx, limit)?;
        Ok(items)
    }

    fn indexTag(ctx: &Context) -> FieldResult<Vec<nut::graphql::tag::Tag>> {
        let items = nut::graphql::tag::index(ctx)?;
        Ok(items)
    }
    fn showTag(ctx: &Context, id: i32) -> FieldResult<nut::graphql::tag::Tag> {
        let it = nut::graphql::tag::show(ctx, id)?;
        Ok(it)
    }

    fn latestForumTopic(
        ctx: &Context,
        pager: Pager,
    ) -> FieldResult<forum::graphql::topic::ForumTopicList> {
        let it = forum::graphql::topic::ForumTopicList::latest(ctx, &pager)?;
        Ok(it)
    }
    fn showForumTopic(ctx: &Context, id: i32) -> FieldResult<forum::graphql::topic::ForumTopic> {
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
    fn showForumPost(ctx: &Context, id: i32) -> FieldResult<forum::graphql::post::ForumPost> {
        let it = forum::graphql::post::show(ctx, id)?;
        Ok(it)
    }
}