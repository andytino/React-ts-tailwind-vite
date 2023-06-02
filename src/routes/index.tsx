import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {useConfigRoute} from './hooks/useConfigRoute'

const MainRoute = () => {
  const {config} = useConfigRoute()
  const router = createBrowserRouter(config)

  return <RouterProvider router={router} />
}

export default MainRoute
