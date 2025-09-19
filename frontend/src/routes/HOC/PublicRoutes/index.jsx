import Header from 'layouts/Header/index'

const PublicRoute = ({
  Component, showHeader
}) => {
  return (
    <>
      {showHeader ? <Header /> : <></>}
      <Component />
    </>
  )
}

export default PublicRoute
