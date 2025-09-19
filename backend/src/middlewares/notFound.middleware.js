// middlewares/notFound.middleware.js
const ApiError = require('../utils/ApiError')

function notFoundMiddleware (req, res, next) {
  // Mark as non-operational error
  next(
    new ApiError(
      404,
      'ERR_NOT_FOUND',
      `Route ${req.originalUrl} not found`,
      false
    )
  )
}

module.exports = notFoundMiddleware
