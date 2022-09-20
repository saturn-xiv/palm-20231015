#!/bin/bash

set -e

export PROTOBUF_ROOT=$HOME/.local
export WORKSPACE=$PWD

# -----------------------------------------------------------------------------

function generate_grpc_by_lang() {
    local target=$WORKSPACE/tmp/protocols/$1
    echo "generate code for grpc-$1"
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -p $target
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/protos \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --${1}_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_${1}_plugin \
        $WORKSPACE/protos/*.proto
}

declare -a languages=(
    # "node"
    "php"
    "python"
    "ruby"
    "cpp"
    "csharp"
    # https://repo1.maven.org/maven2/io/grpc/protoc-gen-grpc-java/
    "java" 
    # "objective_c"
)
declare -a protocols=(
    "nut/nut.proto"
    
    "auth/auth.proto"
    "rbac/rbac.proto"
    "cms/cms.proto"
    "forum/forum.proto"
    "courses/courses.proto"
    "mall/mall.proto"
    "chats/chats.proto"
    
    "ops/mail/mail.proto"
    "ops/vpn/vpn.proto"
    "ops/metrics/metrics.proto"
    "ops/ddns/ddns.proto"
    
    "babel/babel.proto"
    "cscd/cscd.proto"
    "cbeta/cbeta.proto"
)

# function generate_flatbuffers(){
#     echo "generate flatbuffers"
#     flatc --rust -o $WORKSPACE/src/$2.rs $WORKSPACE/$1.fbs
# }



# # https://github.com/grpc/grpc-web#code-generator-plugin
# function generate_grpc_web() {
#     echo "generate code for grpc-web"
#     local target=$WORKSPACE/dashboard/src/protocols
#     if [ -d $target ]
#     then
#         rm -r $target
#     fi
#     mkdir -p $target
#     $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/protos \
#         -I $PROTOBUF_ROOT/include/google/protobuf \
#         --js_out=import_style=commonjs,binary:$target \
#         --grpc-web_out=import_style=typescript,mode=grpcweb:$target \
#         $WORKSPACE/protos/*.proto
# }


# function generate_diesel_postgresql() {
#     echo "generate diesel schema for postgresql"
    
#     DATABASE_URL=$1 diesel print-schema -o settings > src/setting/schema.rs
#     DATABASE_URL=$1 diesel print-schema -o locales > src/i18n/schema.rs
#     DATABASE_URL=$1 diesel print-schema -o users logs \
#         roles roles_constraints roles_users permissions \
#         leave_words notifications \
#         attachments attachments_resources \
#         tags tags_resources \
#         categories categories_resources \
#         vote_items vote_logs \
#         shorter_links > src/plugins/nut/schema.rs
#     DATABASE_URL=$1 diesel print-schema -o cms_articles cms_comments > src/plugins/cms/schema.rs
#     DATABASE_URL=$1 diesel print-schema -o forum_topics forum_posts > src/plugins/forum/schema.rs
#     DATABASE_URL=$1 diesel print-schema -o twilio_sms_logs > src/plugins/twilio/schema.rs
# }

# # ----------------------------------------------------------

# generate_diesel_postgresql "postgres://www:change-me@127.0.0.1:5432/palm"





# for l in "${languages[@]}"
# do
#     generate_grpc_by_lang $l
# done

# generate_grpc_web

echo 'format rust code'
cargo fmt

# ----------------------------------------------------------

echo 'done.'
exit 0
