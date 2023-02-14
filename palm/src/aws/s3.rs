use std::io::{Error as IoError, ErrorKind as IoErrorKind};
use std::path::Path;
use std::time::Duration;

use aws_credential_types::provider::SharedCredentialsProvider;
use mime::Mime;
use serde::{Deserialize, Serialize};

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
        let cred = aws_sdk_s3::Credentials::new(&self.access_key, &self.secret_key, None, None, "");
        let cfg = aws_config::SdkConfig::builder()
            .endpoint_url(&self.url)
            .region(aws_sdk_s3::Region::new(self.region.clone()))
            .credentials_provider(SharedCredentialsProvider::new(cred))
            .build();
        Ok(Client(aws_sdk_s3::Client::new(&cfg)))
    }
}

pub struct Client(aws_sdk_s3::Client);

impl Client {
    pub async fn bucket_exists(&self, _name: &str) -> Result<bool> {
        Ok(false)
    }
    pub async fn create_bucket(&self, name: &str) -> Result<()> {
        if let Err(ref err) = self.0.create_bucket().bucket(name).send().await {
            if let aws_sdk_s3::types::SdkError::<_>::ServiceError(ref err) = err {
                let err = err.err();
                match err.kind {
                    aws_sdk_s3::error::CreateBucketErrorKind::BucketAlreadyOwnedByYou(ref _id) => {
                        return Ok(());
                    }
                    aws_sdk_s3::error::CreateBucketErrorKind::BucketAlreadyExists(ref _id) => {
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
    pub async fn delete_bucket(&self, name: &str) -> Result<()> {
        self.0.delete_bucket().bucket(name).send().await?;
        Ok(())
    }
    pub async fn list_buckets(&self) -> Result<Vec<String>> {
        let mut items = Vec::new();
        if let Some(buckets) = self.0.list_buckets().send().await?.buckets() {
            for it in buckets {
                if let Some(ref it) = it.name {
                    items.push(it.clone());
                }
            }
        }

        Ok(items)
    }
    pub async fn put_object<P: AsRef<Path>>(
        &self,
        bucket: &str,
        name: &str,
        content_type: &Mime,
        file: P,
    ) -> Result<()> {
        let content_type = content_type.to_string();
        self.0
            .put_object()
            .bucket(bucket)
            .key(name)
            .content_type(content_type)
            .body(aws_sdk_s3::types::ByteStream::from_path(file).await?)
            .send()
            .await?;
        Ok(())
    }
    pub async fn remove_object(&self, bucket: &str, name: &str) -> Result<()> {
        self.0
            .delete_object()
            .bucket(bucket)
            .key(name)
            .send()
            .await?;
        Ok(())
    }
    pub async fn list_objects(&self, bucket: &str) -> Result<Vec<String>> {
        let mut items = Vec::new();
        if let Some(objects) = self
            .0
            .list_objects()
            .bucket(bucket)
            .send()
            .await?
            .contents()
        {
            for it in objects {
                if let Some(ref key) = it.key {
                    items.push(key.clone());
                }
            }
        }

        Ok(items)
    }
    pub async fn get_object(&self, bucket: &str, name: &str, ttl: Duration) -> Result<String> {
        let url = self
            .0
            .get_object()
            .bucket(bucket)
            .key(name)
            .presigned(
                aws_sdk_s3::presigning::config::PresigningConfig::builder()
                    .expires_in(ttl)
                    .build()?,
            )
            .await?
            .uri()
            .to_string();
        Ok(url)
    }
}
