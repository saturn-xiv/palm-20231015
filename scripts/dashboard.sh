#!/bin/sh

set -e

yarn add js-cookie @types/js-cookie \
    jwt-decode dinero.js@alpha video.js \
    vuex@next vue-router@4 vue-i18n@9 \
    ant-design-vue@beta
    
echo 'done.'
exit 0
