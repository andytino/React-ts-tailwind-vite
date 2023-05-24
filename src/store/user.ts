import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import type {RootState} from '@/store'
import {IAuthMe} from '@/common/ts/interfaces'
import {EROLES} from '@/common/ts/enums'

export const initialUserState: IAuthMe = {
  id: '0',
  username: 'GUEST',
  role: EROLES['GUEST'],
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setCredentials: (state, action: PayloadAction<IAuthMe | null>) => ({
      ...state,
      ...action.payload,
    }),
    resetCredentials: () => initialUserState,
  },
})

// Action creators are generated for each case reducer function
export const {setCredentials, resetCredentials} = userSlice.actions

export default userSlice.reducer

export const selectCurrentUser = (state: RootState) => state.user
