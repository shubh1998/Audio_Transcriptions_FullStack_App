const mongoose = require('mongoose')

const transcriptionSchema = new mongoose.Schema({
  audioUrl: { type: String, required: true },
  transcription: { type: String }
}, {
  timestamps: true
})

module.exports = mongoose.model('Transcription', transcriptionSchema)
