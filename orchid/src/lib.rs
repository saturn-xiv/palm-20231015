#[macro_use]
extern crate log;

pub mod app;
pub mod env;
pub mod services;

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Client {
    pub endpoint: String,
    pub token: String,
}

impl Default for Client {
    fn default() -> Self {
        Self {
            endpoint: "http://127.0.0.1:8080".to_string(),
            token: "change-me".to_string(),
        }
    }
}
