use super::orchid::v1::WeChatLoginResponse;

impl WeChatLoginResponse {
    pub fn access_token(&self) -> String {
        if let Some(ref it) = self.unionid {
            return it.clone();
        }
        self.openid.clone()
    }
}
