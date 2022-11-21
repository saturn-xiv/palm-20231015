#[macro_use]
extern crate log;

pub mod models;
pub mod schema;
pub mod services;

pub const UP: &str = include_str!("up.sql");
