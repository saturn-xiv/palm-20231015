use data_encoding::HEXLOWER;
use openssl::sha::sha1;

pub fn sum(plain: &[u8]) -> String {
    HEXLOWER.encode(&sha1(plain))
}
