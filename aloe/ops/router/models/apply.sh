#!/bin/bash

set -e

modprobe bonding miimon=100  mode=6
# modinfo bonding



echo 'done.'
exit 0
