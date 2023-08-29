import logging
import argparse
import sys
import tomllib


from wireguard import VERSION, generate as generate_config

NAME = 'wireguard'

if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        prog=NAME,
        description='WireGuard configuration tools',
        epilog='https://github.com/saturn-xiv/palm')
    parser.add_argument('-c', '--config',
                        type=argparse.FileType(mode='rb'),
                        default='config.toml',
                        help='load configuration(toml)')
    parser.add_argument('-d', '--debug',
                        action='store_true',
                        help='run on debug mode')
    parser.add_argument('--target',
                        type=argparse.FileType(mode='rb'),
                        default='tmp',
                        help='target folder')
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
    db_url = postgresql_url(config['postgresql'])
    if args.load_excel:
        excel.file_to_pg(args.load_excel, db_url)
        sys.exit(0)
    queue_params = rabbitmq_parameters(config['rabbitmq'])
    with pika.BlockingConnection(queue_params) as queue:
        queue_name = '%s.excel.parser' % NAME
        logging.info('start queue consumer(%s)', queue_name)
        channel = queue.channel()
        channel.queue_declare(queue=queue_name, exclusive=True,
                              durable=True, auto_delete=False)
        channel.basic_consume(queue=queue_name,
                              auto_ack=True,
                              on_message_callback=excel.queue_message_callback)
        logging.info('[*] waiting for messages. to exit press CTRL+C')
        channel.start_consuming()
