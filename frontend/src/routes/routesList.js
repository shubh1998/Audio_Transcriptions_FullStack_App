import { lazy } from 'react'
import { ROUTE_PATHS } from 'constants/index'
import { uniqueId } from 'lodash'
const CreateTranscriptionsPage = lazy(() => import('pages/CreateTranscription/index'))
const ListTranscriptionsPage = lazy(() => import('pages/ListTranscriptions/index'))

const routesList = [
  {
    id: uniqueId(),
    path: ROUTE_PATHS.CREATE_TRANSCRIPTION,
    component: CreateTranscriptionsPage,
    isPrivate: false,
    showHeader: true
  },
  {
    id: uniqueId(),
    path: ROUTE_PATHS.LIST_TRANSCRIPTIONS,
    component: ListTranscriptionsPage,
    isPrivate: false,
    showHeader: true
  }
]

export default routesList
