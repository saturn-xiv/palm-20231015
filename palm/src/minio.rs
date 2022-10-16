use std::fs;
use std::io::prelude::*;
use std::os::unix::fs::OpenOptionsExt;
use std::path::Path;
use std::time::Duration;

use ::minio::s3::{
    args::{
        BucketExistsArgs, GetObjectArgs, ListBucketsArgs, ListObjectsV2Args, MakeBucketArgs,
        PutObjectArgs, RemoveBucketArgs, RemoveObjectArgs,
    },
    client::Client as S3Client,
    creds::StaticProvider,
    http::BaseUrl,
};
use askama::Template;
use serde::{Deserialize, Serialize};

use super::{nut::v1, Result};

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Credentials {
    pub url: String,
    pub access_key: String,
    pub secret_key: String,
    pub api: String,
    pub path: String,
}

#[derive(Template)]
#[template(path = "minio/service.conf", escape = "none")]
pub struct SystemdConfig<'a> {
    pub domain: &'a str,
    pub port: u16,
    pub console_port: u16,
    pub user: &'a str,
    pub password: &'a str,
}

impl SystemdConfig<'_> {
    pub fn write<P: AsRef<Path>>(&self, file: P) -> Result<()> {
        let file = file.as_ref();
        info!("generate file {}", file.display());
        let tpl = self.render()?;
        let mut fd = fs::OpenOptions::new()
            .write(true)
            .create_new(true)
            .mode(0o644)
            .open(file)?;
        fd.write_all(tpl.as_bytes())?;
        Ok(())
    }
}

#[derive(Template)]
#[template(path = "minio/nginx.conf", escape = "none")]
pub struct NginxConfig<'a> {
    pub domain: &'a str,
    pub port: u16,
    pub console_port: u16,
}

impl NginxConfig<'_> {
    pub fn write<P: AsRef<Path>>(&self, file: P) -> Result<()> {
        let file = file.as_ref();
        info!("generate file {}", file.display());
        let tpl = self.render()?;
        let mut fd = fs::OpenOptions::new()
            .write(true)
            .create_new(true)
            .mode(0o644)
            .open(file)?;
        fd.write_all(tpl.as_bytes())?;
        Ok(())
    }
}

impl v1::MinioProfile {
    pub async fn bucket_exists(&self, name: &str) -> Result<bool> {
        let cred = StaticProvider::new(&self.access_key_id, &self.secret_access_key, None);
        let cli = self.open(&cred)?;
        let ok = cli.bucket_exists(&BucketExistsArgs::new(name)?).await?;
        Ok(ok)
    }
    pub async fn create_bucket(&self, name: &str) -> Result<()> {
        let cred = StaticProvider::new(&self.access_key_id, &self.secret_access_key, None);
        let cli = self.open(&cred)?;
        cli.make_bucket(&MakeBucketArgs::new(name)?).await?;
        Ok(())
    }
    pub async fn delete_bucket(&self, name: &str) -> Result<()> {
        let cred = StaticProvider::new(&self.access_key_id, &self.secret_access_key, None);
        let cli = self.open(&cred)?;
        cli.remove_bucket(&RemoveBucketArgs::new(name)?).await?;
        Ok(())
    }
    pub async fn list_buckets(&self) -> Result<Vec<String>> {
        let cred = StaticProvider::new(&self.access_key_id, &self.secret_access_key, None);
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
        let cred = StaticProvider::new(&self.access_key_id, &self.secret_access_key, None);
        let cli = self.open(&cred)?;

        let mut req = PutObjectArgs::new(bucket, name, stream, Some(size), None)?;
        req.content_type = content_type;
        cli.put_object(&mut req).await?;
        Ok(())
    }
    pub async fn remove_object(&self, bucket: &str, name: &str) -> Result<()> {
        let cred = StaticProvider::new(&self.access_key_id, &self.secret_access_key, None);
        let cli = self.open(&cred)?;
        cli.remove_object(&RemoveObjectArgs::new(bucket, name)?)
            .await?;

        Ok(())
    }
    pub async fn list_objects(&self, bucket: &str) -> Result<Vec<String>> {
        let cred = StaticProvider::new(&self.access_key_id, &self.secret_access_key, None);
        let cli = self.open(&cred)?;

        let res = cli
            .list_objects_v2(&ListObjectsV2Args::new(bucket)?)
            .await?;
        let items = res.contents.iter().map(|x| x.name.clone()).collect();

        Ok(items)
    }
    pub async fn get_object(&self, bucket: &str, name: &str, _ttl: Duration) -> Result<String> {
        let cred = StaticProvider::new(&self.access_key_id, &self.secret_access_key, None);
        let cli = self.open(&cred)?;
        // TODO ttl for file
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

        let mut cli = S3Client::new(url, Some(cred));
        cli.ignore_cert_check = true;
        Ok(cli)
    }
}
