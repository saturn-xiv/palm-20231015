extern crate palm;
extern crate serde_json;

use palm::plugins::ops::metrics;

#[test]
fn journal() {
    let it : metrics::models::journal::Item = serde_json::from_str(r#"
    {
        "SYSLOG_TIMESTAMP" : "Aug  5 07:44:03 ",
        "_AUDIT_SESSION" : "4",
        "__MONOTONIC_TIMESTAMP" : "103619269213",
        "_SYSTEMD_INVOCATION_ID" : "9372034378d44101865e446d7852aca4",
        "_SYSTEMD_USER_SLICE" : "app-org.gnome.Terminal.slice",
        "_HOSTNAME" : "e15",
        "_AUDIT_LOGINUID" : "1000",
        "MESSAGE" : "pam_unix(sudo:session): session opened for user root(uid=0) by jeremy(uid=1000)",
        "PRIORITY" : "6",
        "_SYSTEMD_CGROUP" : "/user.slice/user-1000.slice/user@1000.service/app.slice/app-org.gnome.Terminal.slice/vte-spawn-13ba35ab-7fc5-4c3d-8be1-910b0728a99a.scope",
        "SYSLOG_IDENTIFIER" : "sudo",
        "_BOOT_ID" : "9391d321c94b4d698c06e2eca12b8a18",
        "__CURSOR" : "s=24a4364dffd745c0a7450d047b4a271f;i=4d189;b=9391d321c94b4d698c06e2eca12b8a18;m=182030925d;t=5e575051997b1;x=6c871a17da74f0df",
        "_MACHINE_ID" : "f43d356455c84f1c851895544921e64b",
        "_SYSTEMD_SLICE" : "user-1000.slice",
        "_GID" : "0",
        "_UID" : "1000",
        "_TRANSPORT" : "syslog",
        "_EXE" : "/usr/bin/sudo",
        "_CMDLINE" : "sudo journalctl -o json-pretty --utc --all -f",
        "_SYSTEMD_OWNER_UID" : "1000",
        "_SYSTEMD_USER_UNIT" : "vte-spawn-13ba35ab-7fc5-4c3d-8be1-910b0728a99a.scope",
        "_CAP_EFFECTIVE" : "1ffffffffff",
        "__REALTIME_TIMESTAMP" : "1659665643050929",
        "_PID" : "400730",
        "_COMM" : "sudo",
        "_SOURCE_REALTIME_TIMESTAMP" : "1659665643038457",
        "SYSLOG_FACILITY" : "10",
        "_SYSTEMD_UNIT" : "user@1000.service"
}     
    "#).unwrap();
    println!("{}", it);
}
