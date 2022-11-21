use palm::{crypto::Key, env::Rpc};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub secrets: Key,
    pub rpc: Rpc,
}
