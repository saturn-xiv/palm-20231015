use juniper::{graphql_object, FieldResult};
use nut::graphql::Context;
use palm::GIT_VERSION;

pub struct Query;

#[graphql_object(Context = Context)]
impl Query {
    #[graphql(description = "api version")]
    fn api_version(_context: &Context) -> FieldResult<String> {
        Ok(GIT_VERSION.to_string())
    }
}
