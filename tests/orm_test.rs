extern crate palm;
extern crate uuid;

use std::ops::Deref;

use palm::{plugins::nut::models::group::Dao as GroupDao, settings::Dao as SettingDao};

#[test]
fn groups() {
    let cfg = palm::orm::Config::default();
    let db = cfg.open().unwrap();
    let db = db.get().unwrap();
    let db = db.deref();

    {
        let code = "demo-1";
        GroupDao::create(db, None, &code).unwrap();
        let it = GroupDao::by_code(db, code).unwrap();
        assert_eq!(it.parent_id, None);
        {
            let code = "demo-2";
            let parent = uuid::Uuid::new_v4();
            GroupDao::update(db, it.id, Some(parent), code).unwrap();
            let tmp = GroupDao::by_code(db, code).unwrap();
            assert_eq!(it.id, tmp.id);
            assert_eq!(tmp.parent_id, Some(parent));
        }
        {
            let code = "demo-3";
            GroupDao::update(db, it.id, None, code).unwrap();
            let tmp = GroupDao::by_code(db, code).unwrap();
            assert_eq!(it.id, tmp.id);
            assert_eq!(tmp.parent_id, None);
        }
    }
}

#[test]
fn settings() {
    let key = palm::crypto::Key::default();
    let aes = palm::crypto::Aes::new(&key.0).unwrap();
    let cfg = palm::orm::Config::default();
    let db = cfg.open().unwrap();

    {
        let key = "aaa".to_string();
        let val1: i32 = 111;
        let val2: i32 = 222;
        let id = uuid::Uuid::new_v4();
        let db = db.get().unwrap();
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
