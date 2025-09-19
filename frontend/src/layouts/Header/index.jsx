import { uniqueId } from 'lodash'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTE_PATHS } from 'constants/index'

const Header = () => {
  const navOptions = [
    {
      id: uniqueId(),
      label: 'Create Transcription',
      path: ROUTE_PATHS.CREATE_TRANSCRIPTION
    },
    {
      id: uniqueId(),
      label: 'Transcriptions List',
      path: ROUTE_PATHS.LIST_TRANSCRIPTIONS
    }
  ]

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container'>
          <button
            className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'
            aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <NavLink
            className='navbar-brand'
            to={ROUTE_PATHS.CREATE_TRANSCRIPTION}
          >
            Audio Transcription App
          </NavLink>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              {
                navOptions.map((option) => (
                  <li className='nav-item px-2' key={option.id}>
                    <NavLink
                      className='nav-link'
                      {...{ activeClassName: option.path ? 'active' : '' }}
                      aria-current='page' to={option.path}
                      {...{ onClick: option?.onClick }}
                    >
                      {option.label}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default memo(Header)
