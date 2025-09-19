import { errorHandler } from './handlers/error.handler'
import { requestHandler } from './handlers/request.handler'

const requestInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
  )
}

export default requestInterceptor
