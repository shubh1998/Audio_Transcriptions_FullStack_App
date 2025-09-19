const fs = require('fs')
const path = require('path')

const logFilePath = path.join(__dirname, '../../logs/error.log')
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' })

function logError (error, extra = {}) {
  const logMessage = `
  ---- ERROR LOG ----
  Time: ${new Date().toISOString()}
  ${extra.method ? `Method: ${extra.method}` : ''}
  ${extra.url ? `URL: ${extra.url}` : ''}
  ${extra.status ? `Status: ${extra.status}` : ''}
  Message: ${error.message || error}
  Stack: ${error.stack || 'N/A'}
  -------------------
  `

  logStream.write(logMessage + '\n')
  console.error(logMessage)
}

module.exports = { logError }
