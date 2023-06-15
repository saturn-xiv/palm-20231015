use std::fs::read_to_string;
use std::ops::{Deref, DerefMut};
use std::process::Command;

use chrono::NaiveDateTime;
use diesel::{
    sql_query,
    sql_types::{Text, Timestamptz},
    RunQueryDsl,
};
use hyper::StatusCode;
use juniper::GraphQLObject;
use palm::{
    cache::{redis::ClusterConnection as RedisConnection, Provider as CacheProvider},
    queue::amqp::RabbitMq,
    search::OpenSearch,
    HttpError, Result,
};
use serde::{Deserialize, Serialize};

use super::super::super::orm::postgresql::Connection as PostgreSqlConnection;
use super::super::{Context, CurrentUserAdapter};

#[derive(GraphQLObject)]
#[graphql(name = "SiteStatusResponse")]
pub struct StatusResponse {
    pub redis: RedisStatusResponse,
    pub postgresql: PostgreSqlStatusResponse,
    pub opensearch: OpenSearchStatusResponse,
    pub os: OsStatusResponse,
    pub rabbitmq: RabbitMqStatusResponse,
}

impl StatusResponse {
    pub async fn new(context: &Context) -> Result<Self> {
        let mut db = context.db.get()?;
        let db = db.deref_mut();
        let mut ch = context.cache.get()?;
        let ch = ch.deref_mut();
        let (user, _, _) = {
            let jwt = context.loquat.deref();
            context.session.current_user(db, ch, jwt)?
        };
        let enf = context.enforcer.deref();

        if !user.is_administrator(enf).await {
            return Err(Box::new(HttpError(StatusCode::FORBIDDEN, None)));
        }

        let search = context.search.deref();
        let queue = context.queue.deref();
        Ok(Self {
            redis: RedisStatusResponse::new(ch)?,
            opensearch: OpenSearchStatusResponse::new(search).await?,
            os: OsStatusResponse::new()?,
            postgresql: PostgreSqlStatusResponse::new(db)?,
            rabbitmq: RabbitMqStatusResponse::new(queue).await?,
        })
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "RabbitMqStatusResponse")]
pub struct RabbitMqStatusResponse {
    pub protocol: String,
    pub heartbeat: i32,
}

impl RabbitMqStatusResponse {
    pub async fn new(queue: &RabbitMq) -> Result<Self> {
        let con = lapin::Connection::connect_uri(queue.uri.clone(), queue.conn.clone()).await?;

        let it = Self {
            protocol: format!(
                "{} {}.{}.{}",
                lapin::protocol::metadata::NAME,
                lapin::protocol::metadata::MAJOR_VERSION,
                lapin::protocol::metadata::MINOR_VERSION,
                lapin::protocol::metadata::REVISION
            ),
            heartbeat: con.configuration().heartbeat() as i32,
        };
        Ok(it)
    }
}

#[derive(QueryableByName, PartialEq, Debug)]
struct DatabaseVersion {
    #[diesel(sql_type = Text)]
    value: String,
}

#[derive(QueryableByName, PartialEq, Debug)]
struct DatabaseNow {
    #[diesel(sql_type = Timestamptz)]
    value: NaiveDateTime,
}

#[derive(QueryableByName, PartialEq, Debug, Serialize, Deserialize)]
struct Database {
    #[diesel(sql_type = Text)]
    name: String,
    #[diesel(sql_type = Text)]
    size: String,
}

#[derive(GraphQLObject)]
#[graphql(name = "PostgreSqlStatusResponse")]
pub struct PostgreSqlStatusResponse {
    pub now: NaiveDateTime,
    pub version: String,
    pub databases: Vec<PostgreSqlDatabaseItem>,
}

#[derive(GraphQLObject)]
#[graphql(name = "PostgreSqlDatabaseItem")]
pub struct PostgreSqlDatabaseItem {
    pub name: String,
    pub size: String,
}
impl PostgreSqlStatusResponse {
    pub fn new(db: &mut PostgreSqlConnection) -> Result<Self> {
        let ver: DatabaseVersion = sql_query("SELECT VERSION() AS value").get_result(db)?;
        let now: DatabaseNow = sql_query("SELECT CURRENT_TIMESTAMP AS value").get_result(db)?;
        let databases: Vec<Database> = sql_query(r###"SELECT pg_database.datname as "name", pg_size_pretty(pg_database_size(pg_database.datname)) AS "size" FROM pg_database ORDER by "size" DESC;"###).load(db)?;

        Ok(Self {
            version: ver.value,
            now: now.value,
            databases: databases
                .iter()
                .map(|x| PostgreSqlDatabaseItem {
                    name: x.name.clone(),
                    size: x.size.clone(),
                })
                .collect(),
        })
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "OsStatusResponse")]
pub struct OsStatusResponse {
    pub version: String,
    pub cpu: String,
    pub memory: String,
    pub boot: String,
    pub disk: String,
    pub load: String,
    pub fs: String,
    pub swap: String,
    pub uptime: String,
    pub network: String,
}

impl OsStatusResponse {
    fn new() -> Result<Self> {
        let it = Self {
            version: read_to_string("/proc/version")?,
            cpu: read_to_string("/proc/cpuinfo")?,
            memory: read_to_string("/proc/meminfo")?,
            boot: read_to_string("/proc/cmdline")?,
            disk: {
                // read_to_string("/proc/diskstats")?
                let it = Command::new("df").arg("-h").output()?;
                String::from_utf8(it.stdout)?
            },
            load: {
                let it = Command::new("top").arg("-b").arg("-n").arg("1").output()?;
                String::from_utf8(it.stdout)?
            },
            fs: read_to_string("/proc/mounts")?,
            swap: read_to_string("/proc/swaps")?,
            uptime: read_to_string("/proc/uptime")?,
            network: {
                let it = Command::new("ip").arg("address").output()?;
                String::from_utf8(it.stdout)?
            },
        };
        Ok(it)
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "RedisStatusResponse")]
pub struct RedisStatusResponse {
    pub info: String,
    pub items: Vec<RedisCatchItem>,
}

#[derive(GraphQLObject)]
#[graphql(name = "RedisCatchItem")]
pub struct RedisCatchItem {
    pub node: String,
    pub key: String,
    pub ttl: i32,
}
impl RedisStatusResponse {
    pub fn new(db: &mut RedisConnection) -> Result<Self> {
        let version = db.version()?;
        // FIXME
        let items = db
            .keys()?
            .iter()
            .map(|(node, key, ttl)| RedisCatchItem {
                ttl: *ttl as i32,
                key: key.clone(),
                node: node.clone(),
            })
            .collect();
        Ok(Self {
            info: version,
            items,
        })
    }
}

#[derive(GraphQLObject)]
#[graphql(name = "OpenSearchStatusResponse")]
pub struct OpenSearchStatusResponse {
    pub url: String,
    pub info: String,
}
impl OpenSearchStatusResponse {
    pub async fn new(search: &OpenSearch) -> Result<Self> {
        let (url, info) = search.info().await?;
        Ok(Self { url, info })
    }
}
