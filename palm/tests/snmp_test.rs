use std::any::type_name;

use palm::wechat::mini_program::MiniProgram;

#[test]
fn get() {
    println!("{}", type_name::<dyn MiniProgram>());
}
