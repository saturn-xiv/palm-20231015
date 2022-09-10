fn main() {
    tonic_build::compile_protos("mail.proto").unwrap();
}
