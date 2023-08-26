#!/bin/bash

set -e

# composer install
# https://devdocs.magento.com/guides/v2.3/install-gde/composer.html#install-magento
# bin/magento setup:install \
# --base-url=http://localhost/magento2ee \
# --db-host=localhost \
# --db-name=magento \
# --db-user=root \
# --db-password=123456 \
# --admin-firstname=admin \
# --admin-lastname=admin \
# --admin-email=admin@admin.com \
# --admin-user=admin \
# --admin-password=admin123 \
# --language=en_US \
# --currency=USD \
# --timezone=America/Chicago \
# --use-rewrites=1

DATABASE_URL="mysql://root:123456@127.0.0.1:3306/magento" diesel print-schema \
    -e queue_poison_pill \
    sales_order \
    vault_payment_token reporting_system_updates reporting_users reporting_counts oauth_token directory_country_format catalog_product_option catalog_product_bundle_option captcha_log \
    > magento/src/schema.rs

echo 'done.'
