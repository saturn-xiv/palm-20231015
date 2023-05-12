use std::any::type_name;

use palm::nut::v1 as nut;

#[test]
fn name() {
    println!(
        "{}",
        type_name::<dyn nut::leave_word_server::LeaveWord::create>()
    );
}
