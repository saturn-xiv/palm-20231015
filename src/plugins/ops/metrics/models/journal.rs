use std::fmt;

use serde::{Deserialize, Serialize};

// LANG=en_US.utf8 sudo journalctl -o json --utc --all -f
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
    pub syslog_facility: String,
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
