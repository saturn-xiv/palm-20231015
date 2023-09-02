"use strict";

import {Config} from './env';
import logger from './logger';

function main() {
    const args = process.argv;
    if(args.length !== 3){
        logger.error(`USAGE: node ${args[1]} CONFIG_FILE`);
        return;
    }    
    const config = new Config("config.json");
    logger.info(`start gRPC server on http://0.0.0.0:${config.port}`);
}

main();
