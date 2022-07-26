use std::ops::{Deref, DerefMut};

use actix_multipart::Multipart;
use actix_web::{post, web, HttpResponse, Responder, Result as WebResult};
use bytes::BytesMut;
use futures_util::TryStreamExt;

use super::super::super::super::{crypto::Aes, orm::postgresql::Pool as DbPool};
use super::super::{
    models::{
        attachment::{Dao as AttachmentDao, Item as Attachment},
        user::Item as User,
    },
    v1,
};

#[post("/api/attachments")]
pub async fn create(
    user: User,
    db: web::Data<DbPool>,
    aes: web::Data<Aes>,
    mut payload: Multipart,
) -> WebResult<impl Responder> {
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let aes = aes.deref();
    let aws = try_web!(v1::AwsProfile::new(db, aes))?;
    let region = {
        let it = try_web!(aws.region())?;
        try_web!(serde_json::to_string(&it))?
    };

    let s3 = try_web!(aws.s3())?;
    let bucket = Attachment::bucket_by_year_month();
    if s3.bucket_exists(bucket.clone()).await.is_err() {
        try_web!(s3.create_bucket(bucket.clone()).await)?;
    }

    while let Some(ref mut field) = payload.try_next().await? {
        let title = {
            let cd = field.content_disposition();
            let it = cd.get_filename().unwrap_or("unknown");
            it.to_string()
        };
        let name = Attachment::name(&title);

        let content_type = {
            let it = field.content_type();
            it.clone()
        };

        // TODO multipart chunk uploads
        let mut body = BytesMut::with_capacity(0);

        while let Some(chunk) = field.try_next().await? {
            body.extend(&chunk);
        }
        let body = body.freeze();
        let body = body.as_ref();
        let size = body.len();

        try_web!(
            s3.put_object(
                bucket.clone(),
                name.to_string(),
                content_type.to_string(),
                body.to_vec(),
            )
            .await
        )?;
        try_web!(AttachmentDao::create(
            db,
            user.id,
            &bucket,
            &name,
            &title,
            &region,
            &content_type,
            size
        ))?;
    }

    Ok(HttpResponse::Ok())
}
