import {logout} from '@/pages/Logout/hooks/useLogout'
import ROUTE_LIST from '@/routes/RouteLists'
import {Link} from 'react-router-dom'

const NavBar = () => {
  // const user = {
  //   roles: 'adim',
  // }

  const handleLogout = () => {
    // logout()
  }

  return (
    <div className="w-full flex justify-center gap-2">
      {ROUTE_LIST.filter((i) => i.isInNav).map((route) => {
        return (
          <p key={route.page}>
            <Link className="text-red-50" to={route.page}>
              {route.page}
            </Link>
          </p>
        )
      })}
      <p onClick={handleLogout}>Logout</p>
    </div>
  )
}

export default NavBar
