import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { worker } from './mocks/browser'
import App from './App'
import './styles/reset.css'
import './styles/main.css'

worker.start({
  onUnhandledRequest(req) {
    console.warn('Unhandled Request', req.method, req.url.href)
  },
})

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
