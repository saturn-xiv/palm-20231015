use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::path::Path;
use std::time::Duration;

use async_trait::async_trait;
use aws_credential_types::provider::SharedCredentialsProvider;
use mime::Mime;
use serde::{Deserialize, Serialize};

pub use aws_sdk_s3::Client;

use super::super::{minio::Config as Minio, Result};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct Config {
    pub url: String,
    pub region: String,
    #[serde(rename = "access-key")]
    pub access_key: String,
    #[serde(rename = "secret-key")]
    pub secret_key: String,
}

impl From<Minio> for Config {
    fn from(item: Minio) -> Self {
        Self {
            url: item.url.clone(),
            region: item.region.clone(),
            access_key: item.access_key.clone(),
            secret_key: item.secret_key,
        }
    }
}

impl Config {
    pub async fn open(&self) -> Result<Client> {
        let cred = aws_sdk_s3::config::Credentials::new(
            &self.access_key,
            &self.secret_key,
            None,
            None,
            "",
        );
        let cfg = aws_config::SdkConfig::builder()
            .endpoint_url(&self.url)
            .region(aws_sdk_s3::config::Region::new(self.region.clone()))
            .credentials_provider(SharedCredentialsProvider::new(cred))
            .build();
        Ok(aws_sdk_s3::Client::new(&cfg))
    }
}

#[async_trait]
pub trait Adapter {
    async fn bucket_exists(&self, _name: &str) -> Result<bool>;
    async fn create_bucket(&self, name: &str) -> Result<()>;
    async fn delete_bucket(&self, name: &str) -> Result<()>;
    async fn list_buckets(&self) -> Result<Vec<String>>;
    async fn put_object<P: AsRef<Path> + Send>(
        &self,
        bucket: &str,
        name: &str,
        content_type: &Mime,
        file: P,
    ) -> Result<()>;
    async fn delete_object(&self, bucket: &str, name: &str) -> Result<()>;
    async fn list_objects(&self, bucket: &str) -> Result<Vec<String>>;
    async fn get_object(&self, bucket: &str, name: &str, ttl: Duration) -> Result<String>;
}

#[async_trait]
impl Adapter for Client {
    async fn bucket_exists(&self, _name: &str) -> Result<bool> {
        Ok(false)
    }
    async fn create_bucket(&self, name: &str) -> Result<()> {
        if let Err(ref err) = self.create_bucket().bucket(name).send().await {
            if let aws_sdk_s3::error::SdkError::<_, _>::ServiceError(ref err) = err {
                let err = err.err();
                match err {
                    aws_sdk_s3::operation::create_bucket::CreateBucketError::BucketAlreadyOwnedByYou(ref _id) => {
                        return Ok(());
                    }
                    aws_sdk_s3::operation::create_bucket::CreateBucketError::BucketAlreadyExists(ref _id) => {
                        return Ok(());
                    }
                    _ => {}
                };
            }
            error!("{}", err);
            return Err(Box::new(IoError::from(IoErrorKind::UnexpectedEof)));
        }
        Ok(())
    }
    async fn delete_bucket(&self, name: &str) -> Result<()> {
        self.delete_bucket().bucket(name).send().await?;
        Ok(())
    }
    async fn list_buckets(&self) -> Result<Vec<String>> {
        let mut items = Vec::new();

        for it in self.list_buckets().send().await?.buckets() {
            if let Some(ref it) = it.name {
                items.push(it.clone());
            }
        }

        Ok(items)
    }
    async fn put_object<P: AsRef<Path> + Send>(
        &self,
        bucket: &str,
        name: &str,
        content_type: &Mime,
        file: P,
    ) -> Result<()> {
        let content_type = content_type.to_string();
        Self::put_object(self)
            .bucket(bucket)
            .key(name)
            .content_type(content_type)
            .body(aws_sdk_s3::primitives::ByteStream::from_path(file).await?)
            .send()
            .await?;
        Ok(())
    }
    async fn delete_object(&self, bucket: &str, name: &str) -> Result<()> {
        self.delete_object().bucket(bucket).key(name).send().await?;
        Ok(())
    }
    async fn list_objects(&self, bucket: &str) -> Result<Vec<String>> {
        let mut items = Vec::new();

        for it in self.list_objects().bucket(bucket).send().await?.contents() {
            if let Some(ref key) = it.key {
                items.push(key.clone());
            }
        }

        Ok(items)
    }
    async fn get_object(&self, bucket: &str, name: &str, ttl: Duration) -> Result<String> {
        let url = self
            .get_object()
            .bucket(bucket)
            .key(name)
            .presigned(
                aws_sdk_s3::presigning::PresigningConfig::builder()
                    .expires_in(ttl)
                    .build()?,
            )
            .await?
            .uri()
            .to_string();
        Ok(url)
    }
}
