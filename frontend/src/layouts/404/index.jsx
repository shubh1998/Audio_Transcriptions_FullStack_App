import { ROUTE_PATHS } from 'constants/index'
import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

const NotFoundComponent = () => {
  const { pathname } = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (pathname === ROUTE_PATHS.HOME) {
      history.push(ROUTE_PATHS.CREATE_TRANSCRIPTION, {
        replace: true
      })
    }
  }, [pathname])

  return (
    <div className='w-100 pt-5 text-center'>
      <h2 className='text-center'>
        <i className='pr-2 fa fa-exclamation-triangle' aria-hidden='true' />
        404
      </h2>
      <div className='mt-3 text-center'>
        <p>
          Page not found
        </p>
      </div>
    </div>
  )
}
export default NotFoundComponent
