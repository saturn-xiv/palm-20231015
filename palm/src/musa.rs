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

#[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
pub mod v1 {
    tonic::include_proto!("palm.musa.v1");
}
