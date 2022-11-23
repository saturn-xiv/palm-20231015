use super::super::Result;

#[cfg(not(debug_assertions))]
pub fn apply() -> Result<()> {
    warn!("apply iptables settings");
    let out = std::process::Command::new("netfilter-persistent")
        .arg("save")
        .output()?;
    let out = String::from_utf8(out.stdout)?;
    info!("{}", out);
    Ok(())
}

#[cfg(not(debug_assertions))]
pub fn clear() -> Result<()> {
    warn!("clear iptables settings");
    let out = std::process::Command::new("iptables").arg("-Z").output()?;
    let out = String::from_utf8(out.stdout)?;
    info!("{}", out);
    Ok(())
}

#[cfg(debug_assertions)]
pub fn apply() -> Result<()> {
    info!("netfilter-persistent save");
    Ok(())
}

#[cfg(debug_assertions)]
pub fn clear() -> Result<()> {
    info!("iptables -Z");
    Ok(())
}
