#!/bin/bash

set -e

# ---------------------------------------------------------

declare -a languages=(
    "php"
    "python"
    "ruby"
    "cpp"
    "csharp"
)


export WORKSPACE=$PWD
export GRPC_ROOT=$HOME/.local

for l in "${languages[@]}"
do
    if [ -d $WORKSPACE/loquat/$l ]
    then
        rm -r $WORKSPACE/loquat/$l
    fi
    mkdir -pv $WORKSPACE/loquat/$l
    $GRPC_ROOT/bin/protoc -I $WORKSPACE/protos \
        -I $GRPC_ROOT/include/google/protobuf \
        --${l}_out=$WORKSPACE/loquat/$l --grpc_out=$WORKSPACE/loquat/$l \
        --plugin=protoc-gen-grpc=$GRPC_ROOT/bin/grpc_${l}_plugin \
        $WORKSPACE/protos/*.proto
done


# ---------------------------------------------------------
 
echo 'done.'
exit 0
