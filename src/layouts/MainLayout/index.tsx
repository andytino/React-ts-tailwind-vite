import NavBar from '@/components/NavBar/NavBar'
import {useAuth} from '@/hooks/useAuth'
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
  const {shortUserProfile} = useAuth()
  console.log('shortUserProfile', shortUserProfile)
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default MainLayout
