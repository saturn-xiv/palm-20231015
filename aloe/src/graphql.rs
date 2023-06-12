use std::ops::Deref;
use std::sync::{Arc, Mutex};

use actix_web::{get, route, web, HttpResponse, Responder, Result as WebResult};
use actix_web_lab::respond::Html;
use diesel::sqlite::SqliteConnection as Db;
use juniper::{
    graphql_object,
    http::{graphiql::graphiql_source, GraphQLRequest},
    EmptySubscription, FieldResult, RootNode,
};
use palm::{
    crypto::Hmac,
    handlers::{locale::Locale, peer::ClientIp, token::Token},
    jwt::openssl::OpenSsl as Jwt,
    session::Session,
    Succeeded, BUILD_TIME, GIT_VERSION,
};

pub fn register(config: &mut web::ServiceConfig) {
    let schema = web::Data::new(Schema::new(Query, Mutation, EmptySubscription::new()));
    config.app_data(schema).service(source).service(playground);
}
pub struct Context {
    pub session: Session,
    pub db: Arc<Mutex<Db>>,
    pub jwt: Arc<Jwt>,
    pub hmac: Arc<Hmac>,
}

pub struct Query;

#[graphql_object(Context = Context)]
impl Query {
    #[graphql(description = "API version")]
    fn api_version(_context: &Context) -> FieldResult<String> {
        Ok(format!("{}({})", GIT_VERSION, BUILD_TIME))
    }
    #[graphql(description = "Router logs")]
    fn logs(context: &Context) -> FieldResult<Vec<String>> {
        let items = ops_router::graphql::query::logs(&context.session, &context.db, &context.jwt)?;
        Ok(items)
    }
    #[graphql(description = "Router status")]
    fn status(
        context: &Context,
    ) -> FieldResult<ops_router::graphql::query::router::StatusResponse> {
        let items = ops_router::graphql::query::router::StatusResponse::new(
            &context.session,
            &context.db,
            &context.jwt,
        )?;
        Ok(items)
    }
    #[graphql(description = "Router firewall rules")]
    fn firewall_rules(
        context: &Context,
    ) -> FieldResult<ops_router::graphql::query::router::IndexFirewallRuleResponse> {
        let items = ops_router::graphql::query::router::IndexFirewallRuleResponse::new(
            &context.session,
            &context.db,
            &context.jwt,
        )?;
        Ok(items)
    }
    #[graphql(description = "Router users")]
    fn users(context: &Context) -> FieldResult<Vec<ops_router::graphql::query::router::User>> {
        let items = ops_router::graphql::query::router::User::all(
            &context.session,
            &context.db,
            &context.jwt,
        )?;
        Ok(items)
    }
    #[graphql(description = "Router hosts")]
    fn hosts(context: &Context) -> FieldResult<Vec<ops_router::graphql::query::router::Host>> {
        let items = ops_router::graphql::query::router::Host::index(
            &context.session,
            &context.db,
            &context.jwt,
        )?;
        Ok(items)
    }
}

pub struct Mutation;

#[graphql_object(Context = Context)]
impl Mutation {
    #[graphql(description = "Administrator sign-in")]
    async fn sign_in(
        context: &Context,
        form: ops_router::graphql::mutation::user::SignInRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(&context.db, &context.jwt, &context.hmac)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Refresh administrator token")]
    fn refresh(
        context: &Context,
        form: ops_router::graphql::mutation::user::RefreshRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(&context.session, &context.db, &context.jwt)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Administrator sign-out")]
    fn sign_out(context: &Context) -> FieldResult<Succeeded> {
        ops_router::graphql::mutation::user::sign_out(&context.session, &context.db, &context.jwt)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Update administrator info")]
    fn set_administrator(
        context: &Context,
        form: ops_router::graphql::mutation::user::UpdateRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(&context.db, &context.hmac)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Reboot machine")]
    fn reboot(context: &Context) -> FieldResult<Succeeded> {
        ops_router::graphql::mutation::router::reboot(&context.session, &context.db, &context.jwt)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Apply all changes")]
    fn apply(context: &Context) -> FieldResult<Succeeded> {
        ops_router::graphql::mutation::router::ApplyRequest::handle(
            &context.session,
            &context.db,
            &context.jwt,
        )?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Set wan pool")]
    fn set_wan_pool(
        context: &Context,
        form: ops_router::graphql::mutation::router::SetWanPoolRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(&context.session, &context.db, &context.jwt)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Set DNS servers")]
    fn set_dns(
        context: &Context,
        form: ops_router::graphql::mutation::router::SetDnsRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(&context.session, &context.db, &context.jwt)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Set Wan interface")]
    fn set_wan(
        context: &Context,
        form: ops_router::graphql::mutation::router::SetWanRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(&context.session, &context.db, &context.jwt)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Set Lan interface")]
    fn set_lan(
        context: &Context,
        form: ops_router::graphql::mutation::router::SetLanRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(&context.session, &context.db, &context.jwt)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Set Dmz interface")]
    fn set_dmz(
        context: &Context,
        form: ops_router::graphql::mutation::router::SetDmzRequest,
    ) -> FieldResult<Succeeded> {
        form.handle(&context.session, &context.db, &context.jwt)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Create firewall in-bound rule")]
    fn create_firewall_in_bound_rule(
        context: &Context,
        form: ops_router::graphql::mutation::router::FirewallInBoundRequest,
    ) -> FieldResult<Succeeded> {
        form.create(&context.session, &context.db, &context.jwt)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Update firewall in-bound rule")]
    fn update_firewall_in_bound_rule(
        context: &Context,
        id: i32,
        form: ops_router::graphql::mutation::router::FirewallInBoundRequest,
    ) -> FieldResult<Succeeded> {
        form.update(id, &context.session, &context.db, &context.jwt)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Create firewall nat rule")]
    fn create_firewall_nat_rule(
        context: &Context,
        form: ops_router::graphql::mutation::router::FirewallInBoundRequest,
    ) -> FieldResult<Succeeded> {
        form.create(&context.session, &context.db, &context.jwt)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Update firewall nat rule")]
    fn update_firewall_nat_rule(
        context: &Context,
        id: i32,
        form: ops_router::graphql::mutation::router::FirewallInBoundRequest,
    ) -> FieldResult<Succeeded> {
        form.update(id, &context.session, &context.db, &context.jwt)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Destroy firewall rule")]
    fn destroy_firewall_nat_rule(context: &Context, id: i32) -> FieldResult<Succeeded> {
        ops_router::graphql::mutation::router::FirewallRuleDestroyRequest::handle(
            id,
            &context.session,
            &context.db,
            &context.jwt,
        )?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Update host")]
    fn update_host(
        context: &Context,
        id: i32,
        form: ops_router::graphql::mutation::router::HostRequest,
    ) -> FieldResult<Succeeded> {
        form.update(id, &context.session, &context.db, &context.jwt)?;
        Ok(Succeeded::default())
    }
    #[graphql(description = "Update user")]
    fn update_user(
        context: &Context,
        id: i32,
        form: ops_router::graphql::mutation::router::HostRequest,
    ) -> FieldResult<Succeeded> {
        form.update(id, &context.session, &context.db, &context.jwt)?;
        Ok(Succeeded::default())
    }
}

type Schema = RootNode<'static, Query, Mutation, EmptySubscription<Context>>;

#[route("/graphql", method = "GET", method = "POST")]
async fn source(
    (client_ip, locale, token): (ClientIp, Locale, Token),
    (db, jwt, hmac): (web::Data<Mutex<Db>>, web::Data<Jwt>, web::Data<Hmac>),
    schema: web::Data<Schema>,
    data: web::Json<GraphQLRequest>,
) -> WebResult<HttpResponse> {
    let db = db.deref();
    let jwt = jwt.deref();
    let hmac = hmac.deref();
    let ctx = Context {
        db: db.clone(),
        jwt: jwt.clone(),
        hmac: hmac.clone(),
        session: Session {
            lang: locale.to_string(),
            client_ip: client_ip.to_string(),
            token: token.0,
        },
    };
    let res = data.execute(&schema, &ctx).await;
    Ok(HttpResponse::Ok().json(res))
}

#[get("/graphiql")]
async fn playground() -> impl Responder {
    Html(graphiql_source("/graphql", None))
}
