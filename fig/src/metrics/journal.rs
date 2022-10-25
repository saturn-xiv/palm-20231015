use std::fmt;
use std::io::{prelude::*, Error as IoError, ErrorKind as IoErrorKind};
use std::process::{Command, Stdio};

use bytes::{BufMut, BytesMut};
use serde::{Deserialize, Serialize};

use super::super::Result;

// https://www.freedesktop.org/software/systemd/man/systemd.journal-fields.html
// apt install systemd-journal-remote
// journalctl --utc --all -o json -f
#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    #[serde(rename = "SYSLOG_TIMESTAMP")]
    pub syslog_timestamp: Option<String>,
    #[serde(rename = "_AUDIT_SESSION")]
    pub audit_session: Option<String>,
    #[serde(rename = "__MONOTONIC_TIMESTAMP")]
    pub monotonic_timestamp: String,
    #[serde(rename = "_SYSTEMD_INVOCATION_ID")]
    pub systemd_invocation_id: Option<String>,
    #[serde(rename = "_SYSTEMD_USER_SLICE")]
    pub systemd_user_slice: Option<String>,
    #[serde(rename = "_HOSTNAME")]
    pub hostname: String,
    #[serde(rename = "_AUDIT_LOGINUID")]
    pub audit_loginuid: Option<String>,
    #[serde(rename = "MESSAGE")]
    pub message: String,
    #[serde(rename = "PRIORITY")]
    pub priority: Option<String>,
    #[serde(rename = "_SYSTEMD_CGROUP")]
    pub systemd_cgroup: Option<String>,
    #[serde(rename = "SYSLOG_IDENTIFIER")]
    pub syslog_identifier: Option<String>,
    #[serde(rename = "_BOOT_ID")]
    pub boot_id: String,
    #[serde(rename = "__CURSOR")]
    pub cursor: String,
    #[serde(rename = "_MACHINE_ID")]
    pub machine_id: String,
    #[serde(rename = "_SYSTEMD_SLICE")]
    pub systemd_slice: Option<String>,
    #[serde(rename = "_GID")]
    pub gid: Option<String>,
    #[serde(rename = "_UID")]
    pub uid: Option<String>,
    #[serde(rename = "_TRANSPORT")]
    pub transport: String,
    #[serde(rename = "_EXE")]
    pub exe: Option<String>,
    #[serde(rename = "_CMDLINE")]
    pub cmdline: Option<String>,
    #[serde(rename = "_SYSTEMD_OWNER_UID")]
    pub systemd_owner_uid: Option<String>,
    #[serde(rename = "_SYSTEMD_USER_UNIT")]
    pub systemd_user_unit: Option<String>,
    #[serde(rename = "_CAP_EFFECTIVE")]
    pub cap_effective: Option<String>,
    #[serde(rename = "__REALTIME_TIMESTAMP")]
    pub realtime_timestamp: String,
    #[serde(rename = "_PID")]
    pub pid: Option<String>,
    #[serde(rename = "_COMM")]
    pub comm: Option<String>,
    #[serde(rename = "_SOURCE_REALTIME_TIMESTAMP")]
    pub source_realtime_timestamp: Option<String>,
    #[serde(rename = "SYSLOG_FACILITY")]
    pub syslog_facility: Option<String>,
    #[serde(rename = "_SYSTEMD_UNIT")]
    pub systemd_unit: Option<String>,
}

impl fmt::Display for Item {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "{} {} {}[{}]: {}",
            self.syslog_timestamp.as_ref().unwrap_or(&"".to_string()),
            self.hostname,
            self.comm.as_ref().unwrap_or(&"".to_string()),
            self.pid.as_ref().unwrap_or(&"?".to_string()),
            self.message
        )
    }
}

impl Item {
    const PREFIX: &str = r###"{""###;
    const SUFFIX: &str = r###""}"###;

    pub fn new(buf: &mut BytesMut) -> Option<Self> {
        if let Some(begin) = buf
            .windows(Self::PREFIX.len())
            .position(|w| w == Self::PREFIX.as_bytes())
        {
            if let Some(end) = buf
                .windows(Self::SUFFIX.len())
                .position(|w| w == Self::SUFFIX.as_bytes())
            {
                if end > begin {
                    let end = end + Self::SUFFIX.len();
                    match serde_json::from_slice(&buf[begin..end]) {
                        Ok(it) => {
                            {
                                let tmp = buf.split_to(end);
                                debug!("clear {:?}", std::str::from_utf8(&tmp));
                            }
                            return Some(it);
                        }
                        Err(e) => {
                            error!("{:?}", e);
                            {
                                let tmp = buf.split_to(end);
                                debug!("clear {:?}", std::str::from_utf8(&tmp));
                            }
                        }
                    }
                } else {
                    let tmp = buf.split_to(begin);
                    debug!("clear {:?}", std::str::from_utf8(&tmp));
                }
            }
        }
        None
    }

    pub fn execute() -> Result<()> {
        let mut jo = Command::new("journalctl")
            .arg("--utc")
            .arg("--all")
            .arg("-o")
            .arg("json")
            .arg("-f")
            .stdout(Stdio::piped())
            .spawn()?;
        let mut out = jo
            .stdout
            .take()
            .ok_or_else(|| Box::new(IoError::from(IoErrorKind::UnexpectedEof)))?;

        let mut buf = BytesMut::with_capacity(1 << 12);

        let mut line = [0; 1 << 10];

        loop {
            let len = out.read(&mut line)?;

            if len > 0 {
                buf.put(&line[0..len]);
                debug!("receive {} bytes({})", len, buf.len());
                if let Some(it) = Item::new(&mut buf) {
                    debug!("get {}", it);
                    // TODO
                }
            }
        }
    }
}
