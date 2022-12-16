pub mod random;
pub mod ssha512;

use openssl::{
    hash::MessageDigest,
    memcmp,
    pkey::{PKey, Private},
    sign::Signer,
    symm::{Cipher, Crypter, Mode},
};
use serde::{Deserialize, Serialize};

use super::Result;

pub trait Password {
    fn sum(&self, plain: &[u8]) -> Result<Vec<u8>>;
    fn verify(&self, cipher: &[u8], plain: &[u8]) -> bool;
}

pub trait Secret {
    fn encrypt(&self, plain: &[u8]) -> Result<(Vec<u8>, Vec<u8>)>;
    fn decrypt(&self, cipher: &[u8], iv: &[u8]) -> Result<Vec<u8>>;
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Key(pub String);

impl Default for Key {
    fn default() -> Self {
        Self(base64::encode(random::bytes(32)))
    }
}

impl From<Key> for Result<Vec<u8>> {
    fn from(it: Key) -> Self {
        let buf = base64::decode(it.0)?;
        Ok(buf)
    }
}

#[derive(Clone)]
pub struct Hmac {
    key: PKey<Private>,
    digest: MessageDigest,
}

impl Hmac {
    pub fn new(key: &str) -> Result<Self> {
        let key = base64::decode(key)?;
        Ok(Self {
            key: PKey::hmac(&key)?,
            digest: MessageDigest::sha512(),
        })
    }
}

impl Password for Hmac {
    fn sum(&self, plain: &[u8]) -> Result<Vec<u8>> {
        let mut signer = Signer::new(self.digest, &self.key)?;
        signer.update(plain)?;
        let cipher = signer.sign_to_vec()?;
        Ok(cipher)
    }
    fn verify(&self, cipher: &[u8], plain: &[u8]) -> bool {
        if let Ok(buf) = self.sum(plain) {
            return memcmp::eq(&buf, cipher);
        }
        false
    }
}

// Serpent > Twofish > Serpent
#[derive(Clone)]
pub struct Aes {
    key: Vec<u8>, // 32 bytes
    cipher: Cipher,
}

impl Aes {
    pub fn new(key: &str) -> Result<Self> {
        let key = base64::decode(key)?;
        Ok(Self {
            key,
            cipher: Cipher::aes_256_cbc(),
        })
    }
}

impl Secret for Aes {
    fn encrypt(&self, plain: &[u8]) -> Result<(Vec<u8>, Vec<u8>)> {
        let iv = random::bytes(self.cipher.block_size());
        let mut enc = Crypter::new(self.cipher, Mode::Encrypt, &self.key, Some(&iv))?;
        let mut cipher = vec![0; plain.len() + self.cipher.block_size()];
        let mut count = enc.update(plain, &mut cipher)?;
        count += enc.finalize(&mut cipher[count..])?;
        cipher.truncate(count);
        Ok((cipher, iv))
    }

    fn decrypt(&self, cipher: &[u8], iv: &[u8]) -> Result<Vec<u8>> {
        let mut dec = Crypter::new(self.cipher, Mode::Decrypt, &self.key, Some(iv))?;
        let mut plain = vec![0; cipher.len() + self.cipher.block_size()];

        let mut count = dec.update(cipher, &mut plain)?;
        count += dec.finalize(&mut plain[count..])?;
        plain.truncate(count);

        Ok(plain)
    }
}
