extern crate palm;

mod common;

use chrono::Duration;
use palm::{
    jwt::Jwt,
    models::user::{Action, Token},
};

#[test]
fn hs512() {
    let cfg = common::load_config();
    let uid = "who-am-i";

    let jwt = Jwt::new(cfg.secrets.0.clone());
    let (nbf, exp) = Jwt::timestamps(Duration::weeks(1));
    let token = jwt
        .sum(
            None,
            &Token {
                uid: uid.to_string(),
                sub: "hi".to_string(),
                act: Action::SignIn,
                nbf,
                exp,
            },
        )
        .unwrap();
    println!("{}", token);
    let token = jwt.parse::<Token>(&token).unwrap();
    assert_eq!(token.claims.uid, uid);
}
