import { combineReducers } from '@reduxjs/toolkit'
import transcription from './slices/transcriptions.slice'
import loader from './slices/loader.slice'

const rootReducer = combineReducers({
  transcription,
  loader
})

export default rootReducer
