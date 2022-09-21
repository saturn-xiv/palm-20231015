use std::io::Read;

use ::minio::s3::{
    args::{
        BucketExistsArgs, GetObjectArgs, ListBucketsArgs, ListObjectsV2Args, MakeBucketArgs,
        PutObjectArgs, RemoveBucketArgs, RemoveObjectArgs,
    },
    client::Client as S3Client,
    creds::StaticProvider,
    http::BaseUrl,
};

use super::Result;

pub struct Client {
    host: String,
    region: Option<String>,
    secure: bool,
    credentials: Credentials,
}

pub struct Credentials {
    pub access_key: String,
    pub secret_key: String,
}

impl Credentials {
    fn open(&self) -> StaticProvider {
        StaticProvider::new(&self.access_key, &self.secret_key, None)
    }
}

impl Client {
    pub async fn bucket_exists(&self, name: &str) -> Result<bool> {
        let cred = self.credentials.open();
        let cli = self.open(&cred)?;
        let ok = cli.bucket_exists(&BucketExistsArgs::new(name)?).await?;
        Ok(ok)
    }
    pub async fn create_bucket(&self, name: &str) -> Result<()> {
        let cred = self.credentials.open();
        let cli = self.open(&cred)?;
        cli.make_bucket(&MakeBucketArgs::new(name)?).await?;
        Ok(())
    }
    pub async fn delete_bucket(&self, name: &str) -> Result<()> {
        let cred = self.credentials.open();
        let cli = self.open(&cred)?;
        cli.remove_bucket(&RemoveBucketArgs::new(name)?).await?;
        Ok(())
    }
    pub async fn list_buckets(&self) -> Result<Vec<String>> {
        let cred = self.credentials.open();
        let cli = self.open(&cred)?;
        let res = cli.list_buckets(&ListBucketsArgs::new()).await?;
        let items = res.buckets.iter().map(|x| x.name.clone()).collect();
        Ok(items)
    }
    pub async fn put_object<'a>(
        &self,
        bucket: &str,
        name: &str,
        content_type: &str,
        stream: &'a mut dyn Read,
        size: usize,
    ) -> Result<()> {
        let cred = self.credentials.open();
        let cli = self.open(&cred)?;

        let mut req = PutObjectArgs::new(bucket, name, stream, Some(size), None)?;
        req.content_type = content_type;
        cli.put_object(&mut req).await?;
        Ok(())
    }
    pub async fn remove_object(&self, bucket: &str, name: &str) -> Result<()> {
        let cred = self.credentials.open();
        let cli = self.open(&cred)?;
        cli.remove_object(&RemoveObjectArgs::new(bucket, name)?)
            .await?;

        Ok(())
    }
    pub async fn list_objects(&self, bucket: &str) -> Result<Vec<String>> {
        let cred = self.credentials.open();
        let cli = self.open(&cred)?;

        let res = cli
            .list_objects_v2(&ListObjectsV2Args::new(bucket)?)
            .await?;
        let items = res.contents.iter().map(|x| x.name.clone()).collect();

        Ok(items)
    }
    pub async fn get_object(&self, bucket: &str, name: &str) -> Result<String> {
        let cred = self.credentials.open();
        let cli = self.open(&cred)?;
        let res = cli.get_object(&GetObjectArgs::new(bucket, name)?).await?;
        let url = res.text().await?;
        Ok(url)
    }
    fn open<'a>(&self, cred: &'a StaticProvider) -> Result<S3Client<'a>> {
        let url = {
            let mut it = BaseUrl::from_string(self.host.clone())?;
            it.https = self.secure;
            if let Some(ref v) = self.region {
                it.region = v.clone();
            }
            it
        };
        // let cred = StaticProvider::new(&self.access_key, &self.secret_key, None);
        let mut cli = S3Client::new(url, Some(cred));
        cli.ignore_cert_check = true;
        Ok(cli)
    }
}
