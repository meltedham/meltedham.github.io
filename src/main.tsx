import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

// Security: Ensure we're in a secure context
if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
  console.warn('Portfolio should be served over HTTPS for security.');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
