// utils/BaseError.js
class BaseError extends Error {
  constructor (name, statusCode, errorCode, description, isOperational = true) {
    super(description)

    Object.setPrototypeOf(this, new.target.prototype)

    this.name = name
    this.statusCode = statusCode
    this.errorCode = errorCode // custom error code
    this.isOperational = isOperational

    Error.captureStackTrace(this)
  }
}

module.exports = BaseError
