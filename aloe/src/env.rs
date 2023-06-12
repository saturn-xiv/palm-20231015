use palm::{
    crypto::Key,
    env::{Environment, Http},
};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub env: Environment,
    #[serde(rename = "cookie-key")]
    pub cookie_key: Key,
    pub secrets: Key,
    pub http: Http,
}
