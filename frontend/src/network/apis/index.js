import { METHOD_TYPES } from 'constants/index'
import { clients, microServices } from './microservice/index'

const axiosInstanceService = (method, uri, data = {}, configs = {}) => {
  const {
    showApiSuccessMessage = false,
    successMessage = null,
    server = microServices.SERVICE_URL_1,
    headers = {},
    params = {},
    responseType = 'json',
    handlerEnabled = false, // Check: Interceptors required or not
    loader //= LOADER_HANDLER_TYPES.page
  } = configs

  const axiosConfig = {
    headers,
    params,
    handlerEnabled,
    loader,
    showApiSuccessMessage
  }

  if (responseType) {
    axiosConfig.responseType = responseType
  }

  if (successMessage) {
    axiosConfig.successMessage = successMessage
  }

  return clients[server][method](
    uri,
    method === METHOD_TYPES.get || method === METHOD_TYPES.delete ? axiosConfig : data,
    axiosConfig
  )
}

export default axiosInstanceService
