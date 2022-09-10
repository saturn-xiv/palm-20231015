fn main() {
    tonic_build::compile_protos("cbeta.proto").unwrap();
}
