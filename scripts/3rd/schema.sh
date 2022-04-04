#!/bin/sh

set -e

export DATABASE_URL=mysql://root:'gil@6ohngei5yei6Phoaph4egh8roh4pi'@127.0.0.1:3306
 
DATABASE_URL=$DATABASE_URL/cms diesel print-schema -e \
    cms_contentitem_tag_map cms_fields_values \
    cms_finder_terms_common cms_finder_tokens cms_finder_tokens_aggregate \
    cms_messages_cfg cms_user_profiles \
    cms_content_types \
    > src/plugins/cms/schema.rs

DATABASE_URL=$DATABASE_URL/forum diesel print-schema -e \
    forum_online forum_search_matches \
    forum_forums forum_topics \
    > src/plugins/forum/schema.rs

DATABASE_URL=$DATABASE_URL/mall diesel print-schema -e \
    mall_googleshopping_product mall_googleshopping_target mall_recurring \
    > src/plugins/mall/schema.rs

echo 'done.'
exit 0
