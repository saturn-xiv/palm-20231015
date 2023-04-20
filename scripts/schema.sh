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
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/palm/protocols \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --${1}_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_${1}_plugin \
        $WORKSPACE/palm/protocols/*.proto
}

function generate_flatbuffers() {
    echo "generate flatbuffers"
    flatc --rust --filename-suffix "" -o $WORKSPACE/$2 $WORKSPACE/$1.fbs
    flatc --rust --filename-suffix "" -o $WORKSPACE/$2 $WORKSPACE/$1.fbs
}

function generate_loquat() {
    cd $WORKSPACE
    echo 'generate code for loquat-rust'
    thrift -out palm/src --gen rs -r palm/protocols/loquat.thrift
    
    echo 'generate code for loquat-cpp'
    local cpp_target=loquat/gourd/src
    if [ -d $cpp_target ]
    then
        rm -r $cpp_target
    fi
    mkdir -p $cpp_target
    thrift -out $cpp_target --gen cpp -r palm/protocols/loquat.thrift

    echo 'generate code for loquat-java'
    thrift -out tmp/protocols/java --gen java -r palm/protocols/loquat.thrift    
}

# https://github.com/grpc/grpc-web#code-generator-plugin
function generate_fig_web() {
    echo "generate code for fig@grpc-web"
    local target=$WORKSPACE/fig/dashboard/src/protocols
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -p $target
    
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/palm/protocols \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --js_out=import_style=commonjs,binary:$target \
        --grpc-web_out=import_style=typescript,mode=grpcweb:$target \
        $WORKSPACE/palm/protocols/*.proto
}
function generate_aloe_web() {
    echo "generate code for aloe@grpc-web"
    local target=$WORKSPACE/aloe/dashboard/src/protocols
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -p $target
    
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/palm/protocols \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --js_out=import_style=commonjs,binary:$target \
        --grpc-web_out=import_style=typescript,mode=grpcweb:$target \
        $WORKSPACE/palm/protocols/ops-router.proto
}

function generate_diesel_postgresql() {
    echo "generate diesel schema for postgresql"
    
    DATABASE_URL=$1 diesel print-schema \
        -o locales settings \
            users users_contacts \
            google_users \
            wechat_oauth2_users wechat_mini_program_users \
            logs attachments attachments_resources \
            roles roles_users roles_constraints permissions \
            leave_words shorter_links notifications twilio_sms_logs crawler_logs \
            tags tags_resources \
            categories categories_resources \
            vote_items vote_logs \
        > nut/src/schema.rs    
    DATABASE_URL=$1 diesel print-schema \
        -o cms_articles cms_comments \
        > cms/src/schema.rs
    DATABASE_URL=$1 diesel print-schema \
        -o forum_topics forum_posts \
        > forum/src/schema.rs
    DATABASE_URL=$1 diesel print-schema \
        -o flashcard_books flashcard_quizzes flashcard_scores \
        > flashcard/src/schema.rs
}

function copy_musa() {
    cd $WORKSPACE


    local -a plugins=(
        "loquat"
        "musa"
    )
    for p in "${plugins[@]}"
    do
        local package=com/github/saturn_xiv/palm/plugins/$p/v1
        local target=musa/src/main/java/$package
        if [ -d $target ]
        then
            rm -r $target
        fi
        cp -r tmp/protocols/java/$package $target        
    done
}


# -----------------------------------------------------------------------------

generate_diesel_postgresql "postgres://www:change-me@127.0.0.1:5432/demo"
DATABASE_URL=tmp/db diesel print-schema > ops/router/src/schema.rs

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

for l in "${languages[@]}"
do
    generate_grpc_by_lang $l
done

generate_fig_web
generate_aloe_web
generate_loquat
copy_musa

echo 'format rust code'
cargo fmt

# ----------------------------------------------------------

echo 'Done.'
exit 0
