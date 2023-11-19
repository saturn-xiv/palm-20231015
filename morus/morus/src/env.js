"use strict";

import { readFileSync } from "fs";

export class Config {
  constructor(file) {
    const raw = readFileSync(file);
    const it = JSON.parse(raw);
    this.port = it.port;
    this.ca_file = it["ca-file"];
    this.key_file = it["key-file"];
    this.cert_file = it["cert-file"];
  }
}
