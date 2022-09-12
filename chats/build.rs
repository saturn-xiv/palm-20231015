fn main() {
    tonic_build::compile_protos("chats.proto").unwrap();
}
