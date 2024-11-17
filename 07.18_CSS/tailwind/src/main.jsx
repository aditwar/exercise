import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css' // ini jangan lupa untuk TAILWIND

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
