// utils/ApiError.js
const BaseError = require('./BaseError')

class ApiError extends BaseError {
  constructor (statusCode, errorCode, description, isOperational = true) {
    super('ApiError', statusCode, errorCode, description, isOperational)
  }
}

module.exports = ApiError
