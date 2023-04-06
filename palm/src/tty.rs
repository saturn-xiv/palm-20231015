use std::borrow::Cow;
use std::fmt::{Debug, Display};
use std::io::{prelude::*, Error as IoError, ErrorKind as IoErrorKind};
use std::result::Result as StdResult;
use std::thread;
use std::time::Duration;

use bytes::BytesMut;
use chrono::Utc;
use hyper::StatusCode;
use serialport::{DataBits, FlowControl, Parity, SerialPort, StopBits, TTYPort};

use super::{HttpError, Result};

pub trait Decoder: Debug {
    type Item;
    type Error: From<IoError> + Debug;
    fn decode(buf: &[u8]) -> StdResult<Option<(Self::Item, usize)>, Self::Error>;
}

pub trait Handler {
    type Item;
    type Error: From<IoError> + Debug;
    fn handle(&mut self, msg: &Self::Item) -> StdResult<(), Self::Error>;
}

pub struct Tty {
    port: TTYPort,
    line: BytesMut,
}

impl Tty {
    pub const ORAGNTE_PI_UART1: &'static str = "/dev/ttyS1";
    pub const ORAGNTE_PI_UART2: &'static str = "/dev/ttyS2";
    pub const USB0: &'static str = "/dev/ttyUSB0";
    pub const USB1: &'static str = "/dev/ttyUSB1";
    pub const RASPBERRY_PI_UART1: &'static str = "/dev/serial0";
    pub const RETRY: u16 = std::u16::MAX;
    pub const MAX_BUFFER_LEN: usize = 1 << 24;

    // picocom --baud 9600 --flow n --parity n --stopbits 1 --databits 8 /dev/ttyUSB1
    pub fn new<'a>(port: impl Into<Cow<'a, str>>) -> Result<Self> {
        let port = port.into();
        info!("open serial port {}", port);
        let port = serialport::new(port, 9600)
            .stop_bits(StopBits::One)
            .flow_control(FlowControl::None)
            .parity(Parity::None)
            .data_bits(DataBits::Eight)
            .timeout(Duration::from_millis(10))
            .open_native()?;
        // port.set_exclusive(false)?;
        Ok(Self {
            port,
            line: BytesMut::new(),
        })
    }

    pub fn available_ports() -> Result<Vec<String>> {
        let items = serialport::available_ports()?
            .iter()
            .map(|x| x.port_name.clone())
            .collect::<_>();
        Ok(items)
    }

    pub fn name(&self) -> Result<String> {
        self.port.name().ok_or(Box::new(HttpError(
            StatusCode::BAD_REQUEST,
            Some("nil serial port name".to_string()),
        )))
    }

    pub fn send<Q: Display>(&mut self, query: &Q) -> Result<()> {
        let query = query.to_string();
        info!("send {}", query);
        self.write(query.as_bytes())
    }

    pub fn write(&mut self, buf: &[u8]) -> Result<()> {
        let now = Utc::now();
        for i in 0..Self::RETRY {
            match self.port.write_all(buf) {
                Ok(_) => {
                    debug!(
                        "try {} times for write tty {}, spend {}",
                        i + 1,
                        buf.len(),
                        (Utc::now() - now)
                    );
                    return Ok(());
                }
                Err(ref e) if e.kind() == IoErrorKind::TimedOut => {
                    thread::sleep(Duration::from_micros(100));
                }
                Err(e) => {
                    return Err(e.into());
                }
            };
        }
        Err(Box::new(HttpError(
            StatusCode::BAD_REQUEST,
            Some(format!("send tty failed, try {} times", Self::RETRY)),
        )))
    }

    pub fn read<D, ED, H, EH>(&mut self, h: &mut H) -> StdResult<(), EH>
    where
        D: Decoder<Item = D, Error = ED>,
        ED: From<IoError> + Debug,
        H: Handler<Item = D, Error = EH>,
        EH: From<ED> + From<IoError> + Debug,
    {
        let mut buf: Vec<u8> = vec![0; 1 << 8]; // FIXME: MUSTN'T MORE THAN 17
        match self.port.read(buf.as_mut_slice()) {
            Ok(len) => {
                debug!("receive {} bytes", len);
                trace!("{:?}", std::str::from_utf8(&buf[..len]));
                self.line.extend_from_slice(&buf[..len]);
                if let Some((it, at)) = D::decode(&self.line)? {
                    let buf = self.line.split_to(at);
                    info!("split to: {:?}", std::str::from_utf8(&buf));
                    return h.handle(&it);
                }
                if self.line.len() >= Self::MAX_BUFFER_LEN {
                    warn!("buffer is full, will clear");
                    self.line.clear();
                }
                Ok(())
            }
            Err(ref e) if e.kind() == IoErrorKind::TimedOut => Ok(()),
            Err(e) => Err(e.into()),
        }
    }
}
