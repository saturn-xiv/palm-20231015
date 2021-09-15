pub mod v1;

use std::convert::TryFrom;
use std::sync::Arc;
use std::time::Duration as StdDuration;

use tonic::{Request, Response};

use super::super::{aws::s3::Config as S3, GrpcResult};

pub struct Service {
    pub client: Arc<S3>,
}

#[tonic::async_trait]
impl v1::s3_server::S3 for Service {
    async fn put(&self, req: Request<v1::PutRequest>) -> GrpcResult<v1::PutResponse> {
        let req = req.into_inner();
        if try_grpc!(self.client.bucket_exists(req.bucket.clone()).await)?.is_none() {
            try_grpc!(self.client.create_bucket(req.bucket.clone()).await)?;
        }
        try_grpc!(
            self.client
                .put_object(req.bucket.clone(), req.name.clone(), req.body)
                .await
        )?;
        Ok(Response::new(v1::PutResponse::default()))
    }
    async fn all(&self, req: Request<v1::AllRequest>) -> GrpcResult<v1::AllResponse> {
        let req = req.into_inner();
        let items = try_grpc!(
            self.client
                .list_objects(req.bucket.clone(), req.after)
                .await
        )?;
        Ok(Response::new(v1::AllResponse { items }))
    }
    async fn get(&self, req: Request<v1::GetRequest>) -> GrpcResult<v1::GetResponse> {
        let req = req.into_inner();
        let ttl = match req.ttl {
            Some(it) => StdDuration::try_from(it).unwrap_or_default(),
            None => Default::default(),
        };
        let url = try_grpc!(self.client.get_object(req.bucket.clone(), req.name, ttl))?;
        Ok(Response::new(v1::GetResponse { url }))
    }
    async fn delete(&self, req: Request<v1::DeleteRequest>) -> GrpcResult<()> {
        let req = req.into_inner();
        try_grpc!(
            self.client
                .delete_object(req.bucket.clone(), req.name)
                .await
        )?;
        Ok(Response::new(()))
    }
}
