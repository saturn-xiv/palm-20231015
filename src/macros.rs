#[macro_export]
macro_rules! to_timestamp {
    ($x:expr) => {{
        let it: std::time::SystemTime =
            chrono::DateTime::<chrono::Utc>::from_utc($x, chrono::Utc).into();
        it.into()
    }};
}

#[macro_export]
macro_rules! to_datetime {
    ($x:expr) => {{
        chrono::NaiveDateTime::from_timestamp($x.seconds, $x.nanos as u32)
    }};
}

#[macro_export]
macro_rules! to_chrono_duration {
    ($x:expr) => {{
        chrono::Duration::seconds($x.seconds)
    }};
}
#[macro_export]
macro_rules! to_std_duration {
    ($x:expr) => {{
        std::time::Duration::new($x.seconds as u64, $x.nanos as u32)
    }};
}

#[macro_export]
macro_rules! to_code {
    ($x:expr) => {{
        let it = $x.trim();
        it.to_lowercase()
    }};
}

#[macro_export]
macro_rules! has_role {
    ($e:expr, $u:expr, $r:expr) => {{
        use casbin::RbacApi;
        let mut e = $e.lock().await;
        let e = e.deref_mut();
        e.has_role_for_user($u, $r, None)
    }};
}

#[macro_export]
macro_rules! has_permission {
    ($e:expr, $u:expr, $o:expr, $r:expr) => {{
        use casbin::RbacApi;
        let mut e = $e.lock().await;
        let e = e.deref_mut();
        e.has_permission_for_user($u, vec![$r, $o])
    }};
}

#[macro_export]
macro_rules! to_role {
    ($r:expr) => {{
        format!("role://{}", to_code!($r))
    }};
}
#[macro_export]
macro_rules! resource_to_object {
    ($t:expr, $i:expr) => {{
        format!("{}://{}", $t, $i)
    }};
    ($t:expr) => {{
        $t.to_string()
    }};
}

#[macro_export]
macro_rules! object_to_resource {
    ($o:expr) => {{
        let items: Vec<&str> = $o.split("://").collect();
        if items.len() == 2 {
            match items[1].parse() {
                Ok(id) => (items[0].to_string(), Some(id)),
                Err(_) => ($o.to_string(), None),
            }
        } else {
            ($o.to_string(), None)
        }
    }};
}
#[macro_export]
macro_rules! try_web {
    ($r:expr, $e:expr) => {{
        $r.map_err($e)
    }};
    ($r:expr) => {{
        try_web!($r, actix_web::error::ErrorInternalServerError)
    }};
}

#[macro_export]
macro_rules! try_grpc {
    ($r:expr, $e:expr) => {{
        $r.map_err($e)
    }};
    ($r:expr) => {{
        try_grpc!($r, |e| tonic::Status::internal(e.to_string()))
    }};
}
