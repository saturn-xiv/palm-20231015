use std::ops::{Deref, DerefMut};
use std::sync::{Arc, Mutex};

use casbin::{Enforcer, RbacApi};
use chrono::Duration;
use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use tonic::{Request, Response, Status};

use super::super::super::super::{
    crypto::Hmac,
    i18n::I18n,
    jwt::Jwt,
    orm::postgresql::{Connection as Db, Pool as PostgreSqlPool},
    queue::amqp::RabbitMq,
    Error, GrpcResult, HttpError, Result,
};
use super::super::{
    models::{
        log::{Dao as LogDao, Level},
        user::{Action, Dao as UserDao, Item as User, Token},
    },
    tasks::email::Task as EmailTask,
    v1,
};
use super::Session;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub enforcer: Arc<Mutex<Enforcer>>,
}
