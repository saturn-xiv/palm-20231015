use std::fmt;
use std::sync::Mutex;

use hyper::StatusCode;
use palm::{HttpError, Result};
use percent_encoding::{percent_encode, NON_ALPHANUMERIC};
use serde::{Deserialize, Serialize};

pub struct ZeroMq {
    pub socket: zmq::Context,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub enum Queue {
    Tcp(Option<String>, u16),
    Ipc(String),
}

impl fmt::Display for Queue {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Self::Tcp(ref host, port) => write!(
                f,
                "tcp://{}:{}",
                match host {
                    Some(v) => v,
                    None => "127.0.0.1",
                },
                port
            ),
            Self::Ipc(path) => write!(
                f,
                "ipc:///tmp/{}.sock",
                percent_encode(path.as_bytes(), NON_ALPHANUMERIC)
            ),
        }
    }
}

impl Queue {
    pub const SNDHWM: i32 = 0;
    pub const RCVHWM: i32 = 0;
    pub fn sub(&self, topic: Option<String>) -> Result<zmq::Socket> {
        let url = self.to_string();
        info!("open sub socket to {}", url);
        let ctx = zmq::Context::new();
        let sck = ctx.socket(zmq::SUB)?;
        if let Self::Tcp(_, _) = self {
            // http://api.zeromq.org/3-2:zmq-setsockopt
            sck.set_tcp_keepalive(1)?;
            // TCP_KEEPINTVL 多久没有发送数据时，开始发送Keep-Alive包的时间，也就是链路空闲时间
            sck.set_tcp_keepalive_intvl(30)?;
            // TCP_KEEPCNT 连续发送多少次keep alive probe，对方没有回应，认为连接已经失效的重试次数
            sck.set_tcp_keepalive_cnt(2)?;
            // TCP_KEEPIDLE 发送Keep-Alive probe后，对方多久没有回应，然后重新再发送keep alive probe的时间间隔
            sck.set_tcp_keepalive_idle(5)?;
        }
        sck.set_sndhwm(Self::SNDHWM)?;
        sck.set_rcvhwm(Self::RCVHWM)?;
        sck.connect(&url)?;
        sck.set_subscribe(match topic {
            Some(ref topic) => topic.as_bytes(),
            None => b"",
        })?;
        Ok(sck)
    }

    pub fn pub_(&self) -> Result<zmq::Socket> {
        let url = self.to_string();
        info!("open pub socket to {}", url);
        let ctx = zmq::Context::new();
        let sck = ctx.socket(zmq::PUB)?;
        sck.set_sndhwm(Self::SNDHWM)?;
        sck.set_rcvhwm(Self::RCVHWM)?;
        sck.bind(&url)?;
        Ok(sck)
    }
    pub fn push(&self) -> Result<zmq::Socket> {
        let url = self.to_string();
        info!("open push socket to {}", url);
        let ctx = zmq::Context::new();
        let sck = ctx.socket(zmq::PUSH)?;
        sck.set_sndhwm(Self::SNDHWM)?;
        sck.set_rcvhwm(Self::RCVHWM)?;
        sck.connect(&url)?;
        Ok(sck)
    }
    pub fn pull(&self) -> Result<zmq::Socket> {
        let url = self.to_string();
        info!("open pull socket to {}", url);
        let ctx = zmq::Context::new();
        let sck = ctx.socket(zmq::PULL)?;
        sck.set_sndhwm(Self::SNDHWM)?;
        sck.set_rcvhwm(Self::RCVHWM)?;
        sck.bind(&url)?;
        Ok(sck)
    }
    pub fn req(&self) -> Result<zmq::Socket> {
        let url = self.to_string();
        info!("open request client socket to {}", url);
        let ctx = zmq::Context::new();
        let sck = ctx.socket(zmq::REQ)?;
        sck.set_sndhwm(Self::SNDHWM)?;
        sck.set_rcvhwm(Self::RCVHWM)?;
        sck.connect(&url)?;
        Ok(sck)
    }
    pub fn rep(&self) -> Result<zmq::Socket> {
        let url = self.to_string();
        info!("open response server socket to {}", url);
        let ctx = zmq::Context::new();
        let sck = ctx.socket(zmq::REP)?;
        sck.set_sndhwm(Self::SNDHWM)?;
        sck.set_rcvhwm(Self::RCVHWM)?;
        sck.bind(&url)?;
        Ok(sck)
    }
}

pub struct Publisher {
    socket: Mutex<zmq::Socket>,
}

impl Publisher {
    pub const ALL: &'static str = "*";
    pub fn new(port: u16) -> Result<Self> {
        let sck = Queue::Tcp(None, port).pub_()?;
        Ok(Self {
            socket: Mutex::new(sck),
        })
    }
}

impl Publisher {
    pub fn send(&self, topic: &str, payload: &[u8]) -> Result<()> {
        if let Ok(sck) = self.socket.lock() {
            sck.send(topic.as_bytes(), zmq::SNDMORE)?;
            sck.send(payload, 0)?;
        }
        Err(Box::new(HttpError(StatusCode::LOCKED, None)))
    }
}

pub struct Subscriber {
    host: String,
    port: u16,
}

impl Subscriber {
    pub fn new(host: &str, port: u16) -> Result<Self> {
        Ok(Self {
            host: host.to_string(),
            port,
        })
    }
}

impl Subscriber {
    pub fn consume<H>(&self, topic: &str, hnd: &H) -> Result<()>
    where
        H: Fn(&str, &[u8]) -> Result<()>,
    {
        let sck = Queue::Tcp(Some(self.host.clone()), self.port).sub(Some(topic.to_string()))?;
        loop {
            let evp = sck.recv_bytes(0)?;
            let payload = sck.recv_bytes(0)?;
            let evp = std::str::from_utf8(&evp)?;
            hnd(evp, &payload)?;
        }
    }
}
