use juniper::{graphql_object, FieldResult};

use super::super::super::{
    i18n::locale::Item as Locale,
    plugins::nut::{
        self,
        graphql::{Context, Pager},
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
    fn userLogs(ctx: &Context, pager: Pager) -> FieldResult<Vec<nut::models::log::Item>> {
        nut::graphql::user::UserLogList::new(ctx, &pager)?;
        Ok(Vec::new())
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
}
