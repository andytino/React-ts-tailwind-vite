export interface IAuthRequest {
  email: string
  password: string
}

export interface IToken {
  accessToken: string | null
  refreshToken: string | null
}

export interface IVerifyAuth extends IToken {
  id: number
  username: string
  email: string
  role: number
  tokenExpireTime?: string | null
}
