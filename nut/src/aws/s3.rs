use std::time::Duration;

use rusoto_core::{HttpClient, Region};
use rusoto_credential::{AwsCredentials, StaticProvider};
use rusoto_s3::{
    util::{PreSignedRequest, PreSignedRequestOption},
    CreateBucketRequest, DeleteBucketRequest, DeleteObjectRequest, GetBucketLocationRequest,
    GetObjectRequest, ListObjectsV2Request, PutObjectRequest, S3Client, S3 as S3Provider,
};
use serde::{Deserialize, Serialize};

use super::super::Result;

#[derive(Serialize, Deserialize, Debug, Default, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub region: String,
    pub endpoint: Option<String>,
    #[serde(rename = "access-key-id")]
    pub access_key_id: String,
    #[serde(rename = "secret-access-key")]
    pub secret_access_key: String,
}

impl Config {
    fn open(&self) -> Result<S3Client> {
        let it = S3Client::new_with(HttpClient::new()?, self.credentials(), self.region()?);
        Ok(it)
    }

    fn region(&self) -> Result<Region> {
        let it = match self.endpoint {
            Some(ref v) => Region::Custom {
                name: self.region.clone(),
                endpoint: v.to_string(),
            },
            None => self.region.parse()?,
        };
        Ok(it)
    }
    fn credentials(&self) -> StaticProvider {
        StaticProvider::new(
            self.access_key_id.clone(),
            self.secret_access_key.clone(),
            None,
            None,
        )
    }
    pub async fn bucket_exists(&self, name: String) -> Result<Option<String>> {
        let cli = self.open()?;
        let it = cli
            .get_bucket_location(GetBucketLocationRequest {
                bucket: name,
                ..Default::default()
            })
            .await?;
        Ok(it.location_constraint)
    }

    pub async fn create_bucket(&self, name: String) -> Result<Option<String>> {
        let cli = self.open()?;
        let it = cli
            .create_bucket(CreateBucketRequest {
                bucket: name,
                ..Default::default()
            })
            .await?;
        Ok(it.location)
    }
    pub async fn delete_bucket(&self, name: String) -> Result<()> {
        let cli = self.open()?;
        cli.delete_bucket(DeleteBucketRequest {
            bucket: name,
            ..Default::default()
        })
        .await?;
        Ok(())
    }
    pub async fn list_buckets(&self) -> Result<Vec<String>> {
        let mut buckets = Vec::new();
        let cli = self.open()?;
        if let Some(items) = cli.list_buckets().await?.buckets {
            for it in items {
                if let Some(it) = it.name {
                    buckets.push(it);
                }
            }
        }
        Ok(buckets)
    }

    pub async fn list_objects(&self, bucket: String, after: Option<String>) -> Result<Vec<String>> {
        let mut objects = Vec::new();
        let cli = self.open()?;
        if let Some(items) = cli
            .list_objects_v2(ListObjectsV2Request {
                bucket,
                start_after: after,
                ..Default::default()
            })
            .await?
            .contents
        {
            for it in items {
                if let Some(key) = it.key {
                    objects.push(key);
                }
            }
        }
        Ok(objects)
    }

    pub async fn put_object(&self, bucket: String, name: String, body: Vec<u8>) -> Result<()> {
        let cli = self.open()?;
        cli.put_object(PutObjectRequest {
            bucket,
            key: name,
            body: Some(body.into()),
            ..Default::default()
        })
        .await?;
        Ok(())
    }
    pub fn get_object(&self, bucket: String, name: String, ttl: Duration) -> Result<String> {
        let req = GetObjectRequest {
            bucket,
            key: name,
            ..Default::default()
        };

        let it = req.get_presigned_url(
            &self.region()?,
            &AwsCredentials::new(
                self.access_key_id.clone(),
                self.secret_access_key.clone(),
                None,
                None,
            ),
            &PreSignedRequestOption { expires_in: ttl },
        );
        Ok(it)
    }

    pub async fn delete_object(&self, bucket: String, name: String) -> Result<()> {
        let cli = self.open()?;
        cli.delete_object(DeleteObjectRequest {
            bucket,
            key: name,
            ..Default::default()
        })
        .await?;
        Ok(())
    }
}
