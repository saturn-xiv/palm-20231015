use std::process::Command;

use super::super::Result;

pub fn apply() -> Result<()> {
    warn!("apply iptables settings");
    let out = Command::new("netfilter-persistent").arg("save").output()?;
    let out = String::from_utf8(out.stdout)?;
    info!("{}", out);
    Ok(())
}

pub fn clear() -> Result<()> {
    warn!("clear iptables settings");
    let out = Command::new("iptables").arg("-Z").output()?;
    let out = String::from_utf8(out.stdout)?;
    info!("{}", out);
    Ok(())
}
