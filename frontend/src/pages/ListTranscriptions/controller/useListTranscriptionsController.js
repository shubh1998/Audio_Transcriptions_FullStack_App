import userLoader from 'hooks/userLoader'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTranscriptionsThunk } from 'redux-thunk/thunk/transcription.thunk'

const useListTranscriptionsController = () => {
  const dispatch = useDispatch()
  const { tableLoader } = userLoader()
  const { allTranscriptions, allTranscriptionsPaginatedDataInfo } = useSelector(state => state.transcription)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  console.log(allTranscriptions)

  useEffect(() => {
    dispatch(fetchAllTranscriptionsThunk({
      payload: {
        limit,
        page
      }
    }))
  }, [page, limit])

  const totalPages = allTranscriptionsPaginatedDataInfo?.totalPages || 0

  return {
    tableLoader,
    setPage,
    setLimit,
    totalPages,
    page,
    limit,
    allTranscriptions
  }
}

export default useListTranscriptionsController
