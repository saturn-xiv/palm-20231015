use std::any::type_name;

use palm::plugins::nut::models::user::Item as UserItem;

#[test]
fn resrouce_type() {
    println!("{:?}", type_name::<UserItem>());
}
