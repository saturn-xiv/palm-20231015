import logging
import argparse
import sys
import tomllib

import os.path
import urllib.request

from time import sleep

import psycopg2
import mysql.connector
import pika
import netsnmp

from redis import Redis
from redis.cluster import RedisCluster
from opensearchpy import OpenSearch
from minio import Minio

NAME = 'durian-monitor'
VERSION = '2023.10.6'

OPENSEARCH_INDEX_NAME = 'monitoring'


def is_stopped():
    return os.path.isfile('.stop')


class OpenSearchClient:
    def __init__(self, config):
        self.connection = OpenSearch(
            hosts=[{'host': config['host'], 'port':config['port']}],
            http_compress=True,
            use_ssl=False,
        )

    def index_exists(self, name):
        return self.connection.indices.exists(name)

    def create_index(self, name, number_of_shards):
        logging.warning('create index %s' % name)
        self.connection.indices.create(name, {
            'settings': {
                'index': {'number_of_shards': number_of_shards}
            }
        })


def fetch_snmp(client, host, port):
    logging.info('fetch snmp://%s:%d', host, port)
    ss = netsnmp.Session(Version=2, DestHost=host,
                         RemotePort=port, Community='public')
    req_g = netsnmp.VarList('system.sysContact.0', 'ssCpuUser', 'ssCpuSystem', 'ssCpuIdle',
                            'hrMemorySize', 'Load5', 'Load10', 'Load15',
                            )
    ss.get(req_g)
    for it in req_g:
        logging.debug('%s(%s)=%s', it.tag, it.type, it.val)

    req_w = netsnmp.VarList(
        'system', 'IF-MIB::ifName', 'IF-MIB::ifDescr', 'hrSWRunName', 'hrSWInstalledName'
    )
    res_w = ss.walk(req_w)
    for it in res_w:
        logging.debug('%s', it)

    for it in req_w:
        logging.debug('%s(%s)=%s', it.tag, it.type, it.val)


def fetch_mysql(client, host, port, user, password, name):
    logging.info('fetch mysql://%s@%s:%d/%s', user, host, port, name)
    db = mysql.connector.connect(user=user, password=password, host=host, port=port, database=name,
                                 raise_on_warnings=True)
    cur = db.cursor()
    cur.execute('SELECT VERSION(), CURRENT_TIMESTAMP')
    row = cur.fetchone()
    if row:
        logging.debug("version=%s, timestamp=%s", row[0], row[1])
    cur.close()

    db.close()


def fetch_postgresql(client, host, port, user, password, name):
    logging.info('fetch postgresql://%s@%s:%d/%s', user, host, port, name)
    url = 'host=%s port=%d user=%s password=%s dbname=%s sslmode=disable' % (
        host, port, user, password, name)
    with psycopg2.connect(url) as db:
        with db.cursor() as cur:
            cur.execute('SELECT VERSION(), CURRENT_TIMESTAMP')
            row = cur.fetchone()
            if row:
                logging.debug("version=%s, timestamp=%s", row[0], row[1])


def fetch_http_api(client, url):
    logging.info('fetch %s', url)
    with urllib.request.urlopen(url) as fd:
        body = fd.read().decode()
        logging.debug('found (%d) bytes: %s', len(body), body)


def fetch_redis_cluster(client, host, port):
    logging.info('fetch redis://%s:%d', host, port)
    db = RedisCluster(host=host, port=port)
    nodes = list(map(lambda x: '%s:%d(%s)' %
                 (x.host, x.port, x.server_type), db.get_nodes()))
    logging.debug('found %d nodes: %s', len(nodes), ','.join(nodes))


def fetch_redis_single(client, host, port):
    logging.info('fetch redis://%s:%d', host, port)
    db = Redis(host=host, port=port)
    info = db.info()
    logging.debug('%s', str(info)[0:128])


def fetch_rabbitmq(client, host, port, user, password, virtual_host):
    logging.info('fetch rabbitmq://%s@%s:%d:/%s',
                 user, host, port, virtual_host)
    args = pika.ConnectionParameters(
        host, port, virtual_host, pika.PlainCredentials(user, password))
    with pika.BlockingConnection(args) as con:
        con.channel()


def fetch_minio(client, endpoint, access_key, secret_key, secure):
    logging.info('fetch minio %s://%s',
                 ('https' if secure else 'http'), endpoint)
    con = Minio(endpoint, access_key=access_key,
                secret_key=secret_key, secure=secure)
    buckets = list(map(lambda x: x.name, con.list_buckets()))
    logging.debug('find (%d) buckets: %s', len(buckets), ','.join(buckets))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        prog=NAME,
        description='A monitor agent',
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
    logging.basicConfig(level=(logging.DEBUG if args.debug else logging.INFO))
    if args.debug:
        logging.debug('run on debug mode with %s', args)

    if is_stopped():
        logging.error('.stop file existed, quit...')
        sys.exit(1)

    logging.info('load configuration from %s', args.config.name)
    config = tomllib.load(args.config)
    search_client = OpenSearchClient(config['opensearch'])

    if not search_client.index_exists(OPENSEARCH_INDEX_NAME):
        search_client.create_index(OPENSEARCH_INDEX_NAME, 8)

    try:
        while True:
            if 'snmp' in config:
                for it in config['snmp']:
                    fetch_snmp(search_client, it['host'], it['port'])

            if 'http-api' in config:
                for it in config['http-api']:
                    fetch_http_api(search_client, it)

            if 'postgresql' in config:
                for it in config['postgresql']:
                    fetch_postgresql(
                        search_client, it['host'], it['port'], it['user'], it['password'], it['name'])

            if 'mysql' in config:
                for it in config['mysql']:
                    fetch_mysql(
                        search_client, it['host'], it['port'], it['user'], it['password'], it['name'])

            if 'redis' in config:
                for it in config['redis']:
                    if it['cluster-mode']:
                        fetch_redis_cluster(
                            search_client, it['host'], it['port'])
                    else:
                        fetch_redis_single(
                            search_client, it['host'], it['port'])

            if 'rabbitmq' in config:
                for it in config['rabbitmq']:
                    fetch_rabbitmq(
                        search_client, it['host'], it['port'], it['user'], it['password'], it['virtual-host'])

            if 'minio' in config:
                for it in config['minio']:
                    fetch_minio(
                        search_client,  it['endpoint'], it['access-key'], it['secret-key'], it['secure'])

            sleep(config['interval'])
    except KeyboardInterrupt:
        logging.warning('exiting....')
