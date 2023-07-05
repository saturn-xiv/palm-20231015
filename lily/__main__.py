import logging
import argparse
import sys
import tomllib

from palm import VERSION, excel, postgresql_url

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
    parser.add_argument('--load-excel',
                        type=argparse.FileType(mode='rb'),
                        help='load excel file into database')
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
    logging.info('start queue listener')
