import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/styles/index.scss'
import {Provider} from 'react-redux'
import {setupStore} from '@/store/index.ts'
import {worker} from './mocks/browser.ts'
const store = setupStore()

if (import.meta.env.VITE_APP_MOCKS_API === 'browser') {
  worker.start({
    onUnhandledRequest: 'bypass',
  })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
)
