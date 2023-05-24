import {combineReducers, configureStore} from '@reduxjs/toolkit'
import type {PreloadedState} from '@reduxjs/toolkit'

import userReducer from './user'
import authTokenReducer from './authToken'

const rootReducer = combineReducers({
  user: userReducer,
  authToken: authTokenReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    preloadedState,
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
