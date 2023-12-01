"use strict";

import { Logger } from "tslog";

const logger = new Logger({
  name: "morus",
  type: "pretty",
  hideLogPositionForProduction: true,
});

export default logger;
