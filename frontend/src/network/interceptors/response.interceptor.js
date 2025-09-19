import { errorHandler } from './handlers/error.handler'
import { responseSuccessHandler } from './handlers/response.handler'

const responseInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => responseSuccessHandler(response),
    (error) => errorHandler(error)
  )
}

export default responseInterceptor
