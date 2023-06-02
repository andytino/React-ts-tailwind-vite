import MainLayout from '@/layouts/MainLayout'
import RouteList from '../RouteLists'
import {useAuth} from '@/hooks/useAuth'

export const useConfigRoute = () => {
  const {shortUserProfile} = useAuth()
  console.log('shortUserProfile', shortUserProfile)
  const config = [
    {
      element: <MainLayout />,
      children: RouteList,
    },
  ]

  return {
    config,
  }
}
