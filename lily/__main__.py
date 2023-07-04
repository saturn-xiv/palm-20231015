import logging
import argparse
import sys

from palm import VERSION

NAME = 'lily'

if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        prog=NAME,
        description='Background worker for palm',
        epilog='https://github.com/saturn-xiv/palm')
    parser.add_argument('-c', '--config',
                        type=open,
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
        logging.debug('run on debug mode')
    logging.info('load configuration from %s', args.config.name)
