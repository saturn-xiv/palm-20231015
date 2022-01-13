#[macro_export]
macro_rules! try_grpc {
    ($r:expr, $s:expr) => {{
        $r.map_err(|x| x.to_string()).map_err($s)
    }};
    ($r:expr) => {{
        $r.map_err(|x| x.to_string())
            .map_err(tonic::Status::internal)
    }};
}

#[macro_export]
macro_rules! current_user {
    ($s:expr, $r:expr) => {{
        let ss = Session::new($r);
        let db = try_grpc!($s.db.get())?;
        let db = db.deref();
        let jwt = $s.jwt.deref();
        try_grpc!(ss.current_user(db, jwt), Status::unauthenticated)?
    }};
}

#[macro_export]
macro_rules! to_timestamp {
    ($x:expr) => {{
        let it: std::time::SystemTime =
            chrono::DateTime::<chrono::Utc>::from_utc($x, chrono::Utc).into();
        it.into()
    }};
}
