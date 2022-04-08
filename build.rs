use std::env;
use std::fs::{read_dir, File};
use std::io::Write;
use std::path::Path;
use std::process::Command;

fn shell(cmd: &mut Command) -> String {
    String::from_utf8(cmd.output().unwrap().stdout)
        .unwrap()
        .trim()
        .to_string()
}

fn main() {
    for it in read_dir("protos").unwrap() {
        let it = it.unwrap();
        let it = it.path();
        tonic_build::compile_protos(&it.display().to_string()).unwrap();
    }
    {
        let out_dir = env::var("OUT_DIR").unwrap();
        let git_version = shell(
            Command::new("git")
                .arg("describe")
                .arg("--tags")
                .arg("--always")
                .arg("--first-parent")
                .arg("--dirty"),
        );
        let build_time = shell(Command::new("date").arg("-u").arg("-R"));

        let dest_path = Path::new(&out_dir).join("env.rs");
        let mut fd = File::create(&dest_path).unwrap();

        writeln!(fd, r#"pub const GIT_VERSION: &str = "{}";"#, git_version).unwrap();
        writeln!(fd, r#"pub const BUILD_TIME: &str = "{}";"#, build_time).unwrap();
    }
}
