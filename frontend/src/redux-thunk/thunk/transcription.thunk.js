import { createAsyncThunk } from '@reduxjs/toolkit'
import { ROUTE_PATHS } from 'constants/index'
import { allAudioTranscriptionsListService, createTranscriptionService } from 'network/services/transcriptions.service'
import { setAllTranscriptionsData } from 'redux-thunk/redux/slices/transcriptions.slice'

export const createTranscriptionThunk = createAsyncThunk('transcription/create', async ({ payload, history, resetForm }, thunkApi) => {
  try {
    const res = await createTranscriptionService(payload)
    if (res) {
      resetForm && resetForm()
    }
    return res
  } catch (error) {
    history.push(ROUTE_PATHS.HOME, { replace: true })
    return thunkApi.rejectWithValue(error[0].description)
  }
})

export const fetchAllTranscriptionsThunk = createAsyncThunk('transcription/list', async ({ payload }, thunkApi) => {
  try {
    const res = await allAudioTranscriptionsListService(payload)
    if (res) {
      thunkApi.dispatch(setAllTranscriptionsData(res))
    }
    return res
  } catch (error) {
    return thunkApi.rejectWithValue(error[0].description)
  }
})
