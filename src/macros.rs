// #[macro_export]
// macro_rules! current_user {
//     ($s:expr, $r:expr) => {{
//         let ss = Session::new($r);
//         let db = try_grpc!($s.db.get())?;
//         let db = db.deref();
//         let jwt = $s.jwt.deref();
//         try_grpc!(ss.current_user(db, jwt), Status::unauthenticated)?
//     }};
// }

// #[macro_export]
// macro_rules! to_timestamp {
//     ($x:expr) => {{
//         let it: std::time::SystemTime =
//             chrono::DateTime::<chrono::Utc>::from_utc($x, chrono::Utc).into();
//         it.into()
//     }};
// }

#[macro_export]
macro_rules! try_web {
    ($r:expr, $e:expr) => {{
        $r.map_err($e)
    }};
    ($r:expr) => {{
        try_web!($r, ErrorInternalServerError)
    }};
}
