#!/bin/bash

set -e

if [ ! -d node_modules ]
then
    npm install
fi

npx webpack --mode=production

echo 'done.'
exit 0
