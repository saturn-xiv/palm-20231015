// use std::net::SocketAddr;
// use std::ops::Deref;
// use std::sync::Arc;

use actix_web::{post, Responder};
// use bytes::BufMut;
// use futures::{TryFutureExt, TryStreamExt};
// use hyper::StatusCode;
// use uuid::Uuid;

// use super::super::super::super::{
//     aws::{
//         s3::{Client as S3Client, Config as S3},
//         Credentials as Aws,
//     },
//     jwt::Jwt,
//     orm::{Connection as Db, Pool as DbPool},
//     HttpError, InfallibleResult, Result,
// };
// use super::super::{
//     graphql::{Action, Token},
//     models::{
//         attachment::{Dao as AttachmentDao, Item as Attachment},
//         user::{Dao as UserDao, Item as User},
//     },
// };

#[post("/attachments")]
pub async fn create() -> impl Responder {
    // TODO
    "attachment upload"
}

// pub async fn create(
//     auth: Option<String>,
//     _addr: Option<SocketAddr>,
//     form: FormData,
//     db: DbPool,
//     jwt: Arc<Jwt>,
//     aws: Arc<Aws>,
//     s3: Arc<S3>,
// ) -> InfallibleResult<Box<dyn Reply>> {
//     let user = {
//         let db = db.get().unwrap();
//         let db = db.deref();
//         let jwt = jwt.deref();
//         current_user(db, jwt, &auth).unwrap()
//     };

//     let files: Vec<(String, Vec<u8>)> = form
//         .and_then(|part| {
//             let name = part.name().to_string();
//             let value = part.stream().try_fold(Vec::new(), |mut vec, data| {
//                 vec.put(data);
//                 async move { Ok(vec) }
//             });
//             value.map_ok(move |vec| (name, vec))
//         })
//         .try_collect()
//         .await
//         .unwrap();

//     for (name, body) in files {
//         let aws = aws.deref();
//         let s3 = s3.deref();

//         let size = Attachment::size(&body);
//         let content_type = Attachment::content_type(&name);
//         let uid = Uuid::new_v4().to_string();

//         let cli = S3Client::new(aws, s3).unwrap();
//         cli.put_object(user.nick_name.clone(), uid.clone(), body)
//             .await
//             .unwrap();

//         {
//             let db = db.get().unwrap();
//             let db = db.deref();
//             AttachmentDao::create(db, user.id, &name, &s3.region, &uid, &content_type, size)
//                 .unwrap();
//         }
//     }

//     Ok(Box::new(warp::reply::json(&())))
// }

// fn current_user(db: &Db, jwt: &Jwt, auth: &Option<String>) -> Result<User> {
//     if let Some(ref auth) = auth {
//         if let Some(token) = auth.strip_prefix(Jwt::BEARER) {
//             let token = jwt.parse::<Token>(token)?;
//             let token = token.claims;
//             if token.act == Action::SignIn {
//                 let user = UserDao::by_uid(db, &token.aud)?;
//                 user.available()?;
//                 return Ok(user);
//             }
//         }
//     }
//     Err(Box::new(HttpError(
//         StatusCode::NON_AUTHORITATIVE_INFORMATION,
//         None,
//     )))
// }
