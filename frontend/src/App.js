import Loader from 'layouts/Loader/index'
import { Suspense } from 'react'
import Routes from 'routes/index'

const App = () => {
  return (
    <Suspense fallback={
      <div className='loader-container'>
        <Loader />
      </div>
     }
    >
      <Routes />
    </Suspense>
  )
}

export default App
