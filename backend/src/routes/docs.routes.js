const express = require('express')
const router = express.Router()
const swaggerUi = require('swagger-ui-express')
const path = require('path')
const swaggerDocument = require(path.join(__dirname, '../docs/swagger.json'))

// mount at /api-docs
router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = router
