fn main() {
    tonic_build::compile_protos("rbac.proto").unwrap();
}
