const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const { logError } = require('../utils/logger')

// Create log file stream
const logStream = fs.createWriteStream(
  path.join(__dirname, '../../logs/access.log'),
  { flags: 'a' }
)

// HTTP request logger
const httpLogger = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream: logStream }
)

// Error logger with stacktrace
const errorLogger = (err, req, res, next) => {
  logError(err, {
    method: req.method,
    url: req.originalUrl,
    status: err.statusCode || 500
  })

  next(err) // pass to next middleware
}

module.exports = { httpLogger, errorLogger }
