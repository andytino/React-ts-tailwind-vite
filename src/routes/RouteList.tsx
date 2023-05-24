import {ReactNode, lazy} from 'react'
import {MODE_VIEW} from '@/common/ts/enums'

import PageContainer from '@/containers/PageContainer'

// Import normal
import Home from '@/pages/Home'
import Login from '@/pages/Login/Login'

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
  title: string
  mode?: number
  isInNav?: boolean
}

const RouteList: RouteType[] = [
  {
    path: '/',
    element: (
      <PageContainer useLazy={false} title="Home">
        <Home />
      </PageContainer>
    ),
    title: '',
    mode: MODE_VIEW.PUBLIC,
    isInNav: false,
  },
  {
    path: '/login',
    element: (
      <PageContainer useLazy={false} title="Login">
        <Login />
      </PageContainer>
    ),
    title: 'login',
    mode: MODE_VIEW.PUBLIC,
    isInNav: true,
  },
  {
    path: '/about',
    element: (
      <PageContainer title="About">
        <About />
      </PageContainer>
    ),
    title: 'About',
    mode: MODE_VIEW.PUBLIC,
    isInNav: true,
  },
  {
    path: '/account',
    children: [
      {
        path: '',
        element: (
          <PageContainer title="Account">
            <Account />
          </PageContainer>
        ),
        title: 'Account',
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
        title: 'Detail',
        mode: MODE_VIEW.PUBLIC,
        isInNav: true,
      },
    ],
    title: 'account',
    mode: MODE_VIEW.PRIVATE,
    isInNav: true,
  },
  {
    path: '*',
    element: (
      <PageContainer title="Page not found">
        <NotFound />
      </PageContainer>
    ),
    title: 'Page not found!',
    mode: MODE_VIEW.PUBLIC,
    isInNav: false,
  },
]

export default RouteList
