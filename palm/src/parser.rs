use std::path::Path;
use std::{fs, io::Read};

use serde::de::DeserializeOwned;

use super::Result;

// pub fn from_xml_bytes<T: DeserializeOwned>(buf: &[u8]) -> Result<T> {
//     let len = match Encoding::for_bom(buf) {
//         None => 0,
//         Some((_, len)) => len,
//     };
//     let it = serde_xml_rs::from_str(std::str::from_utf8(&buf[len..])?)?;
//     Ok(it)
// }

// pub fn from_xml<P: AsRef<Path>, T: DeserializeOwned>(file: P) -> Result<T> {
//     let mut file = fs::File::open(file)?;
//     let mut buf = Vec::new();
//     file.read_to_end(&mut buf)?;
//     let len = match encoding_rs::Encoding::for_bom(buf.as_slice()) {
//         None => 0,
//         Some((_, len)) => {
//             debug!("find bom header {}", len);
//             len
//         }
//     };
//     let it = serde_xml_rs::from_reader(&buf[len..])?;
//     Ok(it)
// }

pub fn from_toml<P: AsRef<Path>, T: DeserializeOwned>(file: P) -> Result<T> {
    let mut file = fs::File::open(file)?;
    let mut buf = Vec::new();
    file.read_to_end(&mut buf)?;
    let it = toml::from_slice(&buf)?;
    Ok(it)
}
