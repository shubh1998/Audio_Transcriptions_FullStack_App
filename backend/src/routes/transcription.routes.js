// src/routes/transcription.routes.js
const TranscriptionController = require('../controllers/transcription.controller')
const validateRequestSchema = require('../middlewares/validateRequestSchema.middleware')
const transcriptionRoutes = require('express').Router()
const { createTranscriptionSchema } = require('../validators/transcriptionValidators')

transcriptionRoutes.post(
  '/audio-transcription/create',
  validateRequestSchema(createTranscriptionSchema),
  TranscriptionController.createTranscription
)

transcriptionRoutes.get('/audio-transcription/list', TranscriptionController.listTranscriptions)

module.exports = transcriptionRoutes
