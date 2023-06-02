import {Navigate, Outlet, useLocation} from 'react-router-dom'
import {selectToken} from '@/store/authToken'
import {useAppSelector} from '@/store/hooks'

interface PrivateProps {
  children?: JSX.Element
}

const PrivateRoute = (props: PrivateProps) => {
  const {accessToken} = useAppSelector(selectToken)
  const location = useLocation()

  if (!accessToken) {
    return <Navigate to="/login" state={{from: location}} replace />
  } else if (props.children) {
    return props.children
  } else {
    return <Outlet />
  }
}

export default PrivateRoute
