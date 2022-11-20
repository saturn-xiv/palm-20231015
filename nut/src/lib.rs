#![allow(clippy::too_many_arguments)]

#[macro_use]
extern crate log;
#[macro_use]
extern crate diesel;

pub mod controllers;
pub mod handlers;
pub mod i18n;
pub mod models;
pub mod orm;
pub mod schema;
pub mod services;
pub mod theme;
pub mod zero;
