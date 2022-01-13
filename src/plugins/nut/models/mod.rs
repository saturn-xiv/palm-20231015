pub mod attachment;
pub mod category;
pub mod friend_link;
pub mod leave_word;
pub mod log;
// pub mod policy;
pub mod tag;
pub mod user;
pub mod vote;

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Font {}
#[derive(Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Color {}

#[derive(Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Icon {}
