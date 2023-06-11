use juniper::{graphql_object, FieldResult};
use nut::graphql::Context;
use palm::{BUILD_TIME, GIT_VERSION};

pub struct Query;

#[graphql_object(Context = Context)]
impl Query {
    #[graphql(description = "API version")]
    fn api_version(_context: &Context) -> FieldResult<String> {
        Ok(format!("{}({})", GIT_VERSION, BUILD_TIME))
    }
}
