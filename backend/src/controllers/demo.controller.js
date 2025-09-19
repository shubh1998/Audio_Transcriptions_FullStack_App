const DemoService = require('../services/demo.service')
const catchAsync = require('../utils/catchAsync')

class DemoController {
  static fetchDemoService = catchAsync(async (req, res, next) => {
    const result = await DemoService.demoTest()
    return res.success(200, result, 'Demo service called successfully !')
  })
}

module.exports = DemoController
