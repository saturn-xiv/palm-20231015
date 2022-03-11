extern crate palm;

mod common;

use chrono::Duration;
use palm::{
    jwt::Jwt,
    plugins::nut::models::user::{Action, Token},
};
use uuid::Uuid;

#[test]
fn hs512() {
    let cfg = common::load_config();
    let uid = Uuid::new_v4();

    let jwt = Jwt::new(cfg.secrets.0.clone());
    let (nbf, exp) = Jwt::timestamps(Duration::weeks(1));
    let token = jwt
        .sum(
            None,
            &Token {
                aud: uid,
                act: Action::SignIn,
                nbf,
                exp,
            },
        )
        .unwrap();
    println!("{}", token);
    let token = jwt.parse::<Token>(&token).unwrap();
    assert_eq!(token.claims.aud, uid);
}
