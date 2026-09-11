import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../testa/App'
import '../testa/styles.css'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
