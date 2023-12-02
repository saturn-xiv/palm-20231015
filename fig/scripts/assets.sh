#!/bin/sh

set -e

npm install --save marked moment moment-timezone d3 mermaid qrcodejs epubjs \
    bootstrap @popperjs/core \
    mdb-ui-kit@latest \
    swagger-ui-dist \
    bulma \
    tailwindcss@latest \
    @tabler/core \
    material-components-web material-design-icons @fontsource/roboto \
    @fortawesome/fontawesome-free \
    famfamfam-flags famfamfam-silk famfamfam-mini

echo 'done.'
exit 0
