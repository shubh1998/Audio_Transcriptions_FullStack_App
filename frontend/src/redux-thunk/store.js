import { configureStore } from '@reduxjs/toolkit'

import reducer from './redux/index'

const store = configureStore({
  reducer
})

export default store
