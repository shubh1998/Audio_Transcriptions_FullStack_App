const Joi = require('joi')

const createTranscriptionSchema = Joi.object({
  audioUrl: Joi.string().uri().required()
})

module.exports = {
  createTranscriptionSchema
}
