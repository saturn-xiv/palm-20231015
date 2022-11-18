extern crate palm;
extern crate uuid;

use std::ops::DerefMut;

use palm::setting::Dao as SettingDao;

#[test]
fn settings() {
    let key = palm::crypto::Key::default();
    let aes = palm::crypto::Aes::new(&key.0).unwrap();
    let cfg = palm::orm::postgresql::Config::default();
    let db = cfg.open().unwrap();

    {
        let key = "aaa".to_string();
        let val1: i32 = 111;
        let val2: i32 = 222;
        let id = 123;
        let mut db = db.get().unwrap();
        let db = db.deref_mut();
        {
            db.set(&aes, &key, None, &val1, true).unwrap();
            let tmp: i32 = db.get(&aes, &key, None).unwrap();
            assert_eq!(tmp, val1);
        }
        {
            db.set(&aes, &key, None, &val2, true).unwrap();
            let tmp: i32 = db.get(&aes, &key, None).unwrap();
            assert_eq!(tmp, val2);
        }
        {
            db.set(&aes, &key, Some(id), &val1, true).unwrap();
            let tmp: i32 = db.get(&aes, &key, Some(id)).unwrap();
            assert_eq!(tmp, val1);
        }
        {
            db.set(&aes, &key, Some(id), &val2, true).unwrap();
            let tmp: i32 = db.get(&aes, &key, Some(id)).unwrap();
            assert_eq!(tmp, val2);
        }
        {
            db.set(&aes, &key, None, &val1, false).unwrap();
            let tmp: i32 = db.get(&aes, &key, None).unwrap();
            assert_eq!(tmp, val1);
        }
        {
            db.set(&aes, &key, None, &val2, false).unwrap();
            let tmp: i32 = db.get(&aes, &key, None).unwrap();
            assert_eq!(tmp, val2);
        }
        {
            db.set(&aes, &key, Some(id), &val1, false).unwrap();
            let tmp: i32 = db.get(&aes, &key, Some(id)).unwrap();
            assert_eq!(tmp, val1);
        }
        {
            db.set(&aes, &key, Some(id), &val2, false).unwrap();
            let tmp: i32 = db.get(&aes, &key, Some(id)).unwrap();
            assert_eq!(tmp, val2);
        }
    }
}
