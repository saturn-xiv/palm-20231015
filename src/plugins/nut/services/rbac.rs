use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::{Enforcer, RbacApi};
use chrono::Duration;
use diesel::Connection as DieselConntection;
use hyper::StatusCode;
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};

use super::super::super::super::{
    jwt::Jwt,
    orm::postgresql::{Connection as Db, Pool as PostgreSqlPool},
    Error, GrpcResult, HttpError, Result,
};
use super::super::{
    models::{
        log::{Dao as LogDao, Level},
        user::{Action, Dao as UserDao, Item as User, Token},
    },
    v1,
};
use super::Session;

pub struct Service {
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Jwt>,
    pub enforcer: Arc<Mutex<Enforcer>>,
}
