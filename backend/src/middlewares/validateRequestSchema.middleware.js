// middlewares/validateRequestSchema.middleware.js
const ApiError = require('../utils/ApiError')

const validateRequestSchema = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false })

    if (error) {
      const errors = error.details.map((err) => ({
        errorCode: 'ERR_VALIDATION_FAILED',
        errorMessage: err.message
      }))

      return next(
        new ApiError(
          400,
          'ERR_VALIDATION_FAILED',
          JSON.stringify(errors), // pass all errors
          true
        )
      )
    }

    next()
  }
}

module.exports = validateRequestSchema
