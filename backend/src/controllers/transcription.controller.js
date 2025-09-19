const TranscriptionService = require('../services/transcription.service')
const catchAsync = require('../utils/catchAsync')

class TranscriptionController {
  static createTranscription = catchAsync(async (req, res) => {
    const transcription = await TranscriptionService.createTranscription(req.body)
    return res.success(201, transcription, 'Audio transcription created successfully')
  })

  static listTranscriptions = catchAsync(async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const list = await TranscriptionService.getAudioTranscriptions({ page, limit })
    return res.success(200, list, 'Audio transcription fetched successfully')
  })
}

module.exports = TranscriptionController
