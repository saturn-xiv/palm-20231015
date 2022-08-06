use std::any::type_name;
use std::fmt;

use elasticsearch::{Elasticsearch, IndexParts};
use serde::{Deserialize, Serialize};

use super::super::super::super::super::Result;

// LANG=en_US.utf8 sudo journalctl -o json --utc --all -f
#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Item {
    #[serde(rename = "SYSLOG_TIMESTAMP")]
    pub syslog_timestamp: String,
    #[serde(rename = "_AUDIT_SESSION")]
    pub audit_session: String,
    #[serde(rename = "__MONOTONIC_TIMESTAMP")]
    pub monotonic_timestamp: String,
    #[serde(rename = "_SYSTEMD_INVOCATION_ID")]
    pub systemd_invocation_id: String,
    #[serde(rename = "_SYSTEMD_USER_SLICE")]
    pub systemd_user_slice: String,
    #[serde(rename = "_HOSTNAME")]
    pub hostname: String,
    #[serde(rename = "_AUDIT_LOGINUID")]
    pub audit_loginuid: String,
    #[serde(rename = "MESSAGE")]
    pub message: String,
    #[serde(rename = "PRIORITY")]
    pub priority: String,
    #[serde(rename = "_SYSTEMD_CGROUP")]
    pub systemd_cgroup: String,
    #[serde(rename = "SYSLOG_IDENTIFIER")]
    pub syslog_identifier: String,
    #[serde(rename = "_BOOT_ID")]
    pub boot_id: String,
    #[serde(rename = "__CURSOR")]
    pub cursor: String,
    #[serde(rename = "_MACHINE_ID")]
    pub machine_id: String,
    #[serde(rename = "_SYSTEMD_SLICE")]
    pub systemd_slice: String,
    #[serde(rename = "_GID")]
    pub gid: String,
    #[serde(rename = "_UID")]
    pub uid: String,
    #[serde(rename = "_TRANSPORT")]
    pub transport: String,
    #[serde(rename = "_EXE")]
    pub exe: String,
    #[serde(rename = "_CMDLINE")]
    pub cmdline: String,
    #[serde(rename = "_SYSTEMD_OWNER_UID")]
    pub systemd_owner_uid: String,
    #[serde(rename = "_SYSTEMD_USER_UNIT")]
    pub systemd_user_unit: String,
    #[serde(rename = "_CAP_EFFECTIVE")]
    pub cap_effective: String,
    #[serde(rename = "__REALTIME_TIMESTAMP")]
    pub realtime_timestamp: String,
    #[serde(rename = "_PID")]
    pub pid: String,
    #[serde(rename = "_COMM")]
    pub comm: String,
    #[serde(rename = "_SOURCE_REALTIME_TIMESTAMP")]
    pub source_realtime_timestamp: String,
    #[serde(rename = "SYSLOG_FACILITY")]
    pub syslog_facility: String,
    #[serde(rename = "_SYSTEMD_UNIT")]
    pub systemd_unit: String,
}

impl fmt::Display for Item {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "{} {} {}[{}]: {}",
            self.syslog_timestamp, self.hostname, self.comm, self.pid, self.message
        )
    }
}

impl Item {
    pub async fn save(&self, client: &Elasticsearch) -> Result<()> {
        let body = json!(self);
        client
            .index(IndexParts::Index(type_name::<Self>()))
            .body(body)
            .send()
            .await?;
        Ok(())
    }
}
