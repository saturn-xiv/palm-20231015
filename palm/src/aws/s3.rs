use std::time::Duration;

use rusoto_core::{HttpClient, Region};
use rusoto_credential::{AwsCredentials, StaticProvider};
use rusoto_s3::{
    util::{PreSignedRequest, PreSignedRequestOption},
    CreateBucketRequest, DeleteBucketRequest, DeleteObjectRequest, GetBucketLocationRequest,
    GetObjectRequest, ListObjectsV2Request, PutObjectRequest, S3Client, S3 as S3Provider,
};

use super::super::Result;

pub struct Client {
    client: S3Client,
    credentials: AwsCredentials,
    region: Region,
}

// https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html
impl Client {
    pub fn new(
        credentials: AwsCredentials,
        provider: StaticProvider,
        region: Region,
    ) -> Result<Self> {
        Ok(Self {
            client: S3Client::new_with(HttpClient::new()?, provider, region.clone()),
            credentials,
            region,
        })
    }

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

    pub async fn put_object(
        &self,
        bucket: String,
        name: String,
        content_type: String,
        body: Vec<u8>,
    ) -> Result<()> {
        self.client
            .put_object(PutObjectRequest {
                bucket,
                key: name,
                body: Some(body.into()),
                content_type: Some(content_type),
                ..Default::default()
            })
            .await?;
        Ok(())
    }
    pub fn get_object(&self, bucket: String, name: String, ttl: Duration) -> String {
        let req = GetObjectRequest {
            bucket,
            key: name,
            ..Default::default()
        };
        req.get_presigned_url(
            &self.region,
            &self.credentials,
            &PreSignedRequestOption { expires_in: ttl },
        )
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
