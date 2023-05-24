import {Navigate, Outlet, useLocation} from 'react-router-dom'

interface PrivateProps {
  children?: JSX.Element
}

const PrivateRoute = (props: PrivateProps) => {
  const user = {roles: 'guests'}
  const location = useLocation()
  console.log('a', location)

  if (user.roles === 'guest') {
    return <Navigate to="/login" state={{from: location}} replace />
  } else if (props.children) {
    return props.children
  } else {
    return <Outlet />
  }
}

export default PrivateRoute
