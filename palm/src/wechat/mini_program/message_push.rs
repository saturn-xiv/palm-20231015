// https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push.html#option-url
use hyper::StatusCode;
use serde::{Deserialize, Serialize};

use super::super::super::{crypto::sha1::sum as sha1_sum, HttpError, Result};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct VerifyRequest {
    pub signature: String,
    pub timestamp: usize,
    pub nonce: usize,
    pub echostr: String,
}

impl VerifyRequest {
    pub fn check(&self, token: &str) -> Result<()> {
        let buf = {
            let mut items = vec![
                token.to_string(),
                format!("{}", self.nonce),
                format!("{}", self.timestamp),
            ];
            items.sort();
            items.join("")
        };

        if sha1_sum(buf.as_bytes()) == self.signature {
            return Ok(());
        }
        Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)))
    }
}

// https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push.html#%E7%AC%AC%E4%BA%8C%E6%AD%A5%EF%BC%9A%E4%BA%91%E5%87%BD%E6%95%B0%E4%B8%AD%E5%A4%84%E7%90%86%E6%B6%88%E6%81%AF
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct MessageRequest {
    #[serde(rename = "FromUserName")]
    pub from_user_name: String,
    #[serde(rename = "ToUserName")]
    pub to_user_name: String,
    #[serde(rename = "Content")]
    pub content: String,
    #[serde(rename = "CreateTime")]
    pub create_time: usize,
    #[serde(rename = "MsgId")]
    pub msg_id: String,
    #[serde(rename = "MsgType")]
    pub msg_type: String,
}
