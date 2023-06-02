import {infoLogin} from '@/mocks/mocks_data/auth'
import {useLogIn} from './hooks/useLogin'

const Login = () => {
  const {login, isLoading} = useLogIn()

  const handleSubmit = () => {
    login(infoLogin)
  }

  return (
    <div className="flex flex-col justify-center items-center p-2">
      <h3>Login page</h3>
      <button
        className=" bg-blue-400 text-white p-1 rounded-md"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        Login
      </button>
    </div>
  )
}

export default Login
