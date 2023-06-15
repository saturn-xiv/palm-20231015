pub mod attachment;
pub mod category;
pub mod crawler;
pub mod google;
pub mod leave_word;
pub mod locale;
pub mod log;
pub mod setting;
pub mod shorter_link;
pub mod tag;
pub mod twilio;
pub mod user;
pub mod vote;
pub mod wechat;

use serde::{Deserialize, Serialize};
use strum_macros::{Display as EnumDisplay, EnumString};

#[derive(EnumString, EnumDisplay, Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub enum Editor {
    TextArea,
    Quill,
}

#[derive(EnumString, EnumDisplay, Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub enum Operation {
    Read,
    Write,
    Create,
    Update,
    Remove,
}
