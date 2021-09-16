pub mod rbac;
pub mod user;

pub mod v1 {
    tonic::include_proto!("nut.services.auth.v1");
}
