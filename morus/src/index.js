"use strict";

import { Server, ServerCredentials } from "@grpc/grpc-js";
import { readFileSync } from "fs";
import { HealthImplementation, ServingStatusMap } from "grpc-health-check";

import { Config } from "./env";
import logger from "./logger";
import { MarkdownService } from "./protocols/morus_grpc_pb";
import { to_html } from "./services/markdown";

function main() {
  const args = process.argv;
  if (args.length !== 3) {
    logger.error(`USAGE: node ${args[1]} CONFIG_FILE`);
    return;
  }
  const config = new Config("config.json");

  logger.info(
    `load ca(${config.ca_file}) key(${config.key_file}) cert from(${config.cert_file})`
  );

  const credentials = ServerCredentials.createSsl(
    readFileSync(config.ca_file),
    [
      {
        private_key: readFileSync(config.key_file),
        cert_chain: readFileSync(config.cert_file),
      },
    ],
    true
  );

  const statusMap = {
    "": "SERVING",
  };
  const healthImpl = new HealthImplementation(statusMap);

  logger.info(`start gRPC server on tcps://0.0.0.0:${config.port}`);
  var server = new Server();
  server.addService(MarkdownService, { toHtml: to_html });
  healthImpl.addToServer(server);
  server.bindAsync(`0.0.0.0:${config.port}`, credentials, () => {
    server.start();
  });
}

main();
