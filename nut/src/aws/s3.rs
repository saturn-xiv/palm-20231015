use rusoto_core::{HttpClient, Region};
use rusoto_credential::StaticProvider;
use rusoto_s3::{
    CreateBucketRequest, DeleteBucketRequest, DeleteObjectRequest, GetBucketLocationRequest,
    ListObjectsV2Request, PutObjectRequest, S3Client, S3 as S3Provider,
};
use serde::{Deserialize, Serialize};

use super::super::Result;

#[derive(Serialize, Deserialize, Debug, Default, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    pub region: String,
    pub endpoint: Option<String>,
    #[serde(rename = "access-key")]
    pub access_key: String,
    #[serde(rename = "secret-key")]
    pub secret_key: String,
}

impl Config {
    pub fn open(&self) -> Result<S3> {
        let it = S3 {
            client: S3Client::new_with(
                HttpClient::new()?,
                StaticProvider::new(self.access_key.clone(), self.access_key.clone(), None, None),
                match self.endpoint {
                    Some(ref v) => Region::Custom {
                        name: self.region.clone(),
                        endpoint: v.to_string(),
                    },
                    None => self.region.parse()?,
                },
            ),
            endpoint: self.endpoint.clone(),
        };
        Ok(it)
    }
}

pub struct S3 {
    client: S3Client,
    pub endpoint: Option<String>,
}

impl S3 {
    pub async fn bucket_exists(&self, name: String) -> Result<Option<String>> {
        let it = self
            .client
            .get_bucket_location(GetBucketLocationRequest {
                bucket: name,
                ..Default::default()
            })
            .await?;
        Ok(it.location_constraint)
    }

    pub async fn create_bucket(&self, name: String) -> Result<Option<String>> {
        let it = self
            .client
            .create_bucket(CreateBucketRequest {
                bucket: name,
                ..Default::default()
            })
            .await?;
        Ok(it.location)
    }
    pub async fn delete_bucket(&self, name: String) -> Result<()> {
        self.client
            .delete_bucket(DeleteBucketRequest {
                bucket: name,
                ..Default::default()
            })
            .await?;
        Ok(())
    }
    pub async fn list_buckets(&self) -> Result<Vec<String>> {
        let mut buckets = Vec::new();
        if let Some(items) = self.client.list_buckets().await?.buckets {
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

        if let Some(items) = self
            .client
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
        self.client
            .put_object(PutObjectRequest {
                bucket,
                key: name,
                body: Some(body.into()),
                ..Default::default()
            })
            .await?;
        Ok(())
    }

    pub async fn delete_object(&self, bucket: String, name: String) -> Result<()> {
        self.client
            .delete_object(DeleteObjectRequest {
                bucket,
                key: name,
                ..Default::default()
            })
            .await?;
        Ok(())
    }
}
