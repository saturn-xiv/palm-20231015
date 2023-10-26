import logging
import argparse
import sys
import tomllib
import subprocess
import json

import os.path

from opensearchpy import OpenSearch

NAME = 'durian-journald'
VERSION = '2023.10.24'

OPENSEARCH_INDEX_NAME = 'journal'


def is_stopped():
    return os.path.isfile('.stop')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        prog=NAME,
        description='A journald clawer',
        epilog='https://github.com/saturn-xiv/palm')
    parser.add_argument('-c', '--config',
                        type=argparse.FileType(mode='rb'),
                        default='config.toml',
                        help='load configuration(toml)')
    parser.add_argument('-d', '--debug',
                        action='store_true',
                        help='run on debug mode')
    parser.add_argument('-v', '--version',
                        action='store_true',
                        help=('print %s version' % NAME))
    args = parser.parse_args()
    if args.version:
        print(VERSION)
        sys.exit()
    logging.basicConfig(
        level=(logging.DEBUG if args.debug else logging.WARNING))
    if args.debug:
        logging.debug('run on debug mode with %s', args)

    if is_stopped():
        logging.error('.stop file existed, quit...')
        sys.exit(1)

    logging.info('load configuration from %s', args.config.name)
    config = tomllib.load(args.config)
    search_cfg = config['opensearch']
    search_con = OpenSearch(
        hosts=[{'host': search_cfg['host'], 'port':search_cfg['port']}],
        http_compress=True,
        use_ssl=False,
    )
    if not search_con.indices.exists(OPENSEARCH_INDEX_NAME):
        logging.warning('create index %s' % OPENSEARCH_INDEX_NAME)
        search_con.indices.create(OPENSEARCH_INDEX_NAME, {
            'settings': {
                'index': {
                    'number_of_shards': 6,
                    'number_of_replicas': 1,
                }
            }
        })

    process = subprocess.Popen(
        ['/usr/bin/journalctl', '-f', '-n', '0', '-p', 'debug', '-o', 'json'],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )
    try:
        while True:
            line = process.stdout.readline().decode()
            if line == '' and process.poll() is not None:
                logging.error('empty line')
                break
            doc = json.loads(line.strip())
            search_con.index(index=OPENSEARCH_INDEX_NAME,
                             body=doc, refresh=True)
    except KeyboardInterrupt:
        logging.warning('exiting....')
