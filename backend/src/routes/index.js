const demoRoutes = require('./demo.routes')
const transcriptionRoutes = require('./transcription.routes')
const docsRoutes = require('./docs.routes')

const apiRoutes = [
  demoRoutes,
  transcriptionRoutes,
  docsRoutes
]

module.exports = apiRoutes
