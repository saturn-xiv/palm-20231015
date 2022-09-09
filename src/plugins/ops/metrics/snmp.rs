use super::super::super::super::Result;

pub struct Agent {
    pub host: String,
    pub port: u16,
}

impl Default for Agent {
    fn default() -> Self {
        Self {
            host: "127.0.0.1".to_string(),
            port: 161,
        }
    }
}

impl Agent {
    pub fn get(&self, oid: &str) -> Result<String> {
        Ok("".to_string())
    }
}
