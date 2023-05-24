import {EROLES} from '@/common/ts/enums'

export interface IbaseUser {
  id: string
  username: string
  role: EROLES
}

export interface IAuthMe extends IbaseUser {
  email?: string
  avatar?: string | null
  status?: number
  createdAt?: string
  updatedAt?: string
  deletedAt?: string | null
}
