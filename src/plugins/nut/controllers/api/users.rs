use serde::{Deserialize, Serialize};
use validator::Validate;

#[derive(Deserialize, Serialize, Validate)]
#[serde(rename_all = "camelCase")]
pub struct SignUpForm {
    #[validate(length(min = 2))]
    pub nick_name: String,
    #[validate(length(min = 2))]
    pub real_name: String,
    #[validate(email, length(min = 1))]
    pub email: String,
    #[validate(length(min = 6, max = 32))]
    pub password: String,
    #[validate(length(min = 1))]
    pub lang: String,
    #[validate(length(min = 1))]
    pub time_zone: String,
    #[validate(url, length(min = 1))]
    pub home: String,
    #[validate(length(min = 1))]
    pub captcha: String,
}
