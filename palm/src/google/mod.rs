pub mod youtube;

use std::fs::File;
use std::path::Path;

use serde::{Deserialize, Serialize};

use super::Result;

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Credential {
    pub client_id: String,
    pub project_id: String,
    pub auth_uri: String,
    pub token_uri: String,
    pub auth_provider_x509_cert_url: String,
    pub client_secret: String,
    pub redirect_uris: Vec<String>,
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Layout {
    pub installed: Credential,
}
impl Credential {
    pub fn new<P: AsRef<Path>>(file: P) -> Result<Self> {
        let file = file.as_ref();
        debug!("load google credential from {}", file.display());
        let file = File::open(file)?;
        let it: Layout = serde_json::from_reader(file)?;
        Ok(it.installed)
    }
}
