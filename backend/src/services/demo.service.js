// const ApiError = require('../utils/ApiError')
const ServiceBase = require('../utils/ServiceBase')

class DemoService extends ServiceBase {
  static async demoTest () {
    return super.execute(async () => {
      // if (1) {
      //   // Throwing here will be caught and handled by ServiceBase
      //   throw new ApiError(400, 'ERR_BAD_REQUEST', 'User ID is required')
      // }

      return {
        id: 1,
        message: 'DemoService: Everything is working fine with routing setup'
      }
    }, { withTransaction: false }) // 👈 no transaction needed here
  }
}

module.exports = DemoService
