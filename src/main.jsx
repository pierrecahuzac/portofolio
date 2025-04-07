import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import App from '../src/components/App'

import '../src/assets/styles/normalize.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
