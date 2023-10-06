import logging
import argparse
import sys
import tomllib


from palm import VERSION, RpcServer, RedisClient, MinioClient

NAME = 'lily'

if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        prog=NAME,
        description='Background worker for palm',
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
    logging.info('load configuration from %s', args.config.name)

    config = tomllib.load(args.config)
    redis_client = RedisClient(config['redis'])
    minio_client = MinioClient(config['minio'])
    rpc_server = RpcServer(config['rpc'], minio_client, redis_client)
    rpc_server.start()
