extern crate palm;

mod common;

use std::ops::{Deref, DerefMut};

use palm::cache::Provider as CacheProvider;

#[test]
fn postgresql() {
    let cfg = common::load_config();
    let db = cfg.postgresql.open().unwrap();
    let db = db.get().unwrap();
    let db = db.deref();
    let it =
        palm::plugins::nut::graphql::site::status::postgresql::PostgreSqlStatus::new(db).unwrap();
    println!("postgresql {:?}", it);
}

#[test]
fn rabbitmq() {
    let cfg = common::load_config();
    let qu = cfg.rabbitmq.open();
    let it = palm::plugins::nut::graphql::site::status::rabbitmq::RabbitMqStatus::new(&qu).unwrap();
    println!("system: {:?}", it);
}

#[test]
fn redis() {
    let cfg = common::load_config();
    let ch = cfg.redis.open().unwrap();
    let mut ch = ch.get().unwrap();
    let ch = ch.deref_mut();
    let it = ch.version().unwrap();
    println!("redis\n{}", it);
}

#[test]
fn system() {
    let it = palm::plugins::nut::graphql::site::status::system::SystemStatus::new().unwrap();
    println!("system: {:?}", it);
}
