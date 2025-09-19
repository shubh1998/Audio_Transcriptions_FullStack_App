import PublicRoute from './HOC/PublicRoutes/index'

const RouteValidator = ({ route }) => {
  const { component: Component, showHeader = true } = route

  return (
    <>
      <PublicRoute
        Component={Component}
        showHeader={showHeader}
      />
    </>
  )
}

export default RouteValidator
