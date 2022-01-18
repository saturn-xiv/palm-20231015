use warp::{filters::multipart::FormData, Reply};

use super::super::super::super::{orm::Pool as DbPool, InfallibleResult};

pub async fn create(
    _auth: Option<String>,
    _form: FormData,
    db: DbPool,
) -> InfallibleResult<Box<dyn Reply>> {
    let _db = db.get().unwrap();
    // TODO
    Ok(Box::new(warp::reply::json(&())))
}
