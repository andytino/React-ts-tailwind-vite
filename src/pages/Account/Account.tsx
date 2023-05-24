import {FC} from 'react'
import {NavLink} from 'react-router-dom'
import {MainPageProps} from '@/common/ts/interfaces'

const Account: FC<MainPageProps> = () => {
  return (
    <div>
      <NavLink to="1">test</NavLink>
      <p>Account</p>
    </div>
  )
}

export default Account
