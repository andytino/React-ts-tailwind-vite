import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import type {RootState} from '@/store'
import {IToken} from '@/common/ts/interfaces'
// import { storageKeys } from '@/common/constants'
import {StorageService} from '@/services/local-storage'
import {storageKeys} from '@/common/constants'

export const initToken: IToken = {
  accessToken: null,
  refreshToken: null,
}

const initialState = StorageService.get<IToken>(
  storageKeys.authToken,
  initToken,
)
export const authSlice = createSlice({
  name: 'authToken',
  initialState: initialState,
  reducers: {
    setTokenCredentials: (state, action: PayloadAction<IToken | null>) => ({
      ...state,
      ...action.payload,
    }),
    resetTokenCredentials: () => initialState,
  },
})

// Action creators are generated for each case reducer function
export const {setTokenCredentials, resetTokenCredentials} = authSlice.actions

export default authSlice.reducer

export const selectToken = (state: RootState) => state.authToken
