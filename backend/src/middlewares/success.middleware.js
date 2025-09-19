// middlewares/success.middleware.js
function successMiddleware (req, res, next) {
  res.success = (statusCode = 200, data, message = 'OK') => {
    return res.status(statusCode).json({
      data: data || null, // always return as array
      message,
      error: [],
      status: statusCode,
      success: true,
      isOperational: true
    })
  }
  next()
}

module.exports = successMiddleware
