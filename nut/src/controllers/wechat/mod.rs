pub mod mini_program;
pub mod web;

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone, PartialEq, Eq)]
pub struct Config {
    #[serde(rename = "app-id")]
    pub app_id: String,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct SignInResponse {
    pub token: String,
    pub real_name: String,
}
