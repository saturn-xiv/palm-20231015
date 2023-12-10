use std::any::type_name;

use opensearch::{
    http::transport::{SingleNodeConnectionPool, TransportBuilder},
    indices::{IndicesCreateParts, IndicesDeleteParts, IndicesExistsParts},
    IndexParts,
};
use serde::{Deserialize, Serialize};
use serde_json::json;

use super::{HttpError, Result};

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Eq)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub host: String,
    pub port: u16,
    pub namespace: String,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            host: "127.0.0.1".to_string(),
            port: 9200,
            namespace: "demo://".to_string(),
        }
    }
}
impl Config {
    pub fn open(&self) -> Result<OpenSearch> {
        let url = format!("http://{}:{}", self.host, self.port).parse()?;
        let pool = SingleNodeConnectionPool::new(url);

        Ok(OpenSearch {
            pool,
            namespace: self.namespace.clone(),
        })
    }
}

pub struct OpenSearch {
    pool: SingleNodeConnectionPool,
    namespace: String,
}

#[macro_export]
macro_rules! check_response {
    ($x:expr) => {{
        let c = $x.status_code().as_u16();
        match $x.exception().await? {
            Some(e) => Err(Box::new(HttpError(
                hyper::StatusCode::from_u16(c)?,
                e.error().reason().map(|x| x.to_string()),
            ))),
            None => Ok(()),
        }
    }};
}

impl OpenSearch {
    pub async fn check_index<T>(&self) -> Result<()> {
        let index = self.index::<T>();
        let transport = TransportBuilder::new(self.pool.clone())
            .disable_proxy()
            .build()?;
        let client = opensearch::OpenSearch::new(transport);
        {
            let response = client
                .indices()
                .exists(IndicesExistsParts::Index(&[&index]))
                .send()
                .await?;
            if response.status_code().is_success() {
                return Ok(());
            }
        }

        let response = client
            .indices()
            .create(IndicesCreateParts::Index(&index))
            .send()
            .await?;

        check_response!(response)
    }
    pub async fn delete_index<T>(&self) -> Result<()> {
        let index = self.index::<T>();
        let transport = TransportBuilder::new(self.pool.clone())
            .disable_proxy()
            .build()?;
        let client = opensearch::OpenSearch::new(transport);

        let response = client
            .indices()
            .delete(IndicesDeleteParts::Index(&[&index]))
            .send()
            .await?;

        check_response!(response)
    }
    pub async fn save_object<T: Serialize>(&self, object: &T) -> Result<()> {
        let index = self.index::<T>();
        let body = json!(object);

        let transport = TransportBuilder::new(self.pool.clone())
            .disable_proxy()
            .build()?;
        let client = opensearch::OpenSearch::new(transport);
        let response = client
            .index(IndexParts::Index(&index))
            .body(body)
            .send()
            .await?;
        check_response!(response)
    }

    pub async fn info(&self) -> Result<(String, String)> {
        let transport = TransportBuilder::new(self.pool.clone())
            .disable_proxy()
            .build()?;
        let client = opensearch::OpenSearch::new(transport);
        let response = client.info().human(true).pretty(true).send().await?;
        let url = response.url().to_string();
        let body = response.text().await?;
        Ok((url, body))
    }

    fn index<T>(&self) -> String {
        format!("{}.{}", self.namespace, type_name::<T>())
            .replace("::", "-")
            .to_lowercase()
    }
}
