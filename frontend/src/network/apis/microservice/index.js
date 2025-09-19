import axios from 'axios'
import config from 'config/app.config'
import requestInterceptor from 'network/interceptors/request.interceptor'
import responseInterceptor from 'network/interceptors/response.interceptor'

const clients = {}
const microServices = {}

// Add Multiple end-points here
const microServicesURLs = {
  SERVICE_URL_1: `${config.apiGateways.BASE_URL_1}`
}

// Create Axios Client
const axiosClient = (baseUrl, config) => axios.create({
  baseURL: baseUrl,
  ...config
})

// Looping all baseUrls to create axios instance
for (const key in microServicesURLs) {
  const axiosInstance = axiosClient(microServicesURLs[key], {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  microServices[key] = key
  clients[key] = axiosInstance

  // Handle request process
  requestInterceptor(axiosInstance)

  // Handle response process
  responseInterceptor(axiosInstance)
}

export {
  clients,
  microServices
}
