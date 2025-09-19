const ServiceBase = require('../utils/ServiceBase')
const Transcription = require('../models/transcription.model')

class TranscriptionService extends ServiceBase {
  static async createTranscription (body) {
    return super.execute(async () => {
      const { audioUrl } = body
      // Mocking up the download step
      console.log(`Pretending to download audio from: ${audioUrl}`)

      // Mocking up the transcription step with dummy text
      const dummyTranscription = 'transcribedtext'

      const record = await Transcription.create({
        audioUrl,
        transcription: dummyTranscription
      })

      // 4. Return inserted record ID
      return { id: record._id }
    }, { withTransaction: false })
  }

  static async getAudioTranscriptions ({ page = 1, limit = 10 } = {}) {
    return super.execute(async () => {
      const skip = (page - 1) * limit

      const totalRecords = await Transcription.countDocuments()

      const transcriptions = await Transcription.find().skip(skip).limit(limit)

      const totalPages = Math.ceil(totalRecords / limit)

      return {
        transcriptions,
        pagination: {
          page,
          limit,
          totalRecords,
          totalPages
        }
      }
    }, { withTransaction: false })
  }
}

module.exports = TranscriptionService
