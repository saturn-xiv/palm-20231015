use std::io::{Seek, Write};
use std::ops::DerefMut;

use actix_multipart::Multipart;
use actix_web::{post, web, HttpResponse, Responder, Result as WebResult};
use futures_util::TryStreamExt;
use mime::APPLICATION_OCTET_STREAM;
use palm::{
    aws::s3::{Client as S3Client, Config as S3},
    try_web, Result,
};
use tempfile::NamedTempFile;

use super::super::{
    models::{
        attachment::{Dao as AttachmentDao, Item as Attachment},
        user::Item as User,
    },
    orm::postgresql::{Connection as Db, Pool as DbPool},
};

#[post("/api/attachments")]
pub async fn create(
    user: User,
    db: web::Data<DbPool>,

    s3: web::Data<S3>,
    payload: Multipart,
) -> WebResult<impl Responder> {
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let s3 = try_web!(s3.open().await)?;

    let bucket = Attachment::bucket_by_year_month();
    if !try_web!(s3.bucket_exists(&bucket).await)? {
        try_web!(s3.create_bucket(&bucket).await)?;
    }

    try_web!(save(db, user.id, &s3, &bucket, payload).await)?;

    Ok(HttpResponse::Ok())
}

async fn save(
    db: &mut Db,
    user: i32,
    s3: &S3Client,
    bucket: &str,
    mut payload: Multipart,
) -> Result<()> {
    while let Some(mut field) = payload.try_next().await? {
        let title = {
            let cd = field.content_disposition();
            let it = cd.get_filename().unwrap_or("unknown");
            it.to_string()
        };
        let name = Attachment::name(&title);
        let content_type = {
            let it = field.content_type();
            it.map_or_else(|| APPLICATION_OCTET_STREAM, |x| x.clone())
        };

        {
            let file = NamedTempFile::new()?;
            {
                let mut file = file.as_file();
                while let Some(chunk) = field.try_next().await? {
                    file.write_all(&chunk)?;
                }
                file.sync_all()?;
                file.rewind()?;
                let size = file.metadata()?.len();
                AttachmentDao::create(db, user, bucket, &name, &title, &content_type, size)?;
            }
            s3.put_object(bucket, &name, &content_type, file).await?;
        }
    }

    Ok(())
}
