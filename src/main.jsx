/**
 * Node modules
 */
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';

/**
 * Components
 */
import App from './App.jsx';

/** 
 * CSS link
*/
import './index.css';
import 'lenis/dist/lenis.css'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
