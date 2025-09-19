const DemoController = require('../controllers/demo.controller')

const demoRoutes = require('express').Router()

demoRoutes.get('/demo', DemoController.fetchDemoService)

module.exports = demoRoutes
