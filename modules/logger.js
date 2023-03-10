const logger = require("pino")({
  level: process.env.LOG_LEVEL || "info",
})
const expressLogger = require("express-pino-logger")({
  logger: logger,
})

module.exports = { logger, expressLogger }
