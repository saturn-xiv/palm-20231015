use rand::{distributions::Alphanumeric, prelude::*, thread_rng};
use uuid::Uuid;

pub fn bytes(l: usize) -> Vec<u8> {
    let mut rng = thread_rng();
    (0..l).map(|_| rng.gen::<u8>()).collect()
}

pub fn string(l: usize) -> String {
    let mut rng = thread_rng();
    std::iter::repeat(())
        .map(|()| rng.sample(Alphanumeric))
        .map(char::from)
        .take(l)
        .collect()
}

pub fn uuid() -> String {
    Uuid::new_v4().to_string()
}
