require('dotenv').config()
const cors = require('cors')
const express = require('express')
const { connectDB, closeDB } = require('./db/db.config.js')
const { PORT } = require('./config/app.config.js')
const errorMiddleware = require('./middlewares/error.middleware.js')
const successMiddleware = require('./middlewares/success.middleware.js')
const notFoundMiddleware = require('./middlewares/notFound.middleware.js')
const { httpLogger, errorLogger } = require('./middlewares/logging.middleware.js')
const { logError } = require('./utils/logger.js')
const apiRoutes = require('./routes/index')

connectDB()

const app = express()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(
    cors({
      origin: (origin, callback) => {
        callback(null, origin || '*')
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    })
  )
  .use(httpLogger)
  .use(successMiddleware)

app.use('/api/v1', apiRoutes)

app.get('/health-check', (req, res) => {
  return res.success(200, null, 'Hello Dev, Api and server health is good and everything is working fine.')
})

app.use(notFoundMiddleware)
app.use(errorMiddleware)
app.use(errorLogger)

const server = app.listen(PORT, () => {
  console.log('Server starts listening on port : ' + PORT)
})

const shutdown = async (code = 0) => {
  console.log('🛑 Shutting down gracefully...')

  await closeDB()

  server.close(() => {
    console.log('✅ HTTP server closed')
    process.exit(code)
  })

  setTimeout(() => {
    console.error('⚠️ Force exiting after timeout')
    process.exit(code)
  }, 5000)
}

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
  logError(reason, { status: 500 })
  shutdown(1)
})

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err)
  logError(err, { status: 500 })
  shutdown(1)
})

process.on('SIGINT', () => shutdown(0))
process.on('SIGTERM', () => shutdown(0))
