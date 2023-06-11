#[macro_use]
extern crate log;

pub mod app;
pub mod env;
pub mod services;

#[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
pub mod v1 {
    tonic::include_proto!("orchid.v1");
}
