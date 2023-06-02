import {storageKeys} from '@/common/constants'
import {ROUTE_PATH} from '@/routes/RouteLists'
import {StorageService} from '@/services/local-storage'
import {resetTokenCredentials} from '@/store/authToken'
import {useAppDispatch} from '@/store/hooks'
import {resetCredentials} from '@/store/user'
import {BaseQueryApi} from '@reduxjs/toolkit/dist/query'
import {useNavigate} from 'react-router-dom'

export const useLogout = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const logout = () => {
    // 1: Remove store
    StorageService.remove(storageKeys.authToken)
    dispatch(resetCredentials())
    dispatch(resetTokenCredentials())

    // 2: Move to Login page
    navigate(ROUTE_PATH.PageNotFound)
  }

  return {
    logout,
  }
}

export const logout = (api: BaseQueryApi) => {
  StorageService.remove(storageKeys.authToken)
  api.dispatch(resetCredentials())
  api.dispatch(resetTokenCredentials())
}
