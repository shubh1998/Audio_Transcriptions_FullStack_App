const APP_CONFIGS = {
  PORT: process.env.NODE_PORT,
  DB: {
    URL: process.env.NODE_MONGO_DB_URL
  }
}

module.exports = APP_CONFIGS
