pub mod s3;
pub mod sqs;

use rusoto_credential::{AwsCredentials, StaticProvider};
use serde::{Deserialize, Serialize};

/// https://console.aws.amazon.com/iam/home
#[derive(Debug, Deserialize, Serialize, Default, Clone)]
pub struct Credentials {
    #[serde(rename = "access-key-id")]
    pub access_key_id: String,
    #[serde(rename = "secret-access-key")]
    pub secret_access_key: String,
}

impl Credentials {
    pub fn provider(&self) -> StaticProvider {
        StaticProvider::new_minimal(self.access_key_id.clone(), self.secret_access_key.clone())
    }
    pub fn credentials(&self) -> AwsCredentials {
        AwsCredentials::new(
            self.access_key_id.clone(),
            self.secret_access_key.clone(),
            None,
            None,
        )
    }
}
