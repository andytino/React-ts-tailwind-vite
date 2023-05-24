import {FC, useEffect} from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout'
import ROUTE_LIST from './RouteList'
import PublicRoute from './Public'
import PrivateRoute from './Private/Private'
import {useAuth} from '@/hooks/useAuth'

interface Props {
  isAdmin: boolean
}

const MainRoute: FC<Props> = ({isAdmin}) => {
  console.log('is', isAdmin)

  const renderChildElement = () => {
    return ROUTE_LIST
  }

  useEffect(() => {
    console.log('a')
  })
  const router = createBrowserRouter([
    {
      element: (
        <PrivateRoute>
          <MainLayout />
        </PrivateRoute>
      ),
      children: renderChildElement(),
    },
  ])

  return <RouterProvider router={router} />
}

export default MainRoute
