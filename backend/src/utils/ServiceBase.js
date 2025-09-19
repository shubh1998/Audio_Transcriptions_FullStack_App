const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const ApiError = require('../utils/ApiError')

// Create log file stream (service-level logs)
const logStream = fs.createWriteStream(
  path.join(__dirname, '../../logs/service.log'),
  { flags: 'a' }
)

class ServiceBase {
  /**
   * Execute a service function with optional transaction support
   * @param {Function} serviceFn - async function containing business logic
   * @param {Object} options - { withTransaction: boolean }
   * @param  {...any} args - arguments passed to serviceFn
   */
  static async execute (serviceFn, { withTransaction = false } = {}, ...args) {
    let session = null
    const className = this.name || 'ServiceBase'

    try {
      this.log(`${className} Service started`, { withTransaction })

      if (withTransaction) {
        session = await mongoose.startSession()
        session.startTransaction()
      }

      // Call service function with session + args
      const result = await serviceFn(session, ...args)

      if (withTransaction) {
        await session.commitTransaction()
      }

      this.log(`${className} Service completed successfully`)
      return result
    } catch (error) {
      this.log(`${className} Service failed`, { error: error.message })

      if (withTransaction && session) {
        await session.abortTransaction()
      }

      if (error instanceof ApiError) {
        throw error
      }

      throw new ApiError(
        500,
        'ERR_INTERNAL',
        error.message || 'Internal Service Error',
        false
      )
    } finally {
      if (withTransaction && session) {
        session.endSession()
      }
      this.log(`${className} Session closed`)
    }
  }

  /**
   * Service-level logger (writes to service.log and console)
   */
  static log (message, meta = {}) {
    const className = this.name || 'ServiceBase'
    const logMessage = `[${new Date().toISOString()}] [ServiceBase - ${className}]: ${message} ${JSON.stringify(meta)}\n`
    logStream.write(logMessage)
    console.log(logMessage)
  }
}

module.exports = ServiceBase
