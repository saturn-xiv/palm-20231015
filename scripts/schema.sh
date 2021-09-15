#!/bin/bash

set -e

# ---------------------------------------------------------

echo "generate diesel schema..."

declare -A databases=(["postgresql"]="postgres://postgres@127.0.0.1:5432/demo" ["mysql"]="mysql://root@127.0.0.1:3306/demo" ["sqlite"]="tmp/db")
for k in "${!databases[@]}"
do
    export DATABASE_URL=${databases[$k]}
    diesel print-schema -o schema_migrations > nut/src/orm/$k/schema.rs
    diesel print-schema -o settings > nut/src/settings/$k/schema.rs
    diesel print-schema -o locales > nut/src/i18n/$k/schema.rs
    diesel print-schema -o categories tags topics tags_topics posts notifications attachments \
        logs users groups_users groups roles_users roles_groups roles_relations roles operations resources policies > nut/src/models/$k/schema.rs
done

# export DATABASE_URL="postgres://postgres@127.0.0.1:5432/demo"
# FIXME

cargo fmt

echo 'done.'
exit 0
