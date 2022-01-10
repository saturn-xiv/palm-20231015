#[macro_use]
extern crate rocket;
#[macro_use]
extern crate diesel;
#[macro_use]
extern crate log;
#[macro_use]
extern crate lazy_static;

#[macro_use]
pub mod macros;

pub mod i18n;
pub mod orm;
pub mod plugins;
pub mod result;
pub mod settings;
