import {rest} from 'msw'
import {dummyUser} from './mocks_data/user'
import {
  dummyAuthLogin,
  dummyRefreshAuthLogin,
  // dummyfailRefreshAuthLogin,
  dummyRefreshAuthMe,
  dummyAuthMe,
} from './mocks_data/auth'

export const handlers = [
  // Handles a POST /login request
  rest.post('/auth/login', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(dummyAuthLogin))
    // return res(ctx.status(401), ctx.delay(500), ctx.json(dummyAuth))
  }),
  rest.post('/auth/refresh-token', (_req, res, ctx) => {
    return res(ctx.status(401), ctx.delay(500), ctx.json(dummyRefreshAuthLogin))
  }),

  // Handles a GET AUTHENTICATION
  rest.get('/auth/me', (_req, res, ctx) => {
    return res(ctx.status(401), ctx.delay(500), ctx.json(dummyAuthMe))
  }),
  rest.get('/auth/me-refresh', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(dummyRefreshAuthMe))
  }),

  // Handles a GET /user request
  rest.get('/user', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(dummyUser))
  }),
]
