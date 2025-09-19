// middlewares/error.middleware.js
const ApiError = require('../utils/ApiError')
const { errorLogger } = require('./logging.middleware')

function isDbNetworkError (err) {
  if (!err) return false
  const name = (err.name || '').toLowerCase()
  const message = (err.message || '').toLowerCase()
  // Common mongo/mongoose/network error identifiers
  const dbIndicators = ['networkerror', 'mongonetworkerror', 'mongoclienttimeouterror', 'mongoclientconnected', 'mongos', 'serverselectionerror', 'connection', 'econnrefused', 'etimedout', 'timed out']
  if (dbIndicators.some(i => name.includes(i) || message.includes(i))) return true
  return false
}

function buildErrorResponse ({ statusCode, message, errorArray, isOperational }) {
  return {
    data: null,
    message: message || 'Internal Server Error',
    error: errorArray || [{ errorCode: 'ERR_INTERNAL', errorMessage: message || 'Internal Server Error' }],
    status: statusCode || 500,
    success: false,
    isOperational: !!isOperational
  }
}

function errorMiddleware (err, req, res, next) {
  // Attach correlation id if present
  const correlationId = req.headers['x-request-id'] || req.headers['x-correlation-id'] || null

  // Log structured error with request context for observability
  try {
    const logPayload = {
      time: new Date().toISOString(),
      correlationId,
      path: req.originalUrl,
      method: req.method,
      status: err.statusCode || 500,
      message: err.message,
      stack: err.stack
    }
    errorLogger(logPayload, req, res, () => {})
  } catch (logErr) {
    console.error('Failed to write structured error log', logErr)
  }

  // If ApiError, preserve information (and parse Joi style arrays if present)
  if (err instanceof ApiError) {
    let errorArray = []
    try {
      errorArray = JSON.parse(err.message)
      if (!Array.isArray(errorArray)) throw new Error('Not an array')
    } catch {
      errorArray = [{ errorCode: err.errorCode || 'ERR_API', errorMessage: err.message || 'Invalid request' }]
    }

    const resp = buildErrorResponse({ statusCode: err.statusCode || 400, message: err.message, errorArray, isOperational: err.isOperational })
    if (correlationId) resp.correlationId = correlationId
    return res.status(resp.status).json(resp)
  }

  // DB / Network specific handling -> 503 Service Unavailable
  if (isDbNetworkError(err)) {
    const apiErr = new ApiError(503, 'ERR_DB_UNAVAILABLE', 'Database or network error', false)
    const resp = buildErrorResponse({ statusCode: apiErr.statusCode, message: apiErr.message, errorArray: [{ errorCode: apiErr.errorCode, errorMessage: apiErr.message }], isOperational: apiErr.isOperational })
    if (correlationId) resp.correlationId = correlationId
    return res.status(resp.status).json(resp)
  }

  // Unknown/unexpected error -> 500 internal server error (do not leak stack in production)
  const internalErr = new ApiError(500, 'ERR_INTERNAL', process.env.NODE_ENV !== 'production' ? (err.message || 'Internal Server Error') : 'Internal Server Error', false)
  const resp = buildErrorResponse({ statusCode: internalErr.statusCode, message: internalErr.message, errorArray: [{ errorCode: internalErr.errorCode, errorMessage: internalErr.message }], isOperational: internalErr.isOperational })
  if (correlationId) resp.correlationId = correlationId
  return res.status(resp.status).json(resp)
}

module.exports = errorMiddleware
