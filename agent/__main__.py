import logging

from palm import backup

logging.basicConfig(format='%(asctime)s[%(levelname)s]: %(message)s',
                    encoding='utf-8', level=logging.DEBUG)
logging.info("running palm agent...")

logging.info("done.")
