#[allow(clippy::uninlined_format_args, clippy::match_single_binding)]
pub mod protocols;

use std::default::Default;

use prost::Message;
use tonic::Request;

use super::super::Result;
use super::Thrift;

use self::protocols::{Action, HealthSyncClient, RpcSyncClient, THealthSyncClient, TRpcSyncClient};

const WECHAT_PAY: &str = "com.github.saturn_xiv.palm.plugins.musa.v1.WechatPay";
const HEALTH: &str = "com.github.saturn_xiv.palm.plugins.musa.v1.Health";

pub trait Rpc {
    fn call<Req: Message, Res: Message + Default>(
        &self,
        action: Action,
        request: Request<Req>,
    ) -> Result<Res>;
}

impl Rpc for Thrift {
    fn call<Req: Message, Res: Message + Default>(
        &self,
        action: Action,
        request: Request<Req>,
    ) -> Result<Res> {
        let (i_prot, o_prot) = self.open(WECHAT_PAY)?;
        let mut client = RpcSyncClient::new(i_prot, o_prot);
        let request = request.into_inner();
        let response = client.call(action, request.encode_to_vec())?;
        let response = Res::decode(response.as_ref())?;
        Ok(response)
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
