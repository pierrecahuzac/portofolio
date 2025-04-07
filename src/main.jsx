import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
//import './index.css'
import App from '../src/components/App'
import '../src/assets/CSS/normalize.css'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
