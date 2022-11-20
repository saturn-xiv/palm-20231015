pub mod sms;
pub mod voice;

use std::collections::HashMap;
use std::default::Default;

use hyper::StatusCode;
use serde::{Deserialize, Serialize};

use super::{nut::v1, HttpError, Result};

// https://www.twilio.com/docs/api
// https://support.twilio.com/hc/en-us/articles/223136047-Configure-a-Twilio-Phone-Number-to-Receive-and-Respond-to-Messages

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Config {
    pub from: String,
    #[serde(rename = "account-sid")]
    pub account_sid: String,
    #[serde(rename = "auth-token")]
    pub auth_token: String,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            from: "+1xxxxxxxxxx".to_string(),
            account_sid: "Account Sid".to_string(),
            auth_token: "Auth Token".to_string(),
        }
    }
}

impl v1::TwilioProfile {
    pub fn credentials(&self) -> String {
        format!("{}:{}", self.account_sid, self.auth_token)
    }

    pub async fn sms(
        &self,
        to: &str,
        body: &str,
        callback: Option<String>,
    ) -> Result<sms::Response> {
        // application/x-www-form-urlencoded
        let mut form = HashMap::new();
        form.insert("To", to.to_string());
        form.insert("Body", body.to_string());
        form.insert("From", self.from.clone());
        if let Some(cb) = callback {
            form.insert("StatusCallback", cb);
        }

        let cli = reqwest::Client::new();
        let res = cli
            .post(&format!(
                "https://api.twilio.com/2010-04-01/Accounts/{}/Messages.json",
                self.account_sid
            ))
            .basic_auth(&self.account_sid, Some(&self.auth_token.clone()))
            .form(&form)
            .send()
            .await?;

        debug!("{:#?}", res);
        if res.status() == reqwest::StatusCode::CREATED {
            return Ok(res.json().await?);
        }
        Err(Box::new(HttpError(StatusCode::BAD_REQUEST, None)))
    }
}
