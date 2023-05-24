import ROUTE_LIST from '@/routes/RouteList'
import {Link} from 'react-router-dom'

const NavBar = () => {
  // const user = {
  //   roles: 'adim',
  // }

  return (
    <div className="w-full flex justify-center gap-2">
      {ROUTE_LIST.filter((i) => i.isInNav).map((route) => {
        return (
          <p key={route.title}>
            <Link className="text-red-50" to={route.title}>
              {route.title}
            </Link>
          </p>
        )
      })}
    </div>
  )
}

export default NavBar
