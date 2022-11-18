use std::io::{Seek, SeekFrom, Write};
use std::ops::{Deref, DerefMut};

use actix_multipart::Multipart;
use actix_web::{post, web, HttpResponse, Responder, Result as WebResult};
use futures_util::TryStreamExt;
use palm::{crypto::Aes, minio::AwsClient, nut::v1::MinioProfile, try_web, Result};
use tempfile::NamedTempFile;

use super::super::{
    models::{
        attachment::{Dao as AttachmentDao, Item as Attachment},
        setting::get,
        user::Item as User,
    },
    orm::postgresql::{Connection as Db, Pool as DbPool},
};

#[post("/api/attachments")]
pub async fn create(
    user: User,
    db: web::Data<DbPool>,
    aes: web::Data<Aes>,
    payload: Multipart,
) -> WebResult<impl Responder> {
    let mut db = try_web!(db.get())?;
    let db = db.deref_mut();
    let aes = aes.deref();
    let aes = aes.deref();
    let aws = try_web!(get::<MinioProfile, Aes>(db, aes, None))?;
    let s3 = try_web!(aws.open())?;

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
    aws: &AwsClient,
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
            it.clone()
        };

        {
            let file = NamedTempFile::new()?;
            {
                let mut file = file.as_file();
                while let Some(chunk) = field.try_next().await? {
                    file.write_all(&chunk)?;
                }
                file.sync_all()?;
                file.seek(SeekFrom::Start(0))?;
                let size = file.metadata()?.len();
                AttachmentDao::create(db, user, bucket, &name, &title, &content_type, size)?;
            }
            aws.put_object(bucket, &name, content_type.as_ref(), file)
                .await?;
        }
    }

    Ok(())
}
