import store from 'index'
import { openErrorToaster } from 'helpers/toaster.helpers'
import errorMessages from 'network/messages/errorMessages'
import { stopLoader } from 'redux-thunk/redux/slices/loader.slice'

export const errorHandler = (error) => {
  if (error.response.status === 500) {
    // Snackbar Internal Server Error
    openErrorToaster({ message: errorMessages.internalServerError })
    store.dispatch(stopLoader(error.response.config.loader))
    return Promise.reject(error.response.data.error)
  } else if (error.response.status === 401) {
    // Snackbar UnAuthenticated
    openErrorToaster({ message: errorMessages.unAuthorized })
    store.dispatch(stopLoader(error.response.config.loader))
    return Promise.reject(error.response.data.error)
  } else if (error.response.config?.loader) {
    // Other error
    store.dispatch(stopLoader(error.response.config.loader))
  }
  // Open Error Toaster
  const errorMessage = error.response.data.error[0].errorMessage
  openErrorToaster({ message: errorMessage })
  return Promise.reject(error.response.data.error)
}
