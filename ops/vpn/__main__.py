import logging
import argparse
import sys


from wireguard import VERSION, load as load_config

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
    parser.add_argument('-t', '--target',
                        type=str,
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

    config = load_config(args.config.name)
    config.write(args.target)
