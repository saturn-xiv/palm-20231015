import logging
import threading
import json
import uuid

from time import sleep
from concurrent import futures
from datetime import timedelta
from datetime import datetime


import psycopg
import pika
import grpc
from redis.cluster import RedisCluster
from grpc_health.v1 import health_pb2, health, health_pb2_grpc
from minio import Minio
from minio.versioningconfig import VersioningConfig as MinioVersioningConfig
from minio.commonconfig import ENABLED as MinioEnabled, Tags as MinioTags


from . import lily_pb2_grpc, excel, tex


VERSION = '2023.10.6'


class RedisClient:
    def __init__(self, config):
        self.namespace = config['namespace']
        self.connection = RedisCluster(
            host=config['host'], port=config['port'])
        logging.info('connect redis cluster nodes with namespace(%s) in %s', self.namespace, list(
            map(lambda x: '%s:%d(%s)' % (x.host, x.port, x.server_type), self.connection.get_nodes())))

    def set(self, key, val, ttl=0):
        self.connection.setex(self._key(key), timedelta(seconds=ttl), val)

    def get(self, key):
        return self.connection.get(self._key(key))

    def _key(self, k):
        return '%s://%s' % (self.namespace, k)


class MinioClient:
    def __init__(self, config):
        logging.debug("connect to minio %s", config['endpoint'])
        self.connection = Minio(
            config['endpoint'],
            access_key=config['access-key'],
            secret_key=config['secret-key'],
            secure=config['secure'])
        logging.debug('found buckets: %s', self.list_buckets())

    def put_object(self, bucket, name, data, length, content_type):
        logging.debug("try to upload(%s, %s, %s) with %d bytes",
                      bucket, name, content_type, length)
        result = self.connection.put_object(
            bucket, name, data, length, content_type=content_type)
        logging.info("uploaded %s, etag: %s, version-id: %s",
                     result.object_name, result.etag, result.version_id)

    def get_object_url(self, bucket, name, ttl=60*60*24*7):
        return self.connection.presigned_get_object(bucket, name, expires=timedelta(seconds=ttl))

    def set_object_tags(self, bucket, name, tags):
        tmp = MinioTags.new_object_tags()
        for k, v in tags:
            tmp[k] = v
        self.connection.set_object_tags(bucket, name, tmp)

    def bucket_exists(self, bucket, published=False):
        ok = self.connection.bucket_exists(bucket)
        if not ok:
            logging.warning("bucket %s isn't existed, try to create it")
            self.connection.make_bucket(bucket)
            self.connection.set_bucket_versioning(
                bucket, MinioVersioningConfig(MinioEnabled))

        if published:
            policy = {
                "Version": "2023-10-06",
                "Statement": [
                    {
                        "Effect": "Allow",
                        "Principal": {"AWS": "*"},
                        "Action": [
                            "s3:GetObject"
                        ],
                        "Resource": "arn:aws:s3:::%s/*" % bucket,
                    },
                ],
            }
            self.connection.set_bucket_policy(bucket, json.dumps(policy))

    def list_buckets(self):
        return list(map(lambda x: x.name, self.connection.list_buckets()))

    def current_bucket(published):
        return datetime.now().strftime("%Y%m") + ('O' if published else 'P')

    def random_filename(ext=''):
        return str(uuid.uuid4())+ext


class RpcServer:
    def __init__(self, config, s3, cache, queue):
        self.addr = '0.0.0.0:%d' % (config['port'])
        self.max_workers = config['max-workers']
        self.s3 = s3
        self.cache = cache
        self.queue = queue

    def start(self):
        server = grpc.server(futures.ThreadPoolExecutor(
            max_workers=self.max_workers))
        lily_pb2_grpc.add_ExcelServicer_to_server(excel.Service(), server)
        lily_pb2_grpc.add_TexServicer_to_server(
            tex.Service(self.s3, self.cache, self.queue), server)
        RpcServer._rpc_setup_health_thread(server)
        server.add_insecure_port(self.addr)
        server.start()
        logging.info(
            "Lily gRPC server started, listening on %s with %d threads", self.addr, self.max_workers)
        try:
            server.wait_for_termination()
        except KeyboardInterrupt:
            logging.warn('exited...')
            server.stop(0)

    def _rpc_health_checker(servicer, name):
        while True:
            servicer.set(name, health_pb2.HealthCheckResponse.SERVING)
            sleep(5)

    def _rpc_setup_health_thread(server):
        servicer = health.HealthServicer(
            experimental_non_blocking=True,
            experimental_thread_pool=futures.ThreadPoolExecutor(max_workers=2)
        )
        health_pb2_grpc.add_HealthServicer_to_server(servicer, server)
        health_checker_thread = threading.Thread(
            target=RpcServer._rpc_health_checker,
            args=(servicer, 'palm.lily'),
            daemon=True
        )
        health_checker_thread.start()

# -----------------------------------------------------------------------------


# https://pika.readthedocs.io/en/stable/modules/parameters.html
class RabbitMqClient:
    def __init__(self, config):
        credentials = pika.PlainCredentials(config['user'], config['password'])
        self.parameters = pika.ConnectionParameters(
            config['host'],
            config['port'],
            config['virtual-host'],
            credentials)

    def produce(self, queue, id, message):
        logging.info("publish message(%s) to (%s) with %d bytes",
                     id, queue, len(message))
        with pika.BlockingConnection(self.parameters) as con:
            ch = con.channel()
            ch.queue_declare(queue=queue, durable=True)
            ch.basic_publish(exchange='', routing_key=queue,
                             body=message, properties=pika.BasicProperties(message_id=id, delivery_mode=pika.spec.PERSISTENT_DELIVERY_MODE))

    def start_consuming(self, queue, callback):
        logging.info("start consumer for %s", queue)
        with pika.BlockingConnection(self.parameters) as con:
            ch = con.channel()
            ch.queue_declare(queue=queue, durable=True)
            ch.basic_qos(prefetch_count=1)
            ch.basic_consume(queue=queue, on_message_callback=callback)
            ch.start_consuming()

# https://www.postgresql.org/docs/current/libpq-connect.html


def postgresql_url(config):
    logging.debug('open postgresql://%s@%s:%d/%s',
                  config['user'], config['host'], config['port'], config['name'])
    url = 'host=%s port=%d user=%s password=%s dbname=%s sslmode=disable' % (
        config['host'], config['port'], config['user'], config['password'], config['name'])
    with psycopg.connect(url) as db:
        cur = db.cursor()
        cur.execute('SELECT VERSION(), CURRENT_TIMESTAMP')
        row = cur.fetchone()
        if row:
            logging.debug("%s %s", row[0], row[1])
    return url
