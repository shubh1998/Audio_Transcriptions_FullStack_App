import { LOADER_HANDLER_TYPES, METHOD_TYPES } from 'constants/index'
import axiosInstanceService from 'network/apis/index'
import { microServices } from 'network/apis/microservice/index'
import successMessages from 'network/messages/successMessages'

export const createTranscriptionService = (data) => {
  return axiosInstanceService(METHOD_TYPES.post, '/audio-transcription/create', data, {
    server: microServices.SERVICE_URL_1,
    handlerEnabled: false,
    loader: LOADER_HANDLER_TYPES.submit,
    successMessage: successMessages.audioTranscriptionCreatedSuccessfully
  })
}

export const allAudioTranscriptionsListService = (data) => {
  const { limit, page } = data
  return axiosInstanceService(METHOD_TYPES.get, '/audio-transcription/list', {}, {
    server: microServices.SERVICE_URL_1,
    handlerEnabled: false,
    loader: LOADER_HANDLER_TYPES.table,
    params: { limit, page },
    successMessage: successMessages.transcriptionsFetchedSuccessfully
  })
}
