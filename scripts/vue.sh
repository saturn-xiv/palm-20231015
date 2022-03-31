#!/bin/sh

set -e

yarn add moment moment-timezone \
    js-cookie @types/js-cookie \
    jwt-decode dinero.js@alpha video.js \
    vuex@next vue-router@4 vue-i18n@9 \
    vuetify@next @fontsource/roboto

echo 'done.'
exit 0
