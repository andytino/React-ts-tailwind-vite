import {Outlet} from 'react-router-dom'

interface PublicProps {
  children?: JSX.Element
}

const PublicRoute = (props: PublicProps) => {
  if (props.children) {
    return props.children
  } else {
    return <Outlet />
  }
}

export default PublicRoute
