const { logger } = require("./logger")
const client = require("prom-client")

const rootHandler = function (req, res) {
  logger.debug("rootHandler called")
  let body = [
    {
      path: "/",
      methods: {
        get: true,
      },
    },
    {
      path: "/ping",
      methods: {
        get: true,
      },
    },
  ]
  res.send(body)
}

const pingHandler = function (req, res) {
  logger.debug("pingHandler called")
  let body = "pong"
  res.send(body)
}

module.exports = { rootHandler, pingHandler }
