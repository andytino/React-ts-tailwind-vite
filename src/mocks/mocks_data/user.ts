import {IBaseResponse, IbaseUser} from '@/common/ts/interfaces'
import {EROLES} from '@/common/ts/enums'

export const dummyUser: IBaseResponse<IbaseUser[]> = {
  success: true,
  result: {
    data: [
      {
        id: '1',
        username: 'Andy',
        role: EROLES['ADMIN'],
      },
      {
        id: '2',
        username: 'Lionel',
        role: EROLES['GUEST'],
      },
    ],
  },
}
