use palm::Result;
use reqwest::Client;
use serde::{Deserialize, Serialize};

use super::super::Config;
use super::Query;

#[derive(Serialize, Deserialize, Debug)]
pub struct Response {
    #[serde(rename = "ip_list")]
    pub items: Vec<String>,
}

// https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_the_WeChat_server_IP_address.html
impl Config {
    pub async fn get_api_domain_ip(&self, access_token: &str) -> Result<Response> {
        let client = Client::new();
        let response = client
            .get(Self::url("/cgi-bin/get_api_domain_ip"))
            .query(&Query {
                access_token: access_token.to_string(),
            })
            .send()
            .await?;
        let response: Response = Self::body(response).await?;
        Ok(response)
    }
}
