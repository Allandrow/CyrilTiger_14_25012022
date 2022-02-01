import React from 'react'
import ReactDOM from 'react-dom'
import './styles/reset.css'
import './styles/main.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { worker } from './mocks/browser'

if (import.meta.env.DEV) {
  worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
