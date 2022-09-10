fn main() {
    tonic_build::compile_protos("vpn.proto").unwrap();
}
