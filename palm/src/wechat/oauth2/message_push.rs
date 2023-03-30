use serde::{Deserialize, Serialize};

// https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/message_push.html
pub use super::super::mini_program::message_push::VerifyRequest;

// https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/authorization_change.html
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct MessageRequest {
    #[serde(rename = "ToUserName")]
    pub to_user_name: String,
    #[serde(rename = "FromUserName")]
    pub from_user_name: String,
    #[serde(rename = "CreateTime")]
    pub create_time: usize,
    #[serde(rename = "MsgType")]
    pub msg_type: String,
    #[serde(rename = "Event")]
    pub event: String,
    #[serde(rename = "OpenID")]
    pub open_id: String,
    #[serde(rename = "AppID")]
    pub app_id: String,
    #[serde(rename = "RevokeInfo")]
    pub revoke_info: String,
}

impl MessageRequest {
    pub const USER_INFO_MODIFIED: &str = "user_info_modified";
    pub const USER_AUTHORIZATION_REVOKE: &str = "user_authorization_revoke";
    pub const USER_AUTHORIZATION_CANCELLATION: &str = "user_authorization_cancellation";
}
