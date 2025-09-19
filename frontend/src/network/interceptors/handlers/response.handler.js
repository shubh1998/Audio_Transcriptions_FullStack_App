import { openSuccessToaster } from 'helpers/toaster.helpers'
import store from 'index'
import { stopLoader } from 'redux-thunk/redux/slices/loader.slice'

export const responseSuccessHandler = (response) => {
  const { responseType = 'json', successMessage, loader, showApiSuccessMessage } = response.config || {}
  if (responseType === 'blob') {
    return { file: response.data, headers: response.headers }
  }
  // Loader logic to remove loader
  if (loader) {
    store.dispatch(stopLoader(loader))
  }
  // Show Api Success Message
  showApiSuccessMessage && openSuccessToaster({ message: response.data.data?.message || '' })
  // Open Success Toaster
  successMessage && openSuccessToaster({ message: successMessage })
  return response.data.data
}
