import { createSlice } from '@reduxjs/toolkit'

const defaultTranscriptionSliceState = {
  allTranscriptions: [],
  allTranscriptionsPaginatedDataInfo: {
    page: 0,
    limit: 0,
    totalRecords: 0,
    totalPages: 0
  }
}

const transcriptionSlice = createSlice({
  name: 'transcriptionSlice',
  initialState: defaultTranscriptionSliceState,
  reducers: {
    setAllTranscriptionsData: (state, action) => {
      return {
        ...state,
        allTranscriptions: action.payload.transcriptions,
        allTranscriptionsPaginatedDataInfo: action.payload.pagination
      }
    }
  }
})

export const {
  setAllTranscriptionsData
} = transcriptionSlice.actions

export default transcriptionSlice.reducer
