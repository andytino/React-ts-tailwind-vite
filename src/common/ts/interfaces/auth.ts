export interface IAuthRequest {
  email: string
  password: string
}

export interface IAuthResponse {
  token: string
}

export interface IToken {
  accessToken: string | null
  refreshToken: string | null
}

export interface IVerifyAuth extends IToken {
  id: string
  username: string
  email: string
  role: number
  tokenExpireTime?: string | null
}
