import {ReactNode, lazy} from 'react'

import {MODE_VIEW} from '@/common/ts/enums'
import PageContainer from '@/containers/PageContainer'

// Import normal
import Home from '@/pages/Home'
import Login from '@/pages/Login/Login'
import PublicRoute from './Public'
import PrivateRoute from './Private'

// Import lazy
const About = lazy(() => import('@/pages/About'))
const Account = lazy(() => import('@/pages/Account'))
const AccountDetail = lazy(() => import('@/pages/Account/Detail'))
const NotFound = lazy(() => import('@/pages/NotFound'))

type RouteType = {
  //default config for route
  path: string
  element?: ReactNode
  children?: RouteType[]

  // custom config
  page: string
  mode?: number
  isInNav?: boolean
}

const RouteList: RouteType[] = [
  {
    path: '/home',
    element: (
      <PublicRoute>
        <PageContainer useLazy={false} title="Home">
          <Home />
        </PageContainer>
      </PublicRoute>
    ),
    page: 'Home',
    mode: MODE_VIEW.PUBLIC,
    isInNav: false,
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <PageContainer useLazy={false} title="Login">
          <Login />
        </PageContainer>
      </PublicRoute>
    ),
    page: 'Login',
    mode: MODE_VIEW.PUBLIC,
    isInNav: true,
  },
  {
    path: '/about',
    element: <PublicRoute />,
    children: [
      {
        path: '',
        element: (
          <PageContainer title="Account">
            <About />
          </PageContainer>
        ),
        page: 'About',
        mode: MODE_VIEW.PUBLIC,
        isInNav: true,
      },
    ],
    page: 'About',
    mode: MODE_VIEW.PUBLIC,
    isInNav: true,
  },
  {
    path: '/account',
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: (
          <PageContainer title="Account">
            <Account />
          </PageContainer>
        ),
        page: 'Account',
        mode: MODE_VIEW.PUBLIC,
        isInNav: true,
      },
      {
        path: ':id',
        element: (
          <PageContainer title="Detail">
            <AccountDetail />
          </PageContainer>
        ),
        page: 'Detail',
        mode: MODE_VIEW.PUBLIC,
        isInNav: true,
      },
    ],
    page: 'Account',
    mode: MODE_VIEW.PRIVATE,
    isInNav: true,
  },
  {
    path: '*',
    element: (
      <PublicRoute>
        <PageContainer title="Page not found!">
          <NotFound />
        </PageContainer>
      </PublicRoute>
    ),
    page: 'PageNotFound',
    mode: MODE_VIEW.PUBLIC,
    isInNav: false,
  },
]

export default RouteList

// Render Route path
const ob: Record<string, string> = {}
RouteList.map((r) => (ob[r.page] = r.path))
export const ROUTE_PATH = {
  ...ob,
}
