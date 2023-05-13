use std::any::type_name;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;

use casbin::Enforcer;
use palm::{
    cache::redis::Pool as RedisPool,
    musa::v1 as musa,
    session::Session,
    thrift::{
        cactus::{protocols::Action, Rpc},
        Thrift,
    },
    try_grpc, GrpcResult,
};
use tokio::sync::Mutex;
use tonic::{Request, Response, Status};

use super::super::super::orm::postgresql::Pool as PostgreSqlPool;
use super::super::CurrentUserAdapter;

pub struct Service {
    pub redis: RedisPool,
    pub pgsql: PostgreSqlPool,
    pub jwt: Arc<Thrift>,
    pub enforcer: Arc<Mutex<Enforcer>>,
    pub musa: Arc<Thrift>,
}

#[tonic::async_trait]
impl musa::wechat_pay_native_server::WechatPayNative for Service {
    async fn prepay(
        &self,
        req: Request<musa::WechatPayPrepayRequest>,
    ) -> GrpcResult<musa::WechatPayNativeQrCodeUrlResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<
                dyn musa::wechat_pay_native_server::WechatPayNative,
            >()));
        }

        let it = try_grpc!(self.musa.call(Action::WECHAT_PAY_NATIVE_PREPAY, req))?;
        Ok(Response::new(it))
    }
}

#[tonic::async_trait]
impl musa::wechat_pay_jsapi_server::WechatPayJsapi for Service {
    async fn query_order_by_out_trade_no(
        &self,
        req: Request<musa::WechatPayQueryOrderByOutTradeNoRequest>,
    ) -> GrpcResult<musa::WechatPayTradeResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<
                dyn musa::wechat_pay_jsapi_server::WechatPayJsapi,
            >()));
        }

        let it = try_grpc!(self
            .musa
            .call(Action::WECHAT_PAY_JSAPI_QUERY_ORDER_BY_OUT_TRADE_NO, req))?;
        Ok(Response::new(it))
    }
    async fn query_order_by_id(
        &self,
        req: Request<musa::WechatPayQueryOrderByIdRequest>,
    ) -> GrpcResult<musa::WechatPayTradeResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<
                dyn musa::wechat_pay_jsapi_server::WechatPayJsapi,
            >()));
        }

        let it = try_grpc!(self
            .musa
            .call(Action::WECHAT_PAY_JSAPI_QUERY_ORDER_BY_ID, req))?;
        Ok(Response::new(it))
    }
    async fn close_order(&self, req: Request<musa::WechatPayCloseOrderRequest>) -> GrpcResult<()> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<
                dyn musa::wechat_pay_jsapi_server::WechatPayJsapi,
            >()));
        }

        let it = try_grpc!(self.musa.call(Action::WECHAT_PAY_JSAPI_CLOSE_ORDER, req))?;
        Ok(Response::new(it))
    }
    async fn prepay(
        &self,
        req: Request<musa::WechatPayPrepayRequest>,
    ) -> GrpcResult<musa::WechatPayJsapiPrepayIdResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<
                dyn musa::wechat_pay_jsapi_server::WechatPayJsapi,
            >()));
        }

        let it = try_grpc!(self.musa.call(Action::WECHAT_PAY_JSAPI_PREPAY, req))?;
        Ok(Response::new(it))
    }
}

#[tonic::async_trait]
impl musa::wechat_pay_bill_server::WechatPayBill for Service {
    async fn trade(
        &self,
        req: Request<musa::WechatPayTradeBillRequest>,
    ) -> GrpcResult<musa::WechatPayBillResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<
                dyn musa::wechat_pay_bill_server::WechatPayBill,
            >()));
        }

        let it = try_grpc!(self.musa.call(Action::WECHAT_PAY_BILL_TRADE, req))?;
        Ok(Response::new(it))
    }
    async fn fund_flow(
        &self,
        req: Request<musa::WechatPayFundFlowBillRequest>,
    ) -> GrpcResult<musa::WechatPayBillResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<
                dyn musa::wechat_pay_bill_server::WechatPayBill,
            >()));
        }

        let it = try_grpc!(self.musa.call(Action::WECHAT_PAY_BILL_FUND_FLOW, req))?;
        Ok(Response::new(it))
    }
}

#[tonic::async_trait]
impl musa::wechat_pay_refund_server::WechatPayRefund for Service {
    async fn create(
        &self,
        req: Request<musa::WechatPayCreateRefundRequest>,
    ) -> GrpcResult<musa::WechatPayRefundResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<
                dyn musa::wechat_pay_refund_server::WechatPayRefund,
            >()));
        }

        let it = try_grpc!(self.musa.call(Action::WECHAT_PAY_REFUND_CREATE, req))?;
        Ok(Response::new(it))
    }
    async fn query(
        &self,
        req: Request<musa::WechatPayQueryRefundRequest>,
    ) -> GrpcResult<musa::WechatPayRefundResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<
                dyn musa::wechat_pay_refund_server::WechatPayRefund,
            >()));
        }

        let it = try_grpc!(self.musa.call(Action::WECHAT_PAY_REFUND_QUERY, req))?;
        Ok(Response::new(it))
    }
}

#[tonic::async_trait]
impl musa::wechat_pay_transfer_server::WechatPayTransfer for Service {
    async fn create(
        &self,
        req: Request<musa::WechatPayCreateTransferRequest>,
    ) -> GrpcResult<musa::WechatPayCreateTransferResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<
                dyn musa::wechat_pay_transfer_server::WechatPayTransfer,
            >()));
        }

        let it = try_grpc!(self.musa.call(Action::WECHAT_PAY_TRANSFER_CREATE, req))?;
        Ok(Response::new(it))
    }
    async fn query(
        &self,
        req: Request<musa::WechatPayQueryTransferRequest>,
    ) -> GrpcResult<musa::WechatPayQueryTransferResponse> {
        let ss = Session::new(&req);
        let mut db = try_grpc!(self.pgsql.get())?;
        let db = db.deref_mut();
        let mut ch = try_grpc!(self.redis.get())?;
        let ch = ch.deref_mut();
        let jwt = self.jwt.deref();
        let enf = self.enforcer.deref();
        let user = try_grpc!(ss.current_user(db, ch, jwt))?;

        if !user.is_administrator(enf).await {
            return Err(Status::permission_denied(type_name::<
                dyn musa::wechat_pay_transfer_server::WechatPayTransfer,
            >()));
        }

        let it = try_grpc!(self.musa.call(Action::WECHAT_PAY_TRANSFER_QUERY, req))?;
        Ok(Response::new(it))
    }
}
