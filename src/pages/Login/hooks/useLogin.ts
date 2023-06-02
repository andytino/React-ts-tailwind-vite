import {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {useLazyGetProfileQuery, useLoginMutation} from '@/apis/auth/auth'
import {ROUTE_PATH} from '@/routes/RouteLists'
import {ILoginNavigateOptionsState, IAuthRequest} from '@/common/ts/interfaces'

export const useLogIn = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const stateLocation = location.state as ILoginNavigateOptionsState

  const [getUserLogin] = useLoginMutation()
  const [getProfile] = useLazyGetProfileQuery()

  const [isLoading, setIsLoading] = useState(false)

  const login = async (values: IAuthRequest) => {
    try {
      setIsLoading(true)
      const user = await getUserLogin(values).unwrap()
      const accessToken = user.result.data?.accessToken || null
      console.log('user', user)
      await getProfile().unwrap()

      // Move to Home page
      const temporaryToken = accessToken || ''
      const from = stateLocation?.from
      const navigateState: ILoginNavigateOptionsState = {temporaryToken, from}

      console.log('login', navigateState)
      navigate(ROUTE_PATH.Home, {
        state: navigateState,
      })
      console.log('loggggg')
    } catch (err) {
      //
    }
  }

  return {
    isLoading,
    login,
  }
}
