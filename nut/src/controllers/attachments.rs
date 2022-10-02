use std::ops::{Deref, DerefMut};

use actix_multipart::Multipart;
use actix_web::{post, web, HttpResponse, Responder, Result as WebResult};
use bytes::BytesMut;
use futures_util::TryStreamExt;
use palm::{crypto::Aes, nut::v1, orm::postgresql::Pool as DbPool, try_web};

use super::super::{
    models::{
        attachment::{Dao as AttachmentDao, Item as Attachment},
        user::Item as User,
    },
    services::site::get,
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
    let aws = try_web!(get::<v1::MinioProfile>(db, aes))?;

    let bucket = Attachment::bucket_by_year_month();
    if aws.bucket_exists(&bucket).await.is_err() {
        try_web!(aws.create_bucket(&bucket).await)?;
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

        // FIXME
        // try_web!(
        //     aws.put_object(&bucket, &name, &content_type, body.to_vec(),)
        //         .await
        // )?;
        try_web!(AttachmentDao::create(
            db,
            user.id,
            &bucket,
            &name,
            &title,
            &content_type,
            size
        ))?;
    }

    Ok(HttpResponse::Ok())
}
