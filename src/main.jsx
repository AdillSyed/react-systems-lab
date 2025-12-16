import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './app/router/AppRouter';
import { BrowserRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
)
