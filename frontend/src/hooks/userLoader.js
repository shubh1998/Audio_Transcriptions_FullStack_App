import { LOADER_HANDLER_TYPES } from 'constants/index'
import { useSelector } from 'react-redux'

const userLoader = () => {
  const {
    [LOADER_HANDLER_TYPES.page]: pageLoader,
    [LOADER_HANDLER_TYPES.submit]: submitLoader,
    [LOADER_HANDLER_TYPES.content]: contentLoader,
    [LOADER_HANDLER_TYPES.table]: tableLoader
  } = useSelector(state => state.loader)

  return {
    pageLoader,
    submitLoader,
    contentLoader,
    tableLoader
  }
}

export default userLoader
