const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const APP_CONFIGS = require('../config/app.config')

const logStream = fs.createWriteStream(
  path.join(__dirname, '../../logs/db.log'),
  { flags: 'a' }
)

async function connectDB () {
  try {
    await mongoose.connect(APP_CONFIGS.DB.URL)
    const msg = `[${new Date().toISOString()}] ✅ DB Connected Successfully!\n`
    console.log(msg)
    logStream.write(msg)
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
    const errorLog = `
      ---- DB CONNECTION FAILED ERROR ----
      Time: ${new Date().toISOString()}
      Message: ${error.message}
      Stack: ${error.stack}
      -----------------------------
    `
    console.error('<====== DB CONNECTION FAILED ERROR ======>', errorLog)
    logStream.write(errorLog + '\n')
    process.exit(1) // Exit process with failure
  }
}

// Graceful close function
async function closeDB () {
  try {
    await mongoose.connection.close(false) // false = don’t force close active operations
    const msg = `[${new Date().toISOString()}] 🔌 DB Connection closed gracefully!\n`
    console.log(msg)
    logStream.write(msg)
  } catch (error) {
    const errorLog = `
      ---- DB CLOSE ERROR ----
      Time: ${new Date().toISOString()}
      Message: ${error.message}
      Stack: ${error.stack}
      -----------------------------
    `
    console.error('<====== DB CLOSE ERROR ======>', errorLog)
    logStream.write(errorLog + '\n')
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected!')
})

mongoose.connection.on('error', (err) => {
  const errorLog = `
    ---- DB ON CONNECTION ERROR ----
    Time: ${new Date().toISOString()}
    Message: ${err.message}
    Stack: ${err.stack}
    -----------------------------
    `
  console.error('<====== DB ON CONNECTION ERROR ======>', errorLog)
  logStream.write(errorLog + '\n')
  console.error('MongoDB connection error after initial connection:', err)
})

module.exports = { connectDB, closeDB }
