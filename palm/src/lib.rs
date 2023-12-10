#![recursion_limit = "256"]

use lazy_static::lazy_static;

pub const NAME: &str = env!("CARGO_PKG_NAME");
pub const DESCRIPTION: &str = env!("CARGO_PKG_DESCRIPTION");
pub const HOMEPAGE: &str = env!("CARGO_PKG_HOMEPAGE");
pub const AUTHORS: &str = env!("CARGO_PKG_AUTHORS");
pub const BANNER: &str = include_str!("banner.txt");

pub const FONT_DEJAVUSANS: &[u8] = include_bytes!("DejaVuSans.ttf");

include!(concat!(env!("OUT_DIR"), "/env.rs"));

lazy_static! {
    pub static ref VERSION: String = format!("{GIT_VERSION}({BUILD_TIME})");
}

// https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-WEB.md
// https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md
// https://developers.cloudflare.com/support/speed/optimization-file-size/what-will-cloudflare-compress/
pub const PROTOBUF: &str = "application/x-protobuf";
pub const FLATBUFFER: &str = "application/x-flatbuffer";

pub mod babel {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.babel.v1");
    }
}
pub mod cbeta {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.cbeta.v1");
    }
}
pub mod cms {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.cms.v1");
    }
}
pub mod courses {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.courses.v1");
    }
}
pub mod cscd {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.cscd.v1");
    }
}
pub mod forum {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.forum.v1");
    }
}
pub mod gardenia {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.gardenia.v1");
    }
}
pub mod lemon {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.lemon.v1");
    }
}
pub mod lily {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.lily.v1");
    }
}
pub mod mall {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.mall.v1");
    }
}
pub mod metasequoia {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.metasequoia.v1");
    }
}
pub mod morus {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.morus.v1");
    }
}
pub mod musa {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.musa.v1");
    }
}
pub mod ops {
    pub mod ddns {
        #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
        pub mod v1 {
            tonic::include_proto!("palm.ops.ddns.v1");
        }
    }
    pub mod mail {
        #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
        pub mod v1 {
            tonic::include_proto!("palm.ops.mail.v1");
        }
    }
    pub mod metrics {
        #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
        pub mod v1 {
            tonic::include_proto!("palm.ops.metrics.v1");
        }
    }
    pub mod router {
        #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
        pub mod v1 {
            tonic::include_proto!("palm.ops.router.v1");
        }
    }
    pub mod vpn {
        #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
        pub mod v1 {
            tonic::include_proto!("palm.ops.vpn.v1");
        }
    }
}
pub mod orchid {
    #[allow(clippy::match_single_binding, clippy::derive_partial_eq_without_eq)]
    pub mod v1 {
        tonic::include_proto!("palm.orchid.v1");
    }
}
