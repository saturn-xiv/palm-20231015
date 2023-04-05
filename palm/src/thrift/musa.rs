use super::super::{
    musa::{HealthSyncClient, THealthSyncClient, TWechatPaySyncClient, WechatPaySyncClient},
    Result,
};
use super::Thrift;

const WECHAT_PAY: &str = "todo";
const HEALTH: &str = "todo";

pub trait WechatPay {
    fn query(&self, id: &str) -> Result<()>;
}

impl WechatPay for Thrift {
    fn query(&self, id: &str) -> Result<()> {
        let (i_prot, o_prot) = self.open(WECHAT_PAY)?;
        let mut client = WechatPaySyncClient::new(i_prot, o_prot);
        client.query(id.to_string())?;
        Ok(())
    }
}

pub trait Health {
    fn check(&self) -> Result<()>;
}

impl Health for Thrift {
    fn check(&self) -> Result<()> {
        let (i_prot, o_prot) = self.open(HEALTH)?;
        let mut client = HealthSyncClient::new(i_prot, o_prot);
        client.check()?;
        Ok(())
    }
}
